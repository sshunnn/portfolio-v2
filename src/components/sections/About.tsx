import Reveal from "@/components/Reveal";

const FIELDS = [
  {
    no: "A",
    en: "WEB ENGINEERING",
    jp: "プロダクションレベルのフロントエンド/バックエンド開発",
  },
  {
    no: "B",
    en: "INTERACTIVE 3D",
    jp: "WebGL・シェーダーによる体験のデザインと実装",
  },
  {
    no: "C",
    en: "PRODUCT DESIGN",
    jp: "触って気持ちいいUI/UXの設計と検証",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-12 md:py-48">
      <Reveal>
        <p className="mb-12 font-mono text-[11px] tracking-[0.3em] text-muted">
          ( 002 ) — ABOUT
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-snug md:text-5xl">
          手を動かして、
          <span className="text-accent">未来</span>
          を確かめる。
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-8 max-w-xl font-jp text-sm leading-loose text-muted md:text-base">
          東京を拠点に活動するソフトウェアエンジニア。
          ウェブの標準技術からリアルタイムグラフィックスまでを横断し、
          「画面の向こうに質量を感じる」体験をつくることに興味があります。
          このサイトは実験場であり、展示室であり、記録装置です。
        </p>
      </Reveal>

      <div className="mt-20 border-t border-line">
        {FIELDS.map((f, i) => (
          <Reveal key={f.no} delay={0.1 * i}>
            <div className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-line py-8 md:grid-cols-[6rem_1fr_1fr]">
              <span className="font-mono text-xs text-accent">/{f.no}</span>
              <h3 className="font-display text-xl font-bold tracking-wide transition-transform duration-500 group-hover:translate-x-3 md:text-3xl">
                {f.en}
              </h3>
              <p className="col-start-2 mt-2 font-jp text-xs leading-relaxed text-muted md:col-start-3 md:mt-0 md:text-sm">
                {f.jp}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
