import { Billing } from "../../constant";

type PricePlanProps = {
  billing: Billing;
  onBillingChange: (billing: Billing) => void;
};

export function PricePlan({ billing, onBillingChange }: PricePlanProps) {
  return (
    <div className="mb-5 flex">
      <div
        className="relative grid grid-cols-2 rounded-full border border-line bg-bg-deep p-1"
        role="tablist"
        aria-label="Billing period"
      >
        <span
          className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-white shadow-[0_2px_8px_rgba(28,32,25,0.14)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            billing === "yearly" ? "translate-x-full" : ""
          }`}
          aria-hidden="true"
        />
        <button
          type="button"
          role="tab"
          aria-selected={billing === "monthly"}
          onClick={() => onBillingChange("monthly")}
          className={`relative z-10 rounded-full px-3 py-2 text-[0.82rem] font-semibold transition-colors md:px-4 ${
            billing === "monthly" ? "text-moss-deep" : "text-ink-soft"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={billing === "yearly"}
          onClick={() => onBillingChange("yearly")}
          className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-3 py-2 text-[0.82rem] font-semibold transition-colors md:px-4 ${
            billing === "yearly" ? "text-moss-deep" : "text-ink-soft"
          }`}
        >
          Yearly
          {billing === "yearly" && (
            <span className="inline-flex animate-[save-pop_0.35s_ease] items-center rounded-full bg-gold px-2 py-0.5 text-[0.62rem] font-bold text-white">
              Save 20%
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
