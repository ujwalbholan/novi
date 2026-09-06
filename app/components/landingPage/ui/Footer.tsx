"use client";

import { FooterLinks } from "../pages/footer/FooterLinks";
import { FooterBrandBlock } from "../pages/footer/FooterBrandBlock";
import { FooterNote } from "../pages/footer/FooterNote";
import { FooterBottom } from "../pages/footer/FooterBottom";
import { Section } from "../../common/Section";

export function Footer() {
  return (
    <Section className=" pb-5! md:pt-24  ">
      <footer id="footer">
        <div className=" md:px-8">
          <div className="grid gap-12 border-b border-[#d9d9d0] pb-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <FooterBrandBlock />
            <FooterNote />
          </div>
          <FooterLinks />
          <div
            className="bg-linear-to-r from-moss-deep to-gray-300 bg-clip-text py-6 text-center font-serif text-[70px] font-semibold tracking-wide text-transparent text-shadow-xs md:text-[100px]"
            aria-hidden="true"
          >
            Novi
          </div>
          <FooterBottom />
        </div>
      </footer>
    </Section>
  );
}
