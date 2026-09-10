import type { Metadata } from "next";
import JournalDetailLayout from "@/components/JournalDetailLayout";

export const metadata: Metadata = {
  title: "Python データサイエンス Day 1 — Shun",
  description:
    "NumPy・Pandas・Matplotlib の基礎を学んだ記録。配列操作・DataFrame・グラフ描画まで手を動かしながら理解した内容をまとめる。",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <p className="label mb-4">{label}</p>
      {children}
    </section>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-xl border border-line bg-ink/[0.03] px-6 py-5 font-mono text-sm leading-relaxed text-ink/80">
      <code>{code.trim()}</code>
    </pre>
  );
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div className="mb-6 rounded-xl border border-line p-6">
      <p className="mb-3 font-serif text-base italic text-accent">Q. {q}</p>
      <p className="text-sm leading-loose text-muted">A. {a}</p>
    </div>
  );
}

export default function PythonDataScienceDay1() {
  return (
    <JournalDetailLayout
      title="Python データサイエンス Day 1"
      date="2026-09-11"
      tags={["Python", "NumPy", "Pandas", "Matplotlib", "データ分析"]}
    >
      <Section label="Overview">
        <p>
          Jupyter Notebook 環境でデータサイエンスの定番ライブラリ——NumPy・Pandas・Matplotlib——の基礎を一通り触った。
          環境は <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-xs">venv</code> で構築し、
          サンプルデータを自分で作りながら各ライブラリの感触をつかんでいった。
        </p>
      </Section>

      <Section label="1. NumPy — 配列と統計操作">
        <p className="mb-4">
          NumPy は数値計算の基盤ライブラリ。Python のリストを
          <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-xs">np.array()</code> で変換すると、
          ベクトル演算や統計関数が高速に使えるようになる。
        </p>
        <CodeBlock
          code={`import numpy as np

data = [10, 20, 30, 40, 50]
arr = np.array(data)

print("合計:", arr.sum())   # 150
print("平均:", arr.mean())  # 30.0
print("最大:", arr.max())   # 50`}
        />
        <p>
          <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-xs">.sum()</code>・
          <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-xs">.mean()</code>・
          <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-xs">.max()</code> などのメソッドが配列オブジェクトに生えているのが特徴。
          for ループを書かずに集計できるのが強み。
        </p>
      </Section>

      <Section label="2. Pandas — DataFrame でデータを扱う">
        <p className="mb-4">
          Pandas の中心概念は <strong>DataFrame</strong>——Excel のスプレッドシートに近い、列名付きの二次元テーブル。
          辞書を渡すだけで作れる。
        </p>
        <CodeBlock
          code={`import pandas as pd

df = pd.DataFrame({
    "名前":  ["Alice", "Bob", "Charlie"],
    "年齢":  [25, 30, 22],
    "スコア": [88, 95, 70],
})

df`}
        />
        <p className="mb-6">出力：</p>
        <CodeBlock
          code={`      名前  年齢  スコア
0    Alice   25     88
1      Bob   30     95
2  Charlie   22     70`}
        />

        <p className="mb-2 font-semibold">describe() — 基本統計量を一発表示</p>
        <CodeBlock code={`df.describe()`} />
        <p className="mb-4">
          数値列の count・mean・std（標準偏差）・min・25%・50%・75%・max を一度に出力してくれる。
          <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-xs">include=&quot;all&quot;</code> を渡すと文字列列も含めて集計する（unique・top・freq が追加される）。
        </p>

        <p className="mb-2 font-semibold">条件フィルタリング</p>
        <CodeBlock
          code={`# スコアが 80 以上の行だけ抽出
df[df["スコア"] >= 80]
#       名前  年齢  スコア
# 0  Alice   25     88
# 1    Bob   30     95`}
        />

        <p className="mb-2 font-semibold">CSV の読み書き</p>
        <CodeBlock
          code={`df.to_csv("sample.csv", index=False)   # 保存
df2 = pd.read_csv("sample.csv")        # 読み込み`}
        />
      </Section>

      <Section label="3. Matplotlib — グラフを描く">
        <p className="mb-4">
          Pandas DataFrame のデータをそのまま渡して棒グラフを描画できる。
          Jupyter 上では <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-xs">plt.show()</code> でセル内にインライン表示される。
        </p>
        <CodeBlock
          code={`import matplotlib.pyplot as plt

plt.bar(df["名前"], df["スコア"])
plt.title("スコア比較")
plt.show()`}
        />
      </Section>

      <Section label="4. 自作関数でまとめる">
        <p className="mb-4">
          繰り返し使う集計処理を関数化するとコードが整理される。
          DataFrame を引数にとって必要な値だけ出力する例：
        </p>
        <CodeBlock
          code={`def analyze(dataframe):
    print("平均スコア:", dataframe["スコア"].mean())
    print("最高スコア:", dataframe["スコア"].max())
    print("最低スコア:", dataframe["スコア"].min())

analyze(df)
# 平均スコア: 84.33...
# 最高スコア: 95
# 最低スコア: 70`}
        />
      </Section>

      <Section label="Q &amp; A — 疑問と答え">
        <QA
          q="np.array と Python のリストの違いは何？"
          a="リストは汎用コンテナで要素に何でも入る。np.array は同一型の数値に特化しており、C 言語レベルの連続メモリで保持するため演算が高速。また +・*・/ などの演算子が「要素ごとの計算」として機能する（リストの + は連結になる）。"
        />
        <QA
          q="describe() で出る std（標準偏差）って何を表している？"
          a="データのばらつき具合。std が大きいほど値が平均から離れたものが多い。今回のスコアデータでは std ≈ 12.9 → 平均84点から上下13点くらいのばらつきがある、と読む。"
        />
        <QA
          q="describe(include='all') をつけると何が変わる？"
          a="デフォルトの describe() は数値列だけ集計する。include='all' を渡すと文字列列（カテゴリ列）も含め、unique（ユニーク数）・top（最頻値）・freq（最頻値の出現回数）が追加される。"
        />
        <QA
          q="DataFrame のフィルタリングで df[df['列'] >= 値] という書き方をするのはなぜ？"
          a="df['スコア'] >= 80 は各行が条件を満たすかどうかの True/False の Series を返す。それを df[ ] に渡すと、True の行だけを取り出すブールインデックスという仕組み。"
        />
        <QA
          q="to_csv に index=False を渡す理由は？"
          a="渡さないと DataFrame の行番号（0, 1, 2 …）が CSV の最初の列として書き出されてしまう。index=False で行番号列を省いた状態で保存できる。"
        />
      </Section>

      <Section label="Next">
        <ul className="list-inside list-disc space-y-2 text-sm text-muted">
          <li>NumPy の多次元配列・ブロードキャスト</li>
          <li>Pandas の groupby・merge・pivot_table</li>
          <li>Matplotlib でのグラフカスタマイズ（色・ラベル・複数グラフ）</li>
          <li>実データ（CSV）を使った探索的データ解析（EDA）</li>
        </ul>
      </Section>
    </JournalDetailLayout>
  );
}
