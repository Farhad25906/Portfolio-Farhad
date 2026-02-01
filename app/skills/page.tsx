"use client";

import { HeroPhilosophySection } from "@/components/module/skills/HeroPhilosophySection";
import { ProblemsSection } from "@/components/module/skills/ProblemsSection";
import { TechnicalDNASection } from "@/components/module/skills/TechnicalDNASection";
import { ToolsSection } from "@/components/module/skills/ToolsSection";


export default function SkillsPage() {
  return (
    <div className="space-y-16 mt-8">
      <HeroPhilosophySection />
      <ToolsSection />
      <ProblemsSection />
      <TechnicalDNASection />
    </div>
  );
}