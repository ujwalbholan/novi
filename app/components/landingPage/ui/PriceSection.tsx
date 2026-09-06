"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

type Billing = "monthly" | "yearly";

const plans = [
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

export function PriceSection() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section className="bg-[#f7f6f2] py-20 md:py-32" id="pricing">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="max-w-[460px]">
            <span className="text-[0.86rem] text-ink-soft">
              Built for teams that ship
            </span>
            <h2 className="mt-5 font-serif text-[clamp(2.6rem,4vw,4.2rem)] font-medium leading-[0.96] tracking-[-0.045em] text-ink">
              Affordable focus.
              <br />
              <em className="font-normal not-italic text-moss">
                Room to scale.
              </em>
            </h2>
            <p className="mt-6 max-w-[39ch] text-ink-soft">
              Start small with a calm workspace, then add structure as your
              team grows. No surprise fees, no feature maze.
            </p>
            <ul className="mt-8 list-none space-y-3.5">
              <li className="flex items-center gap-2.5 font-medium text-ink">
                <ShieldCheck size={16} className="text-moss" /> Built-in
                clarity and control
              </li>
              <li className="flex items-center gap-2.5 font-medium text-ink">
                <UsersRound size={16} className="text-moss" /> Simple
                collaboration for every team
              </li>
              <li className="flex items-center gap-2.5 font-medium text-ink">
                <Sparkles size={16} className="text-moss" /> No credit card to
                get started
              </li>
            </ul>
            <a
              href="#footer"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-moss transition-all hover:gap-3 hover:text-gold"
            >
              Start with the free plan <ArrowRight size={15} />
            </a>
          </div>
          <div className="min-w-0">
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
                  onClick={() => setBilling("monthly")}
                  className={`relative z-10 rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-colors ${
                    billing === "monthly"
                      ? "text-moss-deep"
                      : "text-ink-soft"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === "yearly"}
                  onClick={() => setBilling("yearly")}
                  className={`relative z-10 flex items-center justify-center gap-2 rounded-full 
                    px-3 py-2 text-[0.82rem] font-semibold transition-colors md:px-4 ${
                    billing === "yearly"
                      ? "text-moss-deep"
                      : "text-ink-soft"
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
            <div className="grid gap-4">
              {plans.slice(1).map((plan, i) => (
                <div
                  key={plan.name}
                  className="opacity-0 translate-y-4 animate-[reveal-up_0.7s_cubic-bezier(0.2,0.7,0.2,1)_forwards]"
                  style={{ animationDelay: `${280 + i * 90}ms` }}
                >
                  <article
                    className={`relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_8px_24px_rgba(28,32,25,0.045)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(28,32,25,0.1)] md:grid md:grid-cols-[0.95fr_1.05fr] md:gap-x-7 md:p-7 ${
                      plan.popular
                        ? "border-[#c8d8c8] bg-[#eef3ec] shadow-[0_12px_30px_rgba(46,74,59,0.1)] hover:shadow-[0_20px_38px_rgba(46,74,59,0.15)]"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute right-4 top-4 rounded-full bg-gold px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-white md:right-5 md:top-3.5">
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
                      <a
                        href={plan.href}
                        className={`group mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[0.8rem] font-semibold transition-all hover:-translate-y-px ${
                          plan.popular
                            ? "bg-moss text-[#fbf9f2] hover:bg-moss-deep"
                            : plan.name === "Starter"
                              ? "border border-line text-ink hover:border-ink hover:bg-[rgba(28,32,25,0.03)]"
                              : "bg-[#20251f] text-[#fbf9f2] hover:bg-moss-deep"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight
                          className="transition-transform duration-200 group-hover:translate-x-1"
                          size={15}
                          strokeWidth={2.2}
                        />
                      </a>
                    </div>
                    <ul className="order-last mt-6 flex list-none flex-col gap-3 border-t border-[#e2e4dc] p-0 pt-5 md:order-none md:col-start-2 md:row-start-1 md:mt-0 md:self-center md:border-t-0 md:border-l md:px-0 md:py-0 md:pl-7">
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
          </div>
        </div>
        <p className="mt-11 flex flex-wrap items-center justify-center gap-3 text-center text-[0.8rem] text-ink-soft">
          <span>14-day free trial</span>
          <span className="text-gold" aria-hidden="true">
            ·
          </span>
          <span>No credit card required</span>
          <span className="text-gold" aria-hidden="true">
            ·
          </span>
          <span>Cancel anytime</span>
        </p>
      </div>
    </section>
  );
}
