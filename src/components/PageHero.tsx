import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  image: string
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  cornerCaption?: string
  actions?: ReactNode
  /** Floating glass chips rendered over the lower band of the card. */
  chips?: ReactNode
  className?: string
  /** Taller card for the homepage. */
  size?: "default" | "tall"
}

/**
 * Editorial hero: a full-bleed photo card with a bottom-up navy scrim and
 * left-aligned white type anchored to the base — the premium treatment shared
 * across every inner page (matches the Home hero).
 */
export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  cornerCaption,
  actions,
  chips,
  className,
  size = "default",
}: PageHeroProps) {
  const reduce = useReducedMotion()

  return (
    <section className="px-3 pt-24 sm:px-5 sm:pt-28">
      <div
        className={cn(
          "relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-navy sm:rounded-[36px]",
          className,
        )}
      >
        {/* Photo */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        {/* Bottom-up legibility scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/25" />

        {/* Content — anchored bottom-left */}
        <div
          className={cn(
            "relative flex flex-col justify-end px-6 pb-12 pt-40 sm:px-12 sm:pb-14 lg:px-16",
            size === "tall" ? "min-h-[600px] lg:min-h-[640px]" : "min-h-[480px] lg:min-h-[520px]",
          )}
        >
          {eyebrow && (
            <motion.span
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-amber"
            >
              <span aria-hidden className="h-px w-8 bg-amber/70" />
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {actions && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {actions}
            </motion.div>
          )}

          {/* Floating chips band */}
          {chips && (
            <div className="relative z-10 mt-9 flex flex-wrap items-end gap-3">
              {chips}
            </div>
          )}
        </div>

        {/* Corner caption */}
        {cornerCaption && (
          <span className="absolute bottom-5 right-6 text-[11px] font-medium italic tracking-wide text-white/60">
            {cornerCaption}
          </span>
        )}
      </div>
    </section>
  )
}
