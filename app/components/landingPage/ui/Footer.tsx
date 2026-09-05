"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

const linkColumns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations"] },
  { title: "Company", links: ["About Novi", "Journal", "Contact"] },
  { title: "Resources", links: ["Help center", "Community", "Changelog"] },
];

export function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <footer id="footer" className="site-footer">
      <div className="wrap">
        <div className="footer-intro">
          <div className="footer-brand-block">
            <a href="#top" className="logo">
              <span className="logo-mark" aria-hidden="true" />
              Novi
            </a>
            <p>The calm workspace for small, fast moving teams.</p>
            <div className="footer-socials">
              <a href="#twitter" aria-label="Novi on Twitter">
                X
              </a>
              <a href="#linkedin" aria-label="Novi on LinkedIn">
                in
              </a>
              <a href="#github" aria-label="Novi on GitHub">
                GH
              </a>
            </div>
          </div>
          <div className="footer-newsletter">
            <div>
              <span className="footer-kicker">The Novi note</span>
              <h2>
                A little signal.
                <br />
                <em>No noise.</em>
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="footer-signup">
              <label htmlFor="footer-email">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@company.com"
              />
              <button type="submit" aria-label="Subscribe">
                <ArrowUpRight size={17} />
              </button>
            </form>
            <p className="footer-signup-status" role="status">
              {submitted
                ? "You are on the list. See you in your inbox."
                : "One short email a month. New features, useful ideas."}
            </p>
          </div>
        </div>
        <div className="footer-links-grid">
          {linkColumns.map((column) => (
            <div className="footer-link-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a
                  href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                  key={link}
                >
                  {link}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          ))}
          <div className="footer-link-column footer-contact">
            <h3>Say hello</h3>
            <a href="mailto:hello@novi.team">
              hello@novi.team
              <Mail size={12} />
            </a>
            <p>
              Made with care for teams
              <br />
              who move with intention.
            </p>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          Novi
        </div>
        <div className="footer-bottom-bar">
          <span>© 2026 Novi Studio</span>
          <span>Good work, together.</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
