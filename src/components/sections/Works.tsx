import Reveal from "@/components/Reveal";
import { works, type Work } from "@/data/works";

function WorkCard({ work }: { work: Work }) {
  const wip = work.status === "wip";

  const card = (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        {/* cover zooms gently on hover */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ background: work.gradient }}
          aria-hidden
        />
        <span className="absolute left-6 top-5 text-xs text-ink/50">
          {work.index}
        </span>
        {!wip && (
          <span className="absolute right-6 top-5 text-xl text-ink/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        )}
        <span
          className={`absolute bottom-5 left-6 right-6 font-serif text-3xl italic tracking-tight md:text-4xl ${
            wip ? "text-ink/40" : "text-ink/80"
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

  return work.url ? (
    <a href={work.url} target="_blank" rel="noreferrer">
      {card}
    </a>
  ) : (
    card
  );
}

export default function Works() {
  return (
    <section id="works" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="label mb-4">Works</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 font-serif text-4xl tracking-tight md:text-6xl">
            Selected <em>works</em>
          </h2>
        </Reveal>

        <ul className="grid gap-10 md:grid-cols-2 md:gap-12">
          {works.map((work, i) => (
            <Reveal key={work.index} delay={0.08 * i}>
              <li>
                <WorkCard work={work} />
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mt-12 font-jp text-xs text-muted">
            新しいプロジェクトを準備中です。順次追加していきます。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
