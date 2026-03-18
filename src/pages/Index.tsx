import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import QualitiesSection from "@/components/QualitiesSection";
import PPESection from "@/components/PPESection";
import VeilleSection from "@/components/VeilleSection";
import ObjectifSection from "@/components/ObjectifSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QualitiesSection />
      <PPESection />
      <VeilleSection />
      <ObjectifSection />
      <Footer />
    </div>
  );
};

export default Index;
