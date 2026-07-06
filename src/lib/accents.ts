// Maps the brand accent keys used across content data to Tailwind utility sets.
export type Accent = "amber" | "orange" | "blue" | "red" | "purple" | "green" | "pink" | "flame"

interface AccentStyle {
  text: string
  bg: string
  softBg: string
  border: string
  dot: string
  hex: string
}

export const ACCENTS: Record<Accent, AccentStyle> = {
  amber: {
    text: "text-amber",
    bg: "bg-amber",
    softBg: "bg-amber/10",
    border: "border-amber/30",
    dot: "bg-amber",
    hex: "#f59e0b",
  },
  orange: {
    text: "text-orange",
    bg: "bg-orange",
    softBg: "bg-orange/10",
    border: "border-orange/30",
    dot: "bg-orange",
    hex: "#f79433",
  },
  blue: {
    text: "text-blue",
    bg: "bg-blue",
    softBg: "bg-blue/10",
    border: "border-blue/30",
    dot: "bg-blue",
    hex: "#29a8e0",
  },
  red: {
    text: "text-red",
    bg: "bg-red",
    softBg: "bg-red/10",
    border: "border-red/30",
    dot: "bg-red",
    hex: "#e63946",
  },
  purple: {
    text: "text-purple",
    bg: "bg-purple",
    softBg: "bg-purple/10",
    border: "border-purple/30",
    dot: "bg-purple",
    hex: "#4a3f8f",
  },
  green: {
    text: "text-green",
    bg: "bg-green",
    softBg: "bg-green/10",
    border: "border-green/30",
    dot: "bg-green",
    hex: "#3f9142",
  },
  pink: {
    text: "text-pink",
    bg: "bg-pink",
    softBg: "bg-pink/10",
    border: "border-pink/30",
    dot: "bg-pink",
    hex: "#d6357a",
  },
  flame: {
    text: "text-flame",
    bg: "bg-flame",
    softBg: "bg-flame/10",
    border: "border-flame/30",
    dot: "bg-flame",
    hex: "#f04d1a",
  },
}
