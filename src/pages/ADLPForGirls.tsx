import type { ComponentType } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Compass,
  ExternalLink,
  HeartHandshake,
  Laptop,
  Lightbulb,
  MapPin,
  Mic,
  MoonStar,
  PartyPopper,
  Trophy,
  Users,
  UsersRound,
  Wallet,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionPill } from "@/components/SectionPill"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const REGISTER_URL =
  "https://candidate.axiata.talentpulse.accendo.com.my/invitation/journey/?journey_unique_token=Ih46s9Psk0eqCZvZvnhDCZmQcNyIdwW4"
const CODEX_LOGO_URL = "/codex-logo.png?v=3383f8aa"

type Icon = ComponentType<{ className?: string }>

const HERO_FACTS: {
  label: string
  value: string
  icon: Icon
  accent: string
  highlight?: boolean
}[] = [
  { label: "Dates", value: "9–13 September 2026", icon: CalendarDays, accent: "#f4791f" },
  { label: "Venue", value: "Perdana KLCC", icon: MapPin, accent: "#e0186e" },
  { label: "Spots", value: "80 spots", icon: UsersRound, accent: "#9a63e8" },
  { label: "Prize pool", value: "RM12,000 prize pool", icon: Trophy, accent: "#f4b13f" },
]

const PILLARS: { title: string; body: string; icon: Icon; accent: string }[] = [
  {
    title: "80 female university students, 5 days.",
    body: "Spend five days learning, building, and sharing ideas with a cohort of ambitious women selected from across Malaysia.",
    icon: UsersRound,
    accent: "#f4791f",
  },
  {
    title: "Lead with purpose.",
    body: "Develop the skills to bring people together, turn ideas into action, and grow into a leader in the AI economy.",
    icon: Compass,
    accent: "#7a3fc9",
  },
  {
    title: "RM12,000 up for grabs.",
    body: "Winners of each track will share a total prize pool of up to RM12,000 at Demo Day.",
    icon: Trophy,
    accent: "#f4791f",
  },
]

const JOURNEY: { day: string; title: string; body: string; icon: Icon }[] = [
  {
    day: "DAY 1",
    title: "Leadership & Team Formation",
    body: "Build your leadership foundation, meet your cohort, and form your team of four.",
    icon: UsersRound,
  },
  {
    day: "DAY 2",
    title: "Problem and Ideation",
    body: "Explore the released problem themes, then ideate and validate the one your team wants to solve.",
    icon: Lightbulb,
  },
  {
    day: "DAY 3",
    title: "Build with AI",
    body: "Learn Codex and start building your product with it, from first prototype to Day 4.",
    icon: BrainCircuit,
  },
  {
    day: "DAY 4",
    title: "Build Sprint",
    body: "Build, test, and polish your product with floor mentors unblocking your team on the spot.",
    icon: Laptop,
  },
  {
    day: "DAY 5",
    title: "Demo Day",
    body: "Twenty teams. Ten minutes each. Live judges. Up to RM12,000 in prizes for the top teams.",
    icon: Trophy,
  },
]

const BEYOND_THE_SPRINT: { title: string; body: string; icon: Icon; accent: string }[] = [
  {
    title: "Founder Panels",
    body: "Hear founders share the decisions, setbacks, and breakthroughs behind their companies.",
    icon: Mic,
    accent: "#f4791f",
  },
  {
    title: "Mentor Circles",
    body: "Sit down with entrepreneurs and practitioners to think through your ideas and next steps.",
    icon: HeartHandshake,
    accent: "#e0186e",
  },
  {
    title: "Pizza + Movie Night",
    body: "End a big day with pizza, a film, and a night to recharge and make new friends.",
    icon: PartyPopper,
    accent: "#7a3fc9",
  },
  {
    title: "ELA Alumni Community",
    body: "Stay connected through ELA events, opportunities, and a network of ambitious women.",
    icon: Users,
    accent: "#f4791f",
  },
]

