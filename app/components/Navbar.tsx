"use client";

import Button from "./common/Button";
import { Section } from "./common/Section";

export default function Navbar() {
  // const [open, setOpen] = useState(false);
  // const close = () => setOpen(false);
  return (
    <Section className="py-0! px-0!">
      <nav className="relative z-20 flex items-center justify-between mt-2 px-4 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold tracking-tight text-moss-deep"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-moss font-serif text-lg italic text-gold-soft">
              n
            </span>
            <span className="hidden lg:inline">Novi</span>
          </a>
        </div>
        <div className="hidden items-center gap-8 text-sm font-normal text-ink-soft md:flex">
          <a href="#" className="transition hover:text-moss-deep">
            Features
          </a>
          <a href="#" className="transition hover:text-moss-deep">
            Pricing
          </a>
          <a href="#" className="transition hover:text-moss-deep">
            Docs
          </a>
          <a href="#" className="transition hover:text-moss-deep">
            Blog
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Button buttonName="Sign in" variant="outline" size="lg" />
          <Button
            buttonName="Get started"
            variant="primary"
            size="lg"
            className="py-2 px-4"
          />
        </div>
      </nav>
    </Section>
  );
}
