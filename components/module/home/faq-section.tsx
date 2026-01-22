import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "../../page-header";

export function ConversationThreads() {
    const [activeThread, setActiveThread] = useState<number | null>(null);

    const threads = [
        {
            question: "What's your approach to building products?",
            answer: "I believe in starting with the problem, not the solution. Every line of code should serve a purpose—whether that's improving user experience, solving a real pain point, or creating delight. I prototype fast, iterate faster, and always keep accessibility and performance as non-negotiables.",
        },
        {
            question: "How do you stay current with tech?",
            answer: "I learn by building. Reading docs is one thing, but shipping projects with new tech teaches you the edge cases. I follow release notes, contribute to open source when I can, and most importantly, I'm not afraid to rebuild something just to understand it better.",
        },
        {
            question: "What makes you different?",
            answer: "I don't just implement designs—I think like a designer. I don't just write code—I architect experiences. The intersection of technical depth and creative vision is where I thrive. I care about the craft, the details, the feeling of the interface.",
        },
        {
            question: "Can you work with existing teams?",
            answer: "Absolutely. I've collaborated with designers, product managers, and engineers across time zones. I communicate clearly, document thoroughly, and believe the best solutions come from diverse perspectives. I adapt to team workflows while bringing fresh ideas.",
        },
        {
            question: "What's your ideal project?",
            answer: "Something that challenges me technically while mattering to real people. Whether it's a startup MVP, a design system, or an experimental interface—I want to work on things that push boundaries and solve meaningful problems.",
        }
    ];

    return (
        <div className="space-y-8">
            <SectionHeader
                subtitle="Common Curiosities"
                title="Things People Usually Ask"
            />
            <FadeIn>
                <div className="space-y-4">
                    {threads.map((thread, index) => {
                        const isEven = index % 2 === 0;
                        const isActive = activeThread === index;

                        return (
                            <div
                                key={index}
                                className={`
                                    flex ${isEven ? 'justify-start' : 'justify-end'}
                                    transition-all duration-300
                                `}
                            >
                                <button
                                    onClick={() => setActiveThread(isActive ? null : index)}
                                    className={`
                                        text-left p-6 rounded-2xl border-2 transition-all duration-300
                                        w-full md:w-3/4 lg:w-2/3
                                        ${isActive
                                            ? 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-600/20 scale-[1.02] z-10 relative'
                                            : 'bg-card dark:bg-card border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-lg z-0'
                                        }
                                        ${activeThread !== null && !isActive ? 'opacity-40 scale-95' : 'opacity-100'}
                                    `}
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className={`text-2xl flex-shrink-0 ${isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                                            {isActive ? '◆' : '◇'}
                                        </span>
                                        <h3 className={`text-lg font-bold leading-tight ${isActive ? 'text-white' : 'text-foreground'}`}>
                                            {thread.question}
                                        </h3>
                                    </div>

                                    <div className={`
                                        overflow-hidden transition-all duration-500
                                        ${isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                                    `}>
                                        <p className={`text-sm leading-relaxed ${isActive ? 'text-white/90' : 'text-muted-foreground'}`}>
                                            {thread.answer}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </FadeIn>
        </div>
    );
}