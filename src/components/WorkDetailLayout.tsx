import Link from "next/link";

type Props = {
  title: string;
  gradient: string;
  year: string;
  role: string;
  stack: string;
  githubUrl?: string;
  liveUrl?: string;
  children: React.ReactNode;
};

export default function WorkDetailLayout({
  title,
  gradient,
  year,
  role,
  stack,
  githubUrl,
  liveUrl,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-4xl px-6 pb-32 pt-32 md:px-8 md:pt-40">

        {/* back */}
        <Link
          href="/#works"
          className="label mb-12 inline-flex items-center gap-2 transition-colors hover:text-ink"
        >
          ← Works
        </Link>

        {/* hero */}
        <div
          className="mb-16 flex aspect-[3/1] items-end rounded-2xl p-8"
          style={{ background: gradient }}
        >
          <h1 className="font-serif text-4xl italic tracking-tight text-ink/80 md:text-6xl">
            {title}
          </h1>
        </div>

        {/* meta row */}
        <div className="mb-16 flex flex-wrap gap-x-10 gap-y-4 border-b border-line pb-10">
          <div>
            <p className="label mb-1">Year</p>
            <p className="font-jp text-sm">{year}</p>
          </div>
          <div>
            <p className="label mb-1">Role</p>
            <p className="font-jp text-sm">{role}</p>
          </div>
          <div>
            <p className="label mb-1">Stack</p>
            <p className="font-jp text-sm">{stack}</p>
          </div>
        </div>

        {/* external link buttons */}
        {(githubUrl || liveUrl) && (
          <div className="mb-16 flex flex-wrap gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 font-jp text-sm text-muted transition-colors hover:border-ink hover:text-ink"
              >
                ↗ GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 font-jp text-sm text-bg transition-opacity hover:opacity-75"
              >
                ↗ Live
              </a>
            )}
          </div>
        )}

        {children}
      </div>
    </main>
  );
}
