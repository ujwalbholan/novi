import { Tag } from "@/app/components/common/Tag";
import { ArrowRight, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

export function PriceLeftComponent() {
  return (
    <div className="max-w-115" style={{ animationDelay: "460ms" }}>
      <Tag title="Built for teams that ship" className="mb-5" />
      <h2 className=" font-serif text-[clamp(2.6rem,4vw,4.2rem)] font-medium leading-[0.96] tracking-[-0.045em] text-ink">
        Affordable focus.
        <br />
        <em className="font-normal not-italic text-moss">Room to scale.</em>
      </h2>
      <p className="mt-6 max-w-[39ch] text-ink-soft tracking-tight">
        Start small with a calm workspace, then add structure as your team
        grows. No surprise fees, no feature maze.
      </p>
      <ul className="mt-8 list-none space-y-3.5">
        <li className="flex items-center gap-2.5 font-medium text-ink">
          <ShieldCheck size={16} className="text-moss" /> Built-in clarity and
          control
        </li>
        <li className="flex items-center gap-2.5 font-medium text-ink">
          <UsersRound size={16} className="text-moss" /> Simple collaboration
          for every team
        </li>
        <li className="flex items-center gap-2.5 font-medium text-ink">
          <Sparkles size={16} className="text-moss" /> No credit card to get
          started
        </li>
      </ul>
      <a
        href="#footer"
        className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-moss transition-all hover:gap-3 hover:text-gold"
      >
        Start with the free plan <ArrowRight size={15} />
      </a>
    </div>
  );
}
