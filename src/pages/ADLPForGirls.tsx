import type { ComponentType } from "react"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lightbulb,
  MapPin,
  MessageSquareText,
  MoonStar,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  Wallet,
  WandSparkles,
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
  { value: 80, suffix: "", label: "Participants", sub: "Young women from across Malaysia" },
  { value: 5, suffix: " days", label: "Residential sprint", sub: "Four nights building together" },
  { value: 20, suffix: "", label: "Teams on Demo Day", sub: "Every team ships and pitches" },
  { value: 2022, suffix: "", label: "Building leaders since", sub: "Malaysia's women digital leaders" },
] as const

const PILLARS: { title: string; body: string; icon: Icon; accent: string }[] = [
  {
    title: "80 women, 5 days.",
    body: "Eighty participants from universities and colleges across Malaysia, living and building together for five full days.",
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
    body: "Every session produces something tangible. Every team walks out with a working product, not just a concept.",
    icon: Rocket,
    accent: "#7a3fc9",
  },
  {
    title: "Real funding on Demo Day.",
    body: "Top teams pitch to a live panel for real seed funding to take their idea further.",
    icon: Trophy,
    accent: "#f4791f",
  },
]

const ELIGIBILITY = [
  "Malaysian women aged 18 to 24",
  "Curious about AI, startups, or building things",
  "No coding experience required — the AI tools let you build without writing code from scratch",
  "Ready to commit to 5 full days and 4 nights in residence at Perdana Hotel KLCC",
]

const AI_TOOLS: { name: string; description: string; icon: Icon; accent: string }[] = [
  {
    name: "Google Gemini API",
    description: "Build AI features directly into your product.",
    icon: Bot,
    accent: "#4285f4",
  },
  {
    name: "Google Antigravity",
    description: "Move from idea to implementation with agent-powered development.",
    icon: WandSparkles,
    accent: "#e0186e",
  },
  {
    name: "Gemini Omni Flash",
    description: "Prototype fast with multimodal AI.",
    icon: Sparkles,
    accent: "#7a3fc9",
  },
  {
    name: "Lovable credits",
    description: "Turn your idea into a working web app in hours, not months.",
    icon: Code2,
    accent: "#f4791f",
  },
]

const JOURNEY: { day: string; title: string; body: string; outcome: string; icon: Icon }[] = [
  {
    day: "Day 1",
    title: "Arrive & Assemble",
    body: "Check in, meet your cohort, form your team of four, and get onboarded to your AI toolkit.",
    outcome: "A team name, clear roles, and a shortlist of problems worth solving.",
    icon: UsersRound,
  },
  {
    day: "Day 2",
    title: "Find the Problem, Ship the First Version",
    body: "Validate a problem, train on the AI toolkit, and begin your first Build Sprint.",
    outcome: "A working first prototype.",
    icon: Lightbulb,
  },
  {
    day: "Day 3",
    title: "Build Sprint",
    body: "Spend a full day building while Emerging Leaders Asia floor mentors unblock your team.",
    outcome: "A live progress demo to your coach.",
    icon: Laptop,
  },
  {
    day: "Day 4",
    title: "Polish & Pitch Prep",
    body: "Complete the final Build Sprint, train for the pitch, and stress-test your deck with mentors.",
    outcome: "A sharper product and a Demo Day-ready story.",
    icon: MessageSquareText,
  },
  {
    day: "Day 5",
    title: "Demo Day",
    body: "Twenty teams pitch for ten minutes each to a live panel of industry judges.",
    outcome: "Real seed funding for top teams, followed by graduation.",
    icon: Trophy,
  },
]

const TAKEAWAYS: { title: string; icon: Icon }[] = [
  { title: "A working AI-powered product built with your team", icon: Rocket },
  { title: "A recorded Demo Day pitch for your portfolio", icon: MessageSquareText },
  { title: "Hands-on skill with professional AI development tools", icon: BrainCircuit },
  { title: "A mentor network through Emerging Leaders Asia", icon: HeartHandshake },
  { title: "A cohort of 79 other ambitious women across Malaysia", icon: UsersRound },
  { title: "A certificate of completion from Axiata Foundation", icon: GraduationCap },
  { title: "For top teams, seed funding to keep building", icon: Wallet },
]

