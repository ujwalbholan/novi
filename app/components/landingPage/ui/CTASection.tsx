import Button from "../../common/Button";
import { Heading } from "../../common/Heading";
import { Section } from "../../common/Section";

export function CTASection() {
  return (
    <Section className="rounded-2xl bg-moss-tint py-4! shadow-md inset-ring-4 inset-ring-moss/8">
      <div className="relative mx-auto flex w-full max-w-295 flex-col items-start justify-between gap-8 overflow-hidden px-5 py-10 sm:px-6 sm:py-12 md:flex-row md:items-center md:px-8 md:py-16 lg:gap-12">
        <Heading
          title="Give your team back its focus this week."
          className="relative max-w-full text-left text-4xl! leading-tight sm:text-5xl! md:max-w-140 md:text-5xl! lg:text-6xl!"
        />

        <Button
          buttonName="Start free"
          variant="primary"
          size="lg"
          className="relative shrink-0 bg-[#fbf9f2] text-moss-deep shadow-lg transition-colors"
        >
          Start free
        </Button>
      </div>
    </Section>
  );
}

