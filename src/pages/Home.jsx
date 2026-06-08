import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import ServicesButton from "../components/ServicesButton";
import TrustSection from "../components/TrustSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ServicesButton />
      <TrustSection />
      <ContactSection />
    </div>
  );
}
