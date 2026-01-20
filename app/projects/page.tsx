import { ProjectsSection } from "@/components/projects-section";
import { PageHeader } from "@/components/page-header";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader 
        title="All Projects"
        description="A deep dive into my portfolio of work, ranging from web design to full-stack applications."
      />
      <ProjectsSection />
    </div>
  );
}
