import { useMemo, useState } from "react"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  Coffee,
  FileText,
  MessagesSquare,
  Search,
  UsersRound,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { Star } from "@/components/Decor"
import {
  CONTRIBUTORS,
  EDITORIAL_COLLECTIONS,
  FEATURED_STORY,
  INSIGHT_ISSUES,
  INSIGHT_TOPICS,
  INSIGHTS_HERO,
  LATEST_INSIGHTS,
  MOST_READ,
  NEWSLETTER,
} from "@/data/content"
import { cn } from "@/lib/utils"

// Topic chip colours — tuned to the concept board's tag pills.
const TOPIC_COLORS: Record<string, string> = {
  Leadership: "#e0631d",
  "AI & Tech": "#6d28d9",
  "Future of Work": "#2456c4",
  Digital: "#1d7fb8",
  "ESG & Sustainability": "#3c7d2f",
  Career: "#c2410c",
  Community: "#e0186e",
  Finance: "#1d3f8f",
}

const COLLECTION_ICONS = [Coffee, UsersRound, BookOpen, FileText, MessagesSquare]

/** Initials monogram — used where the board shows an author avatar. */
function Monogram({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-flame/80 to-purple/80 font-display font-bold text-white",
        className,
      )}
    >
      {initials}
    </span>
  )
}

