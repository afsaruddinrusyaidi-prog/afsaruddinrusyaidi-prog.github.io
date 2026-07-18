import type { ComponentType } from "react"
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  ExternalLink,
  Laptop,
  Lightbulb,
  MapPin,
  MoonStar,
  Rocket,
  Trophy,
  UsersRound,
  Wallet,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { CountUp } from "@/components/CountUp"
import { SectionPill } from "@/components/SectionPill"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const REGISTER_URL = "#register"

type Icon = ComponentType<{ className?: string }>

const STATS = [
  { value: 80, prefix: "", suffix: "", label: "PARTICIPANTS" },
  { value: 20, prefix: "", suffix: "", label: "TEAMS" },
  { value: 5, prefix: "", suffix: "", label: "DAYS" },
  { value: 12, prefix: "RM", suffix: "K", label: "UP FOR GRABS" },
] as const

const PILLARS: { title: string; body: string; icon: Icon; accent: string }[] = [
  {
    title: "80 women, 5 days.",
    body: "Live and build together with ambitious women selected from universities across Malaysia.",
    icon: UsersRound,
    accent: "#f4791f",
  },
  {
    title: "AI-driven by design.",
    body: "Every team builds with real AI tools from day one. No slides about AI. Actual AI in your hands.",
    icon: BrainCircuit,
    accent: "#e0186e",
  },
  {
    title: "Everyone ships.",
    body: "Every team walks out with a working product, not a concept.",
    icon: Rocket,
    accent: "#7a3fc9",
  },
  {
    title: "RM12,000 up for grabs.",
    body: "Top teams on Demo Day share a prize pool of up to RM12,000.",
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
    title: "Find the Problem",
    body: "Identify and validate a real problem worth solving.",
    icon: Lightbulb,
  },
  {
    day: "DAY 3",
    title: "AI Immersion",
    body: "Learn Codex and the AI tools your team will use to turn the idea into a product.",
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

const LOGISTICS: { label: string; value: string; icon: Icon }[] = [
  { label: "DATES", value: "10 to 14 September 2026 (5 days, 4 nights)", icon: CalendarDays },
  { label: "VENUE", value: "Perdana Hotel, Kuala Lumpur City Centre", icon: MapPin },
  {
    label: "COST",
    value: "Fully sponsored, including accommodation, meals, and AI tool access",
    icon: Wallet,
  },
  { label: "ELIGIBILITY", value: "Malaysian women aged 18 to 24, by selection", icon: UsersRound },
  { label: "BRING", value: "A laptop, a charger, and a problem you care about", icon: Laptop },
]

const FAQS = [
  {
    question: "Who can apply?",
    answer:
      "Malaysian women aged 18 to 24. You do not need to be studying ICT or computer science. If you are curious about building with AI and willing to work hard for five days, apply.",
  },
  {
    question: "Do I need coding experience or a startup idea?",
    answer:
      "No to both. Codex handles the code, and Day 2 is designed to help your team find and validate a problem worth solving. Plenty of great teams will walk in with nothing but curiosity.",
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
}: {
  eyebrow: string
  title: string
  body?: string
  centered?: boolean
}) {
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <SectionPill>{eyebrow}</SectionPill>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{body}</p>
      )}
    </Reveal>
  )
}

