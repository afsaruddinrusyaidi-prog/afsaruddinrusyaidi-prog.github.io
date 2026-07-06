import { Link } from "react-router-dom"
import {
  ArrowRight,
  ArrowUpRight,
  Backpack,
  Briefcase,
  CalendarDays,
  Clock,
  Coffee,
  Footprints,
  GraduationCap,
  Laptop,
  Lightbulb,
  MapPin,
  Mic,
  Palette,
  Plus,
  ShieldCheck,
  User,
  Users,
  Wrench,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionPill } from "@/components/SectionPill"
import { CountUp } from "@/components/CountUp"
import { AlumniTicker } from "@/components/AlumniTicker"
import { DotGrid, Star } from "@/components/Decor"
import { COMMITTEE_SIZE, INITIATIVES, ORG, TRACKS } from "@/data/content"
import { HERO_PHOTOS, LIFE_GALLERY } from "@/data/media"

// ─── Local palette maps (concept visual, content stays locked) ───────────────

const BOARD_AVATARS = [
  "/committee/suhaila.png",
  "/committee/ikhwan.jpg",
  "/committee/afsar.png",
  "/committee/sofea.jpg",
]

// Hero stat strip — concept order: members → legacy → talents → events.
const HERO_STATS = [
  {
    icon: Users,
    iconBg: "bg-[#fdebe2]",
    iconColor: "text-flame",
    value: 2500,
    suffix: "+",
    label: "Members Network",
    sub: "Top talent across the region",
  },
  {
    icon: Clock,
    iconBg: "bg-[#fdf3dc]",
    iconColor: "text-amber",
    value: 10,
    suffix: "+ yrs",
    label: "Years of Legacy",
    sub: "A decade of leadership continuity",
  },
  {
    icon: User,
    iconBg: "bg-[#edeafd]",
    iconColor: "text-[#6f6af8]",
    value: 1000,
    suffix: "+",
    label: "Talents Impacted",
    sub: "Across every leadership pipeline",
  },
  {
    icon: CalendarDays,
    iconBg: "bg-[#e4f6e6]",
    iconColor: "text-green",
    value: 25,
    prefix: "~",
    suffix: "",
    label: "Premium Events",
    sub: "Delivered in the prior term",
  },
] as const

// About-bento pastel stat cells — icon chip, colored value, tinted card.
const BENTO_STATS = [
  {
    icon: User,
    bg: "bg-[#fdeee6]",
    edge: "bg-flame",
    valueColor: "text-flame",
    value: 1000,
    suffix: "+",
    label: "Talents Impacted",
    sub: "Across every leadership pipeline.",
  },
  {
    icon: Users,
    bg: "bg-[#eceafd]",
    edge: "bg-[#6f6af8]",
    valueColor: "text-[#6f6af8]",
    value: 2500,
    suffix: "+",
    label: "Members Network",
    sub: "Top talent across the region.",
  },
  {
    icon: CalendarDays,
    bg: "bg-[#e8f4fd]",
    edge: "bg-[#2b90d9]",
    valueColor: "text-[#2b90d9]",
    value: 25,
    prefix: "~",
    suffix: "",
    label: "Premium Events",
    sub: "Delivered in the prior term.",
  },
  {
    icon: ShieldCheck,
    bg: "bg-[#fdf6e0]",
    edge: "bg-amber",
    valueColor: "text-amber",
    value: 10,
    suffix: "+ yrs",
    label: "Years of Legacy",
    sub: "A decade of leadership continuity.",
  },
] as const

// "A few more facts" strip — concept order + soft icon tints.
const FACT_STATS = [
  { icon: ShieldCheck, tint: "bg-[#fdeee6] text-flame", value: 10, suffix: "+", label: "Years of Legacy", sub: "A decade of leadership continuity" },
  { icon: Users, tint: "bg-[#f1e9fb] text-[#9b59d0]", value: 2500, suffix: "+", label: "Members Network", sub: "Top talent across the region" },
  { icon: User, tint: "bg-[#e8f4fd] text-[#2b90d9]", value: 1000, suffix: "+", label: "Talents Impacted", sub: "Across every leadership pipeline" },
  { icon: CalendarDays, tint: "bg-[#e4f6e6] text-green", value: 25, prefix: "~", suffix: "", label: "Premium Events", sub: "Delivered in the prior term" },
] as const

