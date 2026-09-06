import { CTASection } from "./components/landingPage/ui/CTASection";
import { FeatureSection } from "./components/landingPage/ui/FeatureSection";
import { Footer } from "./components/landingPage/ui/Footer";
import { HeroSection } from "./components/landingPage/ui/HeroSection";
import { PriceSection } from "./components/landingPage/ui/PriceSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PriceSection />
      <CTASection />
      <Footer />
    </main>
  );
}

<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Center Fade Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
      maskImage:
        "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
    }}
  />
  {/* Your Content/Components */}
</div>;
