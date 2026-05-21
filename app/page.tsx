import PublicHeader from "./components/PublicHeader";
import PublicHero from "./components/PublicHero";
import FeatureCards from "./components/FeatureCards";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import PortalPreview from "./components/PortalPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <PublicHeader />
      <PublicHero />
      <PortalPreview />
      <FeatureCards />
      <HowItWorks />
      <Footer />
    </main>
  );
}