// Track teasers — per-pathway pastel identity from the concept board.
// Order matches TRACKS: SLDP, ASBS, ULDP, ADLP, YCDP.
const TRACK_STYLES = [
  {
    // SLDP — warm peach / red-orange
    icon: Backpack,
    card: "bg-[#fdece4]",
    iconBg: "bg-[#ee4b23]",
    kicker: "text-[#e0421d]",
    kickerLabel: "Secondary",
    fact: "Ages 13–17",
    factColor: "text-[#e0421d]",
    star: "text-[#f8c9b4]",
  },
  {
    // ASBS — green
    icon: Users,
    card: "bg-[#e8f3e9]",
    iconBg: "bg-[#3f9142]",
    kicker: "text-[#337536]",
    kickerLabel: "Pre-University",
    fact: "1-yr scholarship",
    factColor: "text-[#337536]",
    star: "text-[#c3e0c4]",
  },
  {
    // ULDP — blue
    icon: GraduationCap,
    card: "bg-[#e9f0fb]",
    iconBg: "bg-[#2f6fdf]",
    kicker: "text-[#2f6fdf]",
    kickerLabel: "Undergraduate",
    fact: "15+ years",
    factColor: "text-[#2f6fdf]",
    star: "text-[#c3d6f4]",
  },
  {
    // ADLP — purple
    icon: Laptop,
    card: "bg-[#efeafb]",
    iconBg: "bg-[#6f4fc9]",
    kicker: "text-[#5f3fb8]",
    kickerLabel: "Digital-first · ASEAN",
    fact: "ASEAN-wide",
    factColor: "text-[#5f3fb8]",
    star: "text-[#d6c8f2]",
  },
  {
    // YCDP — pink/magenta
    icon: Briefcase,
    card: "bg-[#fbe7ef]",
    iconBg: "bg-[#d6357a]",
    kicker: "text-[#b82866]",
    kickerLabel: "Executive",
    fact: "12+ years",
    factColor: "text-[#b82866]",
    star: "text-[#f3c3da]",
  },
] as const

// What-we-run cards — pastel tint + soft icon chip + footer strip.
const INITIATIVE_STYLES = [
  { icon: Coffee, card: "#fdf3df", iconChip: "bg-[#fbe6bf] text-[#d98d0b]", meta: "text-[#d98d0b]" },
  { icon: Mic, card: "#e9f1fb", iconChip: "bg-[#d4e4f8] text-[#2f6fdf]", meta: "text-[#2f6fdf]" },
  { icon: Wrench, card: "#fdeee2", iconChip: "bg-[#fadfce] text-flame", meta: "text-flame" },
  { icon: Users, card: "#fdeaf3", iconChip: "bg-[#fad2e5] text-[#e0489a]", meta: "text-[#e0489a]" },
] as const

// Life-at-ELA gallery chips — icon + title + one-liner per scene.
const LIFE_CHIPS = [
  { icon: Footprints, title: "Run & Makan", sub: "Sweat. Refuel. Connect." },
  { icon: Coffee, title: "Lattes & Jam", sub: "Conversations that strike the right chord." },
  { icon: Users, title: "Rallies", sub: "Big energy. Stronger together." },
  { icon: Palette, title: "Craft & Connect", sub: "Creativity, meet community." },
  { icon: Lightbulb, title: "Late-Night Ideas", sub: "Where ideas turn into impact." },
] as const

