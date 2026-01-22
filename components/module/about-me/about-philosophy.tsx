"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "@/components/page-header";
import { Rocket, Target, BookOpen, Globe } from "lucide-react";

export const AboutPhilosophy = () => {
  const principles = [
    { icon: Target, label: "Clean Code" },
    { icon: Globe, label: "Performance First" },
    { icon: BookOpen, label: "User-Centric Design" },
    { icon: Rocket, label: "Continuous Learning" },
  ];

  return (
    <FadeIn className="space-y-8">
      <SectionHeader subtitle="Ideas in Action" title="My Workflow" />

      {/* Main Philosophy Statement */}
      <div className="relative pb-8 border-b-2 border-blue-500">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Build, Learn, Iterate
            </h3>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I believe in creating solutions that are not just functional but also scalable and maintainable. My approach combines modern development practices with continuous learning to deliver high-quality applications that solve real-world problems efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Principles Grid - Horizontal Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300"
            >
              {/* Content */}
              <div className="relative p-6 bg-white dark:bg-gray-900 transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
                <Icon className="w-8 h-8 text-blue-500 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {principle.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </FadeIn>
  );
};