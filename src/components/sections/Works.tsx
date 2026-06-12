import Reveal from "@/components/Reveal";
import { works } from "@/data/works";

export default function Works() {
  return (
    <section id="works" className="relative px-6 py-32 md:px-12 md:py-48">
      <Reveal>
        <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-muted">
          ( 003 ) — SELECTED WORKS
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mb-16 font-display text-4xl font-bold md:text-6xl">
          EXHIBITS<span className="text-accent">_</span>
        </h2>
      </Reveal>

      <ul className="border-t border-line">
        {works.map((work, i) => {
          const wip = work.status === "wip";
          const row = (
            <div className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-line py-10 md:grid-cols-[6rem_1fr_auto] md:py-14">
              <span className="font-mono text-xs text-accent">
                {work.index}
              </span>
              <div>
                <h3
                  className={`font-display text-3xl font-bold tracking-tight transition-transform duration-500 md:text-6xl ${
                    wip
                      ? "outline-text"
                      : "group-hover:translate-x-4 group-hover:text-accent"
                  }`}
                >
                  {work.title}
                </h3>
                {work.description && (
                  <p className="mt-3 max-w-md font-jp text-xs leading-relaxed text-muted md:text-sm">
                    {work.description}
                  </p>
                )}
              </div>
              <div className="col-start-2 mt-3 font-mono text-[11px] leading-relaxed tracking-[0.15em] text-muted md:col-start-3 md:mt-0 md:text-right">
                <p>{work.year} / {work.role}</p>
                <p className="mt-1">
                  {wip ? (
                    <span className="blink text-accent">● IN PROGRESS</span>
                  ) : (
                    work.tags.join(" · ")
                  )}
                </p>
              </div>
            </div>
          );

          return (
            <Reveal key={work.index} delay={0.08 * i}>
              <li>
                {work.url ? (
                  <a href={work.url} target="_blank" rel="noreferrer" data-cursor>
                    {row}
                  </a>
                ) : (
                  row
                )}
              </li>
            </Reveal>
          );
        })}
      </ul>

      <Reveal delay={0.2}>
        <p className="mt-10 font-mono text-[11px] tracking-[0.25em] text-muted">
          MORE EXHIBITS WILL BE INSTALLED SOON — 順次拡張予定
        </p>
      </Reveal>
    </section>
  );
}
