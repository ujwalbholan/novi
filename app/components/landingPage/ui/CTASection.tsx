export function CTASection() {
  return (
    <section className="bg-moss">
      <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-6 px-5 py-12 md:px-8 md:py-16">
        <h2 className="max-w-[16ch] font-serif text-[clamp(1.6rem,2vw+1rem,2.1rem)] font-medium leading-tight tracking-tight text-[#fbf9f2]">
          Give your team back its focus this week.
        </h2>
        <a
          href="#footer"
          className="rounded-full bg-[#fbf9f2] px-6 py-3 text-sm font-semibold text-moss-deep shadow-md transition-colors hover:bg-gold-soft"
        >
          Start free
        </a>
      </div>
    </section>
  );
}
