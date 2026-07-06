import { useState, type ComponentType, type CSSProperties } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  GraduationCap,
  Landmark,
  Megaphone,
  Rocket,
  UsersRound,
  Wallet,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { CountUp } from "@/components/CountUp"
import { AlumniTicker } from "@/components/AlumniTicker"
import { Star } from "@/components/Decor"
import {
  NETWORK_RADIAL,
  PARTNER_CLOSING,
  PARTNER_HERO,
  PARTNER_STATS,
  PARTNER_TIERS,
  PARTNER_VOICES,
  PARTNER_WAYS,
} from "@/data/content"

type Icon = ComponentType<{ className?: string; style?: CSSProperties }>

const STAT_ICONS: Icon[] = [UsersRound, GraduationCap, Briefcase, Wallet]
const WAY_ICONS: Icon[] = [Briefcase, Megaphone, UsersRound]

// Radial community nodes — icon + position on the ring, clock order from 12.
const RADIAL_NODES: { icon: Icon; color: string; pos: string; labelSide: "top" | "right" | "bottom" | "left" }[] = [
  { icon: GraduationCap, color: "#e0631d", pos: "left-1/2 top-[4%] -translate-x-1/2", labelSide: "top" },
  { icon: GraduationCap, color: "#2456c4", pos: "left-[82%] top-[18%]", labelSide: "right" },
  { icon: UsersRound, color: "#c9195f", pos: "left-[95%] top-[50%]", labelSide: "right" },
  { icon: Rocket, color: "#e0186e", pos: "left-[82%] top-[82%]", labelSide: "right" },
  { icon: Briefcase, color: "#e0631d", pos: "left-1/2 top-[96%] -translate-x-1/2", labelSide: "bottom" },
  { icon: Landmark, color: "#3c7d2f", pos: "left-[18%] top-[82%]", labelSide: "left" },
  { icon: GraduationCap, color: "#6d28d9", pos: "left-[5%] top-[50%]", labelSide: "left" },
  { icon: Building2, color: "#1d7fb8", pos: "left-[18%] top-[18%]", labelSide: "left" },
]

