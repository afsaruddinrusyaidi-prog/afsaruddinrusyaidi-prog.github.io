import { Link } from "react-router-dom"
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Footprints,
  Lightbulb,
  MapPin,
  Palette,
  Plus,
  Users,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { CountUp } from "@/components/CountUp"
import { AlumniTicker } from "@/components/AlumniTicker"
import { COMMITTEE_SIZE, INITIATIVES, ORG, TRACKS } from "@/data/content"
import { HERO_PHOTOS, LIFE_GALLERY } from "@/data/media"

// ─── Local palette maps (premium editorial pass — content stays locked) ──────

const BOARD_AVATARS = [
  "/committee/suhaila.png",
  "/committee/ikhwan.jpg",
  "/committee/afsar.png",
  "/committee/sofea.jpg",
]

// Hero stat strip — concept order: members → legacy → talents → events.
const HERO_STATS = [
  { value: 2500, suffix: "+", label: "Members Network", sub: "Top talent across the region" },
  { value: 10, suffix: "+ yrs", label: "Years of Legacy", sub: "A decade of leadership continuity" },
  { value: 1000, suffix: "+", label: "Talents Impacted", sub: "Across every leadership pipeline" },
  { value: 25, prefix: "~", suffix: "", label: "Premium Events", sub: "Delivered in the prior term" },
] as const

// About stat cells — one quiet accent rule per cell keeps the five-colour
// brand palette present without pastel card fills.
const ABOUT_STATS = [
  { edge: "bg-flame", value: 1000, suffix: "+", label: "Talents Impacted", sub: "Across every leadership pipeline." },
  { edge: "bg-[#6f6af8]", value: 2500, suffix: "+", label: "Members Network", sub: "Top talent across the region." },
  { edge: "bg-[#2b90d9]", value: 25, prefix: "~", suffix: "", label: "Premium Events", sub: "Delivered in the prior term." },
  { edge: "bg-amber", value: 10, suffix: "+ yrs", label: "Years of Legacy", sub: "A decade of leadership continuity." },
] as const

// Pathway rows — stage + quick fact per track, with the per-track accent kept
// to a single dot so all five stay ABSOLUTE EQUALS. Order matches TRACKS.
const TRACK_META = [
  { stage: "Secondary", fact: "Ages 13–17", accent: "#e0421d" },
  { stage: "Pre-University", fact: "1-yr scholarship", accent: "#337536" },
  { stage: "Undergraduate", fact: "15+ years", accent: "#2f6fdf" },
  { stage: "Digital-first · ASEAN", fact: "ASEAN-wide", accent: "#5f3fb8" },
  { stage: "Executive", fact: "12+ years", accent: "#b82866" },
] as const

// Life-at-ELA gallery chips — icon + title + one-liner per scene.
const LIFE_CHIPS = [
  { icon: Footprints, title: "Run & Makan", sub: "Sweat. Refuel. Connect." },
  { icon: Coffee, title: "Lattes & Jam", sub: "Conversations that strike the right chord." },
  { icon: Users, title: "Rallies", sub: "Big energy. Stronger together." },
  { icon: Palette, title: "Craft & Connect", sub: "Creativity, meet community." },
  { icon: Lightbulb, title: "Late-Night Ideas", sub: "Where ideas turn into impact." },
] as const

