import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

export function FooterNote() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };
  return (
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
  );
}
