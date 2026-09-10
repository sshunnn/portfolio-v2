import Link from "next/link";

type Props = {
  title: string;
  date: string;
  tags: string[];
  children: React.ReactNode;
};

export default function JournalDetailLayout({ title, date, tags, children }: Props) {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-3xl px-6 pb-32 pt-32 md:px-8 md:pt-40">
        <Link
          href="/#journal"
          className="label mb-12 inline-flex items-center gap-2 transition-colors hover:text-ink"
        >
          ← Journal
        </Link>

        <div className="mb-10 border-b border-line pb-10">
          <p className="label mb-4">{date}</p>
          <h1 className="mb-6 font-serif text-4xl italic tracking-tight md:text-5xl">{title}</h1>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="journal-content font-jp text-base leading-loose text-ink/85">
          {children}
        </div>
      </div>
    </main>
  );
}
