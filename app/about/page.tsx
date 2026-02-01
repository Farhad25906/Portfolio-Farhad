"use client";

import AboutCertifications from "@/components/module/about-me/about-certifications";
import { AboutEducation } from "@/components/module/about-me/about-education";
import { AboutExperience } from "@/components/module/about-me/about-experience";
import { AboutExpertise } from "@/components/module/about-me/about-expertise";
import { AboutIntro } from "@/components/module/about-me/about-intro";
import { AboutPhilosophy } from "@/components/module/about-me/about-philosophy";

export default function AboutPage() {
  return (
    <div className="space-y-16 mt-8">
      <AboutIntro />
      <AboutExpertise />
      <AboutExperience />
      <AboutEducation />
      <AboutCertifications />
      <AboutPhilosophy />
    </div>
  );
}