export default function Insights() {
  const [topic, setTopic] = useState<string>("All")
  const [query, setQuery] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const articles = useMemo(() => {
    const q = query.trim().toLowerCase()
    return LATEST_INSIGHTS.filter(
      (a) =>
        (topic === "All" || a.tag === topic) &&
        (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)),
    )
  }, [topic, query])

  return (
    <>
      {/* ══ Hero — "Ideas that outlive the room." + 2×2 moment tiles ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-flame">
              {INSIGHTS_HERO.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              {INSIGHTS_HERO.headline[0]}
              <br />
              {INSIGHTS_HERO.headline[1]}{" "}
              <Star className="inline size-6 -translate-y-2 text-flame lg:size-7" />
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {INSIGHTS_HERO.body}
            </p>
            <a
              href="#latest"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-bold text-white shadow-lg shadow-flame/25 transition-transform duration-300 hover:scale-[1.03]"
            >
              {INSIGHTS_HERO.cta}
              <ArrowRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {INSIGHTS_HERO.tiles.map((tile) => (
                <div key={tile.label} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={tile.image}
                    alt={tile.label}
                    className="absolute inset-0 size-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-sm font-bold text-white drop-shadow">
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Topic pills + search ══ */}
      <section id="latest" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-14 sm:px-8">
        <Reveal className="flex flex-wrap items-center gap-2">
          {INSIGHT_TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={cn(
                "inline-flex min-h-10 items-center rounded-full border px-5 text-sm font-semibold transition-colors duration-300",
                topic === t
                  ? "border-navy bg-navy text-cream"
                  : "border-border bg-white text-navy/70 hover:bg-cream-deep",
              )}
            >
              {t}
            </button>
          ))}
          <label className="relative ml-auto min-w-[220px] flex-1 sm:max-w-xs">
            <span className="sr-only">Search insights</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights..."
              className="h-11 w-full rounded-full border border-border bg-white pl-5 pr-11 text-sm text-navy outline-none transition-colors focus:border-navy/40"
            />
            <Search className="absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          </label>
        </Reveal>
      </section>

      {/* ══ Featured story ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-10 sm:px-8">
        <Reveal>
          <article className="grid overflow-hidden rounded-[28px] border border-border bg-white shadow-sm lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-64 lg:min-h-[420px]">
              <img
                src={FEATURED_STORY.image}
                alt={FEATURED_STORY.title.join(" ")}
                className="absolute inset-0 size-full object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-[#5b21b6] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">
                Featured Story
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em]">
                <span style={{ color: TOPIC_COLORS[FEATURED_STORY.tag] }}>{FEATURED_STORY.tag}</span>
                <span className="size-1 rounded-full bg-[#6d28d9]" />
                <span className="font-semibold normal-case tracking-normal text-muted-foreground">
                  {FEATURED_STORY.type}
                </span>
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                {FEATURED_STORY.title[0]}
                <br />
                {FEATURED_STORY.title[1]}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                {FEATURED_STORY.body}
              </p>
              <p className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" /> {FEATURED_STORY.read}
                </span>
                <span className="h-4 w-px bg-border" />
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" /> {FEATURED_STORY.date}
                </span>
              </p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <Monogram name={FEATURED_STORY.author.name} className="size-11 text-sm" />
                  <div>
                    <p className="text-sm font-bold text-navy">{FEATURED_STORY.author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {FEATURED_STORY.author.meta}
                      <br />
                      {FEATURED_STORY.author.role}
                    </p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#6d28d9]">
                  Read Article <ArrowRight className="size-4" />
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* ══ Latest insights ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-14 sm:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
            Latest Insights
          </h2>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]">
            View all articles <ArrowRight className="size-4" />
          </span>
        </Reveal>

        {articles.length === 0 ? (
          <Reveal className="mt-6">
            <p className="rounded-3xl border border-dashed border-border bg-white px-6 py-14 text-center text-sm text-muted-foreground">
              No articles in this stream yet — try another topic or clear the search.
            </p>
          </Reveal>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="relative aspect-[16/10]">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                    />
                    <span
                      className="absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white"
                      style={{ backgroundColor: TOPIC_COLORS[a.tag] ?? "#0b1321" }}
                    >
                      {a.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold leading-snug text-navy">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <span className="flex items-center gap-2 text-xs font-semibold text-navy">
                        <Monogram name={a.author} className="size-7 text-[10px]" />
                        {a.author}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3.5" /> {a.read}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* ══ Collections + contributors (left) · Most read (right) ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal>
              <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
                Editorial Collections
              </h2>
            </Reveal>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
              {EDITORIAL_COLLECTIONS.map((c, i) => {
                const Icon = COLLECTION_ICONS[i]
                return (
                  <Reveal key={c.title} delay={i * 0.05} className="h-full">
                    <div
                      className="flex h-full min-h-44 flex-col rounded-2xl p-4 text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      <Icon className="size-7" />
                      <p className="mt-3 font-display text-[15px] font-bold leading-snug">
                        {c.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/80">{c.blurb}</p>
                      <p className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-bold">
                        {c.count} <ArrowRight className="size-3.5" />
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal className="mt-12">
              <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
                Feature by Contributors
              </h2>
            </Reveal>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {CONTRIBUTORS.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.05} className="h-full">
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="size-14 shrink-0 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold leading-tight text-navy">{p.name}</p>
                      <p className="text-xs font-semibold text-[#6d28d9]">{p.topic}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                        {p.meta}
                      </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Most read sidebar */}
          <Reveal delay={0.1}>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
              Most Read This Month
            </h2>
            <ol className="mt-5 space-y-5">
              {MOST_READ.map((m, i) => (
                <li key={m.title} className="flex items-center gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-flame/10 font-display text-sm font-extrabold text-flame">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <img
                    src={m.image}
                    alt=""
                    className="size-14 shrink-0 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-navy">{m.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{m.read}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ══ Explore by issue ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
            Explore by Issue
          </h2>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]">
            View all issues <ArrowRight className="size-4" />
          </span>
        </Reveal>
        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {INSIGHT_ISSUES.map((issue, i) => (
            <Reveal key={issue.num} delay={i * 0.05}>
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={issue.image}
                  alt=""
                  className="absolute inset-0 size-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white/20" />
                <div className="relative p-5 pb-14">
                  <p className="text-xs font-bold text-[#6d28d9]">{issue.num}</p>
                  <p className="mt-1.5 font-display text-lg font-extrabold leading-tight text-navy">
                    {issue.title}
                  </p>
                  <p className="mt-6 text-xs font-semibold text-navy/70">{issue.meta}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ Newsletter band ══ */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-[28px] bg-navy px-7 py-8 lg:flex-row lg:gap-10">
            <img src="/ELA-Logo-white.png" alt="Emerging Leaders Asia" className="h-12 w-auto" />
            <div className="text-center lg:text-left">
              <p className="font-display text-xl font-extrabold text-white">{NEWSLETTER.title}</p>
              <p className="mt-1 text-sm text-white/70">{NEWSLETTER.sub}</p>
            </div>
            <form
              className="flex w-full max-w-md flex-1 items-center gap-3 lg:ml-auto"
              onSubmit={(e) => {
                e.preventDefault()
                setSubscribed(true)
              }}
            >
              {subscribed ? (
                <p className="w-full rounded-full bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white">
                  You're on the list — see you in the next issue.
                </p>
              ) : (
                <>
                  <label className="flex-1">
                    <span className="sr-only">Email address</span>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="h-12 w-full rounded-full border border-white/15 bg-white/95 px-5 text-sm text-navy outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex h-12 shrink-0 items-center rounded-full bg-flame px-6 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {NEWSLETTER.cta}
                  </button>
                </>
              )}
            </form>
          </div>
        </Reveal>
      </section>
    </>
  )
}
