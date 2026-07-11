import type { Metadata } from "next";
import WorkDetailLayout from "@/components/WorkDetailLayout";

export const metadata: Metadata = {
  title: "shun-claude-workspace — Shun",
  description:
    "Claude Code の設定・サブエージェント・スキルを集約するプライベートリポジトリ。AIに改善からPR作成まで全自動でやらせる仕組み。",
};

const ARCHITECTURE = [
  {
    path: ".claude/agents/",
    items: ["advisor.md", "planner.md"],
    description: "サブエージェント定義",
  },
  {
    path: ".claude/commands/",
    items: ["auto-improve.md", "auto-skill.md", "google-ads-automation/", "nano-banana-claude-pipeline/"],
    description: "スラッシュコマンド",
  },
  {
    path: ".claude/skills/",
    items: ["（自動生成）"],
    description: "再利用可能なスキル置き場",
  },
  {
    path: "scripts/",
    items: [
      "maintenance.ps1",
      "new-improvement-branch.ps1",
      "finish-improvement-pr.ps1",
      "validate-repo.ps1",
    ],
    description: "PowerShell 自動化スクリプト",
  },
];

const AGENTS = [
  {
    name: "advisor",
    model: "Claude Haiku",
    role: "改善案の提案",
    detail:
      "指定されたコードを調査し、改善案を3つ、効果・コスト・リスクのトレードオフ付きで提示。実装は行わない。",
    tools: "Read / Grep / Glob",
  },
  {
    name: "planner",
    model: "Claude Sonnet",
    role: "実装計画の立案",
    detail:
      "採用された改善案について、変更対象ファイル・手順・リスク・テスト方針を plan.md に書き出す。plan.md 以外は変更しない。",
    tools: "Read / Grep / Glob / Bash / Write",
  },
];

const COMMANDS = [
  {
    name: "/auto-improve",
    summary: "改善案ごとに自動でブランチ → 実装 → push → PR を作成する",
    steps: [
      "advisor が改善案を3つ洗い出す",
      "ベースブランチから案ごとのブランチを作成",
      "planner が plan.md に実装計画を書き出す",
      "plan.md に従い実装・テスト",
      "コミット → push → gh pr create まで全自動",
    ],
  },
  {
    name: "/auto-skill",
    summary: "知識・手順をスキルファイル化し、PR を作成する",
    steps: [
      "対象内容を分析しスキル名を決定",
      "既存スキルとの重複チェック",
      "skill/<name> ブランチを作成",
      ".claude/skills/<name>/SKILL.md を生成",
      "コミット → push → gh pr create",
    ],
  },
];

export default function ShunClaudeWorkspacePage() {
  return (
    <WorkDetailLayout
      title="shun-claude-workspace"
      gradient="linear-gradient(135deg, #e8d5ff 0%, #c4b5fd 40%, #a5b4fc 100%)"
      year="2026"
      role="AI Tooling"
      stack="Claude Code / PowerShell / TypeScript"
    >

      {/* overview */}
      <section className="mb-20">
        <p className="label mb-4">Overview</p>
        <p className="font-jp text-lg leading-relaxed text-muted md:text-xl">
          Claude Code の設定・サブエージェント・スラッシュコマンド・スキルを集約するプライベートリポジトリ。
          コードのレビューから実装計画、ブランチ作成・PR 作成まで、すべてを AI に委譲して自動化することをコンセプトにしている。
        </p>
        <p className="mt-4 font-jp text-lg leading-relaxed text-muted md:text-xl">
          メインセッションはコーディングに集中し、提案には Haiku（高速・低コスト）、計画立案には Sonnet（高精度）と、
          用途に応じてモデルを使い分けるマルチエージェント構成をとっている。
        </p>
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

      {/* agents */}
      <section className="mb-20">
        <p className="label mb-8">Sub-agents</p>
        <div className="grid gap-6 md:grid-cols-2">
          {AGENTS.map((agent) => (
            <div key={agent.name} className="rounded-xl border border-line p-6">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="font-mono text-sm font-medium">{agent.name}</span>
                <span className="label">{agent.model}</span>
              </div>
              <p className="mb-3 font-serif text-lg italic tracking-tight">{agent.role}</p>
              <p className="font-jp text-sm leading-relaxed text-muted">{agent.detail}</p>
              <p className="mt-4 font-mono text-xs text-muted/60">tools: {agent.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* commands */}
      <section className="mb-20">
        <p className="label mb-8">Slash Commands</p>
        <div className="space-y-8">
          {COMMANDS.map((cmd) => (
            <div key={cmd.name} className="rounded-xl border border-line p-6 md:p-8">
              <p className="mb-2 font-mono text-base font-medium text-accent">{cmd.name}</p>
              <p className="mb-6 font-jp text-sm text-muted">{cmd.summary}</p>
              <ol className="space-y-2">
                {cmd.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="label w-4 shrink-0 pt-px text-right">{i + 1}</span>
                    <span className="font-jp text-sm leading-relaxed text-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* workflow */}
      <section className="mb-20">
        <p className="label mb-8">Workflow</p>
        <div className="rounded-xl border border-line bg-ink/[0.02] p-6 md:p-8">
          <p className="mb-6 font-jp text-sm leading-relaxed text-muted">
            典型的なセッションの流れ
          </p>
          <div className="space-y-0">
            {[
              { step: "起動", desc: "claude --permission-mode bypassPermissions" },
              { step: "改善指示", desc: "/auto-improve <対象ディレクトリ>" },
              { step: "advisor", desc: "Haiku が改善案を3つ・トレードオフ付きで提案" },
              { step: "planner", desc: "Sonnet が plan.md に実装計画を書き出す" },
              { step: "実装", desc: "メインモデルが plan.md に従いコーディング・テスト" },
              { step: "PR 作成", desc: "push → gh pr create まで自動実行、URL を報告" },
            ].map((row, i, arr) => (
              <div key={row.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-bg font-mono text-xs text-muted">
                    {i + 1}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="my-1 w-px flex-1 bg-line" style={{ minHeight: "1.5rem" }} />
                  )}
                </div>
                <div className="pb-6">
                  <p className="label mb-1">{row.step}</p>
                  <p className="font-mono text-xs text-muted">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* auto-skill rule */}
      <section className="mb-20">
        <p className="label mb-4">Auto-skill Rule</p>
        <div className="rounded-xl border border-line p-6 md:p-8">
          <p className="font-jp text-sm leading-relaxed text-muted">
            作業中に「再利用可能な手順・ノウハウ・定型パターン」を 3 回以上繰り返したと判断したら、
            Claude が自動的に <code className="font-mono text-xs text-accent">/auto-skill</code> と同じ手順でスキルを生成し、
            <code className="font-mono text-xs text-accent">skill/</code> ブランチ経由で PR を作成するルールを設けている。
            失敗から学んだ回避策もスキルとして積み上げ、セッションをまたいだ知識の蓄積を目指している。
          </p>
        </div>
      </section>

    </WorkDetailLayout>
  );
}
