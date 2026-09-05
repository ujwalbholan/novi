import {
  Bell,
  ChevronDown,
  Command,
  HelpCircle,
  Search,
  SlidersHorizontal,
} from "lucide-react";

function Logo() {
  return (
    <div className="col-span-1 rounded-tl-xl flex items-center justify-between border-b borde border-r border-[#d9e0d6] bg-[#eef3ec] px-4 py-3">
      <a
        href="#top"
        className="flex items-center gap-2 font-semibold tracking-tight text-[#213328]"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-[#2e4a3b] font-serif text-lg italic text-[#e9c98a]">
          n
        </span>
        <span className="hidden lg:inline">Novi</span>
      </a>
      <button
        className="rounded-md p-1.5 text-[#819082] transition hover:bg-white hover:text-[#213328]"
        aria-label="Collapse sidebar"
        type="button"
      >
        <SlidersHorizontal size={16} />
      </button>
    </div>
  );
}

function Head() {
  return (
    <div className="col-span-5 rounded-tr-xl flex min-w-0 items-center justify-between gap-4 border-b border-[#d9e0d6] bg-[#f8faf6] px-4 py-3 sm:px-6">
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#93a092]">
          <span>Workspace</span>
          <span>/</span>
          <span>Overview</span>
        </div>
        <h2 className="mt-1 truncate font-serif text-lg font-medium tracking-tight text-[#213328] sm:text-xl">
          Good morning, Alex.
        </h2>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <label className="relative hidden w-44 items-center md:flex lg:w-56">
          <Search
            size={15}
            className="pointer-events-none absolute left-3 text-[#93a092]"
          />
          <input
            className="h-9 w-full rounded-lg border border-[#d9e0d6] bg-white pl-9 pr-12 text-xs text-[#213328] outline-none placeholder:text-[#a2ada1] focus:border-[#8fa996] focus:ring-2 focus:ring-[#dce9dc]"
            type="search"
            placeholder="Search anything"
            aria-label="Search anything"
          />
          <span className="absolute right-2 hidden items-center gap-0.5 rounded border border-[#e1e6df] px-1.5 py-0.5 text-[9px] text-[#93a092] lg:flex">
            <Command size={10} /> K
          </span>
        </label>
        <button
          className="grid size-9 place-items-center rounded-lg border border-[#d9e0d6] bg-white text-[#536154] transition hover:border-[#8fa996] hover:text-[#213328]"
          type="button"
          aria-label="Help"
        >
          <HelpCircle size={16} />
        </button>
        <button
          className="relative grid size-9 place-items-center rounded-lg border border-[#d9e0d6] bg-white text-[#536154] transition hover:border-[#8fa996] hover:text-[#213328]"
          type="button"
          aria-label="Notifications"
        >
          <Bell size={16} />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#c98a2e]" />
        </button>
        <button
          className="hidden items-center gap-2 rounded-lg border border-[#d9e0d6] bg-white px-2 py-1.5 text-left transition hover:border-[#8fa996] sm:flex"
          type="button"
          aria-label="Open account menu"
        >
          <span className="grid size-6 place-items-center rounded-md bg-[#c98a2e] text-[9px] font-bold text-white">
            AT
          </span>
          <ChevronDown size={14} className="text-[#819082]" />
        </button>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="grid grid-cols-6">
      <Logo />
      <Head />
    </div>
  );
}
