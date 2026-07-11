import type { Metadata } from "next";
import WorkDetailLayout from "@/components/WorkDetailLayout";

export const metadata: Metadata = {
  title: "Portfolio 2026 — Shun",
  description:
    "このサイト自身。ライトエディトリアルなデザインに WebGL のパールオブジェクトとスクロール駆動のアニメーションを組み合わせた個人ポートフォリオ。",
};

const FEATURES = [
  {
    title: "WebGL Pearl Object",
    description:
      "Three.js + GLSL シェーダーで制作したパールオブジェクト。マウス追従とスクロールに連動して変形するリアルタイムシミュレーション。",
  },
  {
    title: "Scroll-driven Animations",
    description:
      "Lenis によるスムーススクロールと、スクロール量に応じたテキストの reveal・速度マーキー・プログレスバーを実装。",
  },
  {
    title: "Editorial Typography",
    description:
      "Fraunces（セリフ）・Inter・ 和文フォント2種の4フォント構成。サイズ・ウェイト・イタリックで階層を表現するタイポグラフィシステム。",
  },
  {
    title: "Light Theme Design",
    description:
      "生成り色ベースのライトテーマ。aurora グラデーション・stroke text・gradient text など独自のカスタム CSS エフェクトを定義。",
  },
];

const ARCHITECTURE = [
  {
    path: "src/components/three/",
    items: ["Scene.tsx", "Blob.tsx"],
    description: "WebGL layer",
  },
  {
    path: "src/components/sections/",
    items: ["Hero.tsx", "About.tsx", "Works.tsx", "Journal.tsx", "Contact.tsx"],
    description: "ページセクション",
  },
  {
    path: "src/components/",
    items: ["Header", "SmoothScroll", "ScrollProgress", "VelocityMarquee", "Reveal", "Magnetic"],
    description: "共通コンポーネント",
  },
  {
    path: "src/data/",
    items: ["works.ts", "posts.ts"],
    description: "データ定義",
  },
];

export default function PortfolioV2Page() {
  return (
    <WorkDetailLayout
      title="Portfolio 2026"
      gradient="linear-gradient(135deg, #ffb88c 0%, #93a5ff 55%, #8fe3b4 100%)"
      year="2026"
      role="Design & Development"
      stack="Next.js 16 / React Three Fiber / GSAP / Tailwind CSS"
      githubUrl="https://github.com/sshunnn/portfolio-v2"
    >

      {/* overview */}
      <section className="mb-20">
        <p className="label mb-4">Overview</p>
        <p className="font-jp text-lg leading-relaxed text-muted md:text-xl">
          このサイト自身のリポジトリ。ライトエディトリアルスタイルのデザインと WebGL を組み合わせたポートフォリオサイト。
          Next.js 16 の App Router + React Server Components をベースに、Three.js によるパールオブジェのシミュレーション、
          Lenis によるスムーススクロール、スクロール追従のアニメーションを実装している。
        </p>
      </section>

      {/* key features */}
      <section className="mb-20">
        <p className="label mb-8">Key Features</p>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-line p-6">
              <p className="mb-3 font-serif text-lg italic tracking-tight">{feature.title}</p>
              <p className="font-jp text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* architecture */}
      <section className="mb-20">
        <p className="label mb-8">Architecture</p>
        <div className="grid gap-4 md:grid-cols-2">
          {ARCHITECTURE.map((dir) => (
            <div
              key={dir.path}
              className="rounded-xl border border-line bg-ink/[0.02] p-6"
            >
              <p className="mb-3 font-mono text-xs text-accent">{dir.path}</p>
              <p className="label mb-3">{dir.description}</p>
              <ul className="space-y-1">
                {dir.items.map((item) => (
                  <li key={item} className="font-mono text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </WorkDetailLayout>
  );
}
