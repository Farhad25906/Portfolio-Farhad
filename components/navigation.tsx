"use client";

import { Home, Folder, Wrench, Briefcase, Mail, User, GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: User, href: "/about", label: "About" },
    { icon: Folder, href: "/projects", label: "Projects" },
    { icon: Wrench, href: "/skills", label: "Skills" },
    { icon: Mail, href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="flex items-center gap-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-border shadow-2xl overflow-x-auto max-w-[calc(100vw-2rem)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl transition-all",
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
