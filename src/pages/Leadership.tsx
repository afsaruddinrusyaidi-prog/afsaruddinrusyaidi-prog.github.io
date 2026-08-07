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
import { photoUrl, useCommittee, type DepartmentCount } from "@/lib/committee"

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

/**
 * How full a department is, in words.
 *
 * A target turns the number into something a reader can judge — "4 of 7 seats
 * filled" says the department is short-handed, where a bare "4 members" reads
 * as complete. Without a target the open seats do the same job. A department
 * with no seats on record yet returns null and its card simply carries no
 * figure, which beats announcing zero.
 */
function seatLine(dept: DepartmentCount): string | null {
  if (dept.filled === 0 && dept.open === 0) return null
  if (dept.target !== null) return `${dept.filled} of ${dept.target} seats filled`
  if (dept.open > 0) return `${dept.filled} filled · ${dept.open} open`

  return dept.filled === 1 ? "1 member" : `${dept.filled} members`
}

/** One person in the grid, from either source. */
type RosterEntry = {
  key: string
  /** Null for hand-written names: no consent record, so no profile page. */
  slug: string | null
  name: string
  role: string
  dept: string
  photo: boolean
}

/**
 * A committee card.
 *
 * Published people get a portrait and a link to their profile. Everybody else
 * gets a monogram and no link — the card still introduces them, which is what
 * this page is for, but it does not imply a page that does not exist.
 */
function PersonCard({ person }: { person: RosterEntry }) {
  const src = person.slug ? photoUrl({ slug: person.slug, photo: person.photo }) : null

  const inner = (
    <>
      {src ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          className="size-12 shrink-0 rounded-full object-cover"
        />
      ) : (
        <Monogram name={person.name} className="size-12 shrink-0 text-sm" />
      )}
      <span className="min-w-0">
        <span className="block truncate text-sm font-bold leading-tight text-navy">
          {person.name}
        </span>
        <span className="mt-0.5 block truncate text-xs leading-tight text-muted-foreground">
          {person.role}
        </span>
        <span className="mt-1 block truncate text-[11px] uppercase tracking-wider text-muted-foreground/70">
          {person.dept}
        </span>
      </span>
    </>
  )

  if (!person.slug) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
        {inner}
      </div>
    )
  }

  return (
    <Link
      to={`/leadership/${person.slug}`}
      className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm transition-colors hover:border-navy/40"
    >
      {inner}
      <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  )
}