const BACKERS: { name: string; logo: string; url: string; blurb: string }[] = [
  {
    name: "Axiata Foundation",
    logo: "/partners/axiata-foundation.png",
    url: "https://www.axiata-foundation.com",
    blurb:
      "Axiata Foundation supports initiatives that create meaningful opportunities for young people and communities across Asia.",
  },
  {
    name: "Codex",
    logo: CODEX_LOGO_URL,
    url: "https://luma.com/user/CodexMY",
    blurb:
      "Codex is OpenAI's AI coding agent, designed to help people turn ideas into working software using natural-language instructions.",
  },
  {
    name: "Inspire Group",
    logo: "/partners/inspire-group.png",
    url: "https://www.inspiregroup.net",
    blurb:
      "Inspire Group is a learning and development partner that creates practical programmes for emerging talent and future leaders.",
  },
  {
    name: "Emerging Leaders Asia",
    logo: "/ELA-Logo.png",
    url: "https://emergingleadersasia.com/",
    blurb:
      "Emerging Leaders Asia is an alumni-led community that connects ambitious young people with opportunities across the region.",
  },
]

const LOGISTICS: { label: string; value: string; note?: string; icon: Icon }[] = [
  {
    label: "DATES",
    value: "9 to 13 September 2026",
    note: "(5 days, 4 nights)",
    icon: CalendarDays,
  },
  { label: "VENUE", value: "Perdana KLCC", icon: MapPin },
  {
    label: "COST",
    value: "Fully sponsored, including accommodation, meals, and AI tool access",
    icon: Wallet,
  },
  {
    label: "ELIGIBILITY",
    value: "Malaysian female university students aged 18 to 24, by selection",
    icon: UsersRound,
  },
  { label: "BRING", value: "A laptop, a charger, and a problem you care about", icon: Laptop },
  {
    label: "THEMES",
    value: "Problem themes will be released ahead of the programme to spark ideas",
    icon: Lightbulb,
  },
]

const FAQS = [
  {
    question: "Who can apply?",
    answer:
      "Malaysian female university students aged 18 to 24. You do not need to be studying ICT or computer science. If you are curious about building with AI and willing to work hard for five days, apply.",
  },
  {
    question: "Do I need coding experience or a startup idea?",
    answer:
      "No to both. Problem themes will be released ahead of the programme to spark ideas, Codex handles the code, and Day 2 is designed to help your team find and validate the one it wants to solve.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing. The programme is fully sponsored, including accommodation, meals, and AI tool access.",
  },
  {
    question: "How are teams formed?",
    answer:
      "Teams of four are formed on Day 1. You do not need to apply with a team, and you cannot pre-select teammates. Part of the experience is learning to build with people you just met.",
  },
  {
    question: "What should I bring?",
    answer: "A laptop, a charger, and a problem you care about. Everything else is provided.",
  },
  {
    question: "Do I have to stay at the hotel for all five days?",
    answer:
      "Yes. This is a full residential programme and the schedule runs day and night. Accommodation is provided and sponsored.",
  },
  {
    question: "What happens on Demo Day?",
    answer:
      "All twenty teams pitch their working product live to a panel of judges, ten minutes each. Top teams share a prize pool of up to RM12,000.",
  },
  {
    question: "What happens after the programme?",
    answer:
      "You leave with a working product, a pitch you have delivered on stage, and access to the Emerging Leaders Asia network of alumni, mentors, and coaches.",
  },
]

