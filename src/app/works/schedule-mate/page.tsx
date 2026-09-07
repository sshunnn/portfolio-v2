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
      "イベント名と候補日（カンマ区切り）を指定するだけで投票パネルを自動生成。参加者はDiscord上のボタンをクリックするだけで○△×を記録できる。メッセージに直接埋め込まれるため、外部リンクへの遷移が不要。",
  },
  {
    title: "最適日の自動提案",
    description:
      "全参加者の投票が揃った段階で、○が全員一致する日を最優先に、△込みの参加率上位日を次点として自動提案。幹事が手動で集計する手間をゼロにする。",
  },
  {
    title: "/calendar コマンド",
    description:
      "月別カレンダーをテキストで描画し、既存イベントが入っている日をマーキング。過去に作成したイベントと候補日が一覧で把握できる。",
  },
  {
    title: "非同期イベント駆動設計",
    description:
      "discord.py の asyncio ベースの設計を活かし、複数のインタラクションを並列で処理。ボタン押下からの応答をブロッキングなしで捌ける構成にした。",
  },
];

const ARCHITECTURE = [
  {
    path: "main.py",
    items: ["Bot エントリポイント", "Cog のロードと起動処理"],
    description: "エントリポイント",
  },
  {
    path: "cogs/scheduler.py",
    items: ["/schedule_new の実装", "ボタンインタラクション処理"],
    description: "スケジューラー Cog",
  },
  {
    path: "utils/calendar_utils.py",
    items: ["カレンダー描画ロジック", "最適日算出アルゴリズム"],
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
          Discord サーバー内で完結するスケジュール調整 Bot。スラッシュコマンドひとつでインタラクティブな投票パネルを生成し、
          参加者はDiscord を離れることなくボタンクリックだけで都合を回答できる。
          全員の投票が揃うと最適日を自動提案する。
        </p>
        <p className="mt-6 font-jp text-lg leading-relaxed text-muted md:text-xl">
          友人グループのゲームセッションや飲み会の日程調整を、LINEのスタンプ投票と幹事による手動集計で行っていたが、
          メンバー全員がDiscordを日常的に使っていることに着目し、
          「Discordを離れずに完結する」というUXを最優先に設計した。
          Pythonのdiscord.py（py-cord）を使い、asyncioベースの非同期処理でボタンインタラクションを実装している。
        </p>
      </section>

      {/* technical focus */}
      <section className="mb-20">
        <p className="label mb-4">技術的なポイント</p>
        <p className="font-jp text-sm leading-loose text-muted md:text-base">
          Discord の Interaction API を活用し、メッセージ本文に投票ボタンを直接埋め込む構成にした。
          従来のリアクション集計（👍/👎 スタンプ）と異なり、ボタンはクリック状態の管理が容易で、
          「同じ人が複数回投票する」「投票を取り消して別の選択肢に変更する」といったケースを正確に制御できる。
          asyncio を活用した非同期設計により、複数ユーザーの同時投票も応答遅延なく処理できるようにした。
          また、Cog パターンでコマンドを分割することで、機能追加時の影響範囲を最小化する設計を採用している。
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
