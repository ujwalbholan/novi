import { AnimatePresence, motion } from "motion/react";
import { projectsDetails, reveal, spring } from "../../constant";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function Workspace() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projectsDetails
    : projectsDetails.slice(0, 2);

  return (
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
  );
}
