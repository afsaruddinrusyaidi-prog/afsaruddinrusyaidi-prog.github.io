import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
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
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-navy px-6 py-16 sm:rounded-[36px] sm:px-14 sm:py-20">
        {/* Decorative round motif */}
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-amber/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-blue/10 blur-2xl" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <SectionPill tone="dark" className="mb-6">
            {eyebrow}
          </SectionPill>
          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-5xl">
            {title}
          </h2>
          {body && <p className="mx-auto mt-5 max-w-xl text-balance text-white/70">{body}</p>}

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={primaryTo}
              className="inline-flex min-h-12 items-center gap-1.5 rounded-full bg-amber px-7 text-sm font-semibold text-navy transition-transform duration-300 hover:-translate-y-0.5"
            >
              {primaryLabel}
              <ArrowUpRight className="size-4" />
            </Link>
            {secondaryLabel && secondaryTo && (
              <Link
                to={secondaryTo}
                className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
