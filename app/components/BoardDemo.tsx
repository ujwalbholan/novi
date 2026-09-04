"use client";

import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

type ColumnId = "todo" | "progress" | "done";
type Card = { id: string; title: string; tag: string; gold?: boolean };

const seed: Record<ColumnId, Card[]> = {
  todo: [
    { id: "pricing", title: "Draft the pricing page", tag: "Design" },
    { id: "safari", title: "Fix Safari scroll jump", tag: "Bug", gold: true },
  ],
  progress: [{ id: "emails", title: "Rewrite onboarding emails", tag: "Copy" }],
  done: [{ id: "logo", title: "Logo mark exploration", tag: "Design" }],
};

function CardItem({ card }: { card: Card }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: card.id });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className={`demo-card ${isDragging ? "dragging" : ""}`}
      {...listeners}
      {...attributes}
    >
      <div>
        <span className={`tag ${card.gold ? "gold" : ""}`}>{card.tag}</span>
        <br />
        {card.title}
      </div>
      <span className="card-arrow" aria-hidden="true">
        ›
      </span>
    </div>
  );
}

function Column({
  id,
  title,
  cards,
}: {
  id: ColumnId;
  title: string;
  cards: Card[];
}) {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className={`demo-col ${isOver ? "drop-hover" : ""}`}>
      <h4>
        {title}
        <span>{cards.length}</span>
      </h4>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default function BoardDemo() {
  const [columns, setColumns] = useState(seed);
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id || !(over.id in columns)) return;
    const from = (Object.keys(columns) as ColumnId[]).find((id) =>
      columns[id].some((card) => card.id === active.id),
    );
    const to = over.id as ColumnId;
    if (!from || from === to) return;
    const card = columns[from].find((item) => item.id === active.id);
    if (!card) return;
    setColumns((current) => ({
      ...current,
      [from]: current[from].filter((item) => item.id !== active.id),
      [to]: [...current[to], card],
    }));
  };

  return (
    <div className="demo" aria-label="Interactive preview of a Novi board">
      <div className="demo-top">
        <span className="demo-title">Launch week</span>
        <div className="demo-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="demo-cols">
          <Column id="todo" title="To do" cards={columns.todo} />
          <Column id="progress" title="In progress" cards={columns.progress} />
          <Column id="done" title="Done" cards={columns.done} />
        </div>
      </DndContext>
      <p className="demo-hint">
        Drag a card between columns to move the work forward
      </p>
    </div>
  );
}
