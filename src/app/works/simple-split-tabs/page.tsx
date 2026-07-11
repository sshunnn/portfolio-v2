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
      "ポップアップの2つのボタンから分割数を選択。2分割なら左右均等、4分割なら2×2のグリッドに自動配置。",
  },
  {
    title: "画面サイズ自動取得",
    description:
      "screen.availWidth / availHeight を使い、解像度・OSを問わず均等なサイズで配置。",
  },
  {
    title: "Manifest V3 + Service Worker",
    description:
      "Chrome 拡張の最新仕様に準拠。バックグラウンドはイベント駆動の Service Worker で実装。",
  },
  {
    title: "最小限の実装",
    description:
      "manifest.json + popup.html + background.js のわずか3ファイル構成。依存ライブラリなし。",
  },
];

const ARCHITECTURE = [
  {
    path: "manifest.json",
    items: ["拡張設定・権限宣言（Manifest V3）"],
    description: "拡張設定",
  },
  {
    path: "popup.html",
    items: ["分割ボタンのUI（200px幅のシンプルなポップアップ）"],
    description: "ポップアップUI",
  },
  {
    path: "background.js",
    items: ["ウィンドウサイズ計算", "chrome.windows.create で分割配置"],
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
          開いているタブを画面分割表示する Chrome 拡張機能。ポップアップから 2分割・4分割を選ぶと、
          Chrome ウィンドウを均等サイズで自動配置する。インストールして1クリックで使える軽量ツール。
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
