import { motion } from "motion/react";
import { reveal, spring } from "../../constant";
import { Plus, Users } from "lucide-react";

export function InviteTeam() {
  return (
    <motion.section
      variants={reveal}
      transition={spring}
      className="flex flex-col gap-4 rounded-xl border border-[#d9e0d6] bg-[#eef3ec] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-[#dce9dc] text-moss">
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
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#b9cbb9] bg-white px-3 py-2 text-xs font-semibold text-moss transition hover:border-[#2e4a3b]"
      >
        Invite teammate <Plus size={14} />
      </button>
    </motion.section>
  );
}
