import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Projects — Shun",
  description: "佐藤駿のサイドプロジェクト一覧。趣味・個人開発で作ったWebアプリ・ツール・Botのまとめ。",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-32 md:px-8 md:pt-40">

        {/* back */}
        <Reveal>
          <Link
            href="/"
            className="label mb-12 inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            ← Back
          </Link>
        </Reveal>

        {/* heading */}
        <Reveal delay={0.05}>
          <p className="label mb-4 text-muted">Side Projects</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
            個人開発・<em className="gradient-text">趣味製作</em>
          </h1>
        </Reveal>

        {/* note */}
        <Reveal delay={0.15}>
          <div className="mt-10 max-w-2xl rounded-2xl border border-line bg-ink/[0.02] px-8 py-6">
            <p className="font-jp text-sm leading-loose text-muted">
              業務での開発成果はNDA・社内規定により非公開です。
              ここに掲載しているのは、個人で「不便を感じた→作った」という動機から始めたサイドプロジェクトです。
              実務での設計・実装力については
              <Link href="/#about" className="mx-1 border-b border-muted/50 hover:border-ink hover:text-ink transition-colors">
                Aboutセクション
              </Link>
              の経歴をご参照ください。
            </p>
          </div>
        </Reveal>

        {/* grid */}
        <ul className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12">
          {works.map((work, i) => (
            <Reveal key={work.index} delay={0.06 * i}>
              <li>
                <WorkCard work={work} />
              </li>
            </Reveal>
          ))}
        </ul>

      </div>
    </div>
  );
}
