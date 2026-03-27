import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import QualitiesSection from "@/components/QualitiesSection";
import PPESection from "@/components/PPESection";
import VeilleSection from "@/components/VeilleSection";
import ObjectifSection from "@/components/ObjectifSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <QualitiesSection />
      <PPESection />
      <VeilleSection />
      <ObjectifSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
