import type { Metadata } from "next";
import WorkDetailLayout from "@/components/WorkDetailLayout";

export const metadata: Metadata = {
  title: "Schedule Mate — Shun",
  description:
    "Discord サーバー内でのスケジュール調整を自動化する Bot。スラッシュコマンドでイベントを作成し、メンバーはボタンをクリックするだけで都合を投票できる。",
};

const FEATURES = [
  {
    title: "/schedule_new コマンド",
    description:
      "イベント名と候補日（カンマ区切り）を指定するだけで投票パネルを生成。参加者はボタンをポチるだけで○△×を記録できる。",
  },
  {
    title: "ボタン投票UI",
    description:
      "Discord の Interaction API を使ったボタンコンポーネント。メッセージに直接埋め込まれるため、リンク遷移なしで投票できる。",
  },
  {
    title: "/calendar コマンド",
    description:
      "月別カレンダーをテキストで描画し、既存イベントが入っている日をマーキング。",
  },
  {
    title: "最適日自動提案",
    description:
      "全参加者の投票を集計し、全員○の日を最優先、次点は△込みの参加率上位日を提案。",
  },
];

const ARCHITECTURE = [
  {
    path: "main.py",
    items: ["Bot エントリポイント", "Cog のロード"],
    description: "エントリポイント",
  },
  {
    path: "cogs/scheduler.py",
    items: ["/schedule_new の実装"],
    description: "スケジューラー Cog",
  },
  {
    path: "utils/calendar_utils.py",
    items: ["カレンダー描画", "最適日算出ロジック"],
    description: "ユーティリティ",
  },
  {
    path: ".env",
    items: ["DISCORD_TOKEN の管理"],
    description: "環境変数",
  },
];

export default function ScheduleMatePage() {
  return (
    <WorkDetailLayout
      title="Schedule Mate"
      gradient="linear-gradient(135deg, #c3cdff 0%, #9fb6ff 55%, #d9c6ff 100%)"
      year="2025"
      role="Development"
      stack="Python 3.9+ / py-cord (discord.py) / asyncio"
      githubUrl="https://github.com/sshunnn/discord-calender"
    >

      {/* overview */}
      <section className="mb-20">
        <p className="label mb-4">Overview</p>
        <p className="font-jp text-lg leading-relaxed text-muted md:text-xl">
          Discord サーバー内でのスケジュール調整を自動化する Bot。スラッシュコマンドでイベントを作成し、
          メンバーはボタンをクリックするだけで都合を投票できる。全員の投票が揃ったら最適日を自動で提案する。
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
