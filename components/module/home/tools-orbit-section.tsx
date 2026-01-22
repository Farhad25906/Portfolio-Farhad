import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/fade-in";

export function ToolOrbitSystem() {
    const topRowRef = useRef<HTMLDivElement>(null);
    const bottomRowRef = useRef<HTMLDivElement>(null);

    const topTools = [
        "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui",
        "Vercel", "VS Code", "Postman", "Figma", "Git",
        "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui",
        "Vercel", "VS Code", "Postman", "Figma", "Git"
    ];

    const bottomTools = [
        "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma",
        "Docker", "AWS", "Stripe", "Firebase", "Redux",
        "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma",
        "Docker", "AWS", "Stripe", "Firebase", "Redux"
    ];

    useEffect(() => {
        const topRow = topRowRef.current;
        const bottomRow = bottomRowRef.current;

        if (!topRow || !bottomRow) return;

        let topPosition = 0;
        let bottomPosition = 0;
        const speed = 0.5;

        const animate = () => {
            topPosition -= speed;
            bottomPosition += speed;

            const topWidth = topRow.scrollWidth / 2;
            const bottomWidth = bottomRow.scrollWidth / 2;

            if (Math.abs(topPosition) >= topWidth) {
                topPosition = 0;
            }
            if (bottomPosition >= bottomWidth) {
                bottomPosition = 0;
            }

            topRow.style.transform = `translateX(${topPosition}px)`;
            bottomRow.style.transform = `translateX(${-bottomPosition}px)`;

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <FadeIn className="w-full overflow-hidden  relative">
            {/* Infinite Orbit Streams */}
            <div className="relative ">
                {/* Top Row - Moving Left */}
                <div className="overflow-hidden py-3 border-y border-border/30">
                    <div
                        ref={topRowRef}
                        className="flex gap-6 whitespace-nowrap will-change-transform"
                    >
                        {topTools.map((tool, i) => (
                            <span
                                key={i}
                                className="text-xl lg:text-2xl font-display font-semibold text-foreground/30 dark:text-foreground/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 select-none"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-center justify-center py-4">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-center">
                        Experienced With All These<br />
                        <span className="text-blue-600 dark:text-blue-400">Tools and Technologies</span>
                    </h2>
                    <p className="text-muted-foreground text-base mt-2 italic">(and many more)</p>
                </div>

                {/* Bottom Row - Moving Right */}
                <div className="overflow-hidden py-3 border-b border-border/30">
                    <div
                        ref={bottomRowRef}
                        className="flex gap-6 whitespace-nowrap will-change-transform"
                    >
                        {bottomTools.map((tool, i) => (
                            <span
                                key={i}
                                className="text-xl lg:text-2xl font-display font-semibold text-foreground/30 dark:text-foreground/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 select-none"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}