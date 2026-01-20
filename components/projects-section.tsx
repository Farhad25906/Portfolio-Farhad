import { FadeIn } from "@/components/fade-in";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
      description: "A comprehensive online store with secure payment integration and admin dashboard.",
      tags: ["Next.js", "Stripe", "Prisma"],
    },
    {
      title: "Finance Dashboard",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      description: "Real-time financial analytics dashboard with interactive charts and data visualization.",
      tags: ["React", "D3.js", "Tailwind"],
    },
    {
      title: "Social Media App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
      description: "Feature-rich social networking application with real-time messaging and media sharing.",
      tags: ["React Native", "Firebase", "Redux"],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-display font-bold">Featured Projects</h2>
      </div>

      <FadeIn delay={0.4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-card dark:bg-card-dark border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-primary mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary rounded-lg text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </FadeIn>
    </div>
  );
}
