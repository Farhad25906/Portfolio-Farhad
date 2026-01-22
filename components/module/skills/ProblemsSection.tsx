"use client"
import { SectionHeader } from "@/components/page-header";
import { motion } from "framer-motion";

export const ProblemsSection = () => {
  const problems = [
    {
      text: "Turning complex requirements into clean, scalable UI architectures",
      icon: "🗂️",
    },
    {
      text: "Fixing performance bottlenecks in React applications",
      icon: "⚡",
    },
    {
      text: "Designing systems that remain readable six months later",
      icon: "📖",
    },
    {
      text: "Bridging the gap between design intent and technical reality",
      icon: "🌉",
    }
  ];

  return (
    <section className="relative max-w-5xl space-y-8">
      <SectionHeader
        subtitle="Expertise"
        title="Problems I Solve as a Developer"
      />

      <ul className="space-y-6">
        {problems.map((problem, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex items-start gap-6 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300 cursor-default"
          >
            {/* Icon with animated background */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              {/* Glow effect - blue only */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-blue-500 dark:bg-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
              />

              {/* Icon container */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-2xl border border-gray-300 dark:border-gray-600 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300">
                {problem.icon}
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex-1 pt-2">
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
              >
                {problem.text}
              </motion.p>

              {/* Animated underline - blue only */}
              <motion.div
                className="h-0.5 bg-blue-500 dark:bg-blue-400 mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
            </div>

            {/* Number badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300"
            >
              {index + 1}
            </motion.div>
          </motion.li>
        ))}
      </ul>


    </section>
  );
};