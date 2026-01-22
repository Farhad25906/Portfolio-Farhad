"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "@/components/page-header";

export const AboutIntro = () => (
  <FadeIn className="space-y-8">
    <SectionHeader
      subtitle="Get to Know Me"
      title="About Me"
    />

    <div className="text-lg leading-relaxed text-muted-foreground">
      <span className="text-xl font-bold text-foreground">
        Hey, I'm <span className="text-blue-500">Farhad Hossen. </span>
      </span>
      A passionate Web Developer with a solid foundation in HTML, CSS, JavaScript, React.js, and Next.js, complemented by growing expertise in Node.js, Express.js, Prisma, Mongoose, MongoDB, and PostgreSQL. I excel at creating dynamic, user-friendly websites and applications and thrive in collaborative environments with designers and senior developers. Eager to tackle new challenges and continuously learn, I am dedicated, detail-oriented, and ready to contribute to your team. Let's connect!
    </div>
  </FadeIn>
);