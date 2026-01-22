"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "@/components/page-header";
import {
  Code2,
  Layout,
  Database,
  Plug,
  Users,
  ArrowRight,
} from "lucide-react";

const expertiseData = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building modern, scalable, and high-performance user interfaces using React and Next.js with clean component architecture.",
  },
  {
    icon: Layout,
    title: "UI Development & Design Systems",
    description:
      "Crafting pixel-perfect, responsive, and accessible interfaces using Tailwind CSS and shadcn/ui for consistent design across themes.",
  },
  {
    icon: Plug,
    title: "API Integration & State Handling",
    description:
      "Integrating REST APIs efficiently, handling async data flows, and managing application state for smooth user experiences.",
  },
  {
    icon: Database,
    title: "Full-Stack Foundations",
    description:
      "Developing backend logic with Node.js and Express, and working with MongoDB, PostgreSQL, Prisma, and Mongoose.",
  },
  {
    icon: Users,
    title: "Team-Based Development",
    description:
      "Collaborating in team environments using Git and GitHub, following clean commit practices and structured workflows.",
  },
];

export const AboutExpertise = () => {
  return (
    <FadeIn className="space-y-8">
      <SectionHeader subtitle="Core Strengths" title="What I Do Best" />

      <div className="space-y-4">
        {expertiseData.map((item, index) => {
          const Icon = item.icon;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="group relative"
            >
              {/* Connecting Line */}
              {index !== expertiseData.length - 1 && (
                <div className={`absolute ${isLeft ? 'left-6' : 'right-6'} top-16 bottom-0 w-0.5 bg-blue-500/20 dark:bg-blue-500/30`} />
              )}

              <div className="flex gap-6 items-start">
                {/* Icon Circle - Always on the left for left items, right for right items */}
                {isLeft && (
                  <div className="relative z-10 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={`flex-1 pb-4 ${isLeft ? 'text-left' : 'text-right ml-auto'}`}>
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 ${!isLeft ? 'justify-end' : ''}`}>
                    {isLeft && <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    <span>{item.title}</span>
                    {!isLeft && <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </h3>
                  <div className={`h-1 w-16 bg-blue-500 mb-3 transition-all duration-300 group-hover:w-24 ${!isLeft ? 'ml-auto' : ''}`} />
                  <p className={`text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl ${!isLeft ? 'ml-auto' : ''}`}>
                    {item.description}
                  </p>
                </div>

                {/* Icon Circle - Always on the right for right items */}
                {!isLeft && (
                  <div className="relative z-10 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </FadeIn>
  );
};