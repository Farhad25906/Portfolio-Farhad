import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { FadeIn } from "@/components/fade-in";
import { Typewriter } from "react-simple-typewriter";

export function HeroSection() {
  // Birthdate: 16 Sep 2000, 8:00 PM
  const birthDate = dayjs("2000-09-16T20:00:00");

  const [secondsLived, setSecondsLived] = useState(() =>
    dayjs().diff(birthDate, "second")
  );
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    setHighlight(true);

    const timeout = setTimeout(() => {
      setHighlight(false);
    }, 300); // pulse duration

    return () => clearTimeout(timeout);
  }, [secondsLived]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLived(dayjs().diff(birthDate, "second"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FadeIn className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-5xl font-display font-bold leading-[1.1] tracking-tight">
          <span className="text-blue-500 text-2xl block mb-2">
            Code. Create. Conquer.
          </span>
          I am Farhad{" "}
          <span className="text-blue-500 font-bold">
            <Typewriter
              words={["Hossen"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          <span
            className={`text-blue-500 font-bold transition-all duration-300
        ${highlight ? "scale-110 drop-shadow-lg" : "scale-100"}
      `}
          >
            {secondsLived.toLocaleString()}
          </span> seconds of becoming who I am today.
          A web developer driven by curiosity, creativity,
          and a deep love for meaningful digital experiences.
        </p>
      </div>

      <div className="flex flex-wrap gap-12 text-sm font-medium">
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-foreground">+3</span>
          <span className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">
            Years of<br />Experience
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-foreground">+20</span>
          <span className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">
            Projects<br />Completed
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-foreground">+10</span>
          <span className="text-xs uppercase tracking-wider mt-1 text-muted-foreground">
            Worldwide<br />Clients
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-blue-600 text-white rounded-2xl px-6 py-3 hover:bg-blue-700 font-medium transition-colors">
          Let's Talk
        </button>
        <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
          My Work <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </FadeIn>
  );
}