/** Initials monogram for the alumni voices strip. */
function Monogram({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
  return (
    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-flame/80 to-purple/80 font-display text-sm font-bold text-white ring-2 ring-white/30">
      {initials}
    </span>
  )
}

export default function Partnerships() {
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* ══ Hero — "Hire from the room everyone wants into." ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-flame">
              {PARTNER_HERO.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-[3.3rem]">
              {PARTNER_HERO.headline[0]}
              <br />
              everyone wants{" "}
              <span className="whitespace-nowrap">
                into. <Star className="inline size-6 -translate-y-2 text-flame lg:size-7" />
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PARTNER_HERO.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#gateway"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-bold text-white shadow-lg shadow-flame/25 transition-transform duration-300 hover:scale-[1.03]"
              >
                {PARTNER_HERO.primary}
                <ArrowRight className="size-4" />
              </a>
              <a href="#tiers" className="inline-flex items-center gap-2 text-sm font-bold text-navy">
                {PARTNER_HERO.secondary}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

          {/* Collage — one wide tile over two smaller */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              <div className="relative col-span-5 aspect-[16/8] overflow-hidden rounded-[26px]">
                <img
                  src={PARTNER_HERO.tiles[0].image}
                  alt={PARTNER_HERO.tiles[0].label}
                  className="absolute inset-0 size-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">
                  {PARTNER_HERO.tiles[0].label}
                </span>
              </div>
              <div className="relative col-span-3 aspect-[16/10] overflow-hidden rounded-[26px]">
                <img
                  src={PARTNER_HERO.tiles[1].image}
                  alt={PARTNER_HERO.tiles[1].label}
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">
                  {PARTNER_HERO.tiles[1].label}
                </span>
              </div>
              <div className="relative col-span-2 aspect-[16/13] overflow-hidden rounded-[26px]">
                <img
                  src={PARTNER_HERO.tiles[2].image}
                  alt={PARTNER_HERO.tiles[2].label}
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">
                  {PARTNER_HERO.tiles[2].label}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Stats strip ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-14 sm:px-8">
        <Reveal>
          <div className="grid gap-8 rounded-[28px] border border-border bg-white px-8 py-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_STATS.map((stat, i) => {
              const IconCmp = STAT_ICONS[i]
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${i > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`}
                >
                  <span
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${stat.color}18`, color: stat.color }}
                  >
                    <IconCmp className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold sm:text-[1.6rem]" style={{ color: stat.color }}>
                      <CountUp value={stat.value} prefix={"prefix" in stat ? (stat.prefix as string) : ""} suffix={stat.suffix} />
                    </p>
                    <p className="mt-0.5 text-[13px] font-medium leading-snug text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </section>

      {/* ══ Network radial ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {NETWORK_RADIAL.kicker}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl">
              {NETWORK_RADIAL.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              {NETWORK_RADIAL.body}
            </p>
            <Link
              to="/ecosystem"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]"
            >
              {NETWORK_RADIAL.link} <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Desktop radial */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[540px] lg:block">
              <div
                aria-hidden
                className="absolute inset-[10%] rounded-full border border-dashed border-navy/15"
              />
              <div
                aria-hidden
                className="absolute inset-[24%] rounded-full border border-dashed border-flame/20"
              />
              <div className="absolute left-1/2 top-1/2 flex size-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
                <img src="/ELA-Logo.png" alt="Emerging Leaders Asia" className="h-16 w-auto object-contain" />
              </div>
              {NETWORK_RADIAL.nodes.map((node, i) => {
                const cfg = RADIAL_NODES[i]
                const IconCmp = cfg.icon
                return (
                  <div key={node} className={`absolute -translate-y-1/2 ${cfg.pos}`}>
                    <div
                      className={`flex items-center gap-2 ${
                        cfg.labelSide === "left" ? "flex-row-reverse -translate-x-full" : ""
                      } ${cfg.labelSide === "top" ? "flex-col" : ""} ${
                        cfg.labelSide === "bottom" ? "flex-col-reverse" : ""
                      }`}
                    >
                      <span
                        className="inline-flex size-11 items-center justify-center rounded-full bg-white shadow-md"
                        style={{ color: cfg.color }}
                      >
                        <IconCmp className="size-5" />
                      </span>
                      <span className="whitespace-nowrap text-[13px] font-bold text-navy">
                        {node}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile fallback — chip cloud */}
            <div className="flex flex-wrap gap-2 lg:hidden">
              {NETWORK_RADIAL.nodes.map((node, i) => (
                <span
                  key={node}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[13px] font-bold text-navy"
                >
                  <span className="size-2 rounded-full" style={{ backgroundColor: RADIAL_NODES[i].color }} />
                  {node}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Alumni firms ticker ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        <Reveal>
          <div className="rounded-[28px] border border-border bg-white px-4 py-6 shadow-sm">
            <AlumniTicker />
          </div>
        </Reveal>
      </section>

      {/* ══ Three ways in ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Where to Partner
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              Three ways into
              <br />
              the network.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {PARTNER_WAYS.map((way, i) => {
              const IconCmp = WAY_ICONS[i]
              return (
                <Reveal key={way.title} delay={i * 0.06} className="h-full">
                  <article
                    className="flex h-full flex-col rounded-3xl border border-border p-6"
                    style={{ backgroundColor: way.soft }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-flex size-9 items-center justify-center rounded-full bg-white font-display text-sm font-extrabold shadow-sm"
                        style={{ color: way.color }}
                      >
                        {way.num}
                      </span>
                      <IconCmp className="size-6" style={{ color: way.color }} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-extrabold text-navy">{way.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/70">{way.body}</p>
                    <a
                      href="#gateway"
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold"
                      style={{ color: way.color }}
                    >
                      Learn more <ArrowRight className="size-4" />
                    </a>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ Partnership tiers ══ */}
      <section id="tiers" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Partnership Tiers
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy">
              Pick the depth of
              <br />
              the relationship.
            </h2>
          </Reveal>
          <div className="grid items-start gap-5 sm:grid-cols-3">
            {PARTNER_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.06} className="relative">
                {tier.best && (
                  <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-flame px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white shadow-md">
                    Best Value
                  </span>
                )}
                <article
                  className={`flex flex-col rounded-3xl border bg-white p-6 ${
                    tier.best ? "border-2 shadow-lg" : "border-border shadow-sm"
                  }`}
                  style={tier.best ? { borderColor: `${tier.accent}66` } : undefined}
                >
                  <span className="text-xs font-extrabold" style={{ color: tier.accent }}>
                    {tier.num}
                  </span>
                  <h3 className="mt-1.5 font-display text-2xl font-extrabold" style={{ color: tier.accent }}>
                    {tier.name}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm leading-snug text-navy/80">
                        <Check className="mt-0.5 size-4 shrink-0" style={{ color: tier.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#gateway"
                    className={`mt-6 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border text-sm font-bold transition-transform duration-300 hover:scale-[1.02] ${
                      tier.best ? "text-white" : ""
                    }`}
                    style={
                      tier.best
                        ? { backgroundColor: tier.accent, borderColor: tier.accent }
                        : { color: tier.accent, borderColor: `${tier.accent}55` }
                    }
                  >
                    Start the conversation <ArrowRight className="size-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Alumni impact band ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-navy px-8 py-10 sm:px-10">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-[#2a1657]/90 via-transparent to-flame/15"
            />
            <div className="relative grid gap-10 lg:grid-cols-[230px_1fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-flame">
                  {PARTNER_VOICES.kicker}
                </p>
                <h2 className="mt-3 font-display text-[1.65rem] font-extrabold leading-tight text-white">
                  {PARTNER_VOICES.headline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <Link
                  to="/ecosystem"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-flame"
                >
                  {PARTNER_VOICES.link} <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                {PARTNER_VOICES.quotes.map((q) => (
                  <figure key={q.name}>
                    <div className="flex items-center gap-3">
                      <Monogram name={q.name} />
                      <figcaption>
                        <p className="text-sm font-bold text-white">{q.name}</p>
                        <p className="text-[11px] leading-snug text-white/60">
                          {q.meta}
                          <br />
                          {q.role}
                        </p>
                      </figcaption>
                    </div>
                    <blockquote className="mt-3 text-sm leading-relaxed text-white/85">
                      “{q.quote}”
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ B2B gateway closing ══ */}
      <section id="gateway" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-flame">
              {PARTNER_CLOSING.kicker}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              {PARTNER_CLOSING.headline[0]}
              <br />
              {PARTNER_CLOSING.headline[1]}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {PARTNER_CLOSING.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#3b1e6e] to-[#1a2540] p-8 sm:p-10">
              <img
                src="/media/insights/featured-thinking.jpg"
                alt=""
                aria-hidden
                className="absolute inset-0 size-full object-cover opacity-25"
              />
              <div className="relative">
                <h3 className="font-display text-xl font-extrabold text-white">
                  {PARTNER_CLOSING.card.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/75">{PARTNER_CLOSING.card.sub}</p>
                <form
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  {sent ? (
                    <p className="w-full rounded-full bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white">
                      Thanks — our team will be in touch within 1 working day.
                    </p>
                  ) : (
                    <>
                      <label className="flex-1">
                        <span className="sr-only">Work email</span>
                        <input
                          type="email"
                          required
                          placeholder="Your work email"
                          className="h-12 w-full rounded-full border border-white/15 bg-white/95 px-5 text-sm text-navy outline-none"
                        />
                      </label>
                      <button
                        type="submit"
                        className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-flame px-6 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.03]"
                      >
                        {PARTNER_CLOSING.card.cta}
                        <ArrowRight className="size-4" />
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  )
}
