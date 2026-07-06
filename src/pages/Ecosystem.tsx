import { Fragment, type ReactNode } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Banknote,
  BookOpen,
  Briefcase,
  CalendarDays,
  ChevronDown,
  GraduationCap,
  Laptop,
  LayoutGrid,
  Globe,
  Share2,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { CountUp } from "@/components/CountUp"
import { Star } from "@/components/Decor"
import {
  ALUMNI_NETWORK,
  BY_THE_NUMBERS,
  CONTINUUM_CLOSING,
  CONTINUUM_HERO,
  GATEWAYS,
  JOURNEY,
} from "@/data/content"

// ─── Per-pathway palette (saturated block + soft tint), keyed by acronym ─────
const PATHWAY_COLORS: Record<string, { block: string; soft: string; text: string }> = {
  SLDP: { block: "#f4791f", soft: "#fdeee2", text: "#e0631d" },
  ASBS: { block: "#41802f", soft: "#e8f3e9", text: "#3c7d2f" },
  ULDP: { block: "#2456c4", soft: "#e7effc", text: "#2456c4" },
  ADLP: { block: "#6d28d9", soft: "#f0e9fb", text: "#6f3ab8" },
  YCDP: { block: "#e0186e", soft: "#fbe7f0", text: "#c9195f" },
}

// The hero pill flow and journey circles — the four sequential gateways;
// ADLP plugs in below as the cross-cutting digital track.
const SEQUENTIAL = ["SLDP", "ASBS", "ULDP", "YCDP"] as const

// Faces strip — the continuum from school scholar to executive, pathway order.
const FACES = [
  "/media/gallery/life-talk.jpg",
  "/media/gallery/life-craft.jpg",
  "/media/gallery/init-workshop.jpg",
  "/media/gallery/hero-speaker.jpg",
  "/media/gallery/hero-panel.jpg",
]

// By-the-numbers icon + tint per stat, order matches BY_THE_NUMBERS.stats.
const NUMBER_STYLES = [
  { icon: Banknote, tint: "bg-[#fdeee2] text-[#e0631d]", hex: "#e0631d" },
  { icon: Users, tint: "bg-[#e8f3e9] text-[#3c7d2f]", hex: "#3c7d2f" },
  { icon: GraduationCap, tint: "bg-[#e7effc] text-[#2456c4]", hex: "#2456c4" },
  { icon: Briefcase, tint: "bg-[#e9ecf5] text-navy", hex: "#0b1321" },
  { icon: LayoutGrid, tint: "bg-[#fbe7f0] text-[#c9195f]", hex: "#c9195f" },
] as const

// Alumni network stat + feature icons.
const NETWORK_STAT_ICONS = [Users, GraduationCap, Globe]
const FEATURE_ICONS = [Users, Share2, BookOpen, TrendingUp]

// Gateway row metric icons — Invested / Selected / Cohorts / Acceptance.
const GATEWAY_METRIC_ICONS = [Wallet, Users, CalendarDays, UserCheck]

// Closing collage — round photos on a dashed orbit around the ELA mark.
const COLLAGE = [
  { src: "/media/gallery/hero-run.jpg", left: "50%", top: "4%", size: "size-16" },
  { src: "/media/gallery/life-chat.jpg", left: "82.5%", top: "17.5%", size: "size-14" },
  { src: "/media/gallery/life-picnic.jpg", left: "96%", top: "50%", size: "size-16" },
  { src: "/media/gallery/life-guitar.jpg", left: "82.5%", top: "82.5%", size: "size-14" },
  { src: "/media/gallery/life-community.jpg", left: "50%", top: "96%", size: "size-16" },
  { src: "/media/gallery/hero-cafe.jpg", left: "17.5%", top: "82.5%", size: "size-14" },
  { src: "/media/gallery/hero-connect.jpg", left: "4%", top: "50%", size: "size-16" },
  { src: "/media/gallery/life-activity.jpg", left: "17.5%", top: "17.5%", size: "size-14" },
]

const COLLAGE_DOTS = [
  { left: "70%", top: "7%", color: "#f4791f" },
  { left: "94%", top: "70%", color: "#29a8e0" },
  { left: "29%", top: "94%", color: "#e0186e" },
  { left: "6%", top: "29%", color: "#7a3fc9" },
]

/** Plain tracked section label from the revamp board. */
function SectionLabel({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-navy">{children}</p>
      {sub && <p className="mt-1.5 text-sm text-muted-foreground">{sub}</p>}
    </div>
  )
}

/** Vertical dashed connector stub (digital-track purple). */
function DashedStub({ className = "h-5" }: { className?: string }) {
  return <span className={`block w-0 border-l-2 border-dashed border-[#6d28d9]/45 ${className}`} />
}