export default function ADLPForGirls() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#070c18] pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-24 size-[28rem] rounded-full bg-[#7a3fc9]/25 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-36 top-6 size-[32rem] rounded-full bg-[#e0186e]/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#f4791f]/15 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal>
            <img
              src="/adlp-for-girls-logo.png"
              alt="ADLP For Girls x Codex 2026"
              className="h-auto w-full max-w-[310px]"
            />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:text-sm">
              POWERED BY EMERGING LEADERS ASIA
            </p>
            <h1 className="mt-8 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[4.4rem]">
              ADLP for Girls x{" "}
              <span className="bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#9a63e8] bg-clip-text text-transparent">
                Codex 2026
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
              A fully sponsored five-day AI startup bootcamp for Malaysian women aged 18 to 24.
              Arrive with an idea or none at all. Leave with a working product and a Demo Day
              pitch.
            </p>
            <p className="mt-8 max-w-4xl rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-4 text-sm font-semibold leading-relaxed text-white/82 backdrop-blur-sm">
              10–14 September 2026 | Perdana Hotel, Kuala Lumpur City Centre | Fully sponsored |
              By selection only
            </p>
            <a
              href={REGISTER_URL}
              className="mt-9 inline-flex min-h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-8 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
            >
              Apply now
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="THE BRIEF"
          title="Find a real problem. Build with AI. Pitch it in five days."
          centered
        />
        <Reveal delay={0.08}>
          <div className="mt-12 grid overflow-hidden rounded-[30px] border border-border bg-white sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-7 text-center sm:p-8 ${
                  index > 0 ? "border-t border-border sm:border-t-0" : ""
                } ${index % 2 === 1 ? "sm:border-l" : ""} ${index > 1 ? "sm:border-t lg:border-t-0" : ""} ${
                  index > 0 ? "lg:border-l" : ""
                }`}
              >
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-display text-4xl font-extrabold text-navy"
                />
                <p className="mt-2 text-xs font-extrabold tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12} className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0b1321] p-7 text-white sm:p-10">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 size-64 rounded-full bg-[#e0186e]/25 blur-3xl"
            />
            <div className="relative">
              <Rocket className="size-8 text-[#f4791f]" />
              <p className="mt-7 text-base leading-relaxed text-white/72 sm:text-lg">
                This is founder training, not a classroom. You learn leadership by running a team,
                business by validating a real problem, and AI by shipping with it.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg">
                Every session produces something real. By Day 4 your team has a working prototype.
                By Day 5 you are on stage pitching it.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg">
                And it is genuinely fun. Five days living in a hotel with 79 other builders,
                late-night sprints, pizza night, and a Demo Day you will not forget.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="THE FOUR PILLARS"
            title="Built like a founder sprint, not a classroom."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PILLARS.map((pillar, index) => {
              const IconCmp = pillar.icon
              return (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <article className="group h-full rounded-[28px] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="inline-flex size-13 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: `${pillar.accent}16`, color: pillar.accent }}
                      >
                        <IconCmp className="size-6" />
                      </span>
                      <span className="font-display text-sm font-extrabold text-navy/20">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-xl font-extrabold text-navy sm:text-2xl">
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

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="WHO IS BEHIND THIS"
            title="Organised by alumni, powered by Codex, backed by Axiata Foundation."
          />
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[32px] bg-[#0b1321] p-7 text-white sm:p-10">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 size-64 rounded-full bg-[#7a3fc9]/25 blur-3xl"
              />
              <div className="relative space-y-5 text-base leading-relaxed text-white/72">
                <p>
                  ADLP for Girls x Codex is organised by Emerging Leaders Asia, the alumni network
                  of the Axiata Young Talent Programme. Your co-leads, floor mentors, and coaches
                  came through the same ecosystem and now work in tech and business across the
                  region.
                </p>
                <p>
                  Codex provides the AI toolkit every team builds with, and Axiata Foundation
                  sponsors the full residential experience.
                </p>
                <p>
                  The goal is simple. Malaysian women outperform in education but remain
                  underrepresented as tech founders. We want this programme to help change that.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0b1321] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionPill tone="dark">YOUR AI TOOLKIT</SectionPill>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.7rem]">
              Codex is your team&apos;s AI engineer.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/62 sm:text-lg">
              Codex is OpenAI&apos;s AI coding agent. You describe what you want to build, and it
              writes the code, fixes the bugs, and handles the engineering while your team focuses
              on the problem, the user, and the pitch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/62 sm:text-lg">
              Every team gets trained on it on Day 3, then uses it through the Build Sprint all the
              way to Demo Day.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mx-auto mt-12 max-w-2xl">
            <article className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-9">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 size-56 rounded-full bg-[#6a86ff]/20 blur-3xl"
              />
              <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left">
                <span className="inline-flex size-20 shrink-0 items-center justify-center rounded-[24px] bg-white shadow-lg">
                  <img src="/codex-logo.png" alt="" className="size-12 object-contain" />
                </span>
                <div className="mt-6 sm:ml-7 sm:mt-0">
                  <h3 className="font-display text-2xl font-extrabold">Codex</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/62">
                    Provisioned free for every participant, from the first sprint to the final
                    pitch.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="YOUR 5-DAY JOURNEY"
          title="Five days from team formation to Demo Day."
          body="Draft outline. Final agenda to be confirmed."
          centered
        />
        <div className="relative mt-14">
          <div className="absolute bottom-8 left-[26px] top-8 hidden w-px bg-gradient-to-b from-[#f4791f] via-[#e0186e] to-[#7a3fc9] sm:block lg:left-1/2" />
          <div className="space-y-5">
            {JOURNEY.map((step, index) => {
              const IconCmp = step.icon
              const alignLeft = index % 2 === 0
              return (
                <Reveal key={step.day} delay={index * 0.04}>
                  <div className="relative grid items-center gap-6 sm:grid-cols-[52px_1fr] lg:grid-cols-[1fr_72px_1fr]">
                    <article
                      className={`rounded-[26px] border border-border bg-white p-6 shadow-sm sm:col-start-2 sm:p-7 ${
                        alignLeft ? "lg:col-start-1" : "lg:col-start-3"
                      }`}
                    >
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e0186e]">
                        {step.day}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-extrabold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </article>
                    <span
                      className={`row-start-1 hidden size-[52px] items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-[#f4791f] via-[#e0186e] to-[#7a3fc9] text-white shadow-lg sm:flex lg:col-start-2 ${
                        alignLeft ? "sm:col-start-1 lg:col-start-2" : "sm:col-start-1 lg:col-start-2"
                      }`}
                    >
                      <IconCmp className="size-5" />
                    </span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <SectionHeading
            eyebrow="LOGISTICS"
            title="Everything you need to show up ready."
          />
          <Reveal delay={0.1}>
            <div className="grid overflow-hidden rounded-[30px] border border-border bg-white sm:grid-cols-2">
              {LOGISTICS.map((item, index) => {
                const IconCmp = item.icon
                return (
                  <div
                    key={item.label}
                    className={`p-6 sm:p-7 ${
                      index > 0 ? "border-t border-border" : ""
                    } ${index % 2 === 1 ? "sm:border-l" : ""} ${index === 1 ? "sm:border-t-0" : ""}`}
                  >
                    <IconCmp className="size-5 text-[#e0186e]" />
                    <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-navy">{item.value}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Before you apply."
          />
          <Reveal delay={0.1}>
            <Accordion className="rounded-[28px] border border-border bg-background px-5 sm:px-7">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="py-5 text-base font-bold text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-8 text-[15px] leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="OUR CO-ORGANISERS"
            title="Codex. Axiata Foundation. Emerging Leaders Asia."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Reveal>
              <article className="flex h-full flex-col rounded-[30px] border border-border bg-background p-7 sm:p-8">
                <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <img src="/codex-logo.png" alt="Codex" className="size-10 object-contain" />
                </span>
                <h3 className="mt-8 font-display text-2xl font-extrabold text-navy">
                  Codex
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  OpenAI&apos;s AI coding agent, the tool every team learns on Day 3 and builds
                  with through Demo Day.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="flex h-full flex-col rounded-[30px] border border-border bg-background p-7 sm:p-8">
                <img
                  src="/partners/axiata.png"
                  alt="Axiata Foundation"
                  className="h-14 w-auto self-start object-contain"
                />
                <h3 className="mt-8 font-display text-2xl font-extrabold text-navy">
                  Axiata Foundation
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Co-organiser and sponsor of the fully sponsored residential founder experience.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="flex h-full flex-col rounded-[30px] border border-border bg-background p-7 sm:p-8">
                <img
                  src="/ELA-Logo.png"
                  alt="Emerging Leaders Asia"
                  className="h-14 w-auto self-start object-contain"
                />
                <h3 className="mt-8 font-display text-2xl font-extrabold text-navy">
                  Emerging Leaders Asia
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  The AYTP alumni network organising the programme, providing trained co-leads,
                  floor mentors, and industry coaches.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="register" className="px-3 pb-16 sm:px-5 sm:pb-20">
        <Reveal>
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[38px] bg-[#070c18] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
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
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Eighty places. Five days.{" "}
                <span className="bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#9a63e8] bg-clip-text text-transparent">
                  RM12,000 on the line.
                </span>
              </h2>
              <p className="mt-6 text-base text-white/62 sm:text-lg">
                Selection is competitive. Applications close 15 August 2026.
              </p>
              <a
                href={REGISTER_URL}
                className="mt-8 inline-flex min-h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-9 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
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
