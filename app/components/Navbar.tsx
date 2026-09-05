"use client";

export default function Navbar() {
  // const [open, setOpen] = useState(false);
  // const close = () => setOpen(false);
  return (
    <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
      <div className="flex items-center gap-2">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight text-[#213328]"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-[#2e4a3b] font-serif text-lg italic text-[#e9c98a]">
            n
          </span>
          <span className="hidden lg:inline">Novi</span>
        </a>
      </div>
      <div className="hidden items-center gap-8 text-sm font-normal text-green/90 md:flex">
        <a href="#" className="transition hover:text-white">
          Features
        </a>
        <a href="#" className="transition hover:text-white">
          Pricing
        </a>
        <a href="#" className="transition hover:text-white">
          Docs
        </a>
        <a href="#" className="transition hover:text-white">
          Blog
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="hidden text-sm font-medium text-white/90 transition hover:text-white sm:block"
        >
          Sign in
        </a>
        <a
          href="#"
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-md transition hover:bg-white/90"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
