"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "@/components/page-header";
import { Code2, GraduationCap, CheckCircle2 } from "lucide-react";

export const AboutEducation = () => (
  <FadeIn className="space-y-8">
    <SectionHeader
      subtitle="Academic Foundation"
      title="Learning That Built My Core"
    />

    <div className="space-y-8">
      {/* Bachelor's Degree */}
      <div className="group relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
        <div className="pl-8 pr-6 py-6 bg-card border border-border rounded-2xl hover:border-blue-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">B.Sc. in Computer Science</h3>
                <p className="text-blue-500 font-semibold">Port City International University</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground font-bold tracking-wider uppercase bg-blue-500/10 px-4 py-2 rounded-full w-fit">2020 - 2024</span>
          </div>
          <div className="ml-[72px] md:ml-[72px]">
            <p className="text-sm text-muted-foreground mb-3">📍 Chittagong, Bangladesh</p>
            <div className="flex items-start gap-2 bg-blue-500/5 p-4 rounded-xl border border-blue-500/10">
              <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Graduated with honors. Focused on Software Engineering, Data Structures, and Algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Higher Secondary */}
      <div className="group relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/40 rounded-full"></div>
        <div className="pl-8 pr-6 py-6 bg-card border border-border rounded-2xl hover:border-blue-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Higher Secondary Certificate</h3>
                <p className="text-muted-foreground font-semibold">Omorgoni M.E.S College</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground font-bold tracking-wider uppercase bg-muted px-4 py-2 rounded-full w-fit">2018 - 2020</span>
          </div>
          <div className="ml-[72px] md:ml-[72px]">
            <p className="text-sm text-muted-foreground mb-3">📍 Chittagong, Bangladesh</p>
            <p className="text-sm text-muted-foreground leading-relaxed">Science Group</p>
          </div>
        </div>
      </div>
    </div>
  </FadeIn>
);