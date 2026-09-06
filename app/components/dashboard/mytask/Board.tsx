"use client";

import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/app/util/utils";
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
import { initialColumns } from "../constant";

export type ColumnId = string;
export type Card = { id: string; title: string; tag: string; gold?: boolean };
export type Column = { id: ColumnId; title: string; cards: Card[] };


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
      className={cn(
        "group flex cursor-grab items-start justify-between gap-1.5 rounded-lg border border-line bg-card p-2.5 text-[0.78rem] transition-[border-color,box-shadow] hover:border-[#bfc9bc] hover:shadow-[0_5px_12px_rgba(30,51,39,0.08)]",
        isDragging && "opacity-35",
      )}
      layout
      initial={{ opacity: 0, x: 18, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      {...listeners}
      {...attributes}
    >
      <div>
        <span
          className={cn(
            "mb-1.5 inline-block rounded-md px-1.5 py-0.5 text-[0.62rem] font-semibold",
            card.gold
              ? "bg-[#f3e2c2] text-[#7a5518]"
              : "bg-moss-tint text-moss-deep",
          )}
        >
          {card.tag}
        </span>
        <br />
        {card.title}
      </div>
      <span className="flex shrink-0 gap-0.5">
        {canRetreat && (
          <motion.button
            type="button"
            className="grid size-5.5 shrink-0 place-items-center rounded-md bg-moss-tint text-moss opacity-0 transition-[opacity,background-color] group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-gold-soft"
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
            className="grid size-5.5 shrink-0 place-items-center rounded-md bg-moss-tint text-moss opacity-0 transition-[opacity,background-color] group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-gold-soft"
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

const columnBaseClass =
  "flex min-h-[220px] w-[min(240px,calc((100vw-100px)/3))] min-w-[210px] flex-[1_0_210px] flex-col gap-2 rounded-xl bg-bg-deep p-2.5";

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
      className={cn(
        columnBaseClass,
        "group",
        isOver && "outline-2 outline-dashed outline-moss outline-offset-[-4px]",
      )}
    >
      <h4 className="mx-1 my-0.5 flex items-center justify-between text-[0.72rem] font-semibold text-ink-soft">
        <span className="flex-1 truncate font-semibold">{title}</span>
        <span className="ml-1 shrink-0 font-normal">{cards.length}</span>
        <button
          type="button"
          className="ml-1 grid size-5.5 shrink-0 place-items-center rounded-md border-0 bg-transparent text-ink-soft opacity-0 transition-[opacity,background-color,color] group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-moss-tint hover:text-moss"
          onClick={onStartAdd}
          aria-label={`Add task to ${title}`}
        >
          <Plus size={14} />
        </button>
      </h4>
      <div className="flex max-h-[220px] flex-col gap-2 overflow-y-auto pr-1 overscroll-contain [scrollbar-color:#b9cbb9_transparent] [scrollbar-width:thin]">
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
        <form className="flex flex-col gap-1.5 rounded-md border border-[#b7c8b7] bg-[#f8faf6] p-1.5" onSubmit={onAddTask}>
          <input
            autoFocus
            value={taskTitle}
            onChange={(event) => onTaskTitleChange(event.target.value)}
            placeholder="Task name..."
            aria-label={`New task in ${title}`}
            className="w-full rounded-sm border border-line bg-white px-1.5 py-1.5 text-[0.7rem] text-ink outline-none focus:border-moss"
          />
          <div className="flex gap-1">
            <button
              type="submit"
              disabled={!taskTitle.trim()}
              aria-label="Save task"
              className="grid min-h-[23px] flex-1 place-items-center rounded-sm border-0 bg-moss text-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Check size={13} />
            </button>
            <button
              type="button"
              onClick={onCancelAdd}
              aria-label="Cancel task"
              className="grid min-h-[23px] flex-1 place-items-center rounded-sm border-0 bg-line text-ink-soft"
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
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[0.8rem] font-medium text-ink-soft">
          Task Board
        </span>
        <button
          type="button"
          onClick={() => setIsAddingColumn(true)}
          className="inline-flex items-center gap-1 rounded-md border-0 bg-moss-tint px-2.5 py-1.5 text-[0.7rem] font-semibold text-moss transition-[background,transform] hover:translate-y-[-1px] hover:bg-gold-soft"
          aria-label="Add board column"
        >
          <Plus size={14} /> Add column
        </button>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex max-h-[285px] max-w-full gap-3 overflow-x-auto overflow-y-hidden px-0.5 pb-2.5 [scrollbar-color:var(--line)_transparent] [scrollbar-width:thin]">
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
            <form
              className={cn(
                columnBaseClass,
                "items-stretch justify-start border border-dashed border-[#b7c8b7] bg-[#f8faf6]",
              )}
              onSubmit={addColumn}
            >
              <div className="flex items-center justify-between text-[0.72rem] font-semibold text-moss">
                <span>New column</span>
                <button
                  type="button"
                  onClick={() => setIsAddingColumn(false)}
                  aria-label="Cancel adding column"
                  className="grid place-items-center border-0 bg-transparent text-ink-soft"
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
                className="w-full rounded-md border border-line bg-white px-2 py-1.5 text-[0.72rem] text-ink outline-none focus:border-moss"
              />
              <button
                type="submit"
                disabled={!columnName.trim()}
                className="inline-flex items-center justify-center gap-1 rounded-md border-0 bg-moss px-2 py-1.5 text-[0.7rem] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Check size={14} /> Create column
              </button>
            </form>
          )}
        </div>
      </DndContext>
      <p className="mt-3.5 text-center text-[0.72rem] text-ink-soft">
        Drag a card between columns to move the work forward
      </p>
      <motion.div
        className="mt-4 flex items-stretch overflow-hidden rounded-[10px] border border-line bg-line"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div
          className="flex min-w-[108px] flex-col justify-center gap-0.5 border-r border-line bg-[#fbfcf9] p-3"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="mb-0.5 grid size-6 place-items-center rounded-md bg-[#f5e6c7] text-gold">
            <ListChecks size={15} />
          </span>
          <span className="font-serif text-xl leading-none text-moss">
            {totalTasks}
          </span>
          <span className="text-[0.62rem] text-ink-soft">tasks in flight</span>
        </motion.div>
        <motion.div
          className="flex min-w-[108px] flex-col justify-center gap-0.5 border-r border-line bg-[#fbfcf9] p-3"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="mb-0.5 grid size-6 place-items-center rounded-md bg-moss-tint text-moss">
            <Zap size={15} />
          </span>
          <span className="font-serif text-xl leading-none text-moss">
            {activeTasks}
          </span>
          <span className="text-[0.62rem] text-ink-soft">being worked on</span>
        </motion.div>
        <motion.div
          className="flex min-w-[108px] flex-col justify-center gap-0.5 border-r border-line bg-[#fbfcf9] p-3"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="mb-0.5 grid size-6 place-items-center rounded-md bg-[#f4e0d8] text-[#bd7258]">
            <CheckCircle2 size={15} />
          </span>
          <span className="font-serif text-xl leading-none text-moss">
            {completionRate}%
          </span>
          <span className="text-[0.62rem] text-ink-soft">Task complete</span>
        </motion.div>
        <motion.div
          className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 bg-[#fbfcf9] p-3 text-[0.66rem] leading-[1.35] text-ink-soft"
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="inline-flex items-center gap-1 text-[0.62rem] font-bold uppercase tracking-wide text-gold">
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