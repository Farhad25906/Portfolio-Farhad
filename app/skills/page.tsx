import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";

export default function SkillsPage() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    Backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "MongoDB"],
    Tools: ["Git", "Docker", "Figma", "VS Code", "Vercel", "Jest"],
  };

  return (
    <FadeIn className="flex flex-col gap-10">
      <PageHeader 
        title="My Skills"
        description="The technologies and tools I work with to bring ideas to life."
        className="mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-card border border-border rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-foreground rounded-xl font-medium text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
