"use client";

import { useState } from "react";
import { Section } from "../../common/Section";
import { PriceLeftComponent } from "../pages/price/PriceLeftComponent";
import { PricePlan } from "../pages/price/PricePlan";
import { PriceCard } from "../pages/price/PriceCard";
import { Billing } from "../constant";
import { Note } from "../../common/Note";

export function PriceSection() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <Section className="py-20 md:py-32">
      <div className="mx-auto w-full max-w-295 px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <PriceLeftComponent />
          <div className="min-w-0">
            <PricePlan billing={billing} onBillingChange={setBilling} />
            <PriceCard billing={billing} />
          </div>
        </div>

        <Note>
          14-day free trial
          <span
            className="w-4 h-4 px-2 rounded-full text-gold animate-pulse"
            aria-hidden="true"
          >
            ·
          </span>
          No credit card required
          <span
            className="w-4 h-4 px-2 rounded-full text-gold animate-pulse"
            aria-hidden="true"
          >
            ·
          </span>
          Cancel anytime
        </Note>
      </div>
    </Section>
  );
}