export default function Ecosystem() {
  return (
    <>
      {/* ══ The ELA Continuum — hero ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-flame">
              {CONTINUUM_HERO.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.3rem]">
              {CONTINUUM_HERO.headline[0]}
              <br />
              {CONTINUUM_HERO.headline[1]}
              <br />
              <span className="text-flame">A Lifetime</span>{" "}
              <span className="text-[#7a3fc9]">of Leadership.</span>
              <Star className="ml-3 inline-block size-6 text-flame" />
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-navy/60">
              {CONTINUUM_HERO.body}
            </p>
            <p className="mt-5 max-w-md text-sm font-bold leading-relaxed text-navy">
              {CONTINUUM_HERO.bold}
            </p>
          </Reveal>

          {/* Continuum diagram — faces strip + gateway pills + ADLP */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-navy">Ages 13</span>
              <span className="relative flex-1 border-t-2 border-dotted border-[#2456c4]/50">
                <ArrowRight className="absolute -right-1.5 -top-[9px] size-4 text-[#2456c4]" />
              </span>
              <span className="text-xs font-bold text-navy">C-Suite</span>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {FACES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden
                  className={`aspect-[3/4] w-full rounded-2xl object-cover ${i % 2 === 1 ? "mt-3" : ""}`}
                  loading="eager"
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-1 sm:gap-2">
              {SEQUENTIAL.map((acronym, i) => {
                const color = PATHWAY_COLORS[acronym]
                return (
                  <Fragment key={acronym}>
                    {i > 0 && <ArrowRight className="size-3.5 shrink-0 text-navy/35" />}
                    <span
                      className="rounded-full border-2 bg-white px-3.5 py-1.5 font-display text-xs font-extrabold sm:px-5 sm:text-sm"
                      style={{ borderColor: `${color.block}66`, color: color.text }}
                    >
                      {acronym}
                    </span>
                  </Fragment>
                )
              })}
            </div>

            <div aria-hidden className="mx-14 mt-3 hidden border-t-2 border-dashed border-[#6d28d9]/40 sm:block" />
            <div aria-hidden className="flex justify-center">
              <DashedStub />
            </div>

            <div className="flex justify-center">
              <div className="rounded-2xl bg-[#6d28d9] px-8 py-3.5 text-center text-white shadow-[0_18px_36px_-18px_rgba(109,40,217,0.7)]">
                <p className="flex items-center justify-center gap-2 font-display text-lg font-extrabold leading-none">
                  <Laptop className="size-4.5" />
                  {JOURNEY.digital.acronym}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-white/85">
                  {JOURNEY.digital.label}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ By the Numbers ══ */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <SectionLabel>By the Numbers</SectionLabel>
        </Reveal>
        <Reveal delay={0.06} className="mt-6">
          <div className="rounded-[28px] border border-border/60 bg-white px-6 py-9 shadow-[0_24px_50px_-32px_rgba(11,19,33,0.25)] sm:px-10">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
              {BY_THE_NUMBERS.stats.map((stat, i) => {
                const style = NUMBER_STYLES[i]
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center text-center ${i < 4 ? "lg:border-r lg:border-border/50" : ""}`}
                  >
                    <span className={`inline-flex size-12 items-center justify-center rounded-full ${style.tint}`}>
                      <style.icon className="size-5" />
                    </span>
                    <p
                      className={`mt-3 font-display font-extrabold tracking-tight ${stat.value.length > 9 ? "text-lg sm:text-xl" : "text-2xl sm:text-[1.7rem]"}`}
                      style={{ color: style.hex }}
                    >
                      {stat.num ? <CountUp value={stat.num} /> : stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-navy/70">{stat.label}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-9 flex justify-center">
              <p className="rounded-full bg-cream-deep px-5 py-2 text-center text-xs font-semibold text-navy/70">
                {BY_THE_NUMBERS.caption}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ The Leadership Journey ══ */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:pb-20">
        <Reveal>
          <div className="rounded-[32px] border border-border/60 bg-white p-7 shadow-[0_24px_50px_-32px_rgba(11,19,33,0.25)] sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-8">
              <div>
                <SectionLabel sub={JOURNEY.sub}>{JOURNEY.title}</SectionLabel>
                <div className="mt-6 space-y-2.5 text-xs font-semibold text-navy/60">
                  <p className="flex items-center gap-2.5">
                    <span className="h-0 w-8 shrink-0 border-t-2 border-navy/70" />
                    {JOURNEY.legend.solid}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <span className="h-0 w-8 shrink-0 border-t-2 border-dashed border-[#6d28d9]" />
                    {JOURNEY.legend.dashed}
                  </p>
                </div>
              </div>

              <div>
                {/* Four sequential gateway circles */}
                <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
                  {JOURNEY.stages.map((stage, i) => {
                    const color = PATHWAY_COLORS[stage.acronym]
                    return (
                      <div key={stage.acronym} className="relative flex flex-col items-center text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-navy/50">
                          {stage.role}
                        </p>
                        <div
                          className="mt-3 flex size-32 flex-col items-center justify-center rounded-full border-[3px] px-3 sm:size-36"
                          style={{ borderColor: color.block, backgroundColor: color.soft }}
                        >
                          <p className="font-display text-lg font-extrabold" style={{ color: color.text }}>
                            {stage.acronym}
                          </p>
                          <p className="mt-1 text-[10px] font-semibold leading-tight text-navy/70">
                            {stage.lines[0]}
                          </p>
                          <p className="text-[10px] font-semibold leading-tight text-navy/70">
                            {stage.lines[1]}
                          </p>
                        </div>
                        {i < 3 && (
                          <ArrowRight className="absolute -right-2.5 top-1/2 hidden size-5 text-navy/60 sm:block" />
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Dashed drop lines into the digital track */}
                <div aria-hidden className="hidden sm:block">
                  <div className="grid grid-cols-4">
                    {JOURNEY.stages.map((stage) => (
                      <div key={stage.acronym} className="flex justify-center">
                        <DashedStub />
                      </div>
                    ))}
                  </div>
                  <div className="mx-[12.5%] border-t-2 border-dashed border-[#6d28d9]/45" />
                  <div className="flex justify-center">
                    <DashedStub />
                  </div>
                </div>

                {/* ADLP — cross-cutting digital track */}
                <div className="mt-6 flex justify-center sm:mt-0">
                  <div className="flex items-center gap-3.5 rounded-full bg-[#6d28d9] px-8 py-4 text-white shadow-[0_18px_36px_-18px_rgba(109,40,217,0.7)]">
                    <Laptop className="size-5 shrink-0" />
                    <div className="text-left">
                      <p className="font-display text-base font-extrabold leading-none">
                        {JOURNEY.digital.acronym}
                        <span className="ml-2 text-xs font-bold text-white/85">
                          {JOURNEY.digital.label}
                        </span>
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-white/80">
                        {JOURNEY.digital.sub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Dashed arrow into the alumni network */}
        <div aria-hidden className="flex flex-col items-center pt-1">
          <DashedStub className="h-6" />
          <ChevronDown className="-mt-1 size-4 text-[#6d28d9]/70" />
        </div>

        {/* The ELA Alumni Network — the destination */}
        <Reveal delay={0.08}>
          <div className="grid gap-8 rounded-[32px] border border-border/60 bg-white p-7 shadow-[0_30px_60px_-40px_rgba(11,19,33,0.35)] sm:p-10 lg:grid-cols-[0.85fr_1.35fr] lg:gap-10">
            <div className="lg:border-r lg:border-border/60 lg:pr-10">
              <img src="/ELA-Logo.png" alt="Emerging Leaders Asia" className="h-12 w-auto object-contain" loading="lazy" />
              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl">
                <span className="gradient-text">
                  {ALUMNI_NETWORK.title[0]}
                  <br />
                  {ALUMNI_NETWORK.title[1]}
                </span>
                <Star className="ml-2 inline-block size-5 text-flame" />
              </h2>
              <p className="mt-3 text-base font-bold leading-snug text-navy">
                {ALUMNI_NETWORK.taglines[0]}
                <br />
                <span className="text-flame">{ALUMNI_NETWORK.taglines[1]}</span>{" "}
                <span className="text-[#2456c4]">{ALUMNI_NETWORK.taglines[2]}</span>
              </p>
              <span className="my-5 block h-px w-full bg-border/60" />
              <p className="text-sm leading-relaxed text-navy/60">{ALUMNI_NETWORK.body}</p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
                {ALUMNI_NETWORK.stats.map((stat, i) => {
                  const StatIcon = NETWORK_STAT_ICONS[i]
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-3 ${i > 0 ? "sm:border-l sm:border-border/60 sm:pl-5" : ""}`}
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-flame/10 text-flame">
                        <StatIcon className="size-5" />
                      </span>
                      <div>
                        <p className="font-display text-2xl font-extrabold leading-none text-navy">
                          <CountUp value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="mt-1 text-[11px] text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="mt-7 border-t border-border/60 pt-6 text-[15px] leading-relaxed text-navy/75">
                Every graduate becomes part of a lifelong community that continues to{" "}
                <strong className="text-navy">learn</strong>,{" "}
                <strong className="text-navy">mentor</strong>,{" "}
                <strong className="text-navy">collaborate</strong> and create impact across
                industries, <strong className="text-navy">countries</strong> and{" "}
                <strong className="text-navy">generations</strong>.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-6 border-t border-border/60 pt-7 sm:grid-cols-4">
                {ALUMNI_NETWORK.features.map((feature, i) => {
                  const FeatureIcon = FEATURE_ICONS[i]
                  return (
                    <div key={feature} className="flex flex-col items-center gap-2.5 text-center">
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-flame/10 text-flame">
                        <FeatureIcon className="size-5" />
                      </span>
                      <p className="text-xs font-bold leading-snug text-navy">{feature}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ Five Gateways ══ */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        <Reveal>
          <SectionLabel sub="Purpose-built programmes. One shared mission.">
            Five Gateways
          </SectionLabel>
        </Reveal>

        <div className="mt-7 space-y-4">
          {GATEWAYS.map((gateway, i) => {
            const color = PATHWAY_COLORS[gateway.acronym]
            const metrics = [
              { value: gateway.invested, label: "Invested" },
              { value: gateway.leaders, label: gateway.leadersNoun },
              { value: gateway.cohorts, label: "Cohorts" },
              { value: gateway.acceptance, label: "Acceptance" },
            ]
            return (
              <Reveal key={gateway.acronym} delay={i * 0.05}>
                <article className="grid overflow-hidden rounded-[24px] border border-border/60 bg-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_28px_55px_-32px_rgba(11,19,33,0.35)] lg:grid-cols-[170px_210px_1fr]">
                  <div className="flex flex-col p-5 text-white" style={{ backgroundColor: color.block }}>
                    <p className="text-sm font-extrabold text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 font-display text-3xl font-extrabold tracking-tight">
                      {gateway.acronym}
                    </p>
                    <p className="mt-auto pt-4 text-[11px] font-semibold leading-snug text-white/85">
                      {gateway.name}
                    </p>
                  </div>

                  <img
                    src={gateway.image}
                    alt={`${gateway.acronym} participants in session`}
                    className="h-44 w-full object-cover lg:h-full"
                    loading="lazy"
                  />

                  <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:gap-8 lg:px-7 lg:py-6">
                    <div className="flex-1">
                      <p className="text-xs font-extrabold" style={{ color: color.text }}>
                        {gateway.kicker}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy/65">
                        {gateway.blurb}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
                        {metrics.map((metric, j) => {
                          const MetricIcon = GATEWAY_METRIC_ICONS[j]
                          return (
                            <div key={metric.label} className="flex items-center gap-2.5">
                              <span
                                className="inline-flex size-9 items-center justify-center rounded-full"
                                style={{ backgroundColor: color.soft, color: color.text }}
                              >
                                <MetricIcon className="size-4" />
                              </span>
                              <div>
                                <p className="font-display text-sm font-extrabold leading-none text-navy">
                                  {metric.value}
                                </p>
                                <p className="mt-0.5 text-[10px] text-muted-foreground">
                                  {metric.label}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <Link
                      to="/join"
                      className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-extrabold transition-opacity hover:opacity-70"
                      style={{ color: color.text }}
                    >
                      Explore programme
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ══ One Alumni Network — closing ══ */}
      <section className="px-3 pb-8 sm:px-5">
        <Reveal>
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-navy px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-28 size-80 rounded-full bg-flame/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 size-80 rounded-full bg-[#6d28d9]/20 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-flame">
                  {CONTINUUM_CLOSING.kicker}
                </p>
                <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                  Every pathway leads to{" "}
                  <span
                    style={{
                      background: "linear-gradient(92deg, #f4791f 0%, #f59e0b 45%, #29a8e0 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    one lifetime
                  </span>{" "}
                  of connection.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-[15px]">
                  {CONTINUUM_CLOSING.body}
                </p>
                <p className="mt-4 max-w-xl text-sm font-bold leading-relaxed text-white sm:text-[15px]">
                  {CONTINUUM_CLOSING.bold}
                </p>
                <Link
                  to="/join"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-cream"
                >
                  {CONTINUUM_CLOSING.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Network collage — alumni orbiting the ELA mark */}
              <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[340px]">
                <span className="absolute inset-[9%] rounded-full border-2 border-dashed border-white/15" />
                {COLLAGE.map((photo) => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt=""
                    className={`absolute ${photo.size} -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-2 ring-white/25`}
                    style={{ left: photo.left, top: photo.top }}
                    loading="lazy"
                  />
                ))}
                {COLLAGE_DOTS.map((dot) => (
                  <span
                    key={`${dot.left}-${dot.top}`}
                    className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ left: dot.left, top: dot.top, backgroundColor: dot.color }}
                  />
                ))}
                <span className="absolute inset-[31%] flex items-center justify-center rounded-full bg-white/[0.06] backdrop-blur-sm">
                  <img
                    src="/ELA-Logo-white.png"
                    alt="Emerging Leaders Asia"
                    className="h-11 w-auto object-contain sm:h-12"
                    loading="lazy"
                  />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
