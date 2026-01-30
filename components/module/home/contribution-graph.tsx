"use client";

import { GitHubCalendar, type Activity } from "react-github-calendar";
import { useTheme } from "next-themes";
import { GitBranch, Star } from "lucide-react";
import { SectionHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";
import { useState } from "react";

export const ContributionGraph = () => {
    const { theme } = useTheme();
    const [streakData, setStreakData] = useState({
        currentStreak: 0,
        longestStreak: 0,
        totalContributions: 0,
    });

    // Custom color scheme using #155dfc
    const customTheme = {
        light: [
            '#e8f0ff', // very light blue for empty cells
            '#a3c7ff', // light blue for level 1
            '#6ba3ff', // medium blue for level 2
            '#3380ff', // bright blue for level 3
            '#155dfc', // primary color for level 4
        ],
        dark: [
            '#0a2550', // very dark blue for empty cells
            '#0d3570', // dark blue for level 1
            '#114590', // medium dark blue for level 2
            '#155dfc', // primary color for level 3
            '#3380ff', // bright blue for level 4
        ],
    };

    const calculateStreaks = (contributions: Activity[]) => {
        if (!contributions || contributions.length === 0) return;

        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;
        let totalContributions = 0;

        // Sort by date (most recent first)
        const sortedContributions = [...contributions].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Calculate current streak
        let checkDate = new Date();
        checkDate.setHours(0, 0, 0, 0);

        for (const contribution of sortedContributions) {
            const contributionDate = new Date(contribution.date);
            contributionDate.setHours(0, 0, 0, 0);

            if (contributionDate.getTime() === checkDate.getTime()) {
                if (contribution.count > 0) {
                    currentStreak++;
                    checkDate.setDate(checkDate.getDate() - 1);
                } else {
                    if (currentStreak === 0) {
                        checkDate.setDate(checkDate.getDate() - 1);
                    } else {
                        break;
                    }
                }
            }
        }

        // Calculate longest streak and total (sorted by date ascending)
        const ascendingContributions = [...contributions].sort((a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        for (const contribution of ascendingContributions) {
            totalContributions += contribution.count;

            if (contribution.count > 0) {
                tempStreak++;
                longestStreak = Math.max(longestStreak, tempStreak);
            } else {
                tempStreak = 0;
            }
        }

        setStreakData((prev) => {
            if (
                prev.currentStreak === currentStreak &&
                prev.longestStreak === longestStreak &&
                prev.totalContributions === totalContributions
            ) {
                return prev;
            }
            return { currentStreak, longestStreak, totalContributions };
        });
    };

    return (
        <FadeIn className="space-y-8">
            <SectionHeader
                subtitle="Snapshot of Activity"
                title="Contribution Graph"
            />

            <div className="relative bg-white dark:bg-zinc-900 rounded-3xl border-2 border-[#155dfc]/20 dark:border-[#155dfc]/30 p-8 shadow-2xl overflow-hidden">
                {/* Circuit Pattern Background */}
                {/* <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="circuit-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M0 30 L15 30 M45 30 L60 30 M30 0 L30 15 M30 45 L30 60" stroke="#155dfc" strokeWidth="1" fill="none" />
                                <circle cx="30" cy="30" r="3" fill="#155dfc" />
                                <circle cx="15" cy="30" r="2" fill="#155dfc" />
                                <circle cx="45" cy="30" r="2" fill="#155dfc" />
                                <circle cx="30" cy="15" r="2" fill="#155dfc" />
                                <circle cx="30" cy="45" r="2" fill="#155dfc" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                    </svg>
                </div> */}

                {/* Floating Particles */}
                {/* <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-[#155dfc] rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute top-20 right-20 w-2 h-2 bg-[#155dfc] rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                    <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-[#155dfc] rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-[#155dfc] rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
                </div> */}

                {/* GitHub Calendar Container */}
                <div className="relative z-10">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#155dfc] rounded-tl-lg z-10"></div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#155dfc] rounded-tr-lg z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#155dfc] rounded-bl-lg z-10"></div>
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#155dfc] rounded-br-lg z-10"></div>


                        <div className="min-w-[600px]">
                            <GitHubCalendar
                                username="Farhad25906"
                                blockSize={14}
                                blockMargin={5}
                                fontSize={14}
                                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                                theme={customTheme}
                                style={{
                                    color: theme === 'dark' ? '#a1a1aa' : '#71717a',
                                }}
                                transformData={(contributions) => {
                                    calculateStreaks(contributions);
                                    return contributions;
                                }}
                            />
                        </div>
                    </div>


                </div>
            </div>

            <FadeIn delay={0.4}>
                <div className="mt-8 border-t-4 border-b-4 border-blue-600 dark:border-blue-500 py-6 flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white leading-none font-mono">
                                {streakData.currentStreak}
                            </h3>
                        </div>
                        <div>
                            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 tracking-widest">Current Streak</p>
                            <p className="text-lg font-bold text-zinc-900 dark:text-white">
                                CONSECUTIVE DAYS
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                            <p className="text-3xl font-bold text-white font-mono">
                                {streakData.longestStreak}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 tracking-widest">Longest Streak</p>
                            <p className="text-lg font-bold text-zinc-900 dark:text-white">
                                PERSONAL BEST
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                            <p className="text-3xl font-bold text-white font-mono">
                                {streakData.totalContributions}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 tracking-widest">Total Contributions</p>
                            <p className="text-lg font-bold text-zinc-900 dark:text-white">
                                THIS YEAR
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </FadeIn>
    );
};
