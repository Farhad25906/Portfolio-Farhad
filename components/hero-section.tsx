import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Typewriter } from "react-simple-typewriter";

export function HeroSection() {
  return (
    <FadeIn className="flex flex-col gap-6">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
          <span className="text-blue-500 text-2xl lg:text-3xl block mb-2">
            Code. Create. Conquer.
          </span>
          In my world of{" "}
          <span className="text-blue-500 font-bold">
            <Typewriter
              words={["React JS", "MERN Stack", "Next JS", "Node JS", "Express JS", "SQL", "NoSQL"]}
              loop={0} // infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          I am ready for helping design and develop your business and personal website with your demand by HTML, CSS, Bootstrap, Tailwind, JavaScript, React,NextJs, Node, Express.Js, Firebase, MongoDB, PostgreSQL, Prisma, Mongoose.
        </p>
      </div>

      <div className="flex flex-wrap gap-12 mt-8 text-sm font-medium">
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-foreground">+12</span>
          <span className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">Years of<br />Experience</span>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-foreground">+46</span>
          <span className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">Projects<br />Completed</span>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-foreground">+20</span>
          <span className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">Worldwide<br />Clients</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4">
        <button className="   bg-blue-600 text-white rounded-2xl
               font-semibol px-6 py-3  hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
          Let's Talk
        </button>
        <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
          My Work <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </FadeIn>
  );
}