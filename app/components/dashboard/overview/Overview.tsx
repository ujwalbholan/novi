"use client";

import { motion } from "motion/react";
import { KipCard } from "./ui/KipCard";
import { Workspace } from "./ui/Workspace";
import { TeamStream } from "./ui/TeamStream";
import { InviteTeam } from "./ui/InviteTeam";

export function Overview() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="space-y-5"
    >
      <KipCard></KipCard>
      <div className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
        <Workspace />
        <TeamStream />
      </div>
      <InviteTeam />
    </motion.div>
  );
}
