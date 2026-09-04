import CTASection from "./components/CTASection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return <main id="top"><Navbar /><HeroSection /><FeatureSection /><CTASection /><Footer /></main>;
}
