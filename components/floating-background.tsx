"use client";

import { motion } from "framer-motion";
import {
    Code,
    Cpu,
    Database,
    Terminal,
    Globe,
    Bug,
    Settings,
    Command,
    Layers,
    GitBranch,
    HardDrive,
    Server
} from "lucide-react";
import { useEffect, useState } from "react";

const icons = [
    Code, Cpu, Database, Terminal, Globe, Bug, Settings, Command, Layers, GitBranch, HardDrive, Server
];

export function FloatingBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-20 dark:opacity-10">
            {Array.from({ length: 20 }).map((_, i) => {
                const Icon = icons[Math.floor(Math.random() * icons.length)];
                const size = Math.floor(Math.random() * 20) + 15;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const duration = Math.random() * 20 + 20;
                const delay = Math.random() * -20;

                return (
                    <motion.div
                        key={i}
                        className="absolute text-foreground"
                        initial={{
                            x: `${left}vw`,
                            y: `${top}vh`,
                            rotate: 0,
                            opacity: 0
                        }}
                        animate={{
                            x: [
                                `${left}vw`,
                                `${(left + (Math.random() * 10 - 5)) % 100}vw`,
                                `${left}vw`
                            ],
                            y: [
                                `${top}vh`,
                                `${(top + (Math.random() * 10 - 5)) % 100}vh`,
                                `${top}vh`
                            ],
                            rotate: [0, 180, 360],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: delay,
                            ease: "linear"
                        }}
                    >
                        <Icon size={size} strokeWidth={1} />
                    </motion.div>
                );
            })}
        </div>
    );
}