const LOGISTICS: { label: string; value: string; icon: Icon }[] = [
  { label: "Dates", value: "10 to 14 September 2026 (5 days, 4 nights)", icon: CalendarDays },
  { label: "Venue", value: "Perdana Hotel, Kuala Lumpur City Centre", icon: MapPin },
  {
    label: "Cost",
    value: "Fully sponsored by Axiata Foundation, including accommodation, meals, and AI tool credits",
    icon: Wallet,
  },
  { label: "Eligibility", value: "Malaysian women aged 18 to 24", icon: UsersRound },
  { label: "Cohort size", value: "80 participants, 20 teams", icon: Target },
  { label: "What to bring", value: "A laptop, a charger, and a problem you care about", icon: Laptop },
]

const FAQS = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. The AI tools provided let you build working products without a computer science background. Teams with mixed skills often perform best.",
  },
  {
    question: "Do I need a startup idea before I apply?",
    answer:
      "No. Day 1 and Day 2 are designed to help you find and validate a problem worth solving.",
  },
  {
    question: "Is the programme really free?",
    answer:
      "Yes. Axiata Foundation covers accommodation, meals, training, and AI tool credits for all selected participants.",
  },
  {
    question: "Can I apply with friends as a team?",
    answer:
      "You apply as an individual. Teams are formed on Day 1 so every team has a balanced mix of skills.",
  },
  {
    question: "What happens after the bootcamp?",
    answer:
      "Top teams receive seed funding and continued mentorship through the Emerging Leaders Asia network to develop their product further.",
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal>
            <img
              src="/adlp-for-girls-logo.png"
              alt="ADLP For Girls x Codex 2026"
              className="h-auto w-full max-w-[310px]"
            />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:text-sm">
              Powered by Emerging Leaders Asia{" "}
              <span className="mx-2 text-[#f4791f]">|</span> Funded by Axiata Foundation
            </p>
            <h1 className="mt-8 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[4.4rem]">
              Malaysia has the women. It is missing the{" "}
              <span className="bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#9a63e8] bg-clip-text text-transparent">
                founders.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
              Malaysian women outperform in education, yet remain underrepresented as tech
              founders. ADLP For Girls x Codex 2026 is here to change that.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
              A 5-day, 4-night residential AI startup bootcamp for young Malaysian women aged
              18 to 24. You arrive with an idea, or none at all. You leave having built and
              pitched a real AI-powered product.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-white/82 sm:flex-row sm:flex-wrap sm:gap-5">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4.5 text-[#f4791f]" />
                10–14 September 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4.5 text-[#e0186e]" />
                Perdana Hotel, Kuala Lumpur City Centre
              </span>
            </div>
            <a
              href={REGISTER_URL}
              className="mt-9 inline-flex min-h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-8 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
            >
              Register now
              <ArrowRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-5 rounded-[38px] bg-gradient-to-br from-[#f4791f]/30 via-[#e0186e]/15 to-[#7a3fc9]/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/14 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/68">
                    Axiata Digital Leaders Programme
                  </span>
                  <Sparkles className="size-5 text-[#f4791f]" />
                </div>
                <div className="mt-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                    The brief
                  </p>
                  <p className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                    Find a real problem.
                    <br />
                    Build with AI.
                    <br />
                    <span className="text-[#f4791f]">Ship in five days.</span>
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-3">
                  {[
                    ["80", "participants"],
                    ["20", "teams"],
                    ["5", "days"],
                    ["1", "Demo Day"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                      <p className="font-display text-2xl font-extrabold">{value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/48">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-[30px] border border-border bg-white shadow-[0_24px_70px_-34px_rgba(11,19,33,0.38)] sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-7 py-7 ${
                  index > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""
                } ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}
              >
                <p className="font-display text-3xl font-extrabold text-navy">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-bold text-navy">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="The four pillars"
          title="Built like a startup residency, not a classroom."
          body="Five full days are designed around one idea: learning becomes real when you make something that works."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PILLARS.map((pillar, index) => {
            const IconCmp = pillar.icon
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="group h-full rounded-[28px] border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
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
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="About the programme"
            title="You learn by building, not by listening."
            body="The Axiata Digital Leaders Programme (ADLP) For Girls has been building Malaysia's pipeline of young women digital leaders since 2022. In 2026, the programme levels up."
          />
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[32px] bg-[#0b1321] p-7 text-white sm:p-10">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 size-64 rounded-full bg-[#e0186e]/25 blur-3xl"
              />
              <div className="relative">
                <Rocket className="size-8 text-[#f4791f]" />
                <p className="mt-8 font-display text-2xl font-extrabold leading-snug sm:text-3xl">
                  From a problem worth solving to an AI-powered solution pitched on Demo Day.
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                  ADLP For Girls x Codex is modelled after the world's leading startup
                  accelerators and AI residency programmes. Over five days you will form a team,
                  find a real problem, build a solution, and pitch it to industry judges.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                  Emerging Leaders Asia's trained facilitators and industry mentors coach every
                  team through the build, with funding from Axiata Foundation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Who is this for?"
            title="You do not need to arrive as a founder."
            body='If you have ever thought "someone should build an app for that," this programme is for you. You are the someone.'
          />
          <Reveal delay={0.1}>
            <div className="rounded-[30px] border border-border bg-white p-6 shadow-sm sm:p-8">
              <ul className="space-y-4">
                {ELIGIBILITY.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e0186e]/10 text-[#e0186e]">
                      <Check className="size-4" />
                    </span>
                    <span className="text-[15px] font-medium leading-relaxed text-navy/78">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0b1321] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionPill tone="dark">Your AI toolkit</SectionPill>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.7rem]">
              Professional tools. Provisioned for free.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/62 sm:text-lg">
              You will be trained on every tool before you use it. By the end of Day 2, you will
              already have shipped your first prototype.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AI_TOOLS.map((tool, index) => {
              const IconCmp = tool.icon
              return (
                <Reveal key={tool.name} delay={index * 0.06}>
                  <article className="h-full rounded-[26px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                    <span
                      className="inline-flex size-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${tool.accent}22`, color: tool.accent }}
                    >
                      <IconCmp className="size-5.5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-extrabold">{tool.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/58">{tool.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Your 5-day journey"
          title="Five days from cohort to company."
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
                      <p className="mt-4 border-l-2 border-[#f4791f] pl-4 text-sm font-semibold leading-relaxed text-navy/76">
                        {step.outcome}
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

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="What you walk away with"
            title="A portfolio, a network, and proof that you can ship."
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TAKEAWAYS.map((item, index) => {
              const IconCmp = item.icon
              return (
                <Reveal key={item.title} delay={(index % 3) * 0.05}>
                  <div className="flex h-full items-start gap-4 rounded-[24px] border border-border bg-background p-5">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f4791f]/15 via-[#e0186e]/15 to-[#7a3fc9]/15 text-[#7a3fc9]">
                      <IconCmp className="size-4.5" />
                    </span>
                    <p className="pt-1 text-sm font-bold leading-relaxed text-navy/82">{item.title}</p>
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
            eyebrow="Logistics"
            title="Everything you need to show up ready."
            body="Accommodation, meals, training, and AI tool credits are fully sponsored by Axiata Foundation."
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
            eyebrow="Frequently asked questions"
            title="Before you apply."
            body="The essentials about joining ADLP For Girls x Codex 2026."
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

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Our partners"
          title="Funded by Axiata Foundation. Powered by Emerging Leaders Asia."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-[30px] border border-border bg-white p-7 shadow-sm sm:p-9">
              <img
                src="/partners/axiata.png"
                alt="Axiata Foundation"
                className="h-14 w-auto self-start object-contain"
              />
              <h3 className="mt-8 font-display text-2xl font-extrabold text-navy">
                Axiata Foundation
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Funds the programme as part of its long-running commitment to developing
                Malaysia's young digital leaders.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-[30px] border border-border bg-white p-7 shadow-sm sm:p-9">
              <img
                src="/ELA-Logo.png"
                alt="Emerging Leaders Asia"
                className="h-14 w-auto self-start object-contain"
              />
              <h3 className="mt-8 font-display text-2xl font-extrabold text-navy">
                Emerging Leaders Asia
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Powers the programme with trained co-leads, floor mentors, and industry coaches
                who guide every team from idea to Demo Day.
              </p>
            </article>
          </Reveal>
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
                  One Demo Day.
                </span>
              </h2>
              <p className="mt-6 text-base text-white/62 sm:text-lg">
                Applications close: <span className="font-bold text-white">to be confirmed</span>
              </p>
              <a
                href={REGISTER_URL}
                className="mt-8 inline-flex min-h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-9 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
              >
                Register now
                <ExternalLink className="size-4" />
              </a>
              <p className="mt-6 text-sm text-white/48">
                For enquiries: <span className="font-semibold text-white/70">to be added</span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