/** Organic wavy top edge drawn in the card colour, laid over each photo. */
function WaveEdge({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 400 34"
      preserveAspectRatio="none"
      className="absolute inset-x-0 -top-px z-10 h-8 w-full"
      aria-hidden
    >
      <path
        d="M0 0h400v8c-52 18-96-4-152 8S130 34 74 20C48 13 20 12 0 20Z"
        fill={fill}
      />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* ══ Hero — split layout: copy left, photo card right, stat strip below ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
            {/* Copy */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-flame/25 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-navy/80 shadow-sm">
                <Star className="size-3 text-flame" />
                {ORG.tagline}
              </span>
              <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-navy sm:text-6xl xl:text-7xl">
                Where Asia&apos;s emerging leaders keep rising
                <span className="text-flame">.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-navy/65 sm:text-lg">
                {ORG.lede}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/join"
                  className="inline-flex min-h-13 items-center gap-2 rounded-full bg-flame px-8 text-sm font-semibold text-white shadow-[0_18px_36px_-14px_rgba(240,77,26,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                >
                  Join the Network
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  to="/ecosystem"
                  className="inline-flex min-h-13 items-center gap-2 rounded-full border border-border bg-white px-8 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30"
                >
                  Explore the Pipeline
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            {/* Photo card */}
            <Reveal delay={0.12}>
              <div className="relative">
                {/* soft blob + dot grid behind */}
                <div
                  aria-hidden
                  className="absolute -left-16 top-10 -z-10 size-72 rounded-full bg-[#fbe3c8] blur-2xl"
                />
                <div aria-hidden className="absolute -left-8 -top-8 hidden size-40 opacity-70 sm:block [mask-image:radial-gradient(closest-side,black,transparent)]">
                  <DotGrid />
                </div>
                <div className="relative overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(11,19,33,0.4)]">
                  <img
                    src={HERO_PHOTOS.home}
                    alt="The ELA community gathered at a Run & Makan session, Perdana Botanical Garden, Kuala Lumpur"
                    className="aspect-[16/11] w-full object-cover"
                  />
                  <span className="glass-chip absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white">
                    <MapPin className="size-3.5" />
                    Run &amp; Makan · Perdana Botanical Garden, KL
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stat strip card */}
          <Reveal delay={0.18} className="relative z-10 mt-10 lg:mt-12">
            <div className="grid grid-cols-1 gap-6 rounded-[28px] border border-border/60 bg-white p-7 shadow-[0_30px_60px_-35px_rgba(11,19,33,0.35)] sm:grid-cols-2 sm:p-9 lg:grid-cols-4 lg:gap-4">
              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-start gap-4 ${i > 0 ? "lg:border-l lg:border-border/70 lg:pl-6" : ""}`}
                >
                  <span
                    className={`inline-flex size-14 shrink-0 items-center justify-center rounded-full ${stat.iconBg} ${stat.iconColor}`}
                  >
                    <stat.icon className="size-6" />
                  </span>
                  <div>
                    <p className="font-display text-3xl font-extrabold tracking-tight text-navy">
                      <CountUp
                        value={stat.value}
                        prefix={"prefix" in stat ? stat.prefix : undefined}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-navy">{stat.label}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ About ELA — gradient statement + bento ══ */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:px-8 lg:py-28">
        <div aria-hidden className="absolute right-0 top-24 hidden h-56 w-72 opacity-60 lg:block [mask-image:radial-gradient(closest-side,black,transparent)]">
          <DotGrid />
        </div>
        <Reveal>
          <SectionPill>About ELA</SectionPill>
          <h2 className="relative mt-7 max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.16] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            ELA is the premier alumni continuity engine of AYTP — one ecosystem
            carrying leaders from their first classroom to the boardroom, and
            keeping them <span className="gradient-text">connected</span> for life.
            <Star className="ml-2 inline-block size-6 text-amber" />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_1fr]">
          {/* Left column: dark photo card + committee card */}
          <div className="flex flex-col gap-4">
            <Reveal className="flex-1">
              <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px]">
                <img
                  src="/media/gallery/life-community.jpg"
                  alt="ELA members in conversation at a Coffee Circle session"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/30 to-navy/70" />
                <p className="absolute left-7 top-7 max-w-[19rem] font-display text-2xl font-bold leading-snug text-white">
                  A living network,{" "}
                  <span className="text-[#f79433]">measured in people</span> — not
                  press releases.
                </p>
                <div className="absolute inset-x-7 bottom-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-3 text-sm font-medium text-white">
                    <span className="glass-chip inline-flex size-11 items-center justify-center rounded-full">
                      <Users className="size-5 text-[#f79433]" />
                    </span>
                    Community first, always.
                  </span>
                  <Link
                    to="/media"
                    aria-label="See life at ELA"
                    className="glass-chip inline-flex size-11 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
                  >
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-center justify-between gap-4 rounded-[28px] border border-border/60 bg-white px-7 py-6 shadow-[0_24px_50px_-32px_rgba(11,19,33,0.3)]">
                <div className="flex items-center gap-5">
                  <p className="font-display text-5xl font-extrabold tracking-tight text-navy">
                    <CountUp value={COMMITTEE_SIZE} />
                  </p>
                  <div className="border-l border-border pl-5">
                    <p className="font-display text-base font-bold text-navy">Committee Leaders</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Powering the ecosystem behind ELA.
                    </p>
                  </div>
                </div>
                <Link to="/leadership" className="flex shrink-0 items-center" aria-label="Meet the committee">
                  <span className="flex -space-x-2.5">
                    {BOARD_AVATARS.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="size-10 rounded-full border-2 border-white object-cover object-top"
                        loading="lazy"
                      />
                    ))}
                  </span>
                  <span className="z-10 -ml-2.5 inline-flex size-10 items-center justify-center rounded-full border-2 border-white bg-flame text-white">
                    <Plus className="size-4" />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right column: 2×2 pastel stat cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BENTO_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.06 + i * 0.05}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[28px] ${stat.bg} p-7 transition-transform duration-500 hover:-translate-y-1`}
                >
                  <span className={`absolute inset-x-8 bottom-0 h-[3px] rounded-t-full ${stat.edge}`} />
                  <span className={`inline-flex size-12 items-center justify-center rounded-full bg-white shadow-sm ${stat.valueColor}`}>
                    <stat.icon className="size-5" />
                  </span>
                  <p className={`mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${stat.valueColor}`}>
                    <CountUp
                      value={stat.value}
                      prefix={"prefix" in stat ? stat.prefix : undefined}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-2 font-display text-base font-bold text-navy">{stat.label}</p>
                  <p className="mt-1 text-xs text-navy/55">{stat.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ A few more facts — clean divided strip ══ */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="rounded-[32px] border border-border/60 bg-white px-8 py-12 shadow-[0_30px_60px_-40px_rgba(11,19,33,0.3)] sm:px-12">
            <p className="flex items-center justify-center gap-2 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-navy/60">
              A few more facts about the ecosystem, in numbers
              <Star className="size-3.5 text-amber" />
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {FACT_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-start gap-3 ${i > 0 ? "lg:border-l lg:border-border/70 lg:pl-10" : ""}`}
                >
                  <span className={`inline-flex size-14 items-center justify-center rounded-full ${stat.tint}`}>
                    <stat.icon className="size-6" />
                  </span>
                  <p className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                    <CountUp
                      value={stat.value}
                      prefix={"prefix" in stat ? stat.prefix : undefined}
                      suffix={stat.suffix}
                    />
                  </p>
                  <div>
                    <p className="text-sm font-bold text-navy">{stat.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ The Pipeline — four pastel track cards ══ */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:px-8 lg:py-28">
        <div aria-hidden className="absolute right-8 top-20 hidden h-40 w-64 opacity-60 lg:block [mask-image:radial-gradient(closest-side,black,transparent)]">
          <DotGrid />
        </div>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <SectionPill>The Pipeline</SectionPill>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              Five pathways.
              <br />
              One continuous ecosystem.
              <Star className="ml-2 inline-block size-5 text-amber" />
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-sm leading-relaxed text-navy/60 lg:mb-2">
              From a 13-year-old&apos;s first residency to a young CEO&apos;s boardroom —
              we develop leaders at every altitude and keep them connected for life.
            </p>
          </Reveal>
        </div>

        {/* Absolute equals: identical card structure, no spotlight */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TRACKS.map((track, i) => {
            const style = TRACK_STYLES[i]
            return (
              <Reveal key={track.acronym} delay={i * 0.06}>
                <Link
                  to="/ecosystem"
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] ${style.card} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(11,19,33,0.35)] sm:p-7`}
                >
                  <Star className={`absolute -right-4 top-10 size-24 ${style.star} opacity-80 transition-transform duration-700 group-hover:rotate-45`} />
                  <span className={`relative inline-flex size-12 items-center justify-center rounded-full ${style.iconBg} text-white shadow-md`}>
                    <style.icon className="size-5" />
                  </span>
                  <p className={`relative mt-6 text-[11px] font-bold uppercase tracking-[0.16em] ${style.kicker}`}>
                    {style.kickerLabel}
                  </p>
                  <p className="relative mt-1.5 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    {track.acronym}
                  </p>
                  <p className="relative mt-1 flex-1 text-sm leading-snug text-navy/65">
                    {track.name}
                  </p>
                  <div className="relative mt-8 flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.14em] ${style.factColor}`}>
                      {style.fact}
                    </span>
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ══ What We Run — wavy-photo initiative cards ══ */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <SectionPill>What we run</SectionPill>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              Four flagship formats that keep the network{" "}
              <span className="gradient-text-warm">compounding.</span>
              <Star className="ml-2 inline-block size-5 text-amber" />
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-l-[3px] border-amber pl-6 text-sm leading-loose text-navy/60">
              Different touchpoints.
              <br />
              Different perspectives.
              <br />
              One compounding network.
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INITIATIVES.map((initiative, i) => {
            const style = INITIATIVE_STYLES[i]
            return (
              <Reveal key={initiative.name} delay={i * 0.06}>
                <Link
                  to="/initiatives"
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(11,19,33,0.35)]"
                  style={{ backgroundColor: style.card }}
                >
                  <div className="p-7 pb-5">
                    <span className={`inline-flex size-13 items-center justify-center rounded-full ${style.iconChip}`}>
                      <style.icon className="size-6" />
                    </span>
                    <p className="mt-5 font-display text-xl font-extrabold tracking-tight text-navy">
                      {initiative.name}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy/60">
                      {initiative.tagline}.
                    </p>
                  </div>

                  {/* Photo with organic wavy top edge */}
                  <div className="relative mt-auto h-44 overflow-hidden sm:h-48">
                    <WaveEdge fill={style.card} />
                    <img
                      src={initiative.image}
                      alt={initiative.name}
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center justify-between p-5 pl-7">
                    <span className={`inline-flex items-center gap-2.5 ${style.meta}`}>
                      <Users className="size-4" />
                      <span className="text-[11px] font-bold uppercase leading-tight tracking-[0.12em]">
                        {initiative.cadence}
                        <br />
                        <span className="text-navy">{initiative.pax}</span>
                      </span>
                    </span>
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ══ Where our members go — alumni firm ticker ══ */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="absolute left-1/2 top-0 -z-10 size-[420px] -translate-x-1/2 rounded-full bg-flame/10 blur-3xl" />
        <Reveal className="mb-10 flex flex-col items-center gap-3 px-6 text-center">
          <SectionPill>Where our members go</SectionPill>
          <h2 className="max-w-xl text-balance font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Our people carry the ecosystem into the region&apos;s best rooms.
          </h2>
        </Reveal>
        <AlumniTicker />
      </section>

      {/* ══ Life at ELA — captioned gallery ══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <SectionPill>Life at ELA</SectionPill>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Runs, rallies, lattes and late-night ideas —{" "}
              <span className="gradient-text">the network in its natural habitat.</span>
              <Star className="ml-2 inline-block size-5 text-amber" />
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs border-l-[3px] border-amber pl-6 text-sm leading-loose text-navy/60">
              We build real connections through shared experiences, meaningful
              conversations, and a little bit of fun.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Large feature photo */}
          <Reveal>
            <a
              href={ORG.socials.instagramELA}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-full min-h-[340px] overflow-hidden rounded-[28px] lg:min-h-[520px]"
            >
              <img
                src={LIFE_GALLERY[0].src}
                alt={LIFE_GALLERY[0].caption}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <LifeChip index={0} />
            </a>
          </Reveal>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {LIFE_GALLERY.slice(1).map((photo, i) => (
              <Reveal key={photo.src} delay={0.06 + i * 0.05}>
                <a
                  href={ORG.socials.instagramELA}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-full min-h-[240px] overflow-hidden rounded-[28px]"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <LifeChip index={i + 1} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Join the Ecosystem — big CTA card ══ */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-border/60 bg-white shadow-[0_40px_80px_-50px_rgba(11,19,33,0.4)]">
            {/* soft corner washes */}
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[#fde3cf] blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-[#e7e3fb] blur-3xl" />
            <div aria-hidden className="absolute right-10 top-10 hidden h-40 w-56 opacity-50 lg:block [mask-image:radial-gradient(closest-side,black,transparent)]">
              <DotGrid />
            </div>

            <div className="relative grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
              {/* Circle photo collage */}
              <div className="relative mx-auto hidden h-[420px] w-full max-w-md lg:block">
                <div aria-hidden className="absolute left-6 top-24 size-64 rounded-full bg-[#fbe3c8]/80 blur-xl" />
                <div className="absolute left-0 top-0 size-60 overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <img src={HERO_PHOTOS.join} alt="Members in conversation at a café session" className="size-full object-cover" loading="lazy" />
                </div>
                <div className="absolute right-8 top-36 size-36 overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <img src={HERO_PHOTOS.cafe} alt="Committee members at a Coffee Circle" className="size-full object-cover" loading="lazy" />
                </div>
                <div className="absolute bottom-0 left-16 size-52 overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <img src={HERO_PHOTOS.insights} alt="A speaker addressing the ELA community" className="size-full object-cover" loading="lazy" />
                </div>
                <Star className="absolute right-16 top-6 size-6 text-flame" />
                <Star className="absolute -left-3 bottom-24 size-4 text-amber" />
                <Star className="absolute bottom-6 right-20 size-5 text-[#b14be0]" />
              </div>

              {/* Copy */}
              <div>
                <SectionPill>Join the Ecosystem</SectionPill>
                <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl">
                  Your next room is already in the network.
                  <Star className="ml-2 inline-block size-5 text-amber" />
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-navy/60">
                  2,500+ alumni. Five pathways. One ecosystem built to keep emerging
                  leaders emerging.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/join"
                    className="inline-flex min-h-13 items-center gap-2 rounded-full bg-flame px-8 text-sm font-semibold text-white shadow-[0_18px_36px_-14px_rgba(240,77,26,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                  >
                    Join the Network
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    to="/ecosystem"
                    className="inline-flex min-h-13 items-center gap-2 rounded-full border border-border bg-white px-8 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30"
                  >
                    Explore the Ecosystem
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="mt-10 flex items-center gap-3 lg:justify-end">
                  <span className="flex -space-x-2.5">
                    {BOARD_AVATARS.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="size-9 rounded-full border-2 border-white object-cover object-top"
                        loading="lazy"
                      />
                    ))}
                  </span>
                  <p className="text-xs leading-tight text-navy/60">
                    <span className="font-bold text-flame">2,500+</span>
                    <br />
                    leaders and growing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

/** Dark caption chip used on the Life-at-ELA gallery tiles. */
function LifeChip({ index }: { index: number }) {
  const chip = LIFE_CHIPS[index]
  return (
    <span className="absolute bottom-4 left-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-2xl bg-navy/80 px-4 py-3 backdrop-blur-sm">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white">
        <chip.icon className="size-4" />
      </span>
      <span>
        <span className="block font-display text-sm font-bold text-white">{chip.title}</span>
        <span className="block text-xs text-white/70">{chip.sub}</span>
      </span>
    </span>
  )
}
