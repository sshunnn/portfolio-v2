export type Work = {
  index: string;
  title: string;
  year: string;
  role: string;
  tags: string[];
  status: "live" | "wip";
  url?: string;
  slug?: string;
  githubUrl?: string;
  liveUrl?: string;
  description?: string;
  /** card cover — replace with a screenshot/image later */
  gradient: string;
};

// 成果物を追加するときはここに追記するだけで Works セクションに反映される
export const works: Work[] = [
  {
    index: "01",
    title: "Portfolio 2026",
    year: "2026",
    role: "Design & Development",
    tags: ["Next.js", "React Three Fiber", "GLSL"],
    status: "live",
    slug: "portfolio-v2",
    githubUrl: "https://github.com/sshunnn/portfolio-v2",
    description:
      "このサイト。WebGLのオブジェとタイポグラフィで構成した個人サイト。",
    gradient: "linear-gradient(135deg, #ffb88c 0%, #93a5ff 55%, #8fe3b4 100%)",
  },
  {
    index: "02",
    title: "Drink Party Adjustment",
    year: "2026",
    role: "Development",
    tags: ["TypeScript", "Vercel"],
    status: "live",
    slug: "drink-party-adjustment",
    githubUrl: "https://github.com/sshunnn/Drink-party-adjustment",
    liveUrl: "https://drink-party-adjustment.vercel.app",
    description:
      "飲み会の日程調整Webアプリ。候補日の提案から出欠の集計までをシンプルに。",
    gradient: "linear-gradient(135deg, #ffd9a0 0%, #ffa3a3 60%, #ffc4e1 100%)",
  },
  {
    index: "03",
    title: "Schedule Mate",
    year: "2025",
    role: "Development",
    tags: ["Python", "Discord Bot"],
    status: "live",
    slug: "schedule-mate",
    githubUrl: "https://github.com/sshunnn/discord-calender",
    description:
      "Discordの予定調整Bot。ボタン投票・カレンダー表示・最適日の自動算出。",
    gradient: "linear-gradient(135deg, #c3cdff 0%, #9fb6ff 55%, #d9c6ff 100%)",
  },
  {
    index: "04",
    title: "SimpleSplitTabs",
    year: "2025",
    role: "Development",
    tags: ["JavaScript", "Chrome Extension"],
    status: "live",
    slug: "simple-split-tabs",
    githubUrl: "https://github.com/sshunnn/SimpleSplitTabs",
    description:
      "開いているタブを分割表示するChrome拡張機能。",
    gradient: "linear-gradient(135deg, #bdebd2 0%, #9fd8e8 70%, #cdeefc 100%)",
  },
  {
    index: "05",
    title: "shun-claude-workspace",
    year: "2026",
    role: "AI Tooling",
    tags: ["Claude Code", "PowerShell", "TypeScript"],
    status: "live",
    slug: "shun-claude-workspace",
    description:
      "Claude Code の設定・サブエージェント・スキルを集約するプライベートリポジトリ。AIに改善からPR作成まで全自動でやらせる仕組み。",
    gradient: "linear-gradient(135deg, #e8d5ff 0%, #c4b5fd 40%, #a5b4fc 100%)",
  },
  {
    index: "06",
    title: "New project",
    year: "2026",
    role: "準備中",
    tags: [],
    status: "wip",
    gradient: "linear-gradient(135deg, #ece7dc 0%, #d8d4e8 100%)",
  },
];
