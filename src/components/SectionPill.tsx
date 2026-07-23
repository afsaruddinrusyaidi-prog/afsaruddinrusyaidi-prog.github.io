import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionPillProps {
  children: ReactNode
  className?: string
  tone?: "light" | "dark"
}

/**
 * Editorial section kicker — letterspaced uppercase label preceded by a short
 * hairline rule. Flame on light backgrounds, amber on dark. (Kept the
 * SectionPill name + API so every page inherits the premium look at once.)
 */
export function SectionPill({ children, className, tone = "light" }: SectionPillProps) {
  const isDark = tone === "dark"
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]",
        isDark ? "text-amber" : "text-flame",
        className,
      )}
    >
      <span aria-hidden className={cn("h-px w-8", isDark ? "bg-amber/70" : "bg-flame/70")} />
      {children}
    </span>
  )
}
