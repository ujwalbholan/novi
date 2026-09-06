import { motion } from "motion/react";
import { activity, reveal, spring } from "../../constant";
import { Clock3 } from "lucide-react";

export function TeamStream() {
  return (
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
          <h3 className="mt-1 font-serif text-xl text-moss-deep">
            Recent activity
          </h3>
        </div>
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
                <span className="font-medium text-moss">{item.task}</span>
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-[10px] text-[#a0aca1]">
                <Clock3 size={11} /> {item.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
