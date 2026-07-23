import { useMemo, useState, type ComponentType } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Globe,
  Heart,
  Layers,
  Play,
  Quote,
  Search,
  ShieldCheck,
  Star as StarIcon,
  UsersRound,
  Zap,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { CountUp } from "@/components/CountUp"
import {
  DEPARTMENTS,
  LEAD_CLOSING,
  LEAD_DEPTS,
  LEAD_FLOW,
  LEAD_HERO,
  LEAD_NUMBERS,
  LEAD_QUOTES,
  EXEC_CARDS,
  VALUES,
} from "@/data/content"
import { cn } from "@/lib/utils"

type Icon = ComponentType<{ className?: string }>

// Values row — mockup icon + tint per principle, order matches VALUES.
const VALUE_STYLES: { icon: Icon; color: string; soft: string }[] = [
  { icon: ShieldCheck, color: "#e0631d", soft: "#fdeee2" },
  { icon: Heart, color: "#e0186e", soft: "#fbe7f0" },
  { icon: Zap, color: "#7a3fc9", soft: "#f0e9fb" },
]

const FLOW_COLORS = ["#f4791f", "#e0186e", "#7a3fc9", "#2456c4", "#3c7d2f"]
const FLOW_ICONS: Icon[] = [UsersRound, UsersRound, UsersRound, UsersRound, Globe]
const NUMBER_ICONS: Icon[] = [UsersRound, Layers, StarIcon, Zap, Globe]

/** Simple LinkedIn glyph — lucide carries no brand icons. */
function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.57 0 5.42 3.01 5.42 6.92V23h-4.52v-7.12c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23H8.34V8.31z" />
    </svg>
  )
}

/** Initials monogram for the roster row. */
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
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-flame/75 to-purple/75 font-display font-bold text-white",
        className,
      )}
    >
      {initials}
    </span>
  )
}

const COMMITTEE_TOTAL = 57

