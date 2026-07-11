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
      "イベント名と候補日を入力するだけで投票ページを生成。生成されたURLを共有するだけで参加者を募れる。",
  },
  {
    title: "○△×投票",
    description:
      "各候補日に対して「参加できる・たぶん参加・参加できない」の3択で投票。リアルタイムで集計結果を表示。",
  },
  {
    title: "最適日の自動算出",
    description:
      "全参加者の投票を集計し、最も参加率が高い日を自動でハイライト表示。",
  },
  {
    title: "Upstash Redis 永続化",
    description:
      "サーバーレス関数 + Upstash Redis でデータを保存。URLを再度開くと前回の状態が復元される。",
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
    items: ["カスタムフック群"],
    description: "カスタムフック",
  },
  {
    path: "src/utils.ts",
    items: ["最適日算出ロジック"],
    description: "ユーティリティ",
  },
  {
    path: "api/event.js",
    items: ["Upstash Redis CRUD"],
    description: "Vercel Serverless Function",
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
          飲み会の日程調整をURL共有だけで完結させるWebアプリ。ログイン・アカウント不要で、URLを送るだけで参加者が候補日に○△×で投票できる。
          Upstash Redis にデータを保存するため、セッションをまたいで結果が保持される。
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
