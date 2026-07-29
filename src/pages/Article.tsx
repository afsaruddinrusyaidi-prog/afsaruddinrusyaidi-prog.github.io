import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock, Link2 } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { ArticleBody } from "@/components/ArticleBody"
import { getArticle, getSections } from "@/data/articles"
import { LATEST_INSIGHTS } from "@/data/content"
import { cn } from "@/lib/utils"

/** Thin flame rule across the top, tracking read position. */
function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden>
      <div
        className="h-full origin-left bg-flame transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

/** Highlights the section currently under the reader. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      // Band sits just under the fixed navbar, so a heading "activates" as it
      // reaches reading position rather than when it first appears.
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}

function ShareRow({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window === "undefined" ? "" : window.location.href

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* Clipboard blocked — the address bar still has the link. */
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-9 items-center gap-2 rounded-full border border-border bg-white px-4 text-xs font-semibold text-navy transition-colors hover:border-flame/40 hover:text-flame"
      >
        {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
        {copied ? "Link copied" : "Copy link"}
      </button>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share "${title}" on LinkedIn`}
        className="grid size-9 place-items-center rounded-full border border-border bg-white text-navy transition-colors hover:border-flame/40 hover:text-flame"
      >
        {/* Inline mark — lucide ships no LinkedIn glyph and icons.svg has no
            entry for it. */}
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-3.5">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
        </svg>
      </a>
    </div>
  )
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) return <Navigate to="/insights" replace />

  const sections = getSections(article)
  const related = LATEST_INSIGHTS.slice(0, 3)

  return (
    <>
      <ReadingProgress />

      {/* ══ Header — kicker, oversized headline, deck, byline rule ══ */}
      <header className="mx-auto max-w-7xl px-6 pt-28 sm:px-8 sm:pt-32">
        <Reveal>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-flame"
          >
            <ArrowLeft className="size-3.5" />
            Insights
          </Link>
        </Reveal>

        <div className="mt-8 max-w-4xl">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-flame">
              <span aria-hidden className="h-px w-8 bg-flame/70" />
              {article.kicker}
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {article.deck}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-y border-border py-5">
            <div className="flex items-center gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-cream">
                AR
              </span>
              <div>
                <p className="text-sm font-bold text-navy">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">
                  {article.author.role} · {article.author.meta}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <p className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span aria-hidden className="h-3 w-px bg-border" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {article.read}
                </span>
              </p>
              <ShareRow title={article.title} />
            </div>
          </div>
        </Reveal>
      </header>

      {/* ══ Body + sticky section rail ══ */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
        <div className="min-w-0">
          <ArticleBody blocks={article.blocks} />
        </div>

        <aside className="hidden lg:block">
          <SectionRail sections={sections} />
        </aside>
      </div>

      {/* ══ Sources ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        <div className="max-w-[68ch]">
          <Reveal>
            <h2 className="border-t border-border pt-8 text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
              Sources & Further Reading
            </h2>
          </Reveal>
          <ol className="mt-6 flex flex-col">
            {article.sources.map((source, i) => (
              <Reveal key={source.url} delay={i * 0.03}>
                <li className="flex gap-4 border-b border-border/70 py-4 last:border-0">
                  <span className="mt-0.5 w-6 shrink-0 text-xs font-bold tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-flame"
                    >
                      <span>{source.label}</span>
                      <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-flame" />
                    </a>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {source.publisher}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ Related ══ */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-8">
        <Reveal className="flex items-end justify-between gap-4 border-t border-border pt-8">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
            Related Insights
          </h2>
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-flame transition-opacity hover:opacity-70"
          >
            All articles <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {related.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-flame">
                  {item.tag}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {item.author} · {item.read}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

/** Sticky "On this page" index — Attio-style right rail. */
function SectionRail({ sections }: { sections: { id: string; text: string }[] }) {
  const active = useActiveSection(sections.map((s) => s.id))

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
        On this page
      </p>
      <ul className="mt-4 flex flex-col border-l border-border">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "-ml-px block border-l-2 py-2 pl-4 text-[13px] leading-snug transition-colors",
                active === section.id
                  ? "border-flame font-semibold text-navy"
                  : "border-transparent text-muted-foreground hover:text-navy",
              )}
            >
              {section.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
