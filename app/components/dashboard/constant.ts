import {
  CalendarDays,
  Check,
  Flame,
  Inbox,
  LayoutDashboard,
  Target,
} from "lucide-react";
import { Column } from "./mytask/Board";

export const primaryLinks = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "My tasks", icon: Target },
  {
    label: "Inbox",
    icon: Inbox,
    badge: "3",
    children: [
      { label: "general" },
      { label: "product-launch", badge: "5" },
      { label: "design" },
      { label: "random" },
    ],
    createChannel: true,
  },
  { label: "Calendar", icon: CalendarDays },
];

export const projects = [
  { label: "Product launch", color: "bg-amber-400" },
  { label: "Design system", color: "bg-violet-400" },
  { label: "Website refresh", color: "bg-sky-400" },
];

export const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};
export const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

export const stats = [
  {
    label: "Tasks completed",
    value: "24",
    detail: "+18% this week",
    icon: Check,
    tone: "gold",
  },
  {
    label: "Active projects",
    value: "06",
    detail: "2 need attention",
    icon: Target,
    tone: "sage",
  },
  {
    label: "Team focus time",
    value: "82%",
    detail: "+6% this week",
    icon: Flame,
    tone: "peach",
  },
];

export const projectsDetails = [
  {
    name: "Product launch",
    team: "Aster team",
    progress: 78,
    tasks: "18 / 23",
    color: "#c98a2e",
  },
  {
    name: "Design system",
    team: "Design crew",
    progress: 54,
    tasks: "12 / 22",
    color: "#8874bf",
  },
  {
    name: "Website refresh",
    team: "Growth team",
    progress: 32,
    tasks: "8 / 25",
    color: "#5c9bad",
  },
];

export const activity = [
  {
    initials: "ML",
    name: "Maya Liu",
    action: "completed",
    task: "Connect Stripe",
    time: "8 min ago",
    color: "#9bc7b0",
  },
  {
    initials: "AT",
    name: "Alex Taylor",
    action: "commented on",
    task: "Design empty states",
    time: "24 min ago",
    color: "#c98a2e",
  },
  {
    initials: "JR",
    name: "Jamie Ross",
    action: "moved",
    task: "Launch copy",
    time: "1 hr ago",
    color: "#d79a82",
  },
];


export const initialColumns: Column[] = [
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
