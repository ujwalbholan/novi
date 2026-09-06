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
      className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "text-center font-bold tracking-tight leading-tight",
        "max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-200",
        "bg-clip-text text-transparent",
        "bg-linear-to-b from-moss to-moss-tint",
        "text-shadow-xs",
        className,
      )}
    >
      {title}
    </motion.h1>
  );
}
