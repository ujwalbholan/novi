import { cn } from "@/app/util/utils";
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

const toneClasses = {
  moss: "bg-[#20251f] text-[#f7f6f2]",
  gold: "bg-[#fffaf0] text-[#1c2019]",
  sage: "bg-[#f0f3ee] text-[#1c2019]",
  cream: "bg-white text-[#1c2019]",
};

const sizeClasses = {
  wide: "col-span-6 md:col-span-4",
  standard: "col-span-6 md:col-span-2",
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
      className={`group relative flex min-h-65 flex-col justify-between overflow-hidden rounded-[18px] border
         border-[#e7e5df] p-7 shadow-[0_8px_24px_rgba(28,32,25,0.045)] transition duration-300 hover:-translate-y-1.5
         hover:border-[#d3d4cc] hover:shadow-[0_20px_40px_rgba(28,32,25,0.1)] md:min-h-82.5 ${toneClasses[tone]} ${sizeClasses[size]}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className="grid size-11.5 place-items-center rounded-xl border border-current opacity-90 transition
           duration-300 group-hover:rotate-[-8deg] group-hover:scale-105 group-hover:bg-white/10"
          aria-hidden="true"
        >
          <Icon size={21} strokeWidth={1.8} />
        </span>
        <span
          className="grid size-7.5 place-items-center rounded-full border border-current 
          opacity-60 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          aria-hidden="true"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="relative z-10">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] opacity-60">
          {eyebrow}
        </p>
        <h3
          className={cn(
            "my-2 max-w-[13ch] font-serif text-[clamp(1.45rem,1.3vw+0.9rem,2rem)] leading-[1.03] tracking-tight text-inherit",
            tone === "moss" && "text-white!",
          )}
        >
          {title}
        </h3>
        <p className="max-w-[36ch] text-[0.92rem] leading-[1.55] opacity-75">
          {description}
        </p>
      </div>
    </article>
  );
}
