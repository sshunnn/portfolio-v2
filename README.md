# Shun Sato — Portfolio 2026

東京を拠点とするフロントエンドエンジニア、佐藤駿の個人ポートフォリオサイト。
転職活動を目的として設計・実装した。技術力・デザインセンス・AI駆動開発への適応力を示すことを主眼とし、
単なる成果物一覧ではなく「エンジニアとしての思考」が伝わるサイトを目指した。

**Live →** https://portfolio-v2-ten-neon.vercel.app

---

## 設計の考え方

### コンポーネント設計（Atomic Design 準拠）

UIをAtomicな単位に分解し、再利用性と保守性を担保している。

| レイヤー | コンポーネント | 役割 |
|---|---|---|
| **Atoms** | `Reveal`, `Magnetic`, `ScrollProgress` | 単一の振る舞いを持つ最小単位 |
| **Molecules** | `ScrollRevealText`, `VelocityMarquee`, `WorkDetailLayout` | Atomsを組み合わせた複合UI |
| **Organisms** | `Hero`, `About`, `Works`, `Contact` | セクション単位の独立したUI |
| **Templates** | `app/layout.tsx` + `SmoothScroll` + `Header` | ページ全体の骨格 |

各コンポーネントは役割が明確に分離されており、Worksカードの追加は `src/data/works.ts` への1エントリ追記で完結する。

### アニメーション設計

パフォーマンスと表現力を両立するため、すべてのアニメーションはGPUアクセラレーション可能なプロパティ（`transform`, `opacity`, `filter`）のみを使用している。

- **`Reveal`**: `blur(6px)` → `blur(0)` のフォーカスインとy軸移動を組み合わせた登場演出。`whileInView` + `viewport.once` でスクロール連動しつつ再発火しない設計。
- **`ScrollRevealText`**: 文字単位で `useTransform` を適用し、スクロール位置に応じて不透明度が線形補間される。読む速度とスクロール速度が同期するUX。
- **Hero parallax**: `useScroll` + `useTransform` でテキストとWebGLオブジェを異なる速度でスクロールアウトさせ、奥行きを演出。
- **Magnetic**: `useSpring` によるカーソル追従で、CTAボタンに有機的な引力を与える。

### WebGL / GLSLシェーダー

Hero右側に配置したパール調のオブジェは、Three.js（React Three Fiber経由）とカスタムGLSLシェーダーで実装している。

**Vertex Shader（頂点変形）**
- Ashima Arts製の3D Simplex Noiseを組み込み、2層のノイズを合成して球体表面を有機的に変形。
- `uTime` uniform でフレームごとに形状が変化し、スクロール速度（`scrollState.velocity`）を `uAmp` に反映することで、スクロール中に表面が「揺れる」インタラクションを実現。

**Fragment Shader（サーフェスカラー）**
- Fresnel項 (`pow(1.0 - dot(N, V), 2.0)`) でエッジへの白いシーンを表現し、パール光沢を再現。
- 法線方向に応じてPeach・Periwinkle・Mintの3色をmixし、見る角度で色が変わる虹彩効果を実装。

---

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router / Turbopack) |
| UIランタイム | React 19 |
| 言語 | TypeScript 5 |
| スタイリング | Tailwind CSS v4（カスタムデザイントークン） |
| 3D / WebGL | React Three Fiber + drei + Three.js |
| シェーダー | カスタム GLSL（頂点変形 + フレネル反射） |
| アニメーション | Motion (Framer Motion v11) |
| スクロール | Lenis（慣性スクロール） |
| フォント | Fraunces（セリフ）/ Inter（サンセリフ）/ しっぽり明朝 / Zen角ゴシックNew |
| デプロイ | Vercel |

---

## デザインの工夫

### タイポグラフィ主導のレイアウト

日本語UIにセリフ体（Fraunces）と和文（しっぽり明朝）を共存させるため、フォントの組み合わせとline-heightを独自に調整。英数字はFraunces、日本語本文はZen角ゴシックNew、キャッチコピーはしっぽり明朝で使い分けることで、エディトリアルな印象を作っている。

### カラートークンの一元管理

`--bg / --ink / --muted / --accent / --line` の5変数のみでサイト全体の色を管理。Tailwind CSS v4の `@theme` ブロックに変数をブリッジし、ユーティリティクラスとCSSカスタムプロパティの両方から参照できる設計にした。

### Aurora エフェクト

HeroとContactセクションの背景に使用している光彩エフェクトは、`radial-gradient` を4層重ねて `blur(70px)` をかけ、`@keyframes` で緩やかにドリフトさせることで実装。GPUで完結し、JSは一切不要。`prefers-reduced-motion` にも対応している。

### Works カードの画像戦略

実際にデプロイ済みのアプリはVercelからスクリーンショットを取得し、プライベートリポジトリやデプロイURLのない成果物にはテーマに合ったビジュアルを使用。`next/image` の `fill` + `object-cover` と `gradient-to-t` オーバーレイを組み合わせ、どの画像でもテキストの可読性を確保している。

---

## ディレクトリ構成

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト（フォント・Lenis・Header）
│   ├── page.tsx            # トップページ
│   └── works/[slug]/       # 成果物詳細ページ（静的生成）
├── components/
│   ├── three/              # WebGLコンポーネント（Scene, Blob）
│   ├── sections/           # ページセクション（Hero, About, Works, Contact）
│   ├── Reveal.tsx          # スクロール連動フェードイン
│   ├── Magnetic.tsx        # カーソル追従マグネット
│   ├── ScrollRevealText.tsx # 文字単位スクロール連動テキスト
│   └── WorkDetailLayout.tsx # 成果物詳細ページのテンプレート
├── data/
│   └── works.ts            # 成果物データ（ここに追記するだけで反映）
└── lib/
    └── scroll.ts           # Lenis → Three.js へのスクロール状態ブリッジ
```

---

## 開発

```bash
npm install
npm run dev   # http://localhost:3000
```

## コンテンツの追加

`src/data/works.ts` に1エントリ追記するだけでWorksセクションに自動反映される。

```ts
{
  index: "07",
  title: "Project Name",
  year: "2026",
  role: "Development",
  tags: ["Next.js", "TypeScript"],
  status: "live",
  slug: "project-name",          // /works/project-name のルートが必要
  image: "/works/project.png",   // public/works/ に配置
  liveUrl: "https://...",
  githubUrl: "https://...",
  description: "プロジェクトの説明",
  gradient: "linear-gradient(135deg, ...)",  // imageがない場合のフォールバック
}
```

## デプロイ

Vercelへのリポジトリインポートのみで動作する（追加設定不要）。

---

© 2026 Shun Sato
