import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/data/works";

export default function WorkCard({ work }: { work: Work }) {
  const wip = work.status === "wip";

  const card = (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ background: work.gradient }}
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />
        <span className="absolute left-6 top-5 text-xs text-white/70">
          {work.index}
        </span>
        {!wip && (
          <span className="absolute right-6 top-5 text-xl text-white/70 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        )}
        <span
          className={`absolute bottom-5 left-6 right-6 font-serif text-3xl italic tracking-tight md:text-4xl ${
            wip ? "text-white/40" : "text-white/90"
          }`}
        >
          {wip ? "Coming soon" : work.title}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl tracking-tight md:text-2xl">
            {work.title}
          </h3>
          {work.description && (
            <p className="mt-1 max-w-sm font-jp text-sm leading-relaxed text-muted">
              {work.description}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right text-xs leading-relaxed text-muted">
          <p>{work.year}</p>
          <p className="mt-1">{wip ? work.role : work.tags.join(" / ")}</p>
        </div>
      </div>
    </div>
  );

  if (work.slug) return <Link href={`/works/${work.slug}`}>{card}</Link>;
  if (work.url) return <a href={work.url} target="_blank" rel="noreferrer">{card}</a>;
  return card;
}
