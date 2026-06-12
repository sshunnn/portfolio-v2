import Reveal from "@/components/Reveal";
import { posts } from "@/data/posts";

export default function Journal() {
  return (
    <section id="journal" className="relative px-6 py-32 md:px-12 md:py-48">
      <Reveal>
        <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-muted">
          ( 004 ) — JOURNAL
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mb-16 font-display text-4xl font-bold md:text-6xl">
          FIELD NOTES<span className="text-accent">_</span>
        </h2>
      </Reveal>

      {posts.length === 0 ? (
        <Reveal delay={0.15}>
          <div className="border-y border-line py-16 text-center">
            <p className="font-display text-2xl font-bold text-muted md:text-4xl">
              TRANSMISSION PENDING
            </p>
            <p className="mt-4 font-jp text-xs leading-relaxed text-muted md:text-sm">
              最初の記録を準備中。技術メモ・制作の裏側・実験の記録をここに残していきます。
            </p>
            <p className="blink mt-6 font-mono text-[11px] tracking-[0.3em] text-accent">
              ● SIGNAL EXPECTED 2026
            </p>
          </div>
        </Reveal>
      ) : (
        <ul className="border-t border-line">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 * i}>
              <li className="group grid grid-cols-1 items-baseline gap-2 border-b border-line py-8 md:grid-cols-[10rem_1fr]">
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  {post.date}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold transition-transform duration-500 group-hover:translate-x-3 md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-jp text-xs text-muted md:text-sm">
                    {post.summary}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      )}
    </section>
  );
}
