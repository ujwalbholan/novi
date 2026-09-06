import Button from "./common/Button";
import { Section } from "./common/Section";
import { Logo } from "./nav/Logo";
import { MobileNav } from "./nav/MobileNav";
import { NavLinks } from "./nav/NavLinks";

export default function Navbar() {
  return (
    <Section className="py-0! px-0!">
      <nav className="relative z-20 mt-2 flex items-center justify-between px-4 py-4 md:px-8">
        <Logo />
        <NavLinks />
        <div className="hidden items-center gap-3 md:flex">
          <Button buttonName="Sign in" variant="outline" size="lg" />
          <Button
            buttonName="Get started"
            variant="primary"
            size="lg"
            className="py-2 px-4"
          />
        </div>
        <MobileNav />
      </nav>
    </Section>
  );
}