"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ChevronRight,
  Clock3,
  Flame,
  MoreHorizontal,
  Plus,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

const stats = [
  {
    label: "Tasks completed",
    value: "24",
    detail: "+18% this week",
    icon: Check,
    tone: "gold",
  },
  {
    label: "Active projects",
    value: "06",
    detail: "2 need attention",
    icon: Target,
    tone: "sage",
  },
  {
    label: "Team focus time",
    value: "82%",
    detail: "+6% this week",
    icon: Flame,
    tone: "peach",
  },
];

const projects = [
  {
    name: "Product launch",
    team: "Aster team",
    progress: 78,
    tasks: "18 / 23",
    color: "#c98a2e",
  },
  {
    name: "Design system",
    team: "Design crew",
    progress: 54,
    tasks: "12 / 22",
    color: "#8874bf",
  },
  {
    name: "Website refresh",
    team: "Growth team",
    progress: 32,
    tasks: "8 / 25",
    color: "#5c9bad",
  },
];

const activity = [
  {
    initials: "ML",
    name: "Maya Liu",
    action: "completed",
    task: "Connect Stripe",
    time: "8 min ago",
    color: "#9bc7b0",
  },
  {
    initials: "AT",
    name: "Alex Taylor",
    action: "commented on",
    task: "Design empty states",
    time: "24 min ago",
    color: "#c98a2e",
  },
  {
    initials: "JR",
    name: "Jamie Ross",
    action: "moved",
    task: "Launch copy",
    time: "1 hr ago",
    color: "#d79a82",
  },
];

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

export function Overview() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="space-y-5"
    >
      <motion.section
        variants={reveal}
        transition={spring}
        className="grid gap-3 sm:grid-cols-3"
      >
        {stats.map(({ label, value, detail, icon: Icon, tone }) => (
          <motion.article
            key={label}
            whileHover={{ y: -3 }}
            transition={spring}
            className="rounded-xl border border-[#d9e0d6] bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <span
                className={`grid size-9 place-items-center rounded-lg ${tone === "gold" ? "bg-[#f6ead1] text-[#c98a2e]" : tone === "sage" ? "bg-[#e3eee3] text-[#2e4a3b]" : "bg-[#f5e3dc] text-[#bd7258]"}`}
              >
                <Icon size={17} />
              </span>
              <MoreHorizontal size={16} className="text-[#aab6aa]" />
            </div>
            <p className="mt-4 text-xs text-[#819082]">{label}</p>
            <p className="mt-1 font-serif text-3xl text-[#213328]">{value}</p>
            <p className="mt-1 text-[11px] font-medium text-[#6f9b79]">
              {detail}
            </p>
          </motion.article>
        ))}
      </motion.section>

      <div className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
        <motion.section
          variants={reveal}
          transition={spring}
          className="rounded-xl border border-[#d9e0d6] bg-white p-4 shadow-sm sm:p-5"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#93a092]">
                Your workspace
              </p>
              <h3 className="mt-1 font-serif text-xl text-[#213328]">
                Project pulse
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#2e4a3b] hover:text-[#c98a2e]"
            >
              {showAll ? "Show less" : "View all"}
              <ChevronRight size={14} />
            </button>
          </div>
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={spring}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="size-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-sm font-medium text-[#304638]">
                          {project.name}
                        </p>
                        <span className="text-xs font-semibold text-[#536154]">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#edf1eb]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ ...spring, delay: 0.15 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                      </div>
                      <div className="mt-1 flex justify-between text-[10px] text-[#93a092]">
                        <span>{project.team}</span>
                        <span>{project.tasks} tasks</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        <motion.section
          variants={reveal}
          transition={spring}
          className="rounded-xl border border-[#d9e0d6] bg-white p-4 shadow-sm sm:p-5"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#93a092]">
                Team stream
              </p>
              <h3 className="mt-1 font-serif text-xl text-[#213328]">
                Recent activity
              </h3>
            </div>
            <button
              type="button"
              className="grid size-8 place-items-center rounded-lg bg-[#eef3ec] text-[#2e4a3b] transition hover:bg-[#dce9dc]"
              aria-label="Add update"
            >
              <Plus size={15} />
            </button>
          </div>
          <div className="space-y-4">
            {activity.map((item) => (
              <motion.div
                key={`${item.name}-${item.task}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...spring, delay: 0.25 }}
                className="flex gap-3"
              >
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.initials}
                </span>
                <div className="min-w-0 flex-1 text-xs leading-5">
                  <p className="text-[#536154]">
                    <strong className="font-semibold text-[#304638]">
                      {item.name}
                    </strong>{" "}
                    {item.action}{" "}
                    <span className="font-medium text-[#2e4a3b]">
                      {item.task}
                    </span>
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-[10px] text-[#a0aca1]">
                    <Clock3 size={11} /> {item.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.section
        variants={reveal}
        transition={spring}
        className="flex flex-col gap-4 rounded-xl border border-[#d9e0d6] bg-[#eef3ec] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[#dce9dc] text-[#2e4a3b]">
            <Users size={18} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-[#304638]">
              Your team is in sync
            </h3>
            <p className="mt-0.5 text-xs text-[#819082]">
              4 of 5 teammates have checked in today.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#b9cbb9] bg-white px-3 py-2 text-xs font-semibold text-[#2e4a3b] transition hover:border-[#2e4a3b]"
        >
          Invite teammate <Plus size={14} />
        </button>
      </motion.section>
    </motion.div>
  );
}