export default function Leadership() {
  const [query, setQuery] = useState("")
  const [dept, setDept] = useState("All")
  const [showAll, setShowAll] = useState(false)

  // Flatten the real roster (executive board included) for the search row.
  const roster = useMemo(
    () =>
      DEPARTMENTS.flatMap((d) =>
        d.members.map((m) => ({ ...m, dept: d.label })),
      ),
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return roster.filter(
      (m) =>
        (dept === "All" || m.dept === dept) &&
        (!q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)),
    )
  }, [roster, query, dept])

  const searching = query.trim() !== "" || dept !== "All"
  const visible = showAll || searching ? filtered : filtered.slice(0, 9)
  const hiddenCount = COMMITTEE_TOTAL - visible.length

  return (
    <>
      {/* ══ Hero — "57 leaders. One shared standard." ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {LEAD_HERO.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-[3.3rem]">
              {LEAD_HERO.headline[0]}
              <br />
              One shared <span className="text-flame">standard.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {LEAD_HERO.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#board"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-bold text-white shadow-lg shadow-flame/25 transition-transform duration-300 hover:scale-[1.03]"
              >
                {LEAD_HERO.primary}
                <ArrowRight className="size-4" />
              </a>
              <Link to="/media" className="inline-flex items-center gap-2 text-sm font-bold text-navy">
                {LEAD_HERO.secondary}
                <span className="inline-flex size-8 items-center justify-center rounded-full border border-border">
                  <Play className="ml-0.5 size-3.5" fill="currentColor" />
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[50%] border border-flame/25"
                style={{ transform: "rotate(-6deg)" }}
              />
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[50%] border border-[#7a3fc9]/25"
                style={{ transform: "rotate(5deg)" }}
              />
              {[
                { left: "-2%", top: "38%", color: "#f4791f" },
                { left: "99%", top: "26%", color: "#7a3fc9" },
                { left: "88%", top: "99%", color: "#e0186e" },
              ].map((dot) => (
                <span
                  key={dot.left}
                  aria-hidden
                  className="absolute z-10 size-2.5 rounded-full"
                  style={{ left: dot.left, top: dot.top, backgroundColor: dot.color }}
                />
              ))}
              <img
                src={LEAD_HERO.image}
                alt="The ELA committee gathered around a table"
                className="relative aspect-[16/11] w-full rounded-[28px] object-cover shadow-xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Our values ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Our Values
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              The principles
              <br />
              that guide
              <br />
              every decision.
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {VALUES.map((v, i) => {
              const style = VALUE_STYLES[i]
              const IconCmp = style.icon
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <span
                    className="inline-flex size-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: style.soft, color: style.color }}
                  >
                    <IconCmp className="size-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ How ELA works — flow ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {LEAD_FLOW.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              {LEAD_FLOW.headline[0]}
              <br />
              {LEAD_FLOW.headline[1]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{LEAD_FLOW.body}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <ol className="grid grid-cols-2 gap-y-8 sm:grid-cols-5">
              {LEAD_FLOW.steps.map((step, i) => {
                const IconCmp = FLOW_ICONS[i]
                return (
                  <li key={step} className="relative flex flex-col items-center text-center">
                    {i < LEAD_FLOW.steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-[calc(50%+2.6rem)] right-[calc(-50%+2.6rem)] top-8 hidden border-t-2 border-dotted border-navy/20 sm:block"
                      />
                    )}
                    <span
                      className="inline-flex size-16 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${FLOW_COLORS[i]}14`, color: FLOW_COLORS[i] }}
                    >
                      <IconCmp className="size-6" />
                    </span>
                    <p className="mt-3 max-w-[7.5rem] text-[13px] font-bold leading-tight text-navy">
                      {step}
                    </p>
                  </li>
                )
              })}
            </ol>
            <p className="mt-8 border-t border-dashed border-navy/15 pt-4 text-center text-sm text-muted-foreground">
              {LEAD_FLOW.caption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ Executive board ══ */}
      <section id="board" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-20 sm:px-8">
        <Reveal>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#6d28d9]">
            Executive Board
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {EXEC_CARDS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06} className="h-full">
              <article className="flex h-full min-h-60 flex-col rounded-3xl bg-gradient-to-br from-navy-700 to-navy p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className="text-[11px] font-extrabold uppercase tracking-[0.16em]"
                      style={{ color: m.roleColor }}
                    >
                      {m.role}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-extrabold text-white">
                      {m.name}
                    </h3>
                  </div>
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="size-16 shrink-0 rounded-2xl object-cover ring-2 ring-white/15"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-white/70">{m.blurb}</p>
                <span className="mt-auto inline-flex size-8 items-center justify-center rounded-md bg-white/10 text-white/80">
                  <LinkedInGlyph className="size-4" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ Leadership by the numbers ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-14 sm:px-8">
        <Reveal>
          <div className="grid gap-8 rounded-[28px] border border-border bg-white px-8 py-8 shadow-sm sm:grid-cols-3 lg:grid-cols-[200px_repeat(5,1fr)] lg:items-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6d28d9]">
              Leadership
              <br />
              by the Numbers
            </p>
            {LEAD_NUMBERS.map((stat, i) => {
              const IconCmp = NUMBER_ICONS[i]
              return (
                <div key={stat.label} className={i > 0 ? "lg:border-l lg:border-border lg:pl-6" : ""}>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#f0e9fb] text-[#6f3ab8]">
                    <IconCmp className="size-4.5" />
                  </span>
                  <p className="mt-2 font-display text-2xl font-extrabold text-navy">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-0.5 text-xs font-medium leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </section>

      {/* ══ Our departments ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#6d28d9]">
            Our Departments
          </h2>
          <a href="#committee" className="inline-flex items-center gap-1.5 text-sm font-bold text-navy">
            Explore departments <ArrowRight className="size-4" />
          </a>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {LEAD_DEPTS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06} className="h-full">
              <article className="relative flex aspect-[4/3.4] flex-col overflow-hidden rounded-3xl">
                <img
                  src={d.image}
                  alt={d.title}
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-navy/15" />
                <div className="relative flex flex-1 flex-col p-5">
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-full text-white shadow-md"
                    style={{ backgroundColor: d.color }}
                  >
                    <UsersRound className="size-4.5" />
                  </span>
                  <h3 className="mt-auto font-display text-xl font-extrabold text-white">{d.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-white/80">{d.body}</p>
                  <p className="mt-3 text-xs font-bold text-white/70">{d.members}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ Meet the committee ══ */}
      <section id="committee" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Meet the Committee
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              The 57 behind
              <br />
              every initiative.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center gap-3">
              <label className="relative min-w-56 flex-1">
                <span className="sr-only">Search by name or role</span>
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name or role..."
                  className="h-11 w-full rounded-full border border-border bg-white pl-11 pr-5 text-sm text-navy outline-none transition-colors focus:border-navy/40"
                />
              </label>
              <label>
                <span className="sr-only">Filter by department</span>
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="h-11 rounded-full border border-border bg-white px-5 text-sm font-semibold text-navy outline-none"
                >
                  <option>All</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d.id}>{d.label}</option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-navy bg-navy px-6 text-sm font-bold text-cream transition-colors hover:bg-navy-700"
              >
                {showAll ? "Show less" : "View all"} <ArrowRight className="size-4" />
              </button>
            </div>

            {visible.length === 0 ? (
              <p className="mt-6 rounded-3xl border border-dashed border-border bg-white px-6 py-10 text-center text-sm text-muted-foreground">
                No committee members match — try another name or department.
              </p>
            ) : (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {visible.map((m) => (
                  <span
                    key={`${m.dept}-${m.name}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white py-1.5 pl-1.5 pr-4 shadow-sm"
                  >
                    <Monogram name={m.name} className="size-9 text-xs" />
                    <span>
                      <span className="block text-[13px] font-bold leading-tight text-navy">
                        {m.name}
                      </span>
                      <span className="block text-[11px] leading-tight text-muted-foreground">
                        {m.role}
                      </span>
                    </span>
                  </span>
                ))}
                {!searching && !showAll && hiddenCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="inline-flex size-12 items-center justify-center rounded-full bg-cream-deep text-xs font-extrabold text-navy"
                  >
                    +{hiddenCount}
                  </button>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ══ Our culture ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[260px_1fr_320px]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Our Culture
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              Leadership is how
              <br />
              we show up together.
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {LEAD_QUOTES.map((q, i) => (
              <Reveal key={q.name} delay={i * 0.06}>
                <Quote className="size-5 text-[#6d28d9]" fill="currentColor" />
                <blockquote className="mt-3 text-sm font-semibold leading-relaxed text-navy">
                  “{q.quote}”
                </blockquote>
                <p className="mt-2 text-xs text-muted-foreground">– {q.name}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <img
                src="/media/gallery/hero-community.jpg"
                alt="The ELA community gathered outdoors"
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-base font-extrabold leading-tight text-white">
                Real people.
                <br />
                Real moments.
                <br />
                Real impact.
              </p>
              <span className="absolute bottom-4 right-4 inline-flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                <Play className="ml-0.5 size-4" fill="currentColor" />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Recruiting band ══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-navy">
            <img
              src="/media/insights/featured-thinking.jpg"
              alt=""
              aria-hidden
              className="absolute inset-y-0 right-0 hidden w-1/2 object-cover opacity-60 lg:block"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[#2a1657] via-[#33195f]/95 to-transparent"
            />
            <div className="relative grid items-center gap-8 px-8 py-12 sm:px-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#c4b5fd]">
                  {LEAD_CLOSING.kicker}
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {LEAD_CLOSING.headline[0]}
                  <br />
                  {LEAD_CLOSING.headline[1]}
                </h2>
              </div>
              <div>
                <p className="text-[15px] leading-relaxed text-white/85">{LEAD_CLOSING.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/join"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-bold text-white shadow-lg shadow-flame/30 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {LEAD_CLOSING.primary}
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/media"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-7 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10"
                  >
                    {LEAD_CLOSING.secondary}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
