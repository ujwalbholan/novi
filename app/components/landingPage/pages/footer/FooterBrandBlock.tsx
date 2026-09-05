export function FooterBrandBlock() {
  return (
    <div className="footer-brand-block">
      <a
        href="#top"
        className="flex items-center gap-2 font-semibold tracking-tight text-[#213328]"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-[#2e4a3b] font-serif text-lg italic text-[#e9c98a]">
          n
        </span>
        <span className="hidden lg:inline">Novi</span>
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
  );
}
