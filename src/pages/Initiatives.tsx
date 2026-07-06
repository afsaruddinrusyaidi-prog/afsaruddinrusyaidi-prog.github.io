import type { ComponentType, CSSProperties } from "react"
import { Link } from "react-router-dom"
import {
  Activity,
  ArrowRight,
  Building2,
  CalendarDays,
  Clock,
  Coffee,
  FileText,
  Footprints,
  GraduationCap,
  HandHeart,
  Lightbulb,
  MessagesSquare,
  Play,
  TrendingUp,
  UsersRound,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { CountUp } from "@/components/CountUp"
import { Star } from "@/components/Decor"
import {
  ANNUAL_RHYTHM,
  COMMUNITY_ENGINE,
  CULTURE_SECTION,
  FLAGSHIP_FORMATS,
  INIT_CLOSING,
  INIT_STATS,
  INITIATIVES_HERO,
  RIPPLE_IMPACT,
} from "@/data/content"

type Icon = ComponentType<{ className?: string; style?: CSSProperties }>

// ─── Hero orbit cluster — six format cards around the ELA mark ───────────────
const ORBIT_CARDS: {
  label: string
  icon: Icon
  color: string
  image: string
  className: string
  dark?: boolean
}[] = [
  {
    label: "Brewed Insights",
    icon: Coffee,
    color: "#f4791f",
    image: "/media/gallery/life-talk.jpg",
    className: "left-[6%] top-[2%] w-[30%]",
  },
  {
    label: "Panel Discussions",
    icon: UsersRound,
    color: "#7a3fc9",
    image: "/media/insights/hero-panel.jpg",
    className: "right-[2%] top-[0%] w-[38%]",
    dark: true,
  },
  {
    label: "Upskilling Workshops",
    icon: GraduationCap,
    color: "#2456c4",
    image: "/media/gallery/init-workshop.jpg",
    className: "left-[33%] top-[26%] w-[34%]",
  },
  {
    label: "Speed Mentoring",
    icon: MessagesSquare,
    color: "#e0186e",
    image: "/media/gallery/hero-connect.jpg",
    className: "left-[2%] top-[48%] w-[28%]",
  },
  {
    label: "Pickleball Socials",
    icon: Activity,
    color: "#e0186e",
    image: "/media/gallery/life-activity.jpg",
    className: "right-[3%] top-[46%] w-[30%]",
  },
  {
    label: "Run & Makan",
    icon: Footprints,
    color: "#f4791f",
    image: "/media/gallery/hero-run.jpg",
    className: "left-[36%] top-[70%] w-[32%]",
  },
]

const STAT_STYLES = [
  { icon: UsersRound, tint: "bg-[#fdeee2] text-[#e0631d]", hex: "#e0631d" },
  { icon: CalendarDays, tint: "bg-[#f0e9fb] text-[#6f3ab8]", hex: "#6f3ab8" },
  { icon: GraduationCap, tint: "bg-[#e7effc] text-[#2456c4]", hex: "#2456c4" },
] as const

// Engine spokes + rhythm share the format iconography.
const SPOKE_ICONS: Icon[] = [Coffee, UsersRound, GraduationCap, MessagesSquare, HandHeart, Lightbulb]
const RHYTHM_ICONS: Icon[] = [Coffee, UsersRound, GraduationCap, MessagesSquare, Footprints, Activity]
const IMPACT_ICONS: Icon[] = [FileText, UsersRound, GraduationCap, TrendingUp, Building2]

// Spoke positions around the engine circle (desktop), clock order.
const SPOKE_POS = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-[3%] top-[22%]",
  "right-[0%] top-[64%]",
  "left-1/2 top-[92%] -translate-x-1/2",
  "left-[2%] top-[64%]",
  "left-[5%] top-[22%]",
]

function FormatChip({ icon: IconCmp, color }: { icon: Icon; color: string }) {
  return (
    <span
      className="inline-flex size-9 items-center justify-center rounded-full text-white shadow-md"
      style={{ backgroundColor: color }}
    >
      <IconCmp className="size-4.5" />
    </span>
  )
}

