"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import StatsSection from "@/sections/StatsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import MarqueeBanner from "@/components/MarqueeBanner";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
