import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink text-bg"
    >
      <div className="aurora opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="label mb-4 !text-bg/50">Contact</p>
        </Reveal>

        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
          <Reveal delay={0.1}>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Let&rsquo;s make something{" "}
              <em className="gradient-text">good</em> together.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Magnetic className="inline-block">
              <a
                href="mailto:shun.prog@gmail.com"
                className="flex size-36 items-center justify-center rounded-full border border-bg/70 text-center font-serif text-lg italic transition-colors duration-300 hover:bg-bg hover:text-ink md:size-44 md:text-xl"
              >
                Say hello ↗
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <a
            href="mailto:shun.prog@gmail.com"
            className="mt-12 inline-block border-b border-bg/30 pb-1 text-sm text-bg/60 transition-colors hover:border-bg hover:text-bg"
          >
            shun.prog@gmail.com
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-24 flex flex-col gap-4 border-t border-bg/15 pt-8 text-xs text-bg/50 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Shun — Tokyo, Japan</p>
            <a
              href="https://github.com/sshunnn"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-bg"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
