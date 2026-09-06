"use client";

import { cn } from "@/app/util/utils";
import { motion } from "motion/react";

type NoteProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Note({ children, delay = 0.38, className }: NoteProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("py-6 text-center text-sm text-ink-soft", className)}
    >
      {children}
    </motion.p>
  );
}
