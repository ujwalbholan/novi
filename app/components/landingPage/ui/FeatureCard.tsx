import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "moss" | "gold" | "cream" | "sage";
  size: "wide" | "standard";
};

export function FeatureCard({
  eyebrow,
  title,
  description,
  icon: Icon,
  tone,
  size,
}: FeatureCardProps) {
  return (
    <article
      className={`feature-card feature-card-${tone} feature-card-${size} `}
    >
      <div className="feature-card-top">
        <span className="feature-card-icon" aria-hidden="true">
          <Icon size={21} strokeWidth={1.8} />
        </span>
        <span className="feature-card-arrow" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="feature-card-copy">
        <p className="feature-card-eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p className="feature-card-description">{description}</p>
      </div>
    </article>
  );
}
