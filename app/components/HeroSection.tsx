import BoardDemo from "./BoardDemo";

export default function HeroSection() {
  return <section className="hero" id="product"><div className="wrap hero-grid"><div><span className="eyebrow-tag reveal" style={{ animationDelay: "40ms" }}><span className="dot" />Built for small, fast teams</span><h1 className="reveal" style={{ animationDelay: "120ms" }}>Run your team without the tab switching.</h1><p className="hero-sub reveal" style={{ animationDelay: "220ms" }}>Novi brings tasks, docs, and conversations into one calm workspace built for small, fast moving teams.</p><div className="hero-actions reveal" style={{ animationDelay: "320ms" }}><a href="#signup" className="btn btn-primary">Start free</a><a href="#features" className="btn btn-secondary">See how it works</a></div><p className="hero-note reveal" style={{ animationDelay: "380ms" }}>No credit card. Set up a board in under two minutes.</p></div><BoardDemo /></div></section>;
}
