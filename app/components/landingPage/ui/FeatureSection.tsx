import {
  CalendarRange,
  KanbanSquare,
  MessageCircle,
  Upload,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
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

export function FeatureSection() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="section-head flex">
          <h2>Everything your team needs, nothing it doesn&apos;t</h2>
          <p>
            Four tools built to work together, so your team stops piecing its
            process together from five different apps.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.text}
              icon={feature.icon}
              tone={feature.tone}
              size={feature.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
