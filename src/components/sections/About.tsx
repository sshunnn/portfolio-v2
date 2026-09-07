import Reveal from "@/components/Reveal";
import ScrollRevealText from "@/components/ScrollRevealText";

const FIELDS = [
  {
    no: "01",
    title: "Web Engineering",
    text: "Next.js・React・Node.jsを軸に、要求分析から設計・実装・運用保守まで一貫して担当。Kubernetes環境での本番デプロイも週次で対応。",
    bg: "#ffe2cd",
  },
  {
    no: "02",
    title: "Interactive 3D",
    text: "WebGLとGLSLシェーダーを使ったインタラクティブな3D表現の設計と実装。スクロール連動アニメーションやリアルタイムグラフィックスが得意領域。",
    bg: "#dde3ff",
  },
  {
    no: "03",
    title: "AI-Driven Dev",
    text: "Codex・Claude Codeを活用した開発自動化。APIテスト自動化で確認作業を2時間→10分に短縮するなど、AIとの協働で開発サイクルを効率化。",
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
          text="フロントエンドエンジニアとして4年間、大規模Webサービスのプロダクション開発を続けながら、ウェブとリアルタイムグラフィックスを横断した体験設計に取り組んでいます。"
          className="max-w-4xl font-jp-serif text-2xl leading-[1.9] tracking-wide md:text-4xl md:leading-[1.9]"
        />

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-md font-jp text-sm leading-loose text-muted md:text-base">
            アジャイル開発チームでの設計・実装から、AI駆動開発による効率化、後輩エンジニアの指導まで幅広く経験。このサイトはつくったものと考えたことを記録していく場所です。
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
