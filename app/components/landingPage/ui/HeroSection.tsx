import { Section } from "../../common/Section";
import { DashboardDemo } from "../../Dashboard";
import Hero from "../pages/Hero";

export function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <div className="mx-auto mt-14 hidden w-full max-w-[1080px] text-left opacity-0 translate-y-4
         animate-[reveal-up_0.7s_cubic-bezier(0.2,0.7,0.2,1)_forwards] [animation-delay:460ms] md:block"
         >
          <DashboardDemo />
        </div>
      </div>
    </Section>
  );
}