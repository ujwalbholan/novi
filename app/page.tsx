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