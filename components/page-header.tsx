import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
