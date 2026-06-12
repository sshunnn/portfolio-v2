export type Work = {
  index: string;
  title: string;
  year: string;
  role: string;
  tags: string[];
  status: "live" | "wip";
  url?: string;
  description?: string;
};

// 成果物を追加するときはここに追記するだけで Works セクションに反映される
export const works: Work[] = [
  {
    index: "001",
    title: "PORTFOLIO ENGINE",
    year: "2026",
    role: "Design / Engineering",
    tags: ["Next.js", "React Three Fiber", "GLSL"],
    status: "live",
    description:
      "このサイト自体。シェーダー彫刻とHUDで構成した個人アーカイブ。",
  },
  {
    index: "002",
    title: "UNANNOUNCED PROJECT",
    year: "2026",
    role: "TBA",
    tags: ["IN DEVELOPMENT"],
    status: "wip",
  },
  {
    index: "003",
    title: "UNANNOUNCED PROJECT",
    year: "2026",
    role: "TBA",
    tags: ["IN DEVELOPMENT"],
    status: "wip",
  },
];
