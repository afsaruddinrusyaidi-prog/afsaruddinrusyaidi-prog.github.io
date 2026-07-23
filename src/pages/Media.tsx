import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight, Play, Quote } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  ECOSYSTEM_FACES,
  FEATURED_MOMENTS,
  MEDIA_CLOSING,
  MEDIA_FILTERS,
  MEDIA_HERO,
  MEDIA_QUOTE,
  MEDIA_TIMELINE,
  ORG,
  PHOTO_STORIES,
} from "@/data/content"
import { VIDEOS, type Channel, type VideoItem } from "@/data/media"
import { cn } from "@/lib/utils"

const CHANNEL_HANDLES: Record<Channel, string> = {
  ELA: "@emergingleadersasia",
  ECL: "@emergingcorpleaders",
  AYTP: "@axiatayoungtalentprogramme",
}

const CHANNEL_COLORS: Record<Channel, string> = {
  ELA: "#2456c4",
  ECL: "#e0631d",
  AYTP: "#6d28d9",
}

// Experience tags per reel — lets the concept board's chips actually filter.
const VIDEO_TAGS: Record<string, string[]> = {
  "/media/video/v00_ela.mp4": ["Community"],
  "/media/video/v01_ela.mp4": ["Leadership"],
  "/media/video/v02_ela.mp4": ["Community", "Celebration"],
  "/media/video/v03_ela.mp4": ["Workshops"],
  "/media/video/v04_ela.mp4": ["Community", "Celebration", "Behind the Scenes"],
  "/media/video/v05_ecl.mp4": ["Panels", "Mentorship"],
  "/media/video/v06_ela.mp4": ["Panels", "Leadership"],
  "/media/video/v07_ela.mp4": ["Panels", "Leadership"],
  "/media/video/v08_ela.mp4": ["Behind the Scenes", "Community"],
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-MY", { year: "numeric", month: "short" })
}

