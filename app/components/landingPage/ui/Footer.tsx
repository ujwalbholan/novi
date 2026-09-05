"use client";

import { Section } from "../../common/Section";
import { FooterLinks } from "../pages/footer/FooterLinks";
import { FooterBrandBlock } from "../pages/footer/FooterBrandBlock";
import { FooterNote } from "../pages/footer/FooterNote";
import { FooterBottom } from "../pages/footer/FooterBottom";

export function Footer() {
  return (
    <Section>
      <footer id="footer">
        <div className="wrap">
          <div className="footer-intro">
            <FooterBrandBlock />
            <FooterNote />
          </div>
          <FooterLinks />
          <div
            className=" text-center text-[100px] bg-clip-text text-transparent  bg-linear-to-r from-green-900 to bg-gray-300 
          tracking-wide font-serif font-semibold border-t border-[#d9e0d6] py-5 text-b text-shadow-xs"
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
