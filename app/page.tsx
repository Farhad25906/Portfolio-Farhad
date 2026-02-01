"use client";

import { HeroSection } from "@/components/module/home/hero-section";
import { ProjectsSection } from "@/components/module/projects/projects-section";
import { ServicesSection } from "@/components/module/home/services-section";
import { ToolOrbitSystem } from "@/components/module/home/tools-orbit-section";
import { ConversationThreads } from "@/components/module/home/faq-section";
import { FloatingVoices } from "@/components/module/home/testomonial-section";
import { ContributionGraph } from "@/components/module/home/contribution-graph";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ToolOrbitSystem />
      <ContributionGraph />
      <ServicesSection />
      <ProjectsSection limit={2} />
      <ConversationThreads />
      <FloatingVoices />
    </div>
  );
}
