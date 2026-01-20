import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";
import { Award, Briefcase, GraduationCap, Code2, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <FadeIn className="flex flex-col gap-10 ">
      <PageHeader
        title="About Me"
        description=""
        className="mb-0"
      />

      {/* Introduction */}
      <div className="relative">
        {/* <div className="absolute -left-4 top-0 w-1 h-full bg-blue-500 rounded-full"></div> */}
        <div className="">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <span className="text-2xl md:text-3xl font-bold text-foreground block mb-4">
              Hey, I'm <span className="text-blue-500">Farhad Hossen</span> 👋
            </span>
            A passionate Web Developer with a solid foundation in HTML, CSS, JavaScript, React.js, and Next.js, complemented by growing expertise in Node.js, Express.js, Prisma, Mongoose, MongoDB, and PostgreSQL. I excel at creating dynamic, user-friendly websites and applications and thrive in collaborative environments with designers and senior developers. Eager to tackle new challenges and continuously learn, I am dedicated, detail-oriented, and ready to contribute to your team. Let's connect!
          </p>
        </div>
      </div>

      {/* Experience Section - Timeline Style */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <Briefcase className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-3xl font-display font-bold">Work Experience</h2>
        </div>

        <div className="relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-[2px] before:bg-blue-500/20 ml-3 space-y-10">
          <div className="pl-10 relative group">
            <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-blue-500/10 group-hover:ring-8 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            <div className="bg-card border-2 border-border hover:border-blue-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-blue-500 font-bold tracking-widest uppercase px-3 py-1 bg-blue-500/10 rounded-full">2023 - Present</span>
                <span className="text-xs text-muted-foreground">Full-time</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Frontend Developer</h3>
              <p className="text-lg text-blue-500 font-semibold mb-4">Radyan Corporation</p>
              <ul className="space-y-2.5 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">Developed responsive web applications using Next.js and Tailwind CSS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">Collaborated with the backend team for seamless API integration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">Improved site performance by 30% through optimization techniques.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Split Layout with Border Accent */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <GraduationCap className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-3xl font-display font-bold">Education</h2>
        </div>

        <div className="space-y-8">
          {/* Bachelor's Degree */}
          <div className="group relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
            <div className="pl-8 pr-6 py-6 bg-card border border-border rounded-2xl hover:border-blue-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">B.Sc. in Computer Science</h3>
                    <p className="text-blue-500 font-semibold">Port City International University</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground font-bold tracking-wider uppercase bg-blue-500/10 px-4 py-2 rounded-full w-fit">2020 - 2024</span>
              </div>
              <div className="ml-[72px] md:ml-[72px]">
                <p className="text-sm text-muted-foreground mb-3">📍 Chittagong, Bangladesh</p>
                <div className="flex items-start gap-2 bg-blue-500/5 p-4 rounded-xl border border-blue-500/10">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Graduated with honors. Focused on Software Engineering, Data Structures, and Algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="group relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/40 rounded-full"></div>
            <div className="pl-8 pr-6 py-6 bg-card border border-border rounded-2xl hover:border-blue-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Higher Secondary Certificate</h3>
                    <p className="text-muted-foreground font-semibold">Omorgoni M.E.S College</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground font-bold tracking-wider uppercase bg-muted px-4 py-2 rounded-full w-fit">2018 - 2020</span>
              </div>
              <div className="ml-[72px] md:ml-[72px]">
                <p className="text-sm text-muted-foreground mb-3">📍 Chittagong, Bangladesh</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Science Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Compact List Style */}
      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <Award className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-3xl font-display font-bold">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Certification 1 */}
          <div className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:bg-blue-500/5 hover:border-blue-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mb-1 text-base">Advanced React & Next.js</h3>
              <p className="text-sm text-blue-500 font-medium mb-1">Meta Frontend Developer</p>
              <span className="text-xs text-muted-foreground">2023</span>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:bg-blue-500/5 hover:border-blue-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mb-1 text-base">Full Stack Web Development</h3>
              <p className="text-sm text-blue-500 font-medium mb-1">Programming Hero</p>
              <span className="text-xs text-muted-foreground">2023</span>
            </div>
          </div>

          {/* Certification 3 */}
          <div className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:bg-blue-500/5 hover:border-blue-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mb-1 text-base">JavaScript Algorithms</h3>
              <p className="text-sm text-blue-500 font-medium mb-1">freeCodeCamp</p>
              <span className="text-xs text-muted-foreground">2022</span>
            </div>
          </div>

          {/* Certification 4 */}
          <div className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:bg-blue-500/5 hover:border-blue-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mb-1 text-base">Responsive Web Design</h3>
              <p className="text-sm text-blue-500 font-medium mb-1">freeCodeCamp</p>
              <span className="text-xs text-muted-foreground">2022</span>
            </div>
          </div>

          {/* Certification 5 */}
          <div className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:bg-blue-500/5 hover:border-blue-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mb-1 text-base">Node.js & Express</h3>
              <p className="text-sm text-blue-500 font-medium mb-1">Udemy</p>
              <span className="text-xs text-muted-foreground">2023</span>
            </div>
          </div>

          {/* Certification 6 */}
          <div className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:bg-blue-500/5 hover:border-blue-500 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mb-1 text-base">Database Design & SQL</h3>
              <p className="text-sm text-blue-500 font-medium mb-1">Coursera</p>
              <span className="text-xs text-muted-foreground">2023</span>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}