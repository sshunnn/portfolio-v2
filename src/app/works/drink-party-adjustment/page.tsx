import type { Metadata } from "next";
import WorkDetailLayout from "@/components/WorkDetailLayout";

export const metadata: Metadata = {
  title: "Drink Party Adjustment — Shun",
  description:
    "飲み会の日程調整Webアプリ。候補日の提案から出欠の集計まで、URLシェアだけで使えるシンプルな仕組み。",
};

const FEATURES = [
  {
    title: "日程候補の作成",
    description:
      "イベント名と候補日を入力するだけで投票ページを生成。生成されたURLを共有するだけで参加者を募れる。アカウント登録・ログイン不要のため、ITリテラシーを問わず誰でも即座に使い始められる。",
  },
  {
    title: "○△×投票",
    description:
      "各候補日に対して「参加できる・たぶん参加・参加できない」の3択で投票。投票結果はリアルタイムで集計・表示されるため、幹事が別途集計する手間を完全に省ける。",
  },
  {
    title: "最適日の自動算出",
    description:
      "全参加者の投票を集計し、○が最も多い日を最優先・△込みの参加率上位日を次点として自動でハイライト表示。幹事が日程を決める際の判断コストをゼロにする。",
  },
  {
    title: "Upstash Redis 永続化",
    description:
      "サーバーレス関数 + Upstash Redis でデータを永続化。セッションを閉じてもURLさえあれば状態が復元される。Vercel Edge Functionsとの相性も考慮し、低レイテンシを実現。",
  },
];

const ARCHITECTURE = [
  {
    path: "src/components/",
    items: ["EventCreation.tsx", "VotingTable.tsx", "ResultSummary.tsx"],
    description: "UIコンポーネント",
  },
  {
    path: "src/hooks/",
    items: ["useVoting.ts", "useEvent.ts"],
    description: "カスタムフック",
  },
  {
    path: "src/utils.ts",
    items: ["最適日算出ロジック", "投票集計ヘルパー"],
    description: "ユーティリティ",
  },
  {
    path: "api/event.js",
    items: ["Upstash Redis CRUD", "イベント作成・取得・更新API"],
    description: "Vercel Serverless Function",
  },
];

const CHALLENGES = [
  {
    title: "サーバーレス環境でのリアルタイム性",
    body: "Vercel のサーバーレス関数はステートレスなため、投票状態をどこに持つかが課題だった。WebSocketは常時接続サーバーが必要になり運用コストが上がる。そこでUpstash Redisをストレージに採用し、ポーリングで状態を取得する方式を選択。シンプルさと低コストを両立させた。",
  },
  {
    title: "URLだけで完結させる設計",
    body: "認証機能を一切持たない設計にしたことで、実装をシンプルに保てた半面、URLを知っていれば誰でも投票できる仕様になる。用途（飲み会の日程調整）を考えると認証は過剰であり、URLの推測困難性（UUID）で十分なセキュリティを確保できると判断した。",
  },
];

export default function DrinkPartyAdjustmentPage() {
  return (
    <WorkDetailLayout
      title="Drink Party Adjustment"
      gradient="linear-gradient(135deg, #ffd9a0 0%, #ffa3a3 60%, #ffc4e1 100%)"
      year="2026"
      role="Development"
      stack="TypeScript / Vite / React / Upstash Redis / Vercel"
      githubUrl="https://github.com/sshunnn/Drink-party-adjustment"
      liveUrl="https://drink-party-adjustment.vercel.app"
    >

      {/* overview */}
      <section className="mb-20">
        <p className="label mb-4">Overview</p>
        <p className="font-jp text-lg leading-relaxed text-muted md:text-xl">
          飲み会の日程調整をURL共有だけで完結させるWebアプリ。ログイン・アカウント不要で、
          URLを送るだけで参加者が候補日に○△×で投票できる。
          Upstash Redis にデータを永続化するため、セッションをまたいで結果が保持される。
        </p>
        <p className="mt-6 font-jp text-lg leading-relaxed text-muted md:text-xl">
          既存の日程調整サービスは多機能すぎて、飲み会のような気軽な用途では操作が煩雑になりがちだった。
          「URLを貼るだけで全員が投票できる」という体験を最優先に設計し、
          UIはボタン操作のみで完結するようにした。
          フロントエンドは React + Vite、バックエンドは Vercel Serverless Functions + Upstash Redis で構成し、
          インフラ管理ゼロで本番運用できる構成にまとめた。
        </p>
      </section>

      {/* motivation */}
      <section className="mb-20">
        <p className="label mb-4">背景・動機</p>
        <p className="font-jp text-sm leading-loose text-muted md:text-base">
          友人グループで飲み会の日程を決める際、LINEで候補日を挙げ、各自がスタンプで回答し、
          幹事が集計するという非効率なフローが常態化していた。
          既存の調整ツールはビジネス向けの機能が多く、友人間のカジュアルな用途では使い勝手が悪い。
          「シンプルに日程だけ決めたい」というニーズを解決するために開発した。
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

      {/* challenges */}
      <section className="mb-20">
        <p className="label mb-8">技術的な課題と判断</p>
        <div className="space-y-6">
          {CHALLENGES.map((c) => (
            <div key={c.title} className="rounded-xl border border-line p-6 md:p-8">
              <p className="mb-3 font-serif text-lg italic tracking-tight">{c.title}</p>
              <p className="font-jp text-sm leading-loose text-muted">{c.body}</p>
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