export default function Media() {
  const [filter, setFilter] = useState<(typeof MEDIA_FILTERS)[number]>("All")
  // Single-instance lightbox: exactly one active video, or none.
  const [active, setActive] = useState<VideoItem | null>(null)

  const videos = useMemo(
    () =>
      filter === "All"
        ? VIDEOS
        : VIDEOS.filter((v) => (VIDEO_TAGS[v.src] ?? []).includes(filter)),
    [filter],
  )

  return (
    <>
      {/* ══ Hero — "Leadership isn't only documented. It's lived." ══ */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {MEDIA_HERO.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.2rem]">
              {MEDIA_HERO.headline[0]}
              <br />
              {MEDIA_HERO.headline[1]}
              <br />
              <span className="text-flame">{MEDIA_HERO.headline[2]}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {MEDIA_HERO.body[0]}
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {MEDIA_HERO.body[1]}
            </p>
            <button
              type="button"
              onClick={() => setActive(VIDEOS[0])}
              className="mt-8 inline-flex items-center gap-3 text-left"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform duration-300 hover:scale-105">
                <Play className="ml-0.5 size-5" fill="currentColor" />
              </span>
              <span>
                <span className="block text-sm font-bold text-navy">{MEDIA_HERO.film.label}</span>
                <span className="block text-xs text-muted-foreground">{MEDIA_HERO.film.length}</span>
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <img
                src="/media/gallery/hero-community.jpg"
                alt="The ELA community gathered in a circle"
                className="aspect-[16/10] w-full rounded-[28px] object-cover shadow-xl"
              />
              {/* Player strip — real reels, click to play */}
              <div className="absolute inset-x-4 bottom-4 hidden items-center gap-2 rounded-2xl bg-navy/70 p-2.5 backdrop-blur-md sm:flex">
                {VIDEOS.slice(0, 4).map((v, i) => (
                  <button
                    key={v.src}
                    type="button"
                    onClick={() => setActive(v)}
                    aria-label={`Play video: ${v.caption}`}
                    className={cn(
                      "relative h-16 flex-1 overflow-hidden rounded-lg",
                      i === 2 && "ring-2 ring-flame",
                    )}
                  >
                    <img src={v.poster} alt="" className="absolute inset-0 size-full object-cover" />
                  </button>
                ))}
                <span className="hidden pl-1 pr-2 lg:block">
                  <Play className="size-4 text-white" fill="currentColor" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Explore by experience ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-14 sm:px-8">
        <Reveal className="flex flex-wrap items-center gap-3">
          <p className="mr-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6d28d9]">
            Explore by Experience
          </p>
          <div className="flex flex-wrap gap-2">
            {MEDIA_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "inline-flex min-h-10 items-center rounded-full border px-5 text-sm font-semibold transition-colors duration-300",
                  filter === f
                    ? "border-navy bg-navy text-cream"
                    : "border-border bg-white text-navy/70 hover:bg-cream-deep",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══ Featured moments ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Featured Moments
            </p>
            <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">
              Stories that
              <br />
              capture what
              <br />
              matters most.
            </h2>
            <a
              href="#wall"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]"
            >
              View all moments <ArrowRight className="size-4" />
            </a>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr]">
            {FEATURED_MOMENTS.map((m, i) => (
              <Reveal
                key={m.title}
                delay={i * 0.06}
                className={cn("h-full", i < 2 && "lg:row-span-2")}
              >
                <article className={cn("relative h-full overflow-hidden rounded-3xl", i < 2 ? "min-h-80" : "min-h-44")}>
                  <img
                    src={m.image}
                    alt={m.title}
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white"
                    style={{ backgroundColor: m.tagColor }}
                  >
                    {m.tag}
                  </span>
                  {i >= 2 && (
                    <span className="absolute bottom-4 right-4 inline-flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <Play className="ml-0.5 size-4" fill="currentColor" />
                    </span>
                  )}
                  <div className="absolute inset-x-4 bottom-4 pr-10">
                    <h3 className="font-display text-lg font-extrabold leading-tight text-white">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/75">
                      {m.meta && (
                        <>
                          {m.meta}
                          <br />
                        </>
                      )}
                      {m.date}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Quote strip ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-10 sm:px-8">
        <Reveal>
          <figure className="flex flex-col items-start gap-4 rounded-3xl bg-cream-deep px-8 py-7 sm:flex-row sm:items-center">
            <Quote className="size-7 shrink-0 text-navy/30" fill="currentColor" />
            <blockquote className="font-display text-lg font-bold text-navy sm:text-xl">
              {MEDIA_QUOTE.quote}
            </blockquote>
            <figcaption className="text-sm text-muted-foreground sm:ml-auto sm:shrink-0">
              — {MEDIA_QUOTE.by}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ══ Living archive timeline ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Living Archive
            </p>
            <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">
              A timeline of
              <br />
              impact, year
              <br />
              after year.
            </h2>
            <a
              href="#wall"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]"
            >
              Explore timeline <ArrowRight className="size-4" />
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-[3.1rem] hidden border-t-2 border-dotted border-navy/15 sm:block"
              />
              <ol className="grid grid-cols-2 gap-y-8 sm:grid-cols-5">
                {MEDIA_TIMELINE.map((t) => (
                  <li key={t.year} className="flex flex-col items-center text-center">
                    <p
                      className={cn(
                        "font-display text-lg font-extrabold",
                        t.active ? "text-flame" : "text-navy",
                      )}
                    >
                      {t.year}
                    </p>
                    <span
                      className={cn(
                        "relative z-10 mt-1 size-2.5 rounded-full",
                        t.active ? "bg-flame" : "bg-navy/30",
                      )}
                    />
                    <img
                      src={t.image}
                      alt=""
                      className={cn(
                        "mt-4 size-20 rounded-full object-cover sm:size-24",
                        t.active && "ring-[3px] ring-flame ring-offset-2 ring-offset-cream",
                      )}
                      loading="lazy"
                    />
                    <p
                      className={cn(
                        "mt-3 text-[13px] font-bold",
                        t.active ? "text-flame" : "text-navy",
                      )}
                    >
                      {t.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{t.meta}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Video wall ══ */}
      <section id="wall" className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Video Wall
            </p>
            <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">
              Watch the
              <br />
              moments
              <br />
              come alive.
            </h2>
          </Reveal>

          {videos.length === 0 ? (
            <Reveal>
              <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border bg-white px-6 py-16 text-center">
                <p className="font-display text-lg font-bold text-navy">
                  No reels tagged “{filter}” yet.
                </p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Try another experience, or catch the full archive on Instagram.
                </p>
                <a
                  href={ORG.socials.instagramELA}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-navy px-6 text-sm font-semibold text-cream"
                >
                  Open Instagram <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
              {videos.map((video, i) => (
                <Reveal key={video.src} delay={(i % 5) * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActive(video)}
                    className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl text-left"
                    aria-label={`Play video: ${video.caption}`}
                  >
                    <img
                      src={video.poster}
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
                    <span
                      className="absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold text-white"
                      style={{ backgroundColor: CHANNEL_COLORS[video.channel] }}
                    >
                      {video.channel}
                    </span>
                    <span className="absolute left-1/2 top-[42%] inline-flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 size-4" fill="currentColor" />
                    </span>
                    <span className="absolute inset-x-3 bottom-3">
                      <span className="line-clamp-2 text-xs font-bold leading-snug text-white">
                        {video.caption}
                      </span>
                      <span className="mt-1 block text-[10px] text-white/60">
                        {formatDate(video.date)} · {video.likes} likes
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══ Single-instance lightbox — the <video> exists only while open ══ */}
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-[calc(100%-2rem)] overflow-hidden border-none bg-navy p-0 ring-white/10 sm:max-w-sm">
          {active && (
            <div className="flex flex-col">
              <DialogTitle className="sr-only">
                {active.channel} video — {formatDate(active.date)}
              </DialogTitle>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                key={active.src}
                src={active.src}
                poster={active.poster}
                className="aspect-[9/16] w-full bg-navy object-contain"
                controls
                autoPlay
                playsInline
                preload="none"
              />
              <div className="flex flex-col gap-2 p-4">
                <DialogDescription className="text-sm leading-relaxed text-cream/80">
                  {active.caption}
                </DialogDescription>
                <a
                  href={active.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber"
                >
                  View on Instagram ({CHANNEL_HANDLES[active.channel]})
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ══ Photo stories ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              Photo Stories
            </p>
            <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">
              Still moments
              <br />
              that tell bigger
              <br />
              stories.
            </h2>
            <a
              href={ORG.socials.instagramELA}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]"
            >
              View all photos <ArrowRight className="size-4" />
            </a>
          </Reveal>
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
              {PHOTO_STORIES.map((album, i) => (
                <Reveal key={album.title} delay={i * 0.05}>
                  <a
                    href={ORG.socials.instagramELA}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
                  >
                    <img
                      src={album.image}
                      alt={album.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
                    <span className="absolute inset-x-3 bottom-3">
                      <span className="block font-display text-sm font-extrabold leading-tight text-white">
                        {album.title}
                      </span>
                      <span className="mt-1 block text-[11px] text-white/70">{album.count}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                This is a curated selection — the full archive lives on Instagram.
              </p>
              <a
                href={ORG.socials.instagramELA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]"
              >
                Follow @emergingleadersasia <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ Faces of the ecosystem ══ */}
      <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#6d28d9]">
              {ECOSYSTEM_FACES.kicker}
            </p>
            <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">
              {ECOSYSTEM_FACES.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <Link
              to="/leadership"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#6d28d9]"
            >
              {ECOSYSTEM_FACES.link} <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {ECOSYSTEM_FACES.cards.map((card, i) => (
              <Reveal key={card.quote} delay={i * 0.05} className="h-full">
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <img
                    src={card.image}
                    alt=""
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <blockquote className="flex flex-1 flex-col p-4">
                    <Quote className="size-4 text-[#6d28d9]" fill="currentColor" />
                    <p className="mt-2 text-[13px] font-semibold leading-snug text-navy">
                      {card.quote}
                    </p>
                  </blockquote>
                </figure>
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
              src="/media/gallery/hero-forum.jpg"
              alt=""
              aria-hidden
              className="absolute inset-y-0 right-0 hidden w-3/5 object-cover opacity-50 lg:block"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[#3b1240] via-[#4a1a4d]/90 to-[#2a1657]/50"
            />
            <div className="relative grid items-center gap-8 px-8 py-12 sm:px-12 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {MEDIA_CLOSING.headline[0]}
                  <br />
                  {MEDIA_CLOSING.headline[1]} {MEDIA_CLOSING.headline[2]}
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
                  {MEDIA_CLOSING.body}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/join"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-bold text-white shadow-lg shadow-flame/30 transition-transform duration-300 hover:scale-[1.03]"
                >
                  {MEDIA_CLOSING.primary}
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  to="/initiatives"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-7 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  {MEDIA_CLOSING.secondary}
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
