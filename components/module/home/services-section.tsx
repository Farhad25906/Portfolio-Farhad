"use client";

import { useState, useEffect, SetStateAction } from "react";
import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "../../page-header";

export function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const services = [
    {
      command: "frontend-dev",
      title: "Frontend Development",
      description: "Building responsive, pixel-perfect web applications using modern technologies like React, Next.js, and Tailwind CSS.",
      tools: "React • Next.js • TypeScript • Tailwind CSS",
    },
    {
      command: "backend-dev",
      title: "Backend Development",
      description: "Architecting scalable server-side solutions with Node.js, Express, and modern database technologies.",
      tools: "Node.js • Express • PostgreSQL • MongoDB",
    },
    {
      command: "api-integration",
      title: "API Integration",
      description: "Seamlessly connecting your frontend with third-party APIs and backend services for dynamic data.",
      tools: "REST • GraphQL • Axios • Webhook",
    },
    {
      command: "state-mgmt",
      title: "State Management",
      description: "Implementing robust state management solutions using Redux, Zustand, or Context API for complex applications.",
      tools: "Redux • Zustand • Context API • React Query",
    },
    {
      command: "mobile-responsive",
      title: "Mobile Responsive",
      description: "Ensuring your application looks and functions perfectly across all devices, from desktops to smartphones.",
      tools: "CSS Grid • Flexbox • Media Queries • Mobile-First",
    },
  ];

  useEffect(() => {
    if (isTyping && activeService !== null) {
      const fullText = services[activeService].description;
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, activeService]);

  const handleServiceClick = (index: SetStateAction<number | null>) => {
    setActiveService(index);
    setTypedText("");
    setIsTyping(true);
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        subtitle="Services"
        title="What I Offer"
      />
      <FadeIn delay={0.2}>
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-t-lg border border-zinc-300 dark:border-zinc-800 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-zinc-600 dark:text-zinc-400 text-sm font-mono">services.sh</span>
        </div>

        <div className="bg-white dark:bg-black border-x border-b border-zinc-300 dark:border-zinc-800 rounded-b-lg p-6 font-mono text-sm min-h-[400px]">
          <div className="mb-6">
            <div className="text-zinc-600 dark:text-zinc-500 mb-2">$ ls -la services/</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`text-left px-4 py-2 rounded transition-all duration-200 ${activeService === index
                    ? "bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 dark:text-zinc-600">→</span>
                    <span className="text-blue-600 dark:text-blue-400">{service.command}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-300 dark:border-zinc-800 pt-4">
            {activeService === null ? (
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-500 py-8">
                <span className="text-blue-600 dark:text-blue-400">$</span>
                <span>Select a service to view details...</span>
                <span className="animate-pulse">_</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-600 dark:text-blue-400">$</span>
                  <span className="text-zinc-600 dark:text-zinc-400">cat</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    {services[activeService].command}.txt
                  </span>
                  <span className="animate-pulse">_</span>
                </div>

                <div className="pl-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-500 dark:text-zinc-600 mt-1">╭─</span>
                    <div>
                      <div className="text-zinc-600 dark:text-zinc-500 text-xs uppercase tracking-wider mb-1">
                        Service Name
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                        {services[activeService].title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-zinc-500 dark:text-zinc-600 mt-1">│</span>
                    <div className="flex-1">
                      <div className="text-zinc-600 dark:text-zinc-500 text-xs uppercase tracking-wider mb-1">
                        Description
                      </div>
                      <div className="text-zinc-800 dark:text-zinc-300 leading-relaxed">
                        {typedText}
                        {isTyping && <span className="animate-pulse">▊</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-zinc-500 dark:text-zinc-600 mt-1">╰─</span>
                    <div>
                      <div className="text-zinc-600 dark:text-zinc-500 text-xs uppercase tracking-wider mb-1">
                        Tech Stack
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 text-sm">
                        {services[activeService].tools}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}