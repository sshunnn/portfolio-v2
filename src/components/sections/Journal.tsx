import Reveal from "@/components/Reveal";
import { posts } from "@/data/posts";

export default function Journal() {
  return (
    <section id="journal" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="label mb-4">Journal</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 font-serif text-4xl tracking-tight md:text-6xl">
            Notes &amp; <em>thoughts</em>
          </h2>
        </Reveal>

        {posts.length === 0 ? (
          <Reveal delay={0.15}>
            <div
              className="rounded-2xl px-8 py-16 text-center md:py-20"
              style={{
                background:
                  "linear-gradient(120deg, #f3e9ff 0%, #ffeedd 55%, #e3f4ea 100%)",
              }}
            >
              <p className="font-serif text-2xl italic text-ink/70 md:text-3xl">
                First entry in the making
              </p>
              <p className="mx-auto mt-5 max-w-md font-jp text-sm leading-loose text-ink/60">
                最初の記事を準備しています。技術メモや制作の裏側、考えたことをここに残していく予定です。
              </p>
            </div>
          </Reveal>
        ) : (
          <ul className="border-t border-line">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={0.06 * i}>
                <li className="group grid grid-cols-1 items-baseline gap-2 border-b border-line py-8 md:grid-cols-[10rem_1fr]">
                  <span className="text-xs text-muted">{post.date}</span>
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-jp text-sm text-muted">
                      {post.summary}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
