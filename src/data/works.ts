export type Work = {
  index: string;
  title: string;
  year: string;
  role: string;
  tags: string[];
  status: "live" | "wip";
  url?: string;
  description?: string;
  /** hover preview swatch — replace with a screenshot later */
  gradient?: string;
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
    description:
      "このサイト。WebGLのオブジェとタイポグラフィで構成した個人サイト。",
    gradient: "linear-gradient(135deg, #f6d8c3 0%, #c9d2f6 60%, #d9f0e2 100%)",
  },
  {
    index: "02",
    title: "New project",
    year: "2026",
    role: "準備中",
    tags: [],
    status: "wip",
  },
];
