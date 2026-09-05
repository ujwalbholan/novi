"use client";

import { FormEvent, useState } from "react";

export function Footer() {
  const [message, setMessage] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("You're on the list - thanks for signing up.");
    event.currentTarget.reset();
  };
  return (
    <footer id="signup">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="logo-mark" aria-hidden="true" />
              Novi
            </a>
            <p>The calm workspace for small, fast moving teams.</p>
            <div className="social-row">
              <a href="#x" aria-label="Novi on X">
                𝕏
              </a>
              <a href="#linkedin" aria-label="Novi on LinkedIn">
                in
              </a>
              <a href="#github" aria-label="Novi on GitHub">
                ◉
              </a>
            </div>
          </div>
          <FooterColumn
            title="Product"
            links={["Boards", "Threads", "Timeline", "Integrations"]}
          />
          <FooterColumn title="Company" links={["About", "Careers", "Blog"]} />
          <div className="footer-col newsletter">
            <h5>Get product updates</h5>
            <p>One short email a month. New features, no noise.</p>
            <form className="signup-form" onSubmit={submit}>
              <label htmlFor="emailInput">Email address</label>
              <input
                id="emailInput"
                type="email"
                placeholder="you@company.com"
                required
              />
              <button type="submit" className="btn btn-primary btn-small">
                Subscribe
              </button>
            </form>
            <p className="signup-msg" role="status">
              {message}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Novi. All rights reserved.</span>
          <div className="legal-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer-col">
      <h5>{title}</h5>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
