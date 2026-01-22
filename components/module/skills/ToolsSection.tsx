"use client"
import { SectionHeader } from "@/components/page-header";
import { motion } from "framer-motion";

export const ToolsSection = () => {
  const tools = [
    // Frontend
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "Next.js", icon: "▲", category: "frontend" },
    { name: "TypeScript", icon: "TS", category: "frontend" },
    { name: "Tailwind", icon: "🎨", category: "frontend" },
    { name: "shadcn/ui", icon: "🎭", category: "frontend" },

    // Backend
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Express", icon: "🚂", category: "backend" },
    { name: "Prisma", icon: "🔷", category: "backend" },
    { name: "MongoDB", icon: "🍃", category: "backend" },
    { name: "PostgreSQL", icon: "🐘", category: "backend" },

    // Workflow
    { name: "Git", icon: "📦", category: "workflow" },
    { name: "GitHub", icon: "🐙", category: "workflow" },
    { name: "Figma", icon: "🎯", category: "workflow" },
    { name: "Docker", icon: "🐳", category: "workflow" },
    { name: "REST API", icon: "🔌", category: "workflow" },
  ];

  const categories = [
    { key: "frontend", label: "Frontend", color: "blue" },
    { key: "backend", label: "Backend", color: "green" },
    { key: "workflow", label: "Workflow", color: "purple" },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: "border-blue-500/20 dark:border-blue-400/20",
        glow: "group-hover:shadow-blue-500/20",
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-950/30",
      },
      green: {
        border: "border-green-500/20 dark:border-green-400/20",
        glow: "group-hover:shadow-green-500/20",
        text: "text-green-600 dark:text-green-400",
        bg: "bg-green-50 dark:bg-green-950/30",
      },
      purple: {
        border: "border-purple-500/20 dark:border-purple-400/20",
        glow: "group-hover:shadow-purple-500/20",
        text: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-950/30",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative max-w-5xl space-y-8">
      <SectionHeader
        subtitle="Stack"
        title="Tools I Trust in Production"
      />

      <div className="space-y-12">
        {categories.map((category, categoryIndex) => {
          const categoryTools = tools.filter(t => t.category === category.key);
          const colors = getColorClasses(category.color);

          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              {/* Category Label */}
              <div className="flex items-center gap-3">
                <h3 className={`text-xl font-bold ${colors.text}`}>
                  {category.label}
                </h3>
                <motion.div
                  className={`h-0.5 flex-1 ${colors.bg}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {categoryTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + index * 0.05
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    className={`group relative p-4 rounded-xl border ${colors.border} bg-white dark:bg-gray-900 hover:border-current transition-all duration-300 cursor-default ${colors.glow} hover:shadow-lg`}
                  >
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-xl ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative flex flex-col items-center gap-2 text-center">
                      {/* Logo/Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold"
                      >
                        {tool.icon}
                      </motion.div>

                      {/* Tool Name */}
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {tool.name}
                      </span>
                    </div>

                    {/* Animated corner accent */}
                    <motion.div
                      className={`absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colors.bg} rounded-tl-full`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom insight card */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800"
      >
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl"
          >
            💡
          </motion.div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Why These Tools?
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Each tool is chosen for <span className="font-semibold text-blue-600 dark:text-blue-400">composability, performance, and developer experience</span>. I believe in using battle-tested technologies that scale with your product and team.
            </p>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
};