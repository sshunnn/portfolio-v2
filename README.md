# Shun — Portfolio

東京を拠点とするソフトウェアエンジニアの個人ポートフォリオ。
明るくエディトリアルなデザインに、WebGLのパール調オブジェとセリフ体のタイポグラフィを組み合わせた構成。

## Stack

- [Next.js 16](https://nextjs.org) (App Router / Turbopack)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) — 3D オブジェ
- カスタム GLSL シェーダー — ノイズ変形 + パステルグラデーション
- [Motion](https://motion.dev) — UI アニメーション
- [Lenis](https://lenis.darkroom.engineering) — スムーススクロール
- Tailwind CSS v4
- フォント: Fraunces / Inter / しっぽり明朝 / Zen角ゴシック New

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
