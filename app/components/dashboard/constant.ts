import { CalendarDays, Inbox, LayoutDashboard, Target } from "lucide-react";

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
