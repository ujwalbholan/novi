export function FooterBrandBlock() {
  return (
    <div className="max-w-[25ch]">
      <a
        href="#top"
        className="flex items-center gap-2 mb-3 font-semibold tracking-tight text-moss-deep"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-moss font-serif text-lg italic text-gold-soft">
          n
        </span>
        <span className="hidden lg:inline">Novi</span>
      </a>
      <p className="mb-7 mt-4 text-[0.92rem] leading-[1.55] text-ink-soft">
        The calm workspace for small, fast moving teams.
      </p>
      <div className="flex gap-2 mt-3">
        <a
          href="#twitter"
          aria-label="Novi on Twitter"
          className="grid size-8.5 place-items-center rounded-full border border-[#d0d2ca] 
          text-ink-soft transition hover:-translate-y-0.5 hover:bg-moss hover:text-white"
        >
          X
        </a>
        <a
          href="#linkedin"
          aria-label="Novi on LinkedIn"
          className="grid size-8.5 place-items-center rounded-full border border-[#d0d2ca] 
          text-ink-soft transition hover:-translate-y-0.5 hover:bg-moss hover:text-white"
        >
          in
        </a>
        <a
          href="#github"
          aria-label="Novi on GitHub"
          className="grid size-8.5 place-items-center rounded-full border border-[#d0d2ca] 
          text-ink-soft transition hover:-translate-y-0.5 hover:bg-moss hover:text-white"
        >
          GH
        </a>
      </div>
    </div>
  );
}