"use client";

import { CircleHelp, Plus, Settings, Sparkles, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { primaryLinks, projects } from "../constant";

type SidebarProps = {
  activeView: string;
  activeChannel: string;
  onViewChange: (view: string) => void;
  onChannelChange: (channel: string) => void;
};

export function Sidebar({
  activeView,
  activeChannel,
  onViewChange,
  onChannelChange,
}: SidebarProps) {
  return (
    <aside className="col-span-1 rounded-bl-xl flex min-h-[600px] w-full flex-col border-r border-[#d9e0d6] bg-[#eef3ec] px-3 py-4 text-[#536154] ov">
      <nav aria-label="Dashboard navigation" className="space-y-1">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#93a092]">
          Workspace
        </p>
        {primaryLinks.map(({ label, icon: Icon, badge, children, createChannel }) => (
          <div key={label}>
            <button
              type="button"
              onClick={() => onViewChange(label)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-medium transition ${activeView === label ? "bg-[#dce9dc] text-[#244331]" : "hover:bg-white hover:text-[#213328]"}`}
            >
              <Icon size={16} strokeWidth={activeView === label ? 2.2 : 1.8} />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="rounded-full bg-[#c98a2e] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  {badge}
                </span>
              )}
            </button>
            <AnimatePresence initial={false}>
              {activeView === label && children && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="ml-5 mt-1 overflow-hidden border-l border-[#cbdacb] pl-2"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
                    className="space-y-1 py-1"
                  >
                    {children.map((child) => (
                      <motion.button
                        key={child.label}
                        type="button"
                        onClick={() => onChannelChange(child.label)}
                        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                        transition={{ duration: 0.18 }}
                        className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[11px] transition ${activeChannel === child.label ? "bg-[#dce9dc] font-semibold text-[#244331]" : "text-[#68776b] hover:bg-white hover:text-[#304638]"}`}
                      >
                        <span className="text-[#93a092]">#</span>
                        <span className="flex-1 truncate">{child.label}</span>
                        {child.badge && <span className="rounded-full bg-[#c98a2e] px-1.5 text-[10px] font-semibold text-white">{child.badge}</span>}
                      </motion.button>
                    ))}
                    {createChannel && (
                      <motion.button
                        type="button"
                        onClick={() => onViewChange("Inbox")}
                        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                        transition={{ duration: 0.18 }}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[11px] text-[#819082] transition hover:bg-white hover:text-[#304638]"
                      >
                        <Plus size={13} /> Create channel
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      <div className="mt-7">
        <div className="mb-2 flex items-center justify-between px-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#93a092]">
            Projects
          </p>
          <button
            className="rounded p-1 text-[#819082] transition hover:bg-white hover:text-[#213328]"
            aria-label="Add project"
            type="button"
          >
            <Plus size={15} />
          </button>
        </div>
        <div className="space-y-1">
          {projects.map((project) => (
            <a
              key={project.label}
              href={`#${project.label.toLowerCase().replaceAll(" ", "-")}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs transition hover:bg-white hover:text-[#213328]"
            >
              <span className={`size-2 rounded-full ${project.color}`} />
              <span className="truncate">{project.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-auto space-y-1 border-t border-[#d9e0d6] pt-4">
        <a
          href="#team"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs transition hover:bg-white hover:text-[#213328]"
        >
          <Users size={16} /> Team members
        </a>
        <a
          href="#settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs transition hover:bg-white hover:text-[#213328]"
        >
          <Settings size={16} /> Settings
        </a>
        <a
          href="#help"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs transition hover:bg-white hover:text-[#213328]"
        >
          <CircleHelp size={16} /> Help center
        </a>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#e3ece1] px-2.5 py-2">
          <span className="grid size-7 place-items-center rounded-full bg-[#c98a2e] text-[10px] font-bold text-white">
            AT
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-[#2b4434]">
              Alex Taylor
            </p>
            <p className="truncate text-[10px] text-[#819082]">
              alex@novi.team
            </p>
          </div>
          <Sparkles size={14} className="text-[#c98a2e]" />
        </div>
      </div>
    </aside>
  );
}
