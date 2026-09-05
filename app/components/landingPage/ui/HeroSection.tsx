import { DashboardDemo } from "../../Dashboard";

export function HeroSection() {
  return (
    <section className="hero" id="product">
      <div className="wrap hero-content">
        <span className="eyebrow-tag reveal" style={{ animationDelay: "40ms" }}>
          <span className="dot" />
          Built for small, fast teams
        </span>
        <h1 className="reveal" style={{ animationDelay: "120ms" }}>
          Run your team without <br className="hidden sm:block" /> the <em>tab switching.</em>
        </h1>
        <p className="hero-sub reveal" style={{ animationDelay: "220ms" }}>
          Novi brings tasks, docs, and conversations into one calm workspace built for small, fast moving teams.
        </p>
        <div className="hero-actions reveal" style={{ animationDelay: "320ms" }}>
          <a href="#footer" className="btn btn-primary">Start free</a>
          <a href="#features" className="btn btn-secondary">See how it works</a>
        </div>
        <p className="hero-note reveal" style={{ animationDelay: "380ms" }}>
          No credit card required <span aria-hidden="true">·</span> Free for teams up to 5
        </p>
        <div className="hero-dashboard reveal" style={{ animationDelay: "460ms" }}>
          <DashboardDemo />
        </div>
      </div>
    </section>
  );
}
