import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export default function Contact() {
  return (
    <section id="contact" className="relative pb-32 pt-24 md:pb-40">
      <Marquee
        text="LET'S BUILD SOMETHING NEW — 新しいものをつくろう"
        className="border-y border-line py-5 font-display text-2xl font-bold tracking-wide text-muted md:text-4xl"
      />

      <div className="px-6 pt-24 md:px-12 md:pt-32">
        <Reveal>
          <p className="mb-8 font-mono text-[11px] tracking-[0.3em] text-muted">
            ( 005 ) — CONTACT
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:shun.prog@gmail.com"
            className="group block font-display text-[7.5vw] font-bold leading-tight tracking-tight transition-colors hover:text-accent md:text-[5.5vw]"
            data-cursor
          >
            shun.prog
            <span className="text-accent transition-colors group-hover:text-ink">
              @
            </span>
            gmail.com
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 font-mono text-[11px] tracking-[0.2em] text-muted md:flex-row md:items-center md:justify-between">
            <p>© 2026 SHUN.PROG — TOKYO, JAPAN</p>
            <div className="flex gap-8">
              <a
                href="https://github.com/sshunnn"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
                data-cursor
              >
                GITHUB ↗
              </a>
            </div>
            <p>HAND-CRAFTED, NO TEMPLATE.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
