import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Moment {
  id: string;
  title: string;
  image: string;
  views?: number;
  href?: string;
  /** Tailwind col-span / row-span classes that place this tile in the mosaic */
  span: string;
}

const defaultMoments: Moment[] = [
  {
    id: "trophy",
    title: "Hackathon Champions",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    views: 2140,
    span: "col-span-2 row-span-1",
  },
  {
    id: "refreshment-tour",
    title: "Team Workshop 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    views: 1530,
    span: "col-span-1 row-span-2",
  },
  {
    id: "award-night",
    title: "Annual Tech Award Night",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    views: 980,
    span: "col-span-1 row-span-1",
  },
  {
    id: "fruit-fest",
    title: "Product Launch Celebration",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
    views: 1872,
    span: "col-span-1 row-span-1",
  },
  {
    id: "hiking",
    title: "Strategic Planning Retreat",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    views: 1204,
    span: "col-span-1 row-span-1",
  },
  {
    id: "viewpoint",
    title: "Creative Workspace",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    views: 1455,
    span: "col-span-1 row-span-1",
  },
];

/**
 * Section 1 — photo mosaic.
 * Default state: plain images, no text.
 * Hover state: dark gradient fades in and the title + view count rise up
 * from the middle of the tile (translate-y + opacity), like a caption
 * surfacing on the photo.
 */
export function MomentsGallery({ moments = defaultMoments }: { moments?: Moment[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Moments
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Life at Soft BD</h2>
      </header>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-4">
        {moments.map((moment) => (
          <a
            key={moment.id}
            href={moment.href ?? "#"}
            className={cn(
              "group relative block min-h-[180px] overflow-hidden rounded-2xl bg-slate-200",
              moment.span
            )}
          >
            <Image
              src={moment.image}
              alt={moment.title}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* dark overlay, fades in on hover */}
            <div
              className="absolute inset-0 flex items-center justify-center
                         bg-gradient-to-t from-black/85 via-black/30 to-black/10
                         opacity-0 transition-opacity duration-500 ease-out
                         group-hover:opacity-100"
            >
              {/* caption rises from the middle on hover */}
              <div
                className="flex translate-y-5 flex-col items-center gap-2 px-4 text-center
                           opacity-0 transition-all duration-500 ease-out
                           group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="flex items-center gap-1 text-base font-semibold text-emerald-300">
                  {moment.title}
                  <ArrowUpRight className="h-4 w-4" />
                </p>
                {typeof moment.views === "number" && (
                  <p className="flex items-center gap-1 text-sm text-white/80">
                    <Eye className="h-4 w-4" />
                    {moment.views.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
