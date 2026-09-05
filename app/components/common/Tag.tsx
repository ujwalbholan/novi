"use client";
import { motion } from "motion/react";

type TagProps = {
  title: string;
  dot?: boolean;
  delay?: number;
};

export function Tag({ title, dot = true, delay = 0.1 }: TagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-flex items-center gap-2 rounded-lg bg-moss-tint px-4 py-2 border border-gray-300 shadow"
    >
      {dot && <span className="size-2 rounded-full bg-gold animate-pulse" />}
      <span className="text-sm tracking-tight text-gray-600">{title}</span>
    </motion.div>
  );
}
