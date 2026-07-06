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
 * Horizon-Courts style hero: a rounded inset photo card (never edge-to-edge)
 * with centered white type and small lowercase corner captions.
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
          "relative mx-auto max-w-7xl overflow-hidden rounded-[28px] sm:rounded-[36px]",
          size === "tall" ? "min-h-[640px]" : "min-h-[460px]",
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
        {/* Legibility wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/70" />
        <div className="absolute inset-0 bg-navy/10" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col">
          <div
            className={cn(
              "flex flex-1 flex-col items-center justify-center px-6 py-20 text-center",
              size === "tall" ? "py-28" : "py-24",
            )}
          >
            {eyebrow && (
              <motion.span
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                {eyebrow}
              </motion.span>
            )}

            <motion.h1
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/80 sm:text-lg"
              >
                {subtitle}
              </motion.p>
            )}

            {actions && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9 flex flex-wrap items-center justify-center gap-3"
              >
                {actions}
              </motion.div>
            )}
          </div>

          {/* Floating chips band */}
          {chips && (
            <div className="relative z-10 flex flex-wrap items-end justify-center gap-3 px-6 pb-8 sm:justify-start sm:px-10">
              {chips}
            </div>
          )}
        </div>

        {/* Corner captions */}
        {cornerCaption && (
          <span className="absolute bottom-5 right-6 text-[11px] font-medium italic tracking-wide text-white/70">
            {cornerCaption}
          </span>
        )}
      </div>
    </section>
  )
}
