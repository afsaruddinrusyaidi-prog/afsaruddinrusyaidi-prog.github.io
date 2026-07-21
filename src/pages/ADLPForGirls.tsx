import type { ComponentType } from "react"
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  ExternalLink,
  Gavel,
  HeartHandshake,
  Laptop,
  Lightbulb,
  MapPin,
  Mic,
  MoonStar,
  PartyPopper,
  Rocket,
  Trophy,
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

const HERO_FACTS: { label: string; value: string; icon: Icon }[] = [
  { label: "Dates", value: "9–13 Sept 2026", icon: CalendarDays },
  { label: "Venue", value: "Perdana KLCC", icon: MapPin },
  { label: "Spots", value: "80 spots available", icon: UsersRound },
  { label: "Prize pool", value: "RM12,000", icon: Trophy },
]

const PILLARS: { title: string; body: string; icon: Icon; accent: string }[] = [
  {
    title: "80 women, 5 days.",
    body: "Live and build together with ambitious women selected from universities across Malaysia.",
    icon: UsersRound,
    accent: "#f4791f",
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
    title: "Founder Fireside Chats",
    body: "Hear directly from entrepreneurs, builders, and leaders who have turned ideas into real ventures.",
    icon: Mic,
    accent: "#f4791f",
  },
  {
    title: "Mentorship On Demand",
    body: "Get guidance from experienced mentors, coaches, and industry practitioners throughout your startup journey.",
    icon: HeartHandshake,
    accent: "#e0186e",
  },
  {
    title: "Pizza Nights & Community Sessions",
    body: "Unwind, exchange ideas, and connect with your cohort beyond the workshop.",
    icon: PartyPopper,
    accent: "#7a3fc9",
  },
  {
    title: "Demo Day Judges",
    body: "Pitch your startup to a panel of leaders from technology, business, and entrepreneurship.",
    icon: Gavel,
    accent: "#f4791f",
  },
]

const BACKERS: { name: string; logo: string; blurb: string }[] = [
  {
    name: "Codex",
    logo: CODEX_LOGO_URL,
    blurb: "OpenAI's AI coding agent — the tool every team learns on Day 3 and builds with through Demo Day.",
  },
  {
    name: "Axiata Foundation",
    logo: "/partners/axiata.png",
    blurb: "Sponsors the full residential experience, from accommodation to the Demo Day prize pool.",
  },
  {
    name: "Emerging Leaders Asia",
    logo: "/ELA-Logo.png",
    blurb: "The AYTP alumni network organising the programme, providing co-leads, mentors, and coaches.",
  },
]

const LOGISTICS: { label: string; value: string; icon: Icon }[] = [
  { label: "DATES", value: "9 to 13 September 2026 (5 days, 4 nights)", icon: CalendarDays },
  { label: "VENUE", value: "Perdana KLCC", icon: MapPin },
  {
    label: "COST",
    value: "Fully sponsored, including accommodation, meals, and AI tool access",
    icon: Wallet,
  },
  { label: "ELIGIBILITY", value: "Malaysian women aged 18 to 24, by selection", icon: UsersRound },
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
      "Malaysian women aged 18 to 24. You do not need to be studying ICT or computer science. If you are curious about building with AI and willing to work hard for five days, apply.",
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
        className={`mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.7rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/62" : "text-muted-foreground"
          }`}
        >
          {body}
        </p>
      )}
    </Reveal>
  )
}

