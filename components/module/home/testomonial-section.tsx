import { useEffect, useState, useRef } from "react";
import { FadeIn } from "@/components/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../../page-header";

export function FloatingVoices() {
    const [activeVoice, setActiveVoice] = useState<number>(0);
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const voices = [
        {
            text: "Collaborating with Farhad was smooth and his technical guidance improved the outcome.",
            author: "Taspia Alam",
            role: "Intern Developer",
            company: "Appteum IT Solution",
            emoji: "✨",
            avatar: "https://i.ibb.co.com/8yFmPxb/Taspia-Developer.jpg"
        },
        {
            text: "Farhad thinks like a designer and builds like a developer—his feedback elevated my portfolio.",
            author: "Farid Uddin",
            role: "Visualizer",
            company: "NexAura",
            emoji: "🎨",
            avatar: "https://i.ibb.co.com/Q35MngKP/Farid-Designer.jpg"
        },
        {
            text: "Ship fast, iterate faster. That's Farhad's superpower.",
            author: "Sayedul Islam Sayed",
            role: "CTO",
            company: "Shirt-Bari",
            emoji: "🚀",
            avatar: "https://i.ibb.co.com/PsbzHzSV/Sayed-Ceo.jpg"
        },
        {
            text: "Farhad is a great collaborator smart, reliable, and always helpful..",
            author: "Nafisa Lubaba",
            role: "Frontend Developer",
            company: "Xentrobd",
            emoji: "⚡",
            avatar: "https://i.ibb.co.com/YBL93PLm/Nafisa-Developer.jpg"
        },
        {
            text: "Comes with ideas. Asks the right questions. Executes flawlessly.",
            author: "Abir Jawad",
            role: "Founder",
            company: "Abir Enterprise",
            emoji: "💡",
            avatar: "https://i.ibb.co.com/Q3t37w6D/Jawad-CEO.jpg"
        },
        {
            text: "Farhad is a reliable team member whose skills and dedication elevate every project.",
            author: "Riazul Islam",
            role: "Team Leader",
            company: "Radyan Corporation",
            emoji: "📈",
            avatar: "https://i.ibb.co.com/W4zg1kGt/Riazul-Team-Leader.jpg"
        },
    ];

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setActiveVoice((prev) => (prev + 1) % voices.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovering]);

    return (
        <div className="space-y-8">
            <SectionHeader
                subtitle="About Me"
                title="What Colleagues Say"
            />
            <FadeIn>
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    ref={containerRef}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {voices.map((voice, index) => {
                            const isActive = activeVoice === index;

                            return (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.6,
                                        y: 0,
                                        scale: isActive ? 1.02 : 1
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className={`relative cursor-pointer group ${index % 3 === 1 ? "lg:translate-y-6" : ""
                                        }`}
                                    onClick={() => setActiveVoice(index)}
                                >
                                    <div className={`
                                        relative p-6 rounded-2xl backdrop-blur-sm border
                                        transition-all duration-500
                                        ${isActive
                                            ? "bg-white/80 dark:bg-gray-900/80 border-blue-300 dark:border-blue-700 shadow-xl"
                                            : "bg-white/50 dark:bg-gray-900/50 border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-600"
                                        }
                                    `}>
                                        <div className={`
                                            absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                            transition-all duration-500 border
                                            ${isActive
                                                ? "bg-blue-600 dark:bg-blue-500 border-blue-600 dark:border-blue-500 text-white"
                                                : "bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-800"
                                            }
                                        `}>
                                            {voice.emoji}
                                        </div>

                                        <div className="relative z-10">
                                            <p className={`
                                                text-base leading-relaxed mb-4
                                                transition-colors duration-500
                                                ${isActive
                                                    ? "text-gray-800 dark:text-gray-100"
                                                    : "text-gray-600 dark:text-gray-400"
                                                }
                                            `}>
                                                {voice.text}
                                            </p>

                                            {/* Vertical Single Column Layout */}
                                            <div className="pt-4 border-t border-blue-100 dark:border-blue-800/50">
                                                <div className="flex items-center gap-4">
                                                    {/* Avatar */}
                                                    <div
                                                        className={`
                                                            w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0
                                                            transition-all duration-500
                                                            ${isActive
                                                                ? "border-blue-600 dark:border-blue-400"
                                                                : "border-blue-200 dark:border-blue-800"
                                                            }
                                                        `}
                                                    >
                                                        <img
                                                            src={voice.avatar}
                                                            alt={voice.author}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    {/* Text Content */}
                                                    <div className="flex flex-col">
                                                        <h4
                                                            className={`
                                                                font-bold text-sm transition-colors duration-500
                                                                ${isActive
                                                                    ? "text-gray-900 dark:text-white"
                                                                    : "text-gray-700 dark:text-gray-300"
                                                                }
                                                            `}
                                                        >
                                                            {voice.author}
                                                        </h4>

                                                        <p
                                                            className={`
                                                                text-sm font-medium transition-colors duration-500
                                                                ${isActive
                                                                    ? "text-blue-600 dark:text-blue-400"
                                                                    : "text-blue-600/70 dark:text-blue-400/70"
                                                                }
                                                            `}
                                                        >
                                                            {voice.role}
                                                        </p>

                                                        <p
                                                            className={`
                                                                text-xs transition-colors duration-500
                                                                ${isActive
                                                                    ? "text-gray-600 dark:text-gray-300"
                                                                    : "text-gray-500 dark:text-gray-400"
                                                                }
                                                            `}
                                                        >
                                                            {voice.company}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}