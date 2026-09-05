"use client";
import { motion } from "motion/react";

type HeadingProps = {
  title: string;
  delay?: number;
};

export function Heading({ title, delay = 0.1 }: HeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className=" bg-linear-r from-moss to bg-white bg-clip-text text-transparent
    text-[80px] text-center max-w-200 py-5"
    >
      {title}
    </motion.h1>
  );
}
