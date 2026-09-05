import { Section } from "../../common/Section";
import { DashboardDemo } from "../../Dashboard";
import Hero from "../pages/Hero";

export function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <div
          className="hero-dashboard reveal"
          style={{ animationDelay: "460ms" }}
        >
          <DashboardDemo />
        </div>
      </div>
    </Section>
  );
}
