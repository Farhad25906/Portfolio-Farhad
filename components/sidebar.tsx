"use client";

// import { MapPin, Globe, Twitter, Linkedin, Mail, Send, CalendarPlus } from "lucide-react";
import Link from "next/link";
import { Linkedin, Github, Mail, Facebook, MapPin, CalendarPlus, } from "lucide-react";
import { useEffect, useState } from "react";
import { MeetingDialog } from "./meeting-dialog";
import { motion } from "framer-motion";



export function Sidebar() {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Bangladesh timezone offset (+6 UTC)
      const bdTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
      const hours = bdTime.getHours() % 12 || 12;
      const minutes = bdTime.getMinutes().toString().padStart(2, "0");
      const ampm = bdTime.getHours() >= 12 ? "PM" : "AM";
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <aside className="w-full lg:w-[400px] lg:sticky lg:top-32 h-max mb-10 lg:mb-0 z-40 self-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full bg-card dark:bg-card-dark rounded-3xl p-8 border border-border flex flex-col items-center text-center shadow-sm relative overflow-hidden overflow-y-auto no-scrollbar"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              alt="Farhad Hossen"
              className="relative w-full aspect-square object-cover rounded-2xl mb-8 shadow-xl"
              src="https://i.ibb.co.com/rRLmLBGs/Pic2.jpg"
            />
          </div>
          <h2 className="text-3xl font-display font-bold mb-2 tracking-tight">
            Farhad Hossen
          </h2>
          <p className="text-muted-foreground font-medium mb-4">
            Web Developer
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Open to work */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border 
                      border-border bg-background text-foreground shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium">Open to work</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border 
                      border-border bg-background text-foreground shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium">{time}</span>
              <span className="text-xs">🇧🇩</span>
            </div>
          </div>
          <div className="flex gap-4 mb-8">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/farhad-hossen-in/"
              target="_blank"
              className="w-10 h-10 rounded-full border border-border
               flex items-center justify-center
               hover:bg-primary hover:text-white
               transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/Farhad25906"
              target="_blank"
              className="w-10 h-10 rounded-full border border-border
               flex items-center justify-center
               hover:bg-primary hover:text-white
               transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/farhad.hossen.akieb/"
              target="_blank"
              className="w-10 h-10 rounded-full border border-border
               flex items-center justify-center
               hover:bg-primary hover:text-white
               transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>

            {/* Email */}
            <Link
              href="mailto:farhadhossen2590@gmail.com"
              target="_blank"
              className="w-10 h-10 rounded-full border border-border
               flex items-center justify-center
               hover:bg-primary hover:text-white
               transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          <div className="w-full mt-auto flex gap-3 sm:gap-4">
            <button
              onClick={() => setIsMeetingOpen(true)}
              className="w-full min-h-[56px] px-4 sm:px-6 py-4
             bg-blue-600 text-white rounded-2xl
             font-semibold text-sm sm:text-lg
             flex items-center justify-center gap-2
             transition-all duration-300
             hover:bg-blue-700
             hover:shadow-lg hover:shadow-blue-600/40
             active:scale-95
             focus:outline-none focus:ring-2 focus:ring-blue-500/40
             group"
            >
              <span className="whitespace-nowrap">Schedule a Meeting</span>
              <CalendarPlus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
            </button>


          </div>

        </motion.div>
      </aside>
      <MeetingDialog isOpen={isMeetingOpen} onClose={() => setIsMeetingOpen(false)} />
    </>
  );
}
