import { MomentsGallery } from "@/components/ui/moments-gallery";
import { HighlightsGrid } from "@/components/ui/highlights-grid";

export default function Page() {
  return (
    <main className="bg-white">
      <MomentsGallery />
      <HighlightsGrid />
    </main>
  );
}
