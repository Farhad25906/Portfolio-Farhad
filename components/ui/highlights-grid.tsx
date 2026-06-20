
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import Image from "next/image";

export interface HighlightCard {
  id: string;
  /** "blog" renders the CTA tile. "feature" has no default caption — the
   *  panel only appears on hover. "story" shows a slim gradient caption by
   *  default and swaps to the full white panel on hover. */
  type: "blog" | "feature" | "story";
  image?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: string;
  href?: string;
}

const defaultHighlights: HighlightCard[] = [
  { id: "blog", type: "blog", title: "Read our blog" },
  {
    id: "land-meeting",
    type: "feature",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    eyebrow: "By Admin • 9 Apr, 2025",
    title: "Cashless Land Management",
    description:
      "The Cashless Land Management System (DLRMS) digitizes land record requests, payments, and approvals end to end.",
    href: "#",
  },
  {
    id: "ict-handover",
    type: "feature",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    eyebrow: "By Admin • 12 Jan, 2022",
    title: "ICT Equipment Handover",
    href: "#",
  },
  {
    id: "rangeet",
    type: "story",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    eyebrow: "By Admin • 18 Aug, 2021",
    title: "Project Rangeet",
    description:
      "Educating the next generation through a multi-language digital learning platform.",
    href: "#",
  },
  {
    id: "shaqo-abuur",
    type: "story",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop",
    eyebrow: "By Admin • 3 Nov, 2021",
    title: "Shaqo Abuur",
    description:
      "A skills platform for evidence-based policy planning and youth employment.",
    href: "#",
  },
  {
    id: "ict-award",
    type: "story",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    eyebrow: "National ICT Awards 2018",
    title: "International Champion",
    badge: "Champion",
    href: "#",
  },
];

function BlogPromoCard() {
  return (
    <a
      href="/blog"
      className="group flex aspect-[4/3] flex-col justify-between rounded-2xl border border-slate-200
                 bg-slate-50 p-6 transition-colors hover:border-emerald-200 hover:bg-emerald-50/60"
    >
      <div>
        <Badge
          variant="outline"
          className="border-none bg-transparent p-0 text-xs font-semibold uppercase tracking-wider text-emerald-600"
        >
          Blog
        </Badge>
        <h3 className="mt-3 text-2xl font-bold text-slate-900">Read our blog</h3>
      </div>
      <span
        className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-600 px-4 py-2
                   text-sm font-semibold text-white transition-colors group-hover:bg-emerald-700"
      >
        Read more
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function HighlightTile({ card }: { card: HighlightCard }) {
  const hasDescription = Boolean(card.description);

  return (
    <a
      href={card.href ?? "#"}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200"
    >
      <Image
        src={card.image as string}
        alt={card.title}
        fill
        sizes="(min-width: 1024px) 33vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {card.badge && (
        <Badge className="absolute left-3 top-3 bg-amber-500 text-white hover:bg-amber-500">
          {card.badge}
        </Badge>
      )}

      {/* default slim caption — only for "story" cards, fades out on hover */}
      {card.type === "story" && (
        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                     p-5 transition-opacity duration-300 ease-out group-hover:opacity-0"
        >
          <p className="text-lg font-semibold text-white">{card.title}</p>
        </div>
      )}

      {/* white panel — hidden by default, slides up and grows to fit
          its content (taller when a description is present) on hover */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 translate-y-3 rounded-t-xl bg-white p-5 opacity-0",
          "shadow-[0_-12px_24px_rgba(15,23,42,0.10)] transition-all duration-400 ease-out",
          "group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {card.eyebrow && (
          <p className="text-xs font-medium text-slate-400">{card.eyebrow}</p>
        )}
        <div className="mt-1 flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300
                       group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        {hasDescription && (
          <p className="mt-2 line-clamp-2 text-sm text-slate-500">{card.description}</p>
        )}
      </div>
    </a>
  );
}

/**
 * Section 2 — bento grid of project / blog cards.
 * Hover swaps the dark caption (or nothing, for plain photo cards) for a
 * white info panel that grows taller when there's a description to show.
 */
export function HighlightsGrid({ items = defaultHighlights }: { items?: HighlightCard[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Highlights
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Work &amp; Recognition</h2>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {items.map((item) =>
          item.type === "blog" ? (
            <BlogPromoCard key={item.id} />
          ) : (
            <HighlightTile key={item.id} card={item} />
          )
        )}
      </div>
    </section>
  );
}