export default function Leadership() {
  const [query, setQuery] = useState("")
  const [dept, setDept] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const { people, numbers, departments: counted } = useCommittee()

  // Two sources, one shape. The live roster carries a slug and a consent
  // decision about the photo; the hand-written one carries neither, so its
  // entries get `slug: null` and render as plain cards with no link. Nobody in
  // `content.ts` agreed to a profile page, and a card that navigates nowhere is
  // better than one that invents a URL for them.
  const roster = useMemo<RosterEntry[]>(() => {
    if (people) {
      return people.map((p) => ({
        key: p.slug,
        slug: p.slug,
        name: p.name,
        role: p.title,
        dept: p.department ?? "Committee",
        photo: p.photo,
      }))
    }

    return DEPARTMENTS.flatMap((d) =>
      d.members.map((m) => ({
        key: `${d.label}-${m.name}`,
        slug: null,
        name: m.name,
        role: m.role,
        dept: d.label,
        photo: false,
      })),
    )
  }, [people])

  // The filter offers whatever the current source actually contains, so it
  // cannot list a department with nobody published in it.
  const departments = useMemo(
    () => [...new Set(roster.map((m) => m.dept))],
    [roster],
  )

  /**
   * How many people are on the committee.
   *
   * Counted off filled seats in the portal, which stays true when somebody
   * joins or leaves and is answerable even when nobody has published — a seat
   * count says nothing about any individual. The rendered roster is the last
   * resort. No number here is typed into a file, which is how "57" went on
   * being displayed long after the roster it described had changed.
   */
  const headcount = numbers?.committee || roster.length

  /**
   * Counted figures replace the written-down ones — but only where the portal
   * is genuinely counting something.
   *
   * Hours and projects come back as 0 until time has been approved and a
   * project marked done. A zero there means "not counted yet", not "none of
   * this happened", and "0 volunteer hours logged" across the front door would
   * be a worse untruth than the written figure it replaced. So a zero keeps the
   * written card and a real count takes over from it.
   *
   * "Shared mission" has no query behind it and never will — it is a statement,
   * not a measurement.
   */
  const stats = useMemo(() => {
    const written = LEAD_NUMBERS.map((s) => ({ ...s }))
    if (!numbers) return written

    const figure = (value: number, label: string, fallback: number) =>
      value > 0 ? { value, suffix: "", label } : written[fallback]

    return [
      figure(numbers.committee, "Committee members", 0),
      // The portal's department list, not the filter's. The filter can only
      // offer departments with somebody published in them, which is a smaller
      // number and not the one this card is claiming to state.
      figure(counted?.length ?? 0, "Departments", 1),
      figure(numbers.projects, "Projects delivered", 2),
      figure(numbers.hours, "Volunteer hours logged", 3),
      written[4],
    ]
  }, [numbers, counted])

  /**
   * The department cards.
   *
   * Driven off the portal's list, not off `content.ts`, so the set of cards is
   * whatever the committee actually runs. Artwork is looked up by code; a
   * department the portal reports but this site has no picture for still gets a
   * card, because leaving it out would hide a real department behind a missing
   * asset. When the portal cannot be reached the written cards render with no
   * count on them at all — a card without a number is honest, a card with an
   * invented one is not.
   */
  const deptCards = useMemo(() => {
    if (!counted) {
      return LEAD_DEPTS.map((d) => ({ ...d, title: d.name, count: null as string | null }))
    }

    return counted.map((dept) => {
      const art = LEAD_DEPTS.find((d) => d.code === dept.code)

      return {
        code: dept.code,
        title: dept.name,
        body: art?.body ?? "",
        image: art?.image ?? "/media/gallery/hero-briefing.jpg",
        color: art?.color ?? "#4a3f8f",
        count: seatLine(dept),
      }
    })
  }, [counted])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return roster.filter(
      (m) =>
        (dept === "All" || m.dept === dept) &&
        (!q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)),
    )
  }, [roster, query, dept])

  const searching = query.trim() !== "" || dept !== "All"
  const visible = showAll || searching ? filtered : filtered.slice(0, 12)

  // Count what is actually not being shown. The old figure subtracted from a
  // hard-coded 57, which drifts the moment somebody joins or leaves.
  const hiddenCount = filtered.length - visible.length

  return (
    <>
      {/* ══ Hero — "N leaders. One shared standard.", N counted at render ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {LEAD_HERO.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-[3.3rem]">
              {headcount} {LEAD_HERO.headline[0]}
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
        <div className="mt-6 grid max-w-3xl gap-5 sm:grid-cols-2">
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
            {stats.map((stat, i) => {
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
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {deptCards.map((d, i) => (
            <Reveal key={d.code} delay={i * 0.06} className="h-full">
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
                  {d.count && <p className="mt-3 text-xs font-bold text-white/70">{d.count}</p>}
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
            {/* Counted, not typed. This used to read "The 57 behind" and was
                still reading it while the portal held 26. */}
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              The {headcount} behind
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
                  {departments.map((d) => (
                    <option key={d}>{d}</option>
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
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {visible.map((m) => (
                  <PersonCard key={m.key} person={m} />
                ))}
              </div>
            )}

            {!searching && !showAll && hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:border-navy/40"
              >
                Show {hiddenCount} more <ArrowRight className="size-4" />
              </button>
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
