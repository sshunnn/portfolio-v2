import Link from "next/link";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export default function Works() {
  return (
    <section id="works" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="label mb-4">Projects</p>
        </Reveal>

        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl tracking-tight md:text-6xl">
                趣味で作った<em>もの</em>
              </h2>
              <p className="mt-8 font-jp text-sm leading-loose text-muted md:text-base">
                業務の成果物はNDAにより非公開のため、暇なときに趣味で作ったものを置いています。
                完成度は低く、実用性も微妙なものが多いですが、気になる方はどうぞ。
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Magnetic className="inline-block shrink-0">
              <Link
                href="/projects"
                className="flex size-36 items-center justify-center rounded-full border border-ink/30 text-center font-serif text-base italic transition-colors duration-300 hover:bg-ink hover:text-bg md:size-44 md:text-lg"
              >
                View all ↗
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
