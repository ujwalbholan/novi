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
    <div className="grid gap-6 rounded-2xl border border-[#d7d8d0] bg-[#f8f8f4] p-7 shadow-[0_12px_28px_rgba(28,32,25,0.04)] md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-7">
      <div>
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gold">
          The Novi note
        </span>
        <h2 className="mt-2.5 font-serif text-[clamp(1.7rem,2vw,2.35rem)] font-medium leading-[0.98] tracking-tight text-ink">
          A little signal.
          <br />
          <em className="font-normal not-italic text-moss">No noise.</em>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-b border-[#bfc8bc]">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          required
          placeholder="you@company.com"
          className="min-w-0 flex-1 bg-transparent py-2 text-[0.82rem] text-ink outline-none placeholder:text-[#9aa49a]"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid size-8 shrink-0 place-items-center rounded-full bg-moss text-white transition hover:translate-x-0.5 hover:-translate-y-0.5 hover:bg-gold"
        >
          <ArrowUpRight size={17} />
        </button>
      </form>
      <p className="text-[0.7rem] text-ink-soft md:col-start-2 md:-mt-4" role="status">
        {submitted
          ? "You are on the list. See you in your inbox."
          : "One short email a month. New features, useful ideas."}
      </p>
    </div>
  );
}