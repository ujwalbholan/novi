const features = [
  {
    title: "Boards that move at your speed",
    text: "Plan sprints and track tasks without hunting through spreadsheets.",
    icon: "▦",
  },
  {
    title: "Threads, not another inbox",
    text: "Keep project conversations attached to the work itself.",
    icon: "◌",
  },
  {
    title: "One timeline for the whole team",
    text: "Every deadline and milestone in one shared view.",
    icon: "⌁",
  },
  {
    title: "Works the way you already do",
    text: "Import from Trello, Asana, or a spreadsheet in minutes.",
    icon: "↓",
  },
];

export function FeatureSection() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="section-head">
          <h2>Everything your team needs, nothing it doesn&apos;t</h2>
          <p>
            Four tools built to work together, so your team stops piecing its
            process together from five different apps.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
