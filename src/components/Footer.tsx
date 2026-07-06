import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight, Link2 } from "lucide-react"
import { Star } from "@/components/Decor"
import { NAV_LINKS, ORG, TRACKS } from "@/data/content"

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

const CHANNELS = [
  { label: "@emergingleadersasia", href: ORG.socials.instagramELA, icon: "instagram" },
  { label: "@emergingcorpleaders", href: ORG.socials.instagramECL, icon: "instagram" },
  { label: "@axiatayoungtalentprogramme", href: ORG.socials.instagramAYTP, icon: "instagram" },
  { label: "linktr.ee/emergingcorpleaders", href: ORG.socials.linktree, icon: "link" },
] as const

export function Footer() {
  return (
    <footer className="px-3 pb-6 sm:px-5">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-[#070c18] text-cream">
        {/* corner glow — warm orange into purple, bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(240,77,26,0.55), rgba(120,60,200,0.35) 60%, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.6fr_1.1fr]">
            {/* Brand + newsletter */}
            <div>
              <img
                src="/ELA-Logo-white.png"
                alt="Emerging Leaders Asia"
                className="h-9 w-auto"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                {ORG.tagline}. The alumni continuity engine of the Axiata Young
                Talent Programme.
              </p>
              <div className="mt-4 flex gap-2.5">
                {CHANNELS.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={c.label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-amber hover:text-amber"
                  >
                    {c.icon === "link" ? (
                      <Link2 className="size-4" />
                    ) : (
                      <InstagramGlyph className="size-4" />
                    )}
                  </a>
                ))}
              </div>

              {/* Stay in the loop */}
              <div className="mt-5 max-w-sm rounded-2xl border border-flame/35 bg-white/[0.03] p-4 shadow-[0_0_40px_-20px_rgba(240,77,26,0.35)]">
                <div className="flex items-start gap-2.5">
                  <Star className="mt-0.5 size-4 shrink-0 text-amber" />
                  <div>
                    <p className="font-display text-sm font-bold text-white">
                      Stay in the loop.
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                      Get ecosystem updates, stories, and opportunities.
                    </p>
                  </div>
                </div>
                <form
                  className="mt-3 flex items-center gap-2 rounded-full border border-white/12 bg-white/5 p-1 pl-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    window.open(ORG.socials.linktree, "_blank", "noreferrer")
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Your email address"
                    className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/40"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-amber to-flame text-navy transition-transform duration-300 hover:scale-105"
                  >
                    <ArrowRight className="size-3.5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Explore */}
            <FooterColumn title="Explore">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/65 transition-colors hover:text-amber"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            {/* Tracks */}
            <FooterColumn title="Tracks">
              {TRACKS.map((t) => (
                <li key={t.acronym}>
                  <Link
                    to="/ecosystem"
                    className="text-sm text-white/65 transition-colors hover:text-amber"
                  >
                    {t.acronym}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            {/* Channels */}
            <FooterColumn title="Channels">
              {CHANNELS.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-amber"
                  >
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 text-amber">
                      {c.icon === "link" ? (
                        <Link2 className="size-3.5" />
                      ) : (
                        <InstagramGlyph className="size-3.5" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{c.label}</span>
                    <ArrowUpRight className="size-3 shrink-0 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p className="inline-flex items-center gap-2">
              <Star className="size-3.5 text-amber" />© {new Date().getFullYear()}{" "}
              Emerging Leaders Asia. All rights reserved.
            </p>
            <p className="inline-flex items-center gap-2">
              Asia&apos;s Ecosystem for Emerging Leaders.
              <Star className="size-3.5 text-flame" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-amber">{title}</h4>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}
