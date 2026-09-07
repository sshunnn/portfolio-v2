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
    items: ["advisor.md（Claude Haiku）", "planner.md（Claude Sonnet）"],
    description: "サブエージェント定義",
  },
  {
    path: ".claude/commands/",
    items: ["/auto-improve", "/auto-skill", "/google-ads-automation", "/nano-banana-claude-pipeline"],
    description: "スラッシュコマンド",
  },
  {
    path: ".claude/skills/",
    items: ["再利用可能なスキルを自動生成・蓄積"],
    description: "スキル置き場",
  },
  {
    path: "scripts/",
    items: [
      "maintenance.ps1",
      "new-improvement-branch.ps1",
      "finish-improvement-pr.ps1",
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
      "指定されたコードを調査し、改善案を3つ・効果／コスト／リスクのトレードオフ付きで提示する。実装は行わず、提案に特化させることで速度と精度を両立している。",
    tools: "Read / Grep / Glob",
  },
  {
    name: "planner",
    model: "Claude Sonnet",
    role: "実装計画の立案",
    detail:
      "採用された改善案について、変更対象ファイル・手順・リスク・テスト方針を plan.md に書き出す。plan.md 以外は変更しないという制約を設けることで、計画フェーズと実装フェーズを明確に分離している。",
    tools: "Read / Grep / Glob / Bash / Write",
  },
];

const COMMANDS = [
  {
    name: "/auto-improve",
    summary: "改善案ごとに自動でブランチ → 実装 → push → PR を作成する",
    steps: [
      "advisor（Haiku）が改善案を3つ・トレードオフ付きで洗い出す",
      "ベースブランチから案ごとの feature ブランチを作成",
      "planner（Sonnet）が plan.md に実装計画を書き出す",
      "plan.md に従い実装・テストをメインモデルが実行",
      "コミット → push → gh pr create まで全自動で完了",
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
          「コードレビューから実装・PR作成まですべてをAIに委譲する」をコンセプトに、
          開発サイクル全体を自動化する仕組みを構築している。
        </p>
        <p className="mt-6 font-jp text-lg leading-relaxed text-muted md:text-xl">
          業務でCodex・Claude Codeを活用したAI駆動開発に取り組む中で、
          「セッションをまたいだ知識の継続性」と「繰り返し作業の完全自動化」が課題になった。
          このリポジトリはその解決策として設計したもので、
          使うたびにスキルが蓄積され、AIが過去の経験から学習し続ける構造になっている。
        </p>
      </section>

      {/* motivation */}
      <section className="mb-20">
        <p className="label mb-4">設計の考え方</p>
        <p className="font-jp text-sm leading-loose text-muted md:text-base">
          メインセッション（自分）はビジネスロジックと判断に集中し、
          提案フェーズにはHaiku（高速・低コスト）、計画立案にはSonnet（高精度）と、
          用途に応じてモデルを使い分けるマルチエージェント構成をとっている。
          これにより、AIを「使いっぱなし」にするのではなく、
          役割ごとに最適なモデルを割り当てるオーケストレーション層として機能させている。
          また、「再利用可能な手順・ノウハウを3回繰り返したら自動でスキル化する」ルールを設けることで、
          失敗から学んだ知識も含めて蓄積・再利用できる仕組みにしている。
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
        <p className="label mb-8">典型的なセッションの流れ</p>
        <div className="rounded-xl border border-line bg-ink/[0.02] p-6 md:p-8">
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

    </WorkDetailLayout>
  );
}
