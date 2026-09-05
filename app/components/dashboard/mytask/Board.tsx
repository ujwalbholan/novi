"use client";

import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ListChecks,
  Plus,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { FormEvent, useState } from "react";

type ColumnId = string;
type Card = { id: string; title: string; tag: string; gold?: boolean };
type Column = { id: ColumnId; title: string; cards: Card[] };

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To do",
    cards: [
      { id: "pricing", title: "Draft the pricing page", tag: "Design" },
      { id: "safari", title: "Fix Safari scroll jump", tag: "Bug", gold: true },
    ],
  },
  {
    id: "progress",
    title: "In progress",
    cards: [{ id: "emails", title: "Rewrite onboarding emails", tag: "Copy" }],
  },
  {
    id: "done",
    title: "Done",
    cards: [{ id: "logo", title: "Logo mark exploration", tag: "Design" }],
  },
];

function CardItem({
  card,
  onRetreat,
  onAdvance,
  canRetreat,
  canAdvance,
}: {
  card: Card;
  onRetreat: () => void;
  onAdvance: () => void;
  canRetreat: boolean;
  canAdvance: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: card.id });
  return (
    <motion.div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className={`demo-card ${isDragging ? "dragging" : ""}`}
      layout
      initial={{ opacity: 0, x: 18, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      {...listeners}
      {...attributes}
    >
      <div>
        <span className={`tag ${card.gold ? "gold" : ""}`}>{card.tag}</span>
        <br />
        {card.title}
      </div>
      <span className="card-move-actions">
        {canRetreat && (
          <motion.button
            type="button"
            className="card-arrow"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onRetreat}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.86 }}
            aria-label={`Move ${card.title} to the previous column`}
          >
            <ArrowLeft size={14} />
          </motion.button>
        )}
        {canAdvance && (
          <motion.button
            type="button"
            className="card-arrow"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onAdvance}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.86 }}
            aria-label={`Move ${card.title} to the next column`}
          >
            <ArrowRight size={14} />
          </motion.button>
        )}
      </span>
    </motion.div>
  );
}

type ColumnProps = Pick<Column, "id" | "title" | "cards"> & {
  addingTask: boolean;
  taskTitle: string;
  onStartAdd: () => void;
  onCancelAdd: () => void;
  onTaskTitleChange: (value: string) => void;
  onAddTask: (event: FormEvent<HTMLFormElement>) => void;
  onAdvance: (cardId: string) => void;
  onRetreat: (cardId: string) => void;
  canRetreat: boolean;
  canAdvance: boolean;
};

