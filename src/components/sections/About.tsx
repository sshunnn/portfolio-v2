import Reveal from "@/components/Reveal";
import ScrollRevealText from "@/components/ScrollRevealText";

const FIELDS = [
  {
    no: "01",
    title: "Web Engineering",
    text: "フロントエンドからバックエンドまで、プロダクションレベルのウェブ開発。",
  },
  {
    no: "02",
    title: "Interactive 3D",
    text: "WebGLとシェーダーを使った、動きのある表現の設計と実装。",
  },
  {
    no: "03",
    title: "Product Design",
    text: "触って心地よいUI/UXの設計、プロトタイピング、検証。",
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

        <div className="mt-24 border-t border-line">
          {FIELDS.map((f, i) => (
            <Reveal key={f.no} delay={0.08 * i}>
              <div className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-line py-8 md:grid-cols-[6rem_1fr_1fr]">
                <span className="text-xs text-muted">{f.no}</span>
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
                  {f.title}
                </h3>
                <p className="col-start-2 mt-2 font-jp text-sm leading-relaxed text-muted md:col-start-3 md:mt-0">
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
