import { ArrowRight, Check } from "lucide-react";
import { plans } from "../../constant";
import Button from "@/app/components/common/Button";
import { cn } from "@/app/util/utils";

type PriceCardProps = {
  billing: string;
};

export function PriceCard({ billing }: PriceCardProps) {
  return (
    <div className="grid gap-4">
      {plans.slice(1).map((plan, i) => (
        <div
          key={plan.name}
          className="opacity-0 translate-y-4 animate-[reveal-up_0.7s_cubic-bezier(0.2,0.7,0.2,1)_forwards]"
          style={{ animationDelay: `${280 + i * 90}ms` }}
        >
          <article
            className={`relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 
                        shadow-[0_8px_24px_rgba(28,32,25,0.045)] transition duration-200 hover:-translate-y-1 
                        hover:shadow-[0_18px_34px_rgba(28,32,25,0.1)] md:grid md:grid-cols-[0.95fr_1.05fr] md:gap-x-7 md:p-7 ${
                          plan.popular
                            ? "border-[#c8d8c8] bg-[#eef3ec] shadow-[0_12px_30px_rgba(46,74,59,0.1)] hover:shadow-[0_20px_38px_rgba(46,74,59,0.15)]"
                            : ""
                        }`}
          >
            {plan.popular && (
              <span
                className="absolute right-4 top-4 rounded-full bg-gold px-2.5 py-1 text-[0.58rem] 
                      font-bold uppercase tracking-wider text-white md:right-5 md:top-3.5"
              >
                Most popular
              </span>
            )}
            <div className="flex flex-col">
              <header>
                <h3 className="font-serif text-lg font-semibold tracking-tight text-ink">
                  {plan.name}
                </h3>
                <p className="mt-1.5 max-w-[22ch] text-[0.86rem] text-ink-soft">
                  {plan.tagline}
                </p>
              </header>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="font-serif text-5xl font-semibold leading-none tracking-tight text-ink">
                  $
                  {billing === "yearly"
                    ? plan.price.yearly
                    : plan.price.monthly}
                </span>
                <span className="text-[0.85rem] font-medium text-ink-soft">
                  /mo
                </span>
              </div>
              <p className="mt-2 min-h-[1.3em] text-[0.75rem] text-ink-soft">
                {plan.name === "Starter"
                  ? "Free forever"
                  : billing === "yearly"
                    ? "Billed annually · per user"
                    : "Billed monthly · per user"}
              </p>
              <Button
                buttonName={plan.cta}
                variant="primary"
                size="lg"
                className={cn(
                  `group mt-5 transition-all hover:-translate-y-px  priceButton ${
                    plan.popular
                      ? "bg-moss text-[#fbf9f2] hover:bg-moss-deep"
                      : plan.name === "Starter"
                        ? "border border-line text-ink hover:border-ink hover:bg-[rgba(28,32,25,0.03)]"
                        : "bg-[#20251f] text-[#fbf9f2] hover:bg-moss-deep"
                  }`,
                )}
              >
                {plan.cta}
                <ArrowRight
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  size={15}
                  strokeWidth={2.2}
                />
              </Button>
            </div>
            <ul
              className="order-last mt-6 flex list-none flex-col gap-3 border-t border-[#e2e4dc] p-0 pt-5
                     md:order-0 md:col-start-2 md:row-start-1 md:mt-0 md:self-center md:border-t-0 md:border-l md:px-0 md:py-0 md:pl-7"
            >
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-[0.8rem] text-ink-soft transition-colors hover:text-ink"
                >
                  <span
                    className={`grid size-4.5 shrink-0 place-items-center rounded-full transition-transform duration-200 hover:scale-110 ${
                      plan.popular
                        ? "bg-[#dce9dc] text-moss"
                        : "bg-moss-tint text-moss"
                    }`}
                    aria-hidden="true"
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      ))}
    </div>
  );
}
