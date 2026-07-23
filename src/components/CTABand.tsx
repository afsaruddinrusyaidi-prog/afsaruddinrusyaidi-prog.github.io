import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionPill } from "@/components/SectionPill"

interface CTABandProps {
  eyebrow?: string
  title: string
  body?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

/** Deep-navy grounding band used to close pages with a call to action. */
export function CTABand({
  eyebrow = "Join the ecosystem",
  title,
  body,
  primaryLabel = "Join the Network",
  primaryTo = "/join",
  secondaryLabel,
  secondaryTo,
}: CTABandProps) {
  return (
    <section className="px-3 py-16 sm:px-5 sm:py-24">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#070c18] px-6 py-16 sm:rounded-[36px] sm:px-14 sm:py-20">
        {/* Warm corner glow — orange into purple, matching the footer */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(240,77,26,0.5), rgba(120,60,200,0.3) 60%, transparent)",
          }}
        />

        <Reveal className="relative max-w-3xl">
          <SectionPill tone="dark" className="mb-6">
            {eyebrow}
          </SectionPill>
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          {body && <p className="mt-5 max-w-xl text-balance leading-relaxed text-white/70">{body}</p>}

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to={primaryTo}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-7 text-sm font-semibold text-white shadow-[0_18px_36px_-14px_rgba(240,77,26,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              {primaryLabel}
              <ArrowUpRight className="size-4" />
            </Link>
            {secondaryLabel && secondaryTo && (
              <Link
                to={secondaryTo}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
