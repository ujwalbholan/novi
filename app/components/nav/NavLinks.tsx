import { navLinks } from "./links";

export function NavLinks() {
  return (
    <div className="hidden items-center gap-8 text-sm font-normal text-ink-soft md:flex">
      {navLinks.map((link) => (
        <a key={link} href="#" className="transition hover:text-moss-deep">
          {link}
        </a>
      ))}
    </div>
  );
}