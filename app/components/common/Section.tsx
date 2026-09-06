import { cn } from "@/app/util/utils";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-350 px-5 py-16 md:px-8 md:py-30",
        className,
      )}
    >
      {children}
    </section>
  );
}
