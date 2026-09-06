"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Button from "../common/Button";
import { navLinks } from "./links";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const toggle = () => setOpen((value) => !value);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-white/70 transition hover:bg-white md:hidden"
      >
        <span className="flex flex-col gap-[5px]" aria-hidden="true">
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-ink transition-all duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-ink transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-ink transition-all duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-3 right-3 top-[calc(100%+10px)] z-30 rounded-2xl border border-line bg-white/95 p-5 shadow-[0_24px_60px_-30px_rgba(30,51,39,0.35)] backdrop-blur md:hidden"
        >
          <div className="flex items-center justify-between pb-4">
            <span className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-ink-soft/70">
              Menu
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-moss-tint px-2.5 py-1 text-[0.66rem] font-semibold text-moss-deep">
              <span className="size-1.5 rounded-full bg-gold" />
              Built for small, fast teams
            </span>
          </div>

          <div className="divide-y divide-line/70">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={close}
                className="group flex items-center justify-between py-3.5 text-[0.98rem] font-medium text-ink transition hover:text-moss-deep"
              >
                {link}
                <ArrowUpRight
                  size={15}
                  className="-translate-y-0.5 translate-x-0.5 opacity-0 transition group-hover:opacity-100"
                />
              </a>
            ))}
          </div>

          <div className="mt-5 space-y-2.5 border-t border-line/70 pt-5">
            <Button
              buttonName="Sign in"
              variant="outline"
              size="lg"
              className="w-full"
              onClick={close}
            />
            <Button
              buttonName="Get started"
              variant="primary"
              size="lg"
              className="w-full py-2 px-4"
              onClick={close}
            />
          </div>

          <p className="mt-5 text-center text-xs text-ink-soft">
            No credit card required · Free for teams up to 5
          </p>
        </motion.div>
      )}
    </>
  );
}