import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import DoorsSection from "@/components/DoorsSection";
import LocksSection from "@/components/LocksSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import BlindsSection from "@/components/BlindsSection";
import VideoShowcase from "@/components/VideoShowcase";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <DoorsSection />
      <LocksSection />
      <ServicesSection />
      <BrandsSection />
      <BlindsSection />
      <VideoShowcase />
      <BrandsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
