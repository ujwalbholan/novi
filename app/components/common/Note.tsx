"use client";

import { motion } from "motion/react";

type NoteProps = {
  children: React.ReactNode;
  delay?: number;
};

export function Note({ children, delay = 0.38 }: NoteProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="py-6 text-center text-sm text-ink-soft"
    >
      {children}
    </motion.p>
  );
}
