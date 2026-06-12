# SHUN.PROG — Portfolio v2

東京を拠点とするソフトウェアエンジニアの個人ポートフォリオ。
「未来館の常設展示」をコンセプトに、WebGLのシェーダー彫刻・HUD風の計器UI・スムーススクロールで構成。

## Stack

- [Next.js 16](https://nextjs.org) (App Router / Turbopack)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) — 3D シーン
- カスタム GLSL シェーダー — ノイズ変形 + フレネル発光の彫刻
- [Motion](https://motion.dev) — UI アニメーション
- [Lenis](https://lenis.darkroom.engineering) — スムーススクロール
- Tailwind CSS v4

## Development

```bash
npm install
npm run dev
```

http://localhost:3000 で起動。

## コンテンツの追加

- **成果物**: `src/data/works.ts` に追記すると Works セクションに反映される
- **ブログ**: `src/data/posts.ts` に追記すると Journal セクションに反映される(将来 MDX / CMS へ移行予定)

## Deploy

Vercel へのデプロイを想定。リポジトリを import するだけで動く(追加設定不要)。
