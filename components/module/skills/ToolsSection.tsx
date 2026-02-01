"use client"
import { SectionHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import Image from "next/image";

export const ToolsSection = () => {
  const toolCategories = [
    {
      category: "Frontend",
      tools: [
        { name: "React", logo: "/React.png" },
        { name: "Next.js", logo: "/NextJs.png" },
        { name: "TypeScript", logo: "/Typescript.png" },
        { name: "JavaScript", logo: "/JavaScript.png" },
        { name: "Tailwind CSS", logo: "/Tailwind.png" },
        { name: "shadcn/ui", logo: "/Shadecn.png" },
      ]
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", logo: "/Node.png" },
        { name: "Express", logo: "/Express.png" },
        { name: "MongoDB", logo: "/mongodb.png" },
        { name: "PostgreSQL", logo: "/Postgress.png" },
        { name: "Prisma", logo: "/Prisma.png" },
        { name: "Firebase", logo: "/Firebase.png" },
      ]
    },
    {
      category: "Tools",
      tools: [
        { name: "Git", logo: "/git.png" },
        { name: "GitHub", logo: "/Github.png" },
        { name: "Figma", logo: "/Figma.png" },
        { name: "REST APIs", logo: "/RestApis.png" },
      ]
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 ">
      <SectionHeader
        subtitle="Technology Stack"
        title="Tools & Technologies"
      />

      <div className="mt-16 space-y-16">
        {toolCategories.map((section, sectionIndex) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: sectionIndex * 0.1,
              ease: [0.21, 0.45, 0.27, 0.9]
            }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-blue-200 dark:bg-blue-900/50" />
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                {section.category}
              </h3>
              <div className="h-px flex-1 bg-blue-200 dark:bg-blue-900/50" />
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {section.tools.map((tool, toolIndex) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: toolIndex * 0.05,
                    ease: [0.21, 0.45, 0.27, 0.9]
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative h-32 p-4 rounded-xl bg-white dark:bg-gray-900 border-2 border-blue-100 dark:border-blue-900/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/10">
                    
                    {/* Logo Container */}
                    <div className="flex items-center justify-center h-16 mb-2">
                      <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          fill
                          className="object-contain filter dark:brightness-90 dark:contrast-125"
                        />
                      </div>
                    </div>

                    {/* Tool Name */}
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate">
                        {tool.name}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg" />
                  </div>

                  {/* Corner Accent - Top Right */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg" />
                  
                  {/* Corner Accent - Bottom Left */}
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Decoration - Simple circles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full opacity-50" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-blue-500 rounded-full opacity-50" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-50" />
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-blue-500 rounded-full opacity-50" />
    </section>
  );
};