export default function Initiatives() {
  return (
    <>
      {/* ══ Hero — "The ecosystem doesn't grow by accident." ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {INITIATIVES_HERO.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-[3.3rem]">
              {INITIATIVES_HERO.headline[0]}
              <br />
              {INITIATIVES_HERO.headline[1]}
              <br />
              {INITIATIVES_HERO.headline[2]}{" "}
              <Star className="inline size-6 -translate-y-2 text-flame lg:size-7" />
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {INITIATIVES_HERO.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#flagships"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-bold text-white shadow-lg shadow-flame/25 transition-transform duration-300 hover:scale-[1.03]"
              >
                {INITIATIVES_HERO.primary}
                <ArrowRight className="size-4" />
              </a>
              <Link
                to="/media"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy"
              >
                {INITIATIVES_HERO.secondary}
                <span className="inline-flex size-8 items-center justify-center rounded-full border border-border">
                  <Play className="ml-0.5 size-3.5" fill="currentColor" />
                </span>
              </Link>
            </div>
          </Reveal>

          {/* Orbit cluster */}
          <Reveal delay={0.12}>
            <div className="relative mx-auto hidden aspect-[10/9] w-full max-w-xl sm:block">
              {/* Orbit ellipses */}
              <div
                aria-hidden
                className="absolute inset-x-[2%] inset-y-[8%] rounded-[50%] border border-flame/25"
                style={{ transform: "rotate(-8deg)" }}
              />
              <div
                aria-hidden
                className="absolute inset-x-[6%] inset-y-[3%] rounded-[50%] border border-[#7a3fc9]/25"
                style={{ transform: "rotate(7deg)" }}
              />
              {[
                { left: "1%", top: "42%", color: "#f4791f" },
                { left: "46%", top: "9%", color: "#7a3fc9" },
                { left: "97%", top: "34%", color: "#2456c4" },
                { left: "88%", top: "88%", color: "#e0186e" },
              ].map((dot) => (
                <span
                  key={dot.left + dot.top}
                  aria-hidden
                  className="absolute size-2.5 rounded-full"
                  style={{ left: dot.left, top: dot.top, backgroundColor: dot.color }}
                />
              ))}

              {ORBIT_CARDS.map((card) => (
                <div
                  key={card.label}
                  className={`absolute overflow-hidden rounded-2xl shadow-lg ${card.className}`}
                >
                  <div className="relative aspect-[5/4]">
                    <img
                      src={card.image}
                      alt={card.label}
                      className="absolute inset-0 size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 flex items-end gap-2">
                      <FormatChip icon={card.icon} color={card.color} />
                      <span className="pb-0.5 text-[13px] font-bold leading-tight text-white">
                        {card.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Centre ELA mark — sits in the gap between the format cards */}
              <span className="absolute left-[48%] top-[62%] inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
                <img src="/ELA-Logo.png" alt="ELA" className="size-9 object-contain" />
              </span>
            </div>

            {/* Mobile fallback — simple 2×3 grid */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {ORBIT_CARDS.map((card) => (
                <div key={card.label} className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
                  <span className="absolute bottom-2 left-2.5 text-xs font-bold text-white">
                    {card.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Stats strip ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-14 sm:px-8">
        <Reveal>
          <div className="grid gap-8 rounded-[28px] border border-border bg-white px-8 py-8 shadow-sm sm:grid-cols-3">
            {INIT_STATS.map((stat, i) => {
              const style = STAT_STYLES[i]
              const IconCmp = style.icon
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${i > 0 ? "sm:border-l sm:border-border sm:pl-8" : ""}`}
                >
                  <span
                    className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full ${style.tint}`}
                  >
                    <IconCmp className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-3xl font-extrabold" style={{ color: style.hex }}>
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </section>

      {/* ══ One community engine ══ */}
      <section className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {COMMUNITY_ENGINE.kicker}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl">
              {COMMUNITY_ENGINE.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              {COMMUNITY_ENGINE.body}
            </p>
          </Reveal>

          {/* Radial engine — desktop */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block">
              <div
                aria-hidden
                className="absolute inset-[12%] rounded-full border border-dashed border-navy/15"
              />
              <div
                aria-hidden
                className="absolute inset-[26%] rounded-full border border-dashed border-flame/20"
              />
              {/* Centre */}
              <div className="absolute left-1/2 top-1/2 flex size-52 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-xl">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-flame/10 text-flame">
                  <UsersRound className="size-5" />
                </span>
                <p className="mt-2 font-display text-base font-extrabold text-navy">
                  {COMMUNITY_ENGINE.center.title}
                </p>
                {COMMUNITY_ENGINE.center.lines.map((l) => (
                  <p key={l} className="text-[11px] leading-snug text-muted-foreground">
                    {l}
                  </p>
                ))}
              </div>
              {COMMUNITY_ENGINE.spokes.map((spoke, i) => {
                const IconCmp = SPOKE_ICONS[i]
                const alignRight = i === 1 || i === 2
                const alignLeft = i === 4 || i === 5
                return (
                  <div
                    key={spoke.label}
                    className={`absolute flex max-w-44 items-start gap-2.5 ${SPOKE_POS[i]} ${
                      alignRight ? "flex-row-reverse text-right" : ""
                    } ${alignLeft ? "" : ""}`}
                  >
                    <FormatChip icon={IconCmp} color={spoke.color} />
                    <div className="pt-0.5">
                      <p className="text-[13px] font-bold leading-tight text-navy">{spoke.label}</p>
                      <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                        {spoke.sub}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile fallback — list */}
            <ul className="space-y-4 lg:hidden">
              {COMMUNITY_ENGINE.spokes.map((spoke, i) => {
                const IconCmp = SPOKE_ICONS[i]
                return (
                  <li key={spoke.label} className="flex items-start gap-3">
                    <FormatChip icon={IconCmp} color={spoke.color} />
                    <div>
                      <p className="text-sm font-bold text-navy">{spoke.label}</p>
                      <p className="text-xs text-muted-foreground">{spoke.sub}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ══ The four flagship formats ══ */}
      <section id="flagships" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-20 sm:px-8">
        <Reveal>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#6d28d9]">
            The Four Flagship Formats
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {FLAGSHIP_FORMATS.map((f, i) => {
            const IconCmp = RHYTHM_ICONS[i]
            return (
              <Reveal key={f.name} delay={i * 0.06} className="h-full">
                <article
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-border"
                  style={{ backgroundColor: f.soft }}
                >
                  <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                    />
                    <span
                      className="absolute -bottom-0 left-3 inline-flex size-10 translate-y-1/3 items-center justify-center rounded-full text-white shadow-md"
                      style={{ backgroundColor: f.color }}
                    >
                      <IconCmp className="size-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <h3 className="font-display text-lg font-extrabold" style={{ color: f.color }}>
                      {f.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/75">{f.blurb}</p>
                    <dl className="mt-4 space-y-2 border-t border-navy/10 pt-4 text-[13px]">
                      {(
                        [
                          [CalendarDays, "Cadence", f.cadence],
                          [UsersRound, "Room Size", f.roomSize],
                          [Clock, "Duration", f.duration],
                        ] as const
                      ).map(([MIcon, k, v]) => (
                        <div key={k} className="flex items-center gap-2.5">
                          <MIcon className="size-4 shrink-0" style={{ color: f.color }} />
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="ml-auto font-semibold text-navy">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      to="/join"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold"
                      style={{ color: f.color }}
                    >
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ══ The annual rhythm ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <Reveal>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#6d28d9]">
            The Annual Rhythm
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-5 hidden border-t-2 border-dotted border-navy/15 sm:block"
            />
            <ol className="grid grid-cols-3 gap-y-10 sm:grid-cols-6">
              {ANNUAL_RHYTHM.months.map((m, i) => {
                const IconCmp = RHYTHM_ICONS[i]
                return (
                  <li key={m.month} className="relative flex flex-col items-center text-center">
                    <span
                      className="relative z-10 inline-flex h-10 items-center rounded-full px-5 text-xs font-extrabold uppercase tracking-wider"
                      style={{ backgroundColor: `${m.color}1a`, color: m.color }}
                    >
                      {m.month}
                    </span>
                    <IconCmp className="mt-5 size-7" style={{ color: m.color }} />
                    <p className="mt-2 max-w-[8rem] text-[13px] font-semibold leading-tight text-navy">
                      {m.label}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">{ANNUAL_RHYTHM.caption}</p>
        </Reveal>
      </section>

      {/* ══ The impact we create ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <div className="grid gap-10 rounded-[28px] border border-border bg-white p-8 shadow-sm lg:grid-cols-[240px_1fr] lg:p-10">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {RIPPLE_IMPACT.kicker}
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-[1.7rem]">
              {RIPPLE_IMPACT.headline[0]}
              <br />
              {RIPPLE_IMPACT.headline[1]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{RIPPLE_IMPACT.body}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {RIPPLE_IMPACT.stats.map((stat, i) => {
              const IconCmp = IMPACT_ICONS[i]
              return (
                <Reveal
                  key={stat.label}
                  delay={i * 0.05}
                  className={i > 0 ? "lg:border-l lg:border-border lg:pl-6" : ""}
                >
                  <IconCmp className="size-7" style={{ color: stat.color }} />
                  <p
                    className="mt-3 font-display text-3xl font-extrabold"
                    style={{ color: stat.color }}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[13px] font-medium leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ People & Culture ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {CULTURE_SECTION.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              {CULTURE_SECTION.headline[0]}
              <br />
              {CULTURE_SECTION.headline[1]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {CULTURE_SECTION.body}
            </p>
            <Link
              to="/join"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-flame"
            >
              {CULTURE_SECTION.link} <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {CULTURE_SECTION.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06} className="h-full">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                  <span
                    className="absolute left-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-white shadow-md"
                    style={{ backgroundColor: card.color }}
                  >
                    <HandHeart className="size-4.5" />
                  </span>
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="font-display text-base font-extrabold text-white">{card.title}</p>
                    <p className="mt-1 text-xs leading-snug text-white/80">{card.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Closing band ══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-navy">
            <img
              src="/media/insights/featured-thinking.jpg"
              alt=""
              aria-hidden
              className="absolute inset-y-0 right-0 hidden w-1/2 object-cover opacity-70 lg:block"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[#2a1657] via-[#3b1e6e]/95 to-transparent"
            />
            <div className="relative px-8 py-12 sm:px-12 lg:max-w-xl">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {INIT_CLOSING.headline[0]}
                <br />
                {INIT_CLOSING.headline[1]}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">{INIT_CLOSING.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/join"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-bold text-white shadow-lg shadow-flame/30 transition-transform duration-300 hover:scale-[1.03]"
                >
                  {INIT_CLOSING.primary}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/partnerships"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-7 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  {INIT_CLOSING.secondary}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
