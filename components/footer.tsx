"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-auto border-t border-border/10 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Farhad Hossen. All rights reserved.
        </p>
        
        <div className="flex gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
