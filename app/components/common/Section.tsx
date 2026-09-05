import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export function Section({ children }: SectionProps) {
  return <section className="max-w-350 m-auto py-30">{children}</section>;
}
