import { FadeIn } from "@/components/fade-in";
import { Code2, Monitor, Database, Smartphone } from "lucide-react";

export function StatsSection() {
  const tools = [
    { icon: Code2, label: "React" },
    { icon: Monitor, label: "Next.js" },
    { icon: Database, label: "Node.js" },
    { icon: Smartphone, label: "Mobile" },
  ];

  return (
    <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-card dark:bg-card-dark border border-border p-6 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group cursor-default"
        >
          <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
            <tool.icon className="w-8 h-8" />
          </div>
          <span className="font-bold text-lg">{tool.label}</span>
        </div>
      ))}
    </FadeIn>
  );
}
