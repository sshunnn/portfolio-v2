import Reveal from "@/components/Reveal";
import ScrollRevealText from "@/components/ScrollRevealText";

const FIELDS = [
  {
    no: "01",
    title: "Web Engineering",
    text: "フロントエンドからバックエンドまで、プロダクションレベルのウェブ開発。",
    bg: "#ffe2cd",
  },
  {
    no: "02",
    title: "Interactive 3D",
    text: "WebGLとシェーダーを使った、動きのある表現の設計と実装。",
    bg: "#dde3ff",
  },
  {
    no: "03",
    title: "Product Design",
    text: "触って心地よいUI/UXの設計、プロトタイピング、検証。",
    bg: "#d8f1e3",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="label mb-12">About</p>
        </Reveal>

        {/* characters focus in as you scroll — reading pace = scrolling pace */}
        <ScrollRevealText
          text="東京を拠点に、ウェブとリアルタイムグラフィックスを横断しながら、思わず触りたくなる体験をつくっています。"
          className="max-w-4xl font-jp-serif text-2xl leading-[1.9] tracking-wide md:text-4xl md:leading-[1.9]"
        />

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-md font-jp text-sm leading-loose text-muted md:text-base">
            このサイトは、つくったものを展示し、考えたことを記録していくための場所です。
          </p>
        </Reveal>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {FIELDS.map((f, i) => (
            <Reveal key={f.no} delay={0.08 * i}>
              <div
                className="flex h-full flex-col rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1.5"
                style={{ background: f.bg }}
              >
                <span className="text-xs text-ink/50">{f.no}</span>
                <h3 className="mt-10 font-serif text-2xl tracking-tight md:mt-14 md:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-3 font-jp text-sm leading-relaxed text-ink/70">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
