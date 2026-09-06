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

export type Billing = "monthly" | "yearly";

export const plans = [
  {
    name: "Starter",
    tagline: "For small teams finding their rhythm.",
    price: { monthly: 0, yearly: 0 },
    cta: "Start free",
    href: "#footer",
    popular: false,
    features: [
      "Up to 5 members",
      "3 active boards",
      "Unlimited threads & comments",
      "Shared team timeline",
      "2 integrations",
    ],
  },
  {
    name: "Plus",
    tagline: "For growing teams that ship every week.",
    price: { monthly: 8, yearly: 6 },
    cta: "Start free trial",
    href: "#footer",
    popular: true,
    features: [
      "Unlimited boards & members",
      "Advanced timeline & milestones",
      "Unlimited integrations",
      "Custom views & filters",
      "Import from Trello, Asana & CSV",
      "Priority support",
    ],
  },
  {
    name: "Business",
    tagline: "For teams that need control at scale.",
    price: { monthly: 16, yearly: 13 },
    cta: "Contact sales",
    href: "#",
    popular: false,
    features: [
      "Everything in Plus",
      "SSO & SAML login",
      "Audit logs & custom roles",
      "API access & webhooks",
      "Dedicated success manager",
    ],
  },
];

export const links = ["Features", "Pricing", "Docs", "Blog"];
