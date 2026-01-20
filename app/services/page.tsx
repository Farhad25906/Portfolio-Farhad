import { PageHeader } from "@/components/page-header";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader 
        title="Services"
        description="I offer a wide range of digital services to help businesses grow and succeed online."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-card border border-border rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            <p className="text-muted-foreground">Building fast, responsive, and accessible websites using modern technologies.</p>
        </div>
        <div className="p-8 bg-card border border-border rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-muted-foreground">Creating intuitive and engaging user experiences that delight users.</p>
        </div>
      </div>
    </div>
  );
}
