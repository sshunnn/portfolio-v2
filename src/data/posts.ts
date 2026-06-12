export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

// ブログ記事を追加するときはここに追記する。
// 本格運用時は MDX / CMS への置き換えを想定した最小スキーマ。
export const posts: Post[] = [];
