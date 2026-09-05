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
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pricing-layout">
          <div className="pricing-copy">
            <span className="pricing-trust">Built for teams that ship</span>
            <h2>
              Affordable focus.
              <br />
              <em>Room to scale.</em>
            </h2>
            <p>
              Start small with a calm workspace, then add structure as your team
              grows. No surprise fees, no feature maze.
            </p>
            <ul className="pricing-values">
              <li>
                <ShieldCheck size={16} /> Built-in clarity and control
              </li>
              <li>
                <UsersRound size={16} /> Simple collaboration for every team
              </li>
              <li>
                <Sparkles size={16} /> No credit card to get started
              </li>
            </ul>
            <a href="#footer" className="pricing-copy-link">
              Start with the free plan <ArrowRight size={15} />
            </a>
          </div>
          <div className="pricing-plans">
            <div
              className={`billing-toggle${billing === "yearly" ? " yearly" : ""}`}
            >
              <div
                className="billing-track"
                role="tablist"
                aria-label="Billing period"
              >
                <span className="billing-thumb" aria-hidden="true" />
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === "monthly"}
                  onClick={() => setBilling("monthly")}
                  className={billing === "monthly" ? "active" : ""}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={billing === "yearly"}
                  onClick={() => setBilling("yearly")}
                  className={billing === "yearly" ? "active" : ""}
                >
                  Yearly
                  <span className="save-pill">Save 20%</span>
                </button>
              </div>
            </div>
            <div className="plan-grid">
              {plans.slice(1).map((plan, i) => (
                <div
                  key={plan.name}
                  className="plan-wrap reveal"
                  style={{ animationDelay: `${280 + i * 90}ms` }}
                >
                  <article
                    className={`plan-card${plan.popular ? " plan-card-popular" : ""}`}
                  >
                    {plan.popular && (
                      <span className="plan-badge">Most popular</span>
                    )}
                    <header className="plan-card-head">
                      <h3 className="plan-name">{plan.name}</h3>
                      <p className="plan-tagline">{plan.tagline}</p>
                    </header>
                    <div className="plan-price">
                      <span className="plan-amount">
                        $
                        {billing === "yearly"
                          ? plan.price.yearly
                          : plan.price.monthly}
                      </span>
                      <span className="plan-per">/mo</span>
                    </div>
                    <p className="plan-note">
                      {plan.name === "Starter"
                        ? "Free forever"
                        : billing === "yearly"
                          ? "Billed annually · per user"
                          : "Billed monthly · per user"}
                    </p>
                    <ul className="plan-features">
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span className="plan-check" aria-hidden="true">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={plan.href}
                      className={`plan-cta ${
                        plan.popular
                          ? "plan-cta-gold"
                          : plan.name === "Starter"
                            ? "plan-cta-outline"
                            : "plan-cta-moss"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight
                        className="arrow"
                        size={15}
                        strokeWidth={2.2}
                      />
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="pricing-foot">
          <span>14-day free trial</span>
          <span className="pricing-foot-dot" aria-hidden="true">
            ·
          </span>
          <span>No credit card required</span>
          <span className="pricing-foot-dot" aria-hidden="true">
            ·
          </span>
          <span>Cancel anytime</span>
        </p>
      </div>
    </section>
  );
}
