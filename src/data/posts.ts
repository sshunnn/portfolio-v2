export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

// ブログ記事を追加するときはここに追記する。
// 本格運用時は MDX / CMS への置き換えを想定した最小スキーマ。
export const posts: Post[] = [
  {
    slug: "python-data-science-day1",
    title: "Python データサイエンス Day 1",
    date: "2026-09-11",
    summary:
      "NumPy・Pandas・Matplotlib の基礎を Jupyter Notebook で学んだ記録。配列操作・DataFrame・グラフ描画・Q&A まで。",
  },
];