function Column({
  id,
  title,
  cards,
  addingTask,
  taskTitle,
  onStartAdd,
  onCancelAdd,
  onTaskTitleChange,
  onAddTask,
  onAdvance,
  onRetreat,
  canRetreat,
  canAdvance,
}: ColumnProps) {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`demo-col group ${isOver ? "drop-hover" : ""}`}
    >
      <h4>
        <span className="column-title">{title}</span>
        <span className="column-count">{cards.length}</span>
        <button
          type="button"
          className="column-add-task"
          onClick={onStartAdd}
          aria-label={`Add task to ${title}`}
        >
          <Plus size={14} />
        </button>
      </h4>
      <div className="column-cards">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onRetreat={() => onRetreat(card.id)}
            onAdvance={() => onAdvance(card.id)}
            canRetreat={canRetreat}
            canAdvance={canAdvance}
          />
        ))}
      </div>
      {addingTask && (
        <form className="add-task-form" onSubmit={onAddTask}>
          <input
            autoFocus
            value={taskTitle}
            onChange={(event) => onTaskTitleChange(event.target.value)}
            placeholder="Task name..."
            aria-label={`New task in ${title}`}
          />
          <div>
            <button
              type="submit"
              disabled={!taskTitle.trim()}
              aria-label="Save task"
            >
              <Check size={13} />
            </button>
            <button
              type="button"
              onClick={onCancelAdd}
              aria-label="Cancel task"
            >
              <X size={13} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function BoardDemo() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [addingTaskColumn, setAddingTaskColumn] = useState<ColumnId | null>(
    null,
  );
  const [taskTitle, setTaskTitle] = useState("");

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    const from = columns.find((column) =>
      column.cards.some((card) => card.id === active.id),
    );
    const to = over.id as ColumnId;
    if (!from || from.id === to) return;
    const destination = columns.find((column) => column.id === to);
    const card = from.cards.find((item) => item.id === active.id);
    if (!destination || !card) return;
    setColumns((current) =>
      current.map((column) => {
        if (column.id === from.id)
          return {
            ...column,
            cards: column.cards.filter((item) => item.id !== active.id),
          };
        if (column.id === destination.id)
          return { ...column, cards: [...column.cards, card] };
        return column;
      }),
    );
  };

  const addColumn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = columnName.trim();
    if (!title) return;
    setColumns((current) => [
      ...current,
      { id: `column-${Date.now()}`, title, cards: [] },
    ]);
    setColumnName("");
    setIsAddingColumn(false);
  };

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = taskTitle.trim();
    if (!title || !addingTaskColumn) return;
    setColumns((current) =>
      current.map((column) =>
        column.id === addingTaskColumn
          ? {
              ...column,
              cards: [
                ...column.cards,
                { id: `task-${Date.now()}`, title, tag: "Task" },
              ],
            }
          : column,
      ),
    );
    setTaskTitle("");
    setAddingTaskColumn(null);
  };

  const cancelTask = () => {
    setTaskTitle("");
    setAddingTaskColumn(null);
  };

  const moveTaskToNextColumn = (cardId: string) => {
    setColumns((current) => {
      const sourceIndex = current.findIndex((column) =>
        column.cards.some((card) => card.id === cardId),
      );
      if (sourceIndex < 0 || sourceIndex === current.length - 1) return current;
      const card = current[sourceIndex].cards.find(
        (item) => item.id === cardId,
      );
      if (!card) return current;
      return current.map((column, index) => {
        if (index === sourceIndex)
          return {
            ...column,
            cards: column.cards.filter((item) => item.id !== cardId),
          };
        if (index === sourceIndex + 1)
          return { ...column, cards: [...column.cards, card] };
        return column;
      });
    });
  };

  const moveTaskToPreviousColumn = (cardId: string) => {
    setColumns((current) => {
      const sourceIndex = current.findIndex((column) =>
        column.cards.some((card) => card.id === cardId),
      );
      if (sourceIndex <= 0) return current;
      const card = current[sourceIndex].cards.find(
        (item) => item.id === cardId,
      );
      if (!card) return current;
      return current.map((column, index) => {
        if (index === sourceIndex)
          return {
            ...column,
            cards: column.cards.filter((item) => item.id !== cardId),
          };
        if (index === sourceIndex - 1)
          return { ...column, cards: [...column.cards, card] };
        return column;
      });
    });
  };

  const totalTasks = columns.reduce(
    (total, column) => total + column.cards.length,
    0,
  );
  const completedTasks = columns.at(-1)?.cards.length ?? 0;
  const activeTasks = columns
    .slice(1, -1)
    .reduce((total, column) => total + column.cards.length, 0);
  const completionRate = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <div aria-label="Interactive preview of a Novi board">
      <div className="demo-top">
        <span className="demo-title">Task Board</span>
        <button
          type="button"
          onClick={() => setIsAddingColumn(true)}
          className="board-add-column"
          aria-label="Add board column"
        >
          <Plus size={14} /> Add column
        </button>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="demo-cols">
          {columns.map((column) => (
            <Column
              key={column.id}
              {...column}
              addingTask={addingTaskColumn === column.id}
              taskTitle={addingTaskColumn === column.id ? taskTitle : ""}
              onStartAdd={() => {
                setAddingTaskColumn(column.id);
                setTaskTitle("");
              }}
              onCancelAdd={cancelTask}
              onTaskTitleChange={setTaskTitle}
              onAddTask={addTask}
              onAdvance={moveTaskToNextColumn}
              onRetreat={moveTaskToPreviousColumn}
              canRetreat={columns.indexOf(column) > 0}
              canAdvance={columns.indexOf(column) < columns.length - 1}
            />
          ))}
          {isAddingColumn && (
            <form className="demo-col add-column-form" onSubmit={addColumn}>
              <div className="add-column-heading">
                <span>New column</span>
                <button
                  type="button"
                  onClick={() => setIsAddingColumn(false)}
                  aria-label="Cancel adding column"
                >
                  <X size={14} />
                </button>
              </div>
              <input
                autoFocus
                value={columnName}
                onChange={(event) => setColumnName(event.target.value)}
                placeholder="e.g. In review"
                aria-label="New column name"
              />
              <button type="submit" disabled={!columnName.trim()}>
                <Check size={14} /> Create column
              </button>
            </form>
          )}
        </div>
      </DndContext>
      <p className="demo-hint">
        Drag a card between columns to move the work forward
      </p>
      <motion.div
        className="board-insights"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div
          className="board-insight insight-stat"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="insight-icon gold">
            <ListChecks size={15} />
          </span>
          <span className="board-insight-value">{totalTasks}</span>
          <span className="board-insight-label">tasks in flight</span>
        </motion.div>
        <motion.div
          className="board-insight insight-stat"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="insight-icon sage">
            <Zap size={15} />
          </span>
          <span className="board-insight-value">{activeTasks}</span>
          <span className="board-insight-label">being worked on</span>
        </motion.div>
        <motion.div
          className="board-insight insight-stat"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="insight-icon peach">
            <CheckCircle2 size={15} />
          </span>
          <span className="board-insight-value">{completionRate}%</span>
          <span className="board-insight-label">project complete</span>
        </motion.div>
        <motion.div
          className="board-insight board-insight-tip"
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="board-insight-kicker">
            <Sparkles size={12} /> Project pulse
          </span>
          <span>
            {activeTasks
              ? `${activeTasks} task${activeTasks === 1 ? " is" : "s are"} moving right now. Keep the momentum going.`
              : "Nothing is in motion yet. Pick a task to move forward."}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
