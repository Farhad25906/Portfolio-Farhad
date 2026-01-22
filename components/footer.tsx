"use client";

import { Github, Twitter, Linkedin, Mail, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-auto border-t border-border/10 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col items-center justify-center gap-4">

        <div className="flex gap-4">
          <Link
            href="https://github.com/Farhad25906"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.facebook.com/farhad.hossen.akieb/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/farhad-hossen-in/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:farhadhossen2590@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Farhad Hossen. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
