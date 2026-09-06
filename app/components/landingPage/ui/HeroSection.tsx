"use client";
import { motion } from "motion/react";
import { Section } from "../../common/Section";
import { DashboardDemo } from "../../Dashboard";
import Hero from "../pages/Hero";

export function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.46,
            ease: [0.2, 0.7, 0.2, 1],
          }}
          className="mx-auto mt-14 hidden w-full max-w-270 text-left md:block"
        >
          <DashboardDemo />
        </motion.div>
      </div>
    </Section>
  );
}
