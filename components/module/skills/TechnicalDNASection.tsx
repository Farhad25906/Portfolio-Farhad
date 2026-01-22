"use client"
import { SectionHeader } from "@/components/page-header";
import { motion } from "framer-motion";

export const TechnicalDNASection = () => {
  const principles = [
    {
      text: "I value",
      highlight: "clarity",
      after: "over cleverness",
      description: "Simple, readable code beats complex optimization every time"
    },
    {
      text: "I prefer",
      highlight: "composition",
      after: "over repetition",
      description: "Reusable components that scale with your product"
    },
    {
      text: "I optimize for",
      highlight: "users first",
      after: "developers second",
      description: "Performance and UX trump developer convenience"
    },
    {
      text: "I believe good software",
      highlight: "should explain itself",
      after: "",
      description: "Code comments are apologies for unclear code"
    }
  ];

  return (
    <section className="relative max-w-4xl space-y-8">
      <SectionHeader
        subtitle="Principles"
        title="My Technical DNA"
      />

      <div className="space-y-6">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
            {/* Main principle */}
            <div className="relative pl-8 py-4">
              {/* Left accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-500 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                style={{ transformOrigin: "top" }}
              />

              {/* Dot indicator */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 dark:bg-blue-400 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              />

              {/* Text content */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {principle.text}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-bold text-blue-600 dark:text-blue-400">
                    {principle.highlight}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 -mx-1 rounded"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
                {principle.after && (
                  <span className="text-gray-600 dark:text-gray-400">
                    {" "}{principle.after}
                  </span>
                )}
              </p>

              {/* Description on hover */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 0, height: 0 }}
                className="overflow-hidden group-hover:opacity-100 transition-all duration-300"
                style={{
                  height: "auto",
                  opacity: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              >
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 italic pl-4 border-l-2 border-gray-300 dark:border-gray-700 mt-2">
                  {principle.description}
                </p>
              </motion.div>
            </div>

            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900/50 dark:to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.div>
        ))}
      </div>

      {/* DNA Helix Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative h-32 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800"
      >
        {/* DNA strands */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 128">
          <motion.path
            d="M 0 64 Q 100 20, 200 64 T 400 64 T 600 64 T 800 64"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.path
            d="M 0 64 Q 100 108, 200 64 T 400 64 T 600 64 T 800 64"
            stroke="rgb(168, 85, 247)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.2 }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-sm md:text-base font-mono text-blue-600 dark:text-blue-400 font-semibold"
          >
            Principles that compound over time
          </motion.p>
        </div>
      </motion.div>

      {/* Final statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 text-lg italic">
          "These aren't just beliefs — they're the scaffolding of every line I write."
        </p>
      </motion.div>
    </section>
  );
};