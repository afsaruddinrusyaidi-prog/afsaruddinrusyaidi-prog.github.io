import { cn } from "@/lib/utils"

/**
 * Soft blurred colour orb used to give flat sections gentle atmospheric depth.
 * Purely decorative — always aria-hidden and pointer-events-none.
 */
export function Orb({
  className,
  color = "amber",
}: {
  className?: string
  color?: "amber" | "blue" | "orange" | "purple" | "red"
}) {
  const tint: Record<string, string> = {
    amber: "bg-amber/20",
    blue: "bg-blue/20",
    orange: "bg-orange/20",
    purple: "bg-purple/20",
    red: "bg-red/20",
  }
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-0 rounded-full blur-3xl",
        tint[color],
        className,
      )}
    />
  )
}

/**
 * Faint dot-grid backdrop. Rendered as an inline SVG data pattern so it stays
 * self-contained and crisp at any size.
 */
export function DotGrid({
  className,
  tone = "navy",
}: {
  className?: string
  tone?: "navy" | "light"
}) {
  const dot = tone === "navy" ? "rgba(11,19,33,0.14)" : "rgba(255,255,255,0.14)"
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `radial-gradient(${dot} 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }}
    />
  )
}

/** Small four-point star motif — a nod to the ELA star mark. */
export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 0c.6 6.3 5.1 10.8 11.4 11.4v1.2C17.1 13.2 12.6 17.7 12 24h-1.2C10.2 17.7 5.7 13.2-.6 12.6v-1.2C5.7 10.8 10.2 6.3 10.8 0H12z" />
    </svg>
  )
}

/**
 * Thin horizontal hairline that fades in from both edges — a subtle separator
 * used between major bands.
 */
export function FadeRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-border to-transparent",
        className,
      )}
    />
  )
}