export default function ADLPForGirls() {
  return (
    <>
      {/* ══ Hero ══ */}
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

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <Reveal>
            <img
              src="/adlp-for-girls-logo.png?v=2026hd"
              alt="ADLP For Girls x Codex 2026"
              className="h-auto w-full max-w-[320px]"
            />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:text-sm">
              POWERED BY EMERGING LEADERS ASIA
            </p>
            <h1 className="mt-8 max-w-xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.8rem]">
              ADLP for Girls x{" "}
              <span className="bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#9a63e8] bg-clip-text text-transparent">
                Codex 2026
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">
              Join a fully sponsored five-day AI Startup Bootcamp in the heart of Kuala Lumpur for
              women aged 18–24. Learn AI, leadership, and entrepreneurship, then turn your ideas
              into a startup.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-8 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
              >
                Apply now
                <ArrowRight className="size-4" />
              </a>
              <span className="text-sm font-semibold text-white/55">
                Applications close 15 August 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.06] p-2 backdrop-blur-md">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-[#e0186e]/25 blur-3xl"
              />
              <div className="relative grid grid-cols-2 gap-2">
                {HERO_FACTS.map((fact) => {
                  const IconCmp = fact.icon
                  return (
                    <div
                      key={fact.label}
                      className="rounded-[24px] bg-white/[0.04] p-5 sm:p-6"
                    >
                      <IconCmp className="size-5 text-[#f4791f]" />
                      <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white/50">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-[15px] font-bold leading-snug text-white">
                        {fact.value}
                      </p>
                    </div>
                  )
                })}
              </div>
              <div className="relative m-2 mt-2 rounded-[24px] bg-gradient-to-r from-[#f4791f]/15 via-[#e0186e]/15 to-[#7a3fc9]/15 px-5 py-4">
                <p className="text-sm font-semibold leading-relaxed text-white/85">
                  A Fully Sponsored Startup Bootcamp
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Build with Codex — featured, then the rest of the pillars ══ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-[#f4791f]/8 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-[#7a3fc9]/8 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading eyebrow="THE FOUR PILLARS" title="Built like a founder sprint, not a classroom." centered />

          <Reveal delay={0.06} className="mt-12">
            <article className="group relative overflow-hidden rounded-[32px] bg-[#0b1321] p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10 lg:flex lg:items-center lg:gap-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-[#e0186e]/25 blur-3xl"
              />
              <div className="relative flex items-center gap-4 lg:shrink-0">
                <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-white/[0.08]">
                  <img src={CODEX_LOGO_URL} alt="" className="size-9 object-contain" />
                </span>
                <span className="font-display text-sm font-extrabold text-white/20 lg:hidden">01</span>
              </div>
              <div className="relative mt-6 lg:mt-0">
                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Build with Codex.</h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base">
                  Every team gets free Codex credits, OpenAI&apos;s AI coding agent, to build a real
                  product. No tech background required.
                </p>
              </div>
              <span className="absolute right-8 top-8 hidden font-display text-sm font-extrabold text-white/20 lg:block">
                01
              </span>
            </article>
          </Reveal>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar, index) => {
              const IconCmp = pillar.icon
              return (
                <Reveal key={pillar.title} delay={0.1 + index * 0.06}>
                  <article className="group h-full rounded-[28px] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
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
                    <h3 className="mt-7 font-display text-xl font-extrabold text-navy">
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
      <section className="relative overflow-hidden bg-[#0b1321] py-20 text-white sm:py-24">
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
            title="Five days from team formation to Demo Day."
            body="Draft outline. Final agenda to be confirmed."
            centered
            dark
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
                        className={`rounded-[26px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm sm:col-start-2 sm:p-7 ${
                          alignLeft ? "lg:col-start-1" : "lg:col-start-3"
                        }`}
                      >
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff6fa8]">
                          {step.day}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-extrabold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/62">{step.body}</p>
                      </article>
                      <span
                        className="row-start-1 hidden size-[52px] items-center justify-center rounded-full border-4 border-[#0b1321] bg-gradient-to-br from-[#f4791f] via-[#e0186e] to-[#7a3fc9] text-white shadow-lg sm:flex lg:col-start-2"
                      >
                        <IconCmp className="size-5" />
                      </span>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ Beyond the sprint — community, mentorship, network ══ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 size-96 rounded-full bg-[#7a3fc9]/8 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-[#e0186e]/8 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="BEYOND THE SPRINT"
            title="More than building a product."
            body="The best ideas come from conversations, connections, and communities. Beyond the sprint, you'll get to learn from founders, meet industry leaders, and build lifelong friendships with women who are just as ambitious as you."
            centered
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {BEYOND_THE_SPRINT.map((item, index) => {
              const IconCmp = item.icon
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="group flex h-full items-start gap-5 rounded-[28px] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                    <span
                      className="inline-flex size-13 shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${item.accent}16`, color: item.accent }}
                    >
                      <IconCmp className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold text-navy sm:text-2xl">
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
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 size-80 rounded-full bg-[#f4791f]/8 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading
              eyebrow="BACKED BY"
              title="Organised by Emerging Leaders Asia and Codex."
              body="We're a group of alumni coming together to empower young women through AI, entrepreneurship, and leadership, giving them the skills, confidence, and platform to build something meaningful and pursue their dreams."
            />
            <div className="grid gap-5">
              {BACKERS.map((backer, index) => (
                <Reveal key={backer.name} delay={0.08 + index * 0.06}>
                  <div className="flex items-center gap-5 rounded-[26px] border border-border bg-background p-6 sm:p-7">
                    <img
                      src={backer.logo}
                      alt={backer.name}
                      className="h-10 w-auto shrink-0 object-contain"
                    />
                    <div className="h-9 w-px shrink-0 bg-border" />
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      <span className="font-bold text-navy">{backer.name}. </span>
                      {backer.blurb}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ Logistics — dark spec sheet ══ */}
      <section className="relative overflow-hidden bg-[#0b1321] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-[#e0186e]/20 blur-[100px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading
              eyebrow="LOGISTICS"
              title="Everything you need to show up ready."
              dark
            />
            <Reveal delay={0.1}>
              <div className="grid overflow-hidden rounded-[30px] border border-white/12 sm:grid-cols-2">
                {LOGISTICS.map((item, index) => {
                  const IconCmp = item.icon
                  return (
                    <div
                      key={item.label}
                      className={`p-6 sm:p-7 ${
                        index > 0 ? "border-t border-white/12" : ""
                      } ${index % 2 === 1 ? "sm:border-l sm:border-white/12" : ""} ${
                        index === 1 ? "sm:border-t-0" : ""
                      }`}
                    >
                      <IconCmp className="size-5 text-[#ff6fa8]" />
                      <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white/45">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-bold leading-relaxed text-white">
                        {item.value}
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
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionHeading eyebrow="FAQ" title="Before you apply." />
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

      {/* ══ Final CTA ══ */}
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
                Applications are now open. Submit your application by 15 August 2026.
              </p>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
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
