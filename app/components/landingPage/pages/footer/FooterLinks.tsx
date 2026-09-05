import { ArrowUpRight, Mail } from "lucide-react";
import { linkColumns } from "../../constant";

export function FooterLinks() {
  return (
    <div className="footer-links-grid">
      {linkColumns.map((column) => (
        <div className="footer-link-column" key={column.title}>
          <h3>{column.title}</h3>
          {column.links.map((link) => (
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
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
  );
}
