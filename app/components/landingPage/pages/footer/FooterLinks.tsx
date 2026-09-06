import { ArrowUpRight, Mail } from "lucide-react";
import { linkColumns } from "../../constant";

export function FooterLinks() {
  return (
    <div className="grid gap-8 py-8 md:grid-cols-[1fr_repeat(3,0.7fr)_1fr] md:gap-7 md:py-14">
      {linkColumns.map((column) => (
        <div className="flex flex-col items-start gap-3" key={column.title}>
          <h3 className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#7d877d]">
            {column.title}
          </h3>
          {column.links.map((link) => (
            <a
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              key={link}
              className="group inline-flex items-center gap-1.5 text-[0.84rem] text-ink-soft transition hover:translate-x-0.5 hover:text-ink"
            >
              {link}
              <ArrowUpRight
                size={12}
                className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      ))}
      <div className="flex flex-col items-start gap-3 md:border-l md:border-[#d9d9d0] md:pl-6">
        <h3 className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#7d877d]">
          Say hello
        </h3>
        <a
          href="mailto:hello@novi.team"
          className="group inline-flex items-center gap-1.5 text-[0.84rem] text-ink-soft transition hover:translate-x-0.5 hover:text-ink"
        >
          hello@novi.team
          <Mail
            size={12}
            className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          />
        </a>
        <p className="mt-2 text-[0.76rem] leading-[1.6] text-[#8a948a]">
          Made with care for teams
          <br />
          who move with intention.
        </p>
      </div>
    </div>
  );
}