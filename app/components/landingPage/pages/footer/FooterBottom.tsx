export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-[#d9d9d0] pt-5 text-[0.72rem] text-[#899389] sm:flex-row sm:gap-4">
      <span>© 2026 Novi Studio</span>
      <span>Good work, together.</span>
      <div className="flex gap-4">
        <a href="#privacy" className="transition hover:text-ink">
          Privacy
        </a>
        <a href="#terms" className="transition hover:text-ink">
          Terms
        </a>
      </div>
    </div>
  );
}