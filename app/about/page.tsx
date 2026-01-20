import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <FadeIn className="flex flex-col gap-16">
      <PageHeader 
        title="About Me"
        description="I'm Farhad Hossen, a passionate Frontend Developer based in Bangladesh. I specialize in building accessible, pixel-perfect, and performant web applications. With a strong foundation in modern JavaScript frameworks, I strive to create digital experiences that not only look great but also solve real-world problems."
        className="mb-0"
      />

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          Work Experience
        </h2>
        <div className="relative border-l-2 border-primary/20 ml-3 space-y-12 pb-2">
            <div className="pl-8 relative">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
              <span className="text-sm text-primary font-bold tracking-wider uppercase mb-1 block">2023 - Present</span>
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
              <p className="text-lg text-muted-foreground font-medium mb-4">Tech Solutions BD</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Developed responsive web applications using Next.js and Tailwind CSS.</li>
                <li>Collaborated with the backend team for API integration.</li>
                <li>Improved site performance by 30% through optimization techniques.</li>
              </ul>
            </div>

            <div className="pl-8 relative">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary/40 ring-4 ring-background"></div>
               <span className="text-sm text-muted-foreground font-bold tracking-wider uppercase mb-2 block">2021 - 2023</span>
              <h3 className="text-2xl font-bold">Junior Web Developer</h3>
               <p className="text-lg text-muted-foreground font-medium mb-4">Creative Agency LTD</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li>Built landing pages and corporate websites for international clients.</li>
                <li>Maintained legacy projects built with React and Redux.</li>
                <li>Participated in code reviews and agile sprints.</li>
              </ul>
            </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors">
                 <span className="text-sm text-primary font-bold tracking-wider uppercase mb-2 block">2020 - 2024</span>
                 <h3 className="text-xl font-bold mb-2">B.Sc. in Computer Science</h3>
                 <p className="text-muted-foreground mb-4">University of Dhaka, Bangladesh</p>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                    Graduated with honors. Focused on Software Engineering, Data Structures, and Algorithms.
                 </p>
            </div>
             <div className="bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors">
                 <span className="text-sm text-muted-foreground font-bold tracking-wider uppercase mb-2 block">2018 - 2020</span>
                 <h3 className="text-xl font-bold mb-2">Higher Secondary Certificate</h3>
                 <p className="text-muted-foreground mb-4">Dhaka College, Bangladesh</p>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                    Science Group. Achieved GPA 5.00.
                 </p>
            </div>
        </div>
      </section>
    </FadeIn>
  );
}
