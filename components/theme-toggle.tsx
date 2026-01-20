"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const themes = [
        { name: "light", icon: Sun, label: "Light" },
        { name: "dark", icon: Moon, label: "Dark" },
        { name: "system", icon: Monitor, label: "System" },
    ];

    const currentTheme = themes.find((t) => t.name === theme) || themes[2];
    const DisplayIcon = currentTheme.icon;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="flex flex-col gap-2 bg-background/80 backdrop-blur-md border border-border p-2 rounded-2xl shadow-xl mb-2"
                    >
                        {themes.map((t) => {
                            const Icon = t.icon;
                            return (
                                <button
                                    key={t.name}
                                    onClick={() => {
                                        setTheme(t.name);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors hover:bg-primary/10 group ${theme === t.name ? "text-primary bg-primary/5" : "text-muted-foreground"
                                        }`}
                                >
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium">{t.label}</span>
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all border border-primary/20"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <DisplayIcon size={22} />
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
