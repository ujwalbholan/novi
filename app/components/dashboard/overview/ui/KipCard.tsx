import { motion } from "motion/react";
import { reveal, spring, stats } from "../../constant";
import { MoreHorizontal } from "lucide-react";

export function KipCard() {
  return (
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
  );
}
