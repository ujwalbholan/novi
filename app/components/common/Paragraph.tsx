"use client";
import { cn } from "@/app/util/utils";
import { motion } from "motion/react";

type HeadingProps = {
  title: string;
  delay?: number;
  className?: string;
};

export function Paragraph({ title, delay = 0.1, className }: HeadingProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "text-ink-soft text-lg font-sans text-center max-w-175",
        className,
      )}
    >
      {title}
    </motion.p>
  );
}