function SectionHeading({
  eyebrow,
  title,
  body,
  centered = false,
  dark = false,
}: {
  eyebrow: string
  title: string
  body?: string
  centered?: boolean
  dark?: boolean
}) {
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <SectionPill tone={dark ? "dark" : undefined}>{eyebrow}</SectionPill>
      <h2
        className={`mt-6 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-[17px] ${
            dark ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          {body}
        </p>
      )}
    </Reveal>
  )
}

export default function ADLPForGirls() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      {/* ══ Hero ══ */}
      <section className="relative overflow-hidden bg-[#070c18] pb-20 pt-28 text-white sm:pb-24 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(154,99,232,0.20), transparent 70%), radial-gradient(ellipse 50% 45% at 12% 25%, rgba(224,24,110,0.16), transparent 70%), radial-gradient(ellipse 50% 45% at 88% 20%, rgba(244,121,31,0.14), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-14rem] h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-[#7a3fc9]/25 blur-[150px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 size-[30rem] rounded-full bg-[#e0186e]/16 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-24 size-[30rem] rounded-full bg-[#f4791f]/14 blur-[140px]"
        />

        <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
          <Reveal className="flex flex-col items-center text-center">
            <img
              src="/adlp-for-girls-logo.png?v=2026hd"
              alt="ADLP For Girls x Codex 2026"
              className="h-auto w-full max-w-[240px] sm:max-w-[300px]"
            />
            <h1 className="mt-7 font-display text-[3rem] font-black leading-[0.94] tracking-tighter sm:text-6xl lg:text-[4.5rem]">
              ADLP for Girls x{" "}
              <span className="block">
                <span className="bg-gradient-to-r from-[#4356ea] via-[#6b86f5] to-[#93a2ff] bg-clip-text text-transparent">
                  Codex
                </span>
                <span className="ml-3 sm:ml-4">2026</span>
              </span>
            </h1>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-[15px] font-semibold tracking-tight text-white/85 sm:text-base">
              <span className="text-white/35">Powered by</span>
              <span className="whitespace-nowrap">Inspire Group</span>
              <span className="whitespace-nowrap">Axiata Foundation</span>
              <span className="whitespace-nowrap">Emerging Leaders Asia</span>
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-[17px]">
              A fully sponsored five-day AI Startup Bootcamp where 80 female university students
              aged 18–24 come together in KL to lead, build with AI, and turn a bold idea into a
              real startup.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col items-center">
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {HERO_FACTS.map((fact) => {
                const IconCmp = fact.icon
                return (
                  <span
                    key={fact.label}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/75 backdrop-blur-sm"
                  >
                    <span className="shrink-0" style={{ color: fact.accent }}>
                      <IconCmp className="size-4" />
                    </span>
                    {fact.value}
                  </span>
                )
              })}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-10 text-base font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
              >
                Apply now
                <ArrowRight className="size-4" />
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/25 bg-[#4ade80]/10 px-4 py-2 text-[13px] font-semibold text-[#86efac]">
                <span className="relative flex size-2">
                  <span
                    aria-hidden
                    className="absolute inline-flex size-full animate-ping rounded-full bg-[#4ade80] opacity-70"
                  />
                  <span className="relative inline-flex size-2 rounded-full bg-[#4ade80]" />
                </span>
                Applications open until 15 August 2026
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Build with Codex — featured, then the rest of the pillars ══ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-[#f4791f]/6 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="THE BOOTCAMP EXPERIENCE"
            title="Build an AI startup in 5 days"
            centered
          />

          <Reveal delay={0.06} className="mt-14">
            <article className="group relative overflow-hidden rounded-[32px] bg-[#0b1321] p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10 lg:flex lg:items-center lg:gap-10">
              {/* Painted as a background gradient rather than a blurred child: a
                  filtered element is not reliably clipped by the card's rounded
                  corners, which leaks square pink edges past the radius. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(200px circle at calc(100% - 64px) 64px, rgba(224,24,110,0.28), rgba(224,24,110,0) 100%)",
                }}
              />
              <div className="relative flex w-full items-start justify-between gap-4 lg:w-auto lg:shrink-0 lg:items-center">
                <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-white/[0.08]">
                  <img src={CODEX_LOGO_URL} alt="" className="size-9 object-contain" />
                </span>
                <span className="font-display text-sm font-extrabold text-white/20 lg:hidden">01</span>
              </div>
              <div className="relative mt-6 lg:mt-0">
                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Build with Codex.</h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base">
                  Every team receives Codex credits and hands-on training to turn an idea into a
                  working AI prototype. The programme is designed for first-time and experienced
                  builders alike.
                </p>
              </div>
              <span className="absolute right-8 top-8 hidden font-display text-sm font-extrabold text-white/20 lg:block">
                01
              </span>
            </article>
          </Reveal>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar, index) => {
              const IconCmp = pillar.icon
              return (
                <Reveal key={pillar.title} delay={0.1 + index * 0.06}>
                  <article className="group h-full rounded-[28px] border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame/25 hover:shadow-xl">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="inline-flex size-13 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: `${pillar.accent}16`, color: pillar.accent }}
                      >
                        <IconCmp className="size-6" />
                      </span>
                      <span className="font-display text-sm font-extrabold text-navy/20">
                        0{index + 2}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-extrabold tracking-tight text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ Your 5-day journey — dark timeline ══ */}
      <section className="relative overflow-hidden bg-[#0b1321] py-24 text-white sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-28 top-0 size-96 rounded-full bg-[#7a3fc9]/20 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-28 bottom-0 size-96 rounded-full bg-[#f4791f]/15 blur-[110px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="YOUR 5-DAY JOURNEY"
            title="Programme Agenda"
            centered
            dark
          />
          <div className="relative mx-auto mt-16 max-w-3xl">
            <motion.div
              aria-hidden
              className="absolute bottom-10 left-6 top-10 w-px origin-top bg-gradient-to-b from-[#f4791f] via-[#e0186e] to-[#7a3fc9] sm:left-7"
              initial={reduceMotion ? { opacity: 0 } : { scaleY: 0 }}
              whileInView={reduceMotion ? { opacity: 1 } : { scaleY: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="space-y-3">
              {JOURNEY.map((step, index) => {
                const IconCmp = step.icon
                return (
                  <Reveal key={step.day} delay={index * 0.06}>
                    <div className="group relative flex items-start gap-5 sm:gap-7">
                      <span className="relative z-10 mt-1 flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-[#0b1321] bg-gradient-to-br from-[#f4791f] via-[#e0186e] to-[#7a3fc9] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:size-[3.75rem]">
                        <IconCmp className="size-5" />
                      </span>
                      <article className="min-w-0 flex-1 rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07] sm:p-7">
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ff6fa8]">
                          {step.day}
                        </p>
                        <h3 className="mt-2.5 font-display text-lg font-extrabold tracking-tight text-white sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-2.5 text-[15px] leading-relaxed text-white/60">
                          {step.body}
                        </p>
                      </article>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ Beyond the sprint — community, mentorship, network ══ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 size-96 rounded-full bg-[#7a3fc9]/6 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="WHAT MAKES THIS PROGRAMME FUN?"
            title="More than your typical bootcamp"
            body="Across five days, you will meet founders, get real feedback on your ideas, celebrate with your cohort, and join a community that stays with you long after Demo Day."
            centered
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {BEYOND_THE_SPRINT.map((item, index) => {
              const IconCmp = item.icon
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="group flex h-full flex-col gap-5 rounded-[28px] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame/25 hover:shadow-xl sm:flex-row sm:items-start sm:p-8">
                    <span
                      className="inline-flex size-13 shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${item.accent}16`, color: item.accent }}
                    >
                      <IconCmp className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ Backed by — organisers + logos, merged ══ */}
      <section className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 size-80 rounded-full bg-[#f4791f]/6 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading
              eyebrow="MADE POSSIBLE BY FOUR CO-ORGANISERS"
              title="Why we organise this."
              body="We created this bootcamp to give ambitious, high-potential young women the resources, community, and confidence to explore leadership, entrepreneurship, and AI. Over five days, participants will learn, build, and have fun together while gaining experiences, relationships, and opportunities that can shape their education and career journeys long after the programme ends."
            />
            <div className="grid gap-4">
              {BACKERS.map((backer, index) => (
                <Reveal key={backer.name} delay={0.08 + index * 0.06}>
                  <div className="flex flex-col gap-4 rounded-[26px] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame/25 hover:shadow-lg sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                    <a
                      href={backer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${backer.name}`}
                      className="flex h-11 w-28 shrink-0 items-center justify-start rounded-lg transition-opacity duration-300 hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame sm:h-12 sm:w-32 sm:justify-center"
                    >
                      <img
                        src={backer.logo}
                        alt={backer.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </a>
                    <div className="hidden h-12 w-px shrink-0 bg-border sm:block" />
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {backer.blurb.startsWith(backer.name) ? (
                        <>
                          <span className="font-bold text-navy">{backer.name}</span>
                          {backer.blurb.slice(backer.name.length)}
                        </>
                      ) : (
                        <>
                          <span className="font-bold text-navy">{backer.name}. </span>
                          {backer.blurb}
                        </>
                      )}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ Logistics — dark spec sheet ══ */}
      <section className="relative overflow-hidden bg-[#0b1321] py-24 text-white sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-[#e0186e]/20 blur-[100px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading
              eyebrow="LOGISTICS"
              title="Everything you need to show up ready."
              body="Accommodation, meals, and AI tool access are all covered. Bring a laptop and an idea you care about, and we will handle the rest."
              dark
            />
            <Reveal delay={0.1}>
              <div className="grid overflow-hidden rounded-[30px] border border-white/10 sm:grid-cols-2">
                {LOGISTICS.map((item, index) => {
                  const IconCmp = item.icon
                  return (
                    <div
                      key={item.label}
                      className={`p-7 transition-colors duration-300 hover:bg-white/[0.03] ${
                        index > 0 ? "border-t border-white/10" : ""
                      } ${index % 2 === 1 ? "sm:border-l sm:border-white/10" : ""} ${
                        index === 1 ? "sm:border-t-0" : ""
                      }`}
                    >
                      <IconCmp className="size-5 text-[#ff6fa8]" />
                      <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                        {item.label}
                      </p>
                      <p className="mt-2 text-[15px] font-bold leading-relaxed text-white">
                        {item.value}
                        {item.note ? <span className="block">{item.note}</span> : null}
                      </p>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Before you apply."
            body="No coding experience, no idea, and no team required. Here are the questions applicants ask us most."
          />
          <Reveal delay={0.1}>
            <Accordion className="rounded-[28px] border border-border bg-background px-6 sm:px-8">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="py-6 text-base font-bold tracking-tight text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-8 text-[15px] leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ══ Final CTA ══ */}
      <section id="register" className="px-3 pb-20 sm:px-5 sm:pb-24">
        <Reveal>
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[38px] bg-[#070c18] px-6 py-20 text-center text-white sm:px-10 sm:py-24">
            <div
              aria-hidden
              className="absolute -left-28 bottom-0 size-80 rounded-full bg-[#f4791f]/25 blur-[100px]"
            />
            <div
              aria-hidden
              className="absolute -right-28 top-0 size-80 rounded-full bg-[#7a3fc9]/30 blur-[100px]"
            />
            <div className="relative mx-auto max-w-3xl">
              <MoonStar className="mx-auto size-8 text-[#f4791f]" />
              <h2 className="mt-7 font-display text-[2.5rem] font-black leading-[1.02] tracking-tighter sm:text-5xl lg:text-[3.4rem]">
                Eighty places. Five days.{" "}
                <span className="bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#9a63e8] bg-clip-text text-transparent">
                  RM12,000 on the line.
                </span>
              </h2>
              <p className="mt-6 text-base text-white/60 sm:text-[17px]">
                Applications are now open. Submit your application by 15 August 2026.
              </p>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-14 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-9 text-base font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
              >
                Apply now
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
