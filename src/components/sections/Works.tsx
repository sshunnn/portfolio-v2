import Reveal from "@/components/Reveal";
import WorkRow from "@/components/WorkRow";
import { works } from "@/data/works";

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

        <ul className="border-t border-line">
          {works.map((work, i) => (
            <Reveal key={work.index} delay={0.06 * i}>
              <li>
                <WorkRow work={work} />
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mt-10 font-jp text-xs text-muted">
            新しいプロジェクトを準備中です。順次追加していきます。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