/** Letterspaced uppercase section kicker — the editorial replacement for pills. */
function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] ${
        light ? "text-amber" : "text-flame"
      }`}
    >
      <span aria-hidden className={`h-px w-8 ${light ? "bg-amber/70" : "bg-flame/70"}`} />
      {children}
    </p>
  )
}

export default function Home() {
  return (
    <>
      {/* ══ Hero — full-bleed community photograph, editorial type over it ══ */}
      <section className="px-3 pt-24 sm:px-5 sm:pt-28">
        <Reveal>
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-navy">
            <img
              src={HERO_PHOTOS.home}
              alt="The ELA community gathered at a Run & Makan session, Perdana Botanical Garden, Kuala Lumpur"
              className="absolute inset-0 size-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/30"
            />

            <div className="relative flex min-h-[560px] flex-col justify-end px-6 pb-12 pt-40 sm:px-12 sm:pb-16 lg:min-h-[640px] lg:px-16">
              <Kicker light>{ORG.tagline}</Kicker>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-[5.25rem]">
                Where Asia&apos;s emerging leaders keep rising
                <span className="text-flame">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
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
                  className="glass-chip inline-flex min-h-13 items-center gap-2 rounded-full px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Explore the Pipeline
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <span className="glass-chip absolute right-6 top-6 hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white sm:inline-flex">
                <MapPin className="size-3.5" />
                Run &amp; Makan · Perdana Botanical Garden, KL
              </span>
            </div>
          </div>
        </Reveal>

        {/* Stat strip — hairline rules, no icon chips: numbers do the talking */}
        <Reveal delay={0.12}>
          <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-10 px-3 sm:grid-cols-2 sm:px-5 lg:grid-cols-4 lg:gap-12">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="border-t border-navy/15 pt-6">
                <p className="font-display text-5xl font-extrabold tracking-tight text-navy">
                  <CountUp
                    value={stat.value}
                    prefix={"prefix" in stat ? stat.prefix : undefined}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══ About ELA — editorial statement + photography ══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Kicker>About ELA</Kicker>
          <h2 className="mt-7 max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.16] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            ELA is the premier alumni continuity engine of AYTP — one ecosystem
            carrying leaders from their first classroom to the boardroom, and
            keeping them <span className="text-flame">connected</span> for life.
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

          {/* Right column: 2×2 quiet stat cells — white, hairline, accent rule */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ABOUT_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.06 + i * 0.05}>
                <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[28px] border border-border/60 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_55px_-35px_rgba(11,19,33,0.35)]">
                  <span aria-hidden className={`h-[3px] w-9 rounded-full ${stat.edge}`} />
                  <p className="mt-6 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                    <CountUp
                      value={stat.value}
                      prefix={"prefix" in stat ? stat.prefix : undefined}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-navy">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-xs text-navy/55">{stat.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ The Pipeline — five editorial rows, hairline dividers ══ */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:pb-28">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <Kicker>The Pipeline</Kicker>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              Five pathways.
              <br />
              One continuous ecosystem.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-sm leading-relaxed text-navy/60 lg:mb-2">
              From a 13-year-old&apos;s first residency to a young CEO&apos;s boardroom —
              we develop leaders at every altitude and keep them connected for life.
            </p>
          </Reveal>
        </div>

        {/* Absolute equals: identical row structure, one accent dot each */}
        <Reveal>
          <div className="border-t border-navy/15">
            {TRACKS.map((track, i) => {
              const meta = TRACK_META[i]
              return (
                <Link
                  key={track.acronym}
                  to="/ecosystem"
                  className="group grid grid-cols-[2.5rem_1fr_2.75rem] items-center gap-x-4 border-b border-navy/15 py-7 transition-colors duration-300 hover:bg-white sm:gap-x-8 sm:py-8 lg:grid-cols-[3rem_11rem_1fr_auto_2.75rem]"
                >
                  <span className="row-start-1 font-display text-sm font-bold text-navy/35 transition-colors duration-300 group-hover:text-flame">
                    0{i + 1}
                  </span>
                  <p className="row-start-1 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    {track.acronym}
                  </p>
                  <p className="col-start-2 text-sm leading-snug text-navy/60 lg:col-start-3">
                    {track.name}
                  </p>
                  <span className="col-start-2 mt-1 inline-flex items-center gap-2.5 lg:col-start-4 lg:mt-0">
                    <span
                      aria-hidden
                      className="size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: meta.accent }}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy/55">
                      {meta.stage} · {meta.fact}
                    </span>
                  </span>
                  <span className="col-start-3 row-start-1 inline-flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 group-hover:border-flame group-hover:bg-flame group-hover:text-white lg:col-start-5">
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Link
            to="/ecosystem"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-flame transition-colors hover:text-navy"
          >
            Explore all five pathways
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      {/* ══ What We Run — restrained photo cards ══ */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <Kicker>What we run</Kicker>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              Four flagship formats that keep the network{" "}
              <span className="text-flame">compounding.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-l-[3px] border-flame pl-6 text-sm leading-loose text-navy/60">
              Different touchpoints.
              <br />
              Different perspectives.
              <br />
              One compounding network.
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INITIATIVES.map((initiative, i) => (
            <Reveal key={initiative.name} delay={i * 0.06}>
              <Link
                to="/initiatives"
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border/60 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(11,19,33,0.35)]"
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <img
                    src={initiative.image}
                    alt={initiative.name}
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-lg font-extrabold tracking-tight text-navy">
                    {initiative.name}
                  </p>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-navy/60">
                    {initiative.tagline}.
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-navy/50">
                      {initiative.cadence}
                      <br />
                      <span className="text-navy">{initiative.pax}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-flame transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ Where our members go — dark prestige band ══ */}
      <section className="px-3 py-16 sm:px-5 lg:py-20">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-[#070c18] py-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(240,77,26,0.4), rgba(120,60,200,0.25) 60%, transparent)",
            }}
          />
          <Reveal className="relative mb-12 flex flex-col items-center gap-5 px-6 text-center">
            <Kicker light>Where our members go</Kicker>
            <h2 className="max-w-xl text-balance font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Our people carry the ecosystem into the region&apos;s best rooms.
            </h2>
          </Reveal>
          <AlumniTicker />
        </div>
      </section>

      {/* ══ Life at ELA — captioned gallery ══ */}
      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:py-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <Kicker>Life at ELA</Kicker>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Runs, rallies, lattes and late-night ideas —{" "}
              <span className="text-flame">the network in its natural habitat.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs border-l-[3px] border-flame pl-6 text-sm leading-loose text-navy/60">
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

      {/* ══ Join the Ecosystem — editorial CTA: copy left, one photograph right ══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 pb-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-border/60 bg-white shadow-[0_40px_80px_-50px_rgba(11,19,33,0.4)]">
            <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">
              {/* Copy */}
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <Kicker>Join the Ecosystem</Kicker>
                <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl">
                  Your next room is already in the network.
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
                <div className="mt-10 flex items-center gap-3">
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

              {/* Photograph */}
              <div className="relative hidden min-h-[420px] lg:block">
                <img
                  src={HERO_PHOTOS.join}
                  alt="Members in conversation at a café session"
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"
                />
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
