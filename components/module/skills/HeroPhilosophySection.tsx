"use client"
import { SectionHeader } from "@/components/page-header";
import { motion } from "framer-motion";

export const HeroPhilosophySection = () => {
    return (
        <section className="relative space-y-8">
            {/* Floating code symbols in background */}
            <div className="absolute -left-10 top-0 opacity-5 dark:opacity-10 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-9xl font-mono text-blue-500"
                >
                    {'</>'}
                </motion.div>
            </div>

            <SectionHeader
                subtitle="Philosophy"
                title="How I Build Software"
            />

            {/* Main philosophy text */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400"
            >
                I don't start with code. I start with <span className="text-gray-900 dark:text-gray-100 font-semibold">intent</span>.
                Every interface I build is shaped by <span className="text-blue-600 dark:text-blue-400 font-semibold">clarity</span>, <span className="text-blue-600 dark:text-blue-400 font-semibold">performance</span>,
                and long-term <span className="text-blue-600 dark:text-blue-400 font-semibold">maintainability</span>. I care deeply about how things
                feel, not just how they function.
            </motion.p>

            {/* Key principles cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { label: "Intent-Driven", icon: "🎯" },
                    { label: "User-Focused", icon: "👤" },
                    { label: "Future-Proof", icon: "🚀" }
                ].map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-default overflow-hidden"
                    >
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex items-center gap-3">
                            <span className="text-3xl">{item.icon}</span>
                            <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                                {item.label}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};