import type { Metadata } from "next";
import WorkDetailLayout from "@/components/WorkDetailLayout";

export const metadata: Metadata = {
  title: "SimpleSplitTabs — Shun",
  description:
    "開いているタブを画面分割表示する Chrome 拡張機能。ポップアップから 2分割・4分割を選ぶと、Chrome ウィンドウを均等サイズで自動配置する。",
};

const FEATURES = [
  {
    title: "2分割 / 4分割",
    description:
      "ポップアップの2つのボタンから分割数を選択。2分割なら左右均等、4分割なら2×2グリッドに自動配置。操作はこれだけで完結する。",
  },
  {
    title: "解像度・OS非依存の均等配置",
    description:
      "screen.availWidth / availHeight を使い、現在の画面解像度を動的に取得して均等分割を計算。どの環境でもピクセルパーフェクトに配置できる。",
  },
  {
    title: "Manifest V3 + Service Worker",
    description:
      "Chrome 拡張の最新仕様に準拠。バックグラウンド処理はイベント駆動の Service Worker で実装し、常駐プロセスによるメモリ消費を排除している。",
  },
  {
    title: "ゼロ依存・3ファイル構成",
    description:
      "manifest.json・popup.html・background.js のわずか3ファイルで完結。外部ライブラリを一切使わないため、インストール後のファイルサイズは数KBに収まる。",
  },
];

const ARCHITECTURE = [
  {
    path: "manifest.json",
    items: ["拡張設定・権限宣言（Manifest V3）", "Service Worker 登録"],
    description: "拡張設定",
  },
  {
    path: "popup.html",
    items: ["2分割・4分割ボタンのUI", "200px幅のシンプルなポップアップ"],
    description: "ポップアップUI",
  },
  {
    path: "background.js",
    items: ["画面サイズ取得と分割計算", "chrome.windows.create で配置実行"],
    description: "Service Worker",
  },
];

export default function SimpleSplitTabsPage() {
  return (
    <WorkDetailLayout
      title="SimpleSplitTabs"
      gradient="linear-gradient(135deg, #bdebd2 0%, #9fd8e8 70%, #cdeefc 100%)"
      year="2025"
      role="Development"
      stack="JavaScript / Chrome Extension Manifest V3 / Chrome APIs"
      githubUrl="https://github.com/sshunnn/SimpleSplitTabs"
    >

      {/* overview */}
      <section className="mb-20">
        <p className="label mb-4">Overview</p>
        <p className="font-jp text-lg leading-relaxed text-muted md:text-xl">
          開いているタブをワンクリックで2分割・4分割配置するChrome拡張機能。
          インストールしてポップアップを開き、ボタンを押すだけで現在のウィンドウを均等サイズに並べ直す。
          外部ライブラリに依存しない3ファイル構成で、インストール後のファイルサイズは数KBに収まる。
        </p>
        <p className="mt-6 font-jp text-lg leading-relaxed text-muted md:text-xl">
          複数ドキュメントを参照しながらコードを書くとき、ウィンドウの手動リサイズと配置に毎回時間がかかることに課題を感じていた。
          既存の分割ツールはOSのウィンドウ管理機能に頼ったものが多く、ブラウザタブを直接操作できるChrome拡張として作ることで、
          Chromeの中だけで完結する最小限のソリューションを実現した。
        </p>
      </section>

      {/* technical focus */}
      <section className="mb-20">
        <p className="label mb-4">技術的なポイント</p>
        <p className="font-jp text-sm leading-loose text-muted md:text-base">
          Chrome Extension Manifest V3への準拠が最大の実装ポイントだった。
          V3ではバックグラウンドスクリプトがService Workerに移行され、常駐処理が廃止されている。
          今回の処理（ウィンドウ操作）はイベント駆動で完結するため、
          Service Workerの制約（状態を持てない・常駐できない）と相性が良く、
          V3への移行を逆に活かしてシンプルな設計に落とし込んだ。
          chrome.windows.create API を使い、現在の画面サイズから各ウィンドウの座標とサイズを計算して配置している。
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
