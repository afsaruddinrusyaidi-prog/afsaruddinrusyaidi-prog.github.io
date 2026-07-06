import { motion, useReducedMotion } from "framer-motion"
import { ALUMNI_FIRMS, type Firm } from "@/data/content"

function FirmChip({ firm }: { firm: Firm }) {
  const big = firm.size === "lg"
  return (
    <div className="flex min-h-[68px] shrink-0 items-center justify-center rounded-2xl border border-border bg-white px-7 py-3">
      <img
        src={firm.logo}
        alt={firm.name}
        className={
          big
            ? "h-8 w-auto max-w-[176px] object-contain opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9"
            : "h-6 w-auto max-w-[140px] object-contain opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-7"
        }
        loading="lazy"
      />
    </div>
  )
}

/**
 * Infinite horizontal marquee of firms our alumni have gone on to. Two identical
 * halves scroll as one loop; reduced-motion users get a static, wrapped row.
 */
export function AlumniTicker() {
  const reduce = useReducedMotion()
  const lane = [...ALUMNI_FIRMS, ...ALUMNI_FIRMS]

  if (reduce) {
    return (
      <div className="flex flex-wrap justify-center gap-3 px-6">
        {ALUMNI_FIRMS.map((firm) => (
          <FirmChip key={firm.name} firm={firm} />
        ))}
      </div>
    )
  }

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {lane.map((firm, i) => (
          <FirmChip key={`${firm.name}-${i}`} firm={firm} />
        ))}
      </motion.div>
    </div>
  )
}
