import {
  CalendarRange,
  KanbanSquare,
  MessageCircle,
  Upload,
} from "lucide-react";

export const features = [
  {
    eyebrow: "Keep the work visible",
    title: "Boards that move at your speed",
    text: "Plan sprints and track tasks without hunting through spreadsheets.",
    icon: KanbanSquare,
    tone: "moss" as const,
    size: "wide" as const,
  },
  {
    eyebrow: "Make decisions stick",
    title: "Threads, not another inbox",
    text: "Keep project conversations attached to the work itself.",
    icon: MessageCircle,
    tone: "gold" as const,
    size: "standard" as const,
  },
  {
    eyebrow: "See what is next",
    title: "One timeline for the whole team",
    text: "Every deadline and milestone in one shared view.",
    icon: CalendarRange,
    tone: "sage" as const,
    size: "standard" as const,
  },
  {
    eyebrow: "Bring your momentum",
    title: "Works the way you already do",
    text: "Import from Trello, Asana, or a spreadsheet in minutes.",
    icon: Upload,
    tone: "cream" as const,
    size: "wide" as const,
  },
];

export const linkColumns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations"] },
  { title: "Company", links: ["About Novi", "Journal", "Contact"] },
  { title: "Resources", links: ["Help center", "Community", "Changelog"] },
];
