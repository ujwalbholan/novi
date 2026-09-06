"use client";
import { cn } from "@/app/util/utils";
import { motion } from "motion/react";

type HeadingProps = {
  title: string;
  delay?: number;
  className?: string;
};

export function Heading({ title, delay = 0.1, className }: HeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("max-w-200 py-5 text-center text-4xl sm:text-5xl md:text-6xl lg:text-[80px]", className)}
    >
      {title}
    </motion.h1>
  );
}
