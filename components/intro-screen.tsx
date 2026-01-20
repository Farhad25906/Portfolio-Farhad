"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide intro after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-[#000000] flex items-center justify-center p-4"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Logo Image */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/logo-fh.png"
              alt="FH Logo"
              className="w-full h-full object-contain relative z-10"
            />

            {/* Scanning Line */}
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-[2px] bg-cyan-500 shadow-[0_0_20px_2px_rgba(6,182,212,0.8)] z-20"
            />

            {/* Overlay for scanning effect (optional glint) */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none z-10"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)", "inset(100% 0 0% 0)"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
