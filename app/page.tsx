"use client";

import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <ServicesSection />
      <ProjectsSection />
    </>
  );
}