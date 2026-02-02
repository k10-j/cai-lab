import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CAI Lab - Digital Literacy & Cyber Safety Education for Youth</title>
        <meta 
          name="description" 
          content="CAI Lab equips young people and learners with essential cyber safety, digital literacy, and AI skills through an innovative five-pillar educational model. Enroll today!" 
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <PillarsSection />
          <StatsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
