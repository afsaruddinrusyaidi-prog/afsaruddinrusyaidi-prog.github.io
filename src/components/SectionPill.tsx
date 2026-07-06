import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Star } from "@/components/Decor"

interface SectionPillProps {
  children: ReactNode
  className?: string
  tone?: "light" | "dark"
}

/**
 * Small pill badge used above section headlines — concept style: white pill,
 * flame four-point sparkle, letterspaced uppercase label.
 */
export function SectionPill({ children, className, tone = "light" }: SectionPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]",
        tone === "light"
          ? "border-border/70 bg-white text-navy/75 shadow-[0_10px_30px_-18px_rgba(11,19,33,0.35)]"
          : "border-white/20 bg-white/10 text-white/85",
        className,
      )}
    >
      <Star className="size-3 text-flame" />
      {children}
    </span>
  )
}
