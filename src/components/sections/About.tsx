import Reveal from "@/components/Reveal";
import ScrollRevealText from "@/components/ScrollRevealText";

const FIELDS = [
  {
    no: "01",
    title: "Web Engineering",
    text: "Next.js・React・Node.jsを軸に、要求分析から設計・実装・Kubernetes運用まで一貫して担当。週次の本番デプロイを4年間継続し、プロダクションの安定稼働に責任を持ってきた。",
    bg: "#ffe2cd",
  },
  {
    no: "02",
    title: "AI-Driven Dev",
    text: "Codex・Claude Codeを活用した開発自動化を推進。APIテスト自動化で動作確認作業を2時間→10分に短縮。Playwright E2Eテストの導入を主導し、チームの品質基準を引き上げた。",
    bg: "#dde3ff",
  },
  {
    no: "03",
    title: "Interactive 3D",
    text: "WebGLとGLSLシェーダーを使ったインタラクティブな3D表現の設計と実装。このサイト自体がその集大成で、スクロール連動アニメーションやリアルタイムグラフィックスを実装している。",
    bg: "#d8f1e3",
  },
];

const SKILLS = [
  { label: "JavaScript / TypeScript", years: "4年" },
  { label: "React / Next.js", years: "4年 / 2年" },
  { label: "Node.js", years: "4年" },
  { label: "Nuxt.js", years: "2年" },
  { label: "MySQL", years: "4年" },
  { label: "Kubernetes / Docker", years: "4年" },
  { label: "GitHub Actions", years: "実務経験" },
  { label: "Figma", years: "実務経験" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="label mb-12">About</p>
        </Reveal>

        <ScrollRevealText
          text="フロントエンドエンジニアとして4年間、金融系Webサービスの設計・実装・運用を担いながら、AIを活用した開発効率化とリアルタイムグラフィックスの両軸でエンジニアリングを深めています。"
          className="max-w-4xl font-jp-serif text-2xl leading-[1.9] tracking-wide md:text-4xl md:leading-[1.9]"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="font-jp text-sm leading-loose text-muted md:text-base">
                2022年より新卒エンジニアとしてキャリアをスタート。カードローン・証券・株価投資を扱う金融系Webサービス3サイトの開発・運用に4年間携わり、スクラムチームのメンバーとして要求分析・基本設計・詳細設計・実装・テスト・リリース対応までを一貫して担当してきました。
              </p>
              <p className="font-jp text-sm leading-loose text-muted md:text-base">
                技術面では、PV数向上のためのSEO対策や画面のUX改善、新規モジュール開発（株価新着情報・カードローンランキング機能など）を担当。Kubernetes環境での本番デプロイを週1回以上のペースで対応し続けることで、本番運用に対する高い責任感と判断力を磨きました。
              </p>
              <p className="font-jp text-sm leading-loose text-muted md:text-base">
                開発効率化の観点では、APIテスト自動化を推進して動作確認作業を2時間から10分へ短縮。Playwright E2Eテストの導入を主導し、品質担保と開発スピードの両立に貢献しました。また新人・後輩エンジニアの指導も担当し、実装レビューやペアプログラミングを通じてチーム全体の底上げに取り組んできました。
              </p>
              <p className="font-jp text-sm leading-loose text-muted md:text-base">
                現在はAI駆動開発（Codex・Claude Code）を積極的に活用しながら、次のステップとしてチームリードやマネジメント経験も積んでいきたいと考えています。
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p className="label mb-6">Skills</p>
              <div className="space-y-3">
                {SKILLS.map((s) => (
                  <div key={s.label} className="flex items-center justify-between border-b border-line pb-3">
                    <span className="font-jp text-sm text-ink">{s.label}</span>
                    <span className="font-mono text-xs text-muted">{s.years}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

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
