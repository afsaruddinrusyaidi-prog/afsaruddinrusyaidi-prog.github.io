import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

const formatNumber = (n: number) => n.toLocaleString("en-US")

/**
 * Count-up number that fires once when scrolled into view.
 * Reduced-motion users see the final value immediately.
 */
export function CountUp({ value, prefix = "", suffix = "", duration = 1600, className }: CountUpProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(reduce ? value : 0)
  const started = useRef(false)

  useEffect(() => {
    if (reduce) {
      setDisplay(value)
      return
    }
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / duration)
              // easeOutExpo for a satisfying settle
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
              setDisplay(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(display)}
      {suffix}
    </span>
  )
}
