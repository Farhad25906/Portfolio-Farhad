"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "@/components/page-header";

export const AboutExperience = () => (
  <FadeIn className="space-y-8">
    <SectionHeader
      subtitle="Career Path"
      title="Skills in Action"
    />

    <div className="relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-[2px] before:bg-blue-500/20 ml-3 space-y-10">
      <div className="pl-10 relative group">
        <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-blue-500/10 group-hover:ring-8 transition-all duration-300">
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>

        <div className="bg-card border-2 border-border hover:border-blue-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-blue-500 font-bold tracking-widest uppercase px-3 py-1 bg-blue-500/10 rounded-full">2023 - Present</span>
            <span className="text-xs text-muted-foreground">Full-time</span>
          </div>
          <h3 className="text-2xl font-bold mb-1">Frontend Developer</h3>
          <p className="text-lg text-blue-500 font-semibold mb-4">Radyan Corporation</p>
          <ul className="space-y-2.5 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
              <span className="leading-relaxed">Developed responsive web applications using Next.js and Tailwind CSS.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
              <span className="leading-relaxed">Collaborated with the backend team for seamless API integration.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
              <span className="leading-relaxed">Improved site performance by 30% through optimization techniques.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </FadeIn>
);