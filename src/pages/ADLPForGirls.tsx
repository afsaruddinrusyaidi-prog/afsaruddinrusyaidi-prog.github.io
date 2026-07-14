import type { ComponentType } from "react"
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Check,
  ExternalLink,
  Laptop,
  Lightbulb,
  MapPin,
  MoonStar,
  Rocket,
  Sparkles,
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

const REGISTER_URL = "#register"

type Icon = ComponentType<{ className?: string }>

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
    day: "Day 1",
    title: "Leadership & Team Formation",
    body: "Build your leadership foundation, meet your cohort, and form your team of four.",
    icon: UsersRound,
  },
  {
    day: "Day 2",
    title: "Find the Problem",
    body: "Identify and validate a real problem worth solving.",
    icon: Lightbulb,
  },
  {
    day: "Day 3",
    title: "AI Immersion",
    body: "Learn Codex and the AI tools your team will use to turn the idea into a product.",
    icon: BrainCircuit,
  },
  {
    day: "Day 4",
    title: "Build Sprint",
    body: "Build, test, and polish your product with floor mentors unblocking your team on the spot.",
    icon: Laptop,
  },
  {
    day: "Day 5",
    title: "Demo Day",
    body: "Twenty teams. Ten minutes each. Live judges. Up to RM12,000 in prizes for the top teams.",
    icon: Trophy,
  },
]

const LOGISTICS: { label: string; value: string; icon: Icon }[] = [
  { label: "Dates", value: "10 to 14 September 2026 (5 days, 4 nights)", icon: CalendarDays },
  { label: "Venue", value: "Perdana Hotel, Kuala Lumpur City Centre", icon: MapPin },
  {
    label: "Cost",
    value: "Fully sponsored, including accommodation, meals, and AI tool access",
    icon: Wallet,
  },
  { label: "Eligibility", value: "Malaysian women aged 18 to 24, by selection", icon: UsersRound },
  { label: "Bring", value: "A laptop, a charger, and a problem you care about", icon: Laptop },
]

const FAQS = [
  {
    question: "Who can apply?",
    answer:
      "Malaysian women aged 18 to 24 who are curious about AI, startups, or building things, and can commit to all 5 days and 4 nights. Places are limited to 80 and awarded by selection.",
  },
  {
    question: "Do I need coding experience or a startup idea?",
    answer:
      "No. You can arrive with an idea or none at all, and no coding experience is required. Codex helps your team turn plain English into a working product.",
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
              Powered by Emerging Leaders Asia
            </p>
            <h1 className="mt-8 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[4.4rem]">
              Malaysia&apos;s next tech founders are{" "}
              <span className="bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#9a63e8] bg-clip-text text-transparent">
                already here.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
              A fully sponsored five-day AI startup bootcamp for Malaysian women aged 18 to 24.
              Arrive with an idea or none at all. Leave with a working product and a Demo Day
              pitch.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-white/82 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4.5 text-[#f4791f]" />
                10–14 September 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4.5 text-[#e0186e]" />
                Perdana Hotel, Kuala Lumpur City Centre
              </span>
              <span className="inline-flex items-center gap-2">
                <Wallet className="size-4.5 text-[#9a63e8]" />
                Fully sponsored
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="size-4.5 text-[#f4791f]" />
                By selection only
              </span>
            </div>
            <a
              href={REGISTER_URL}
              className="mt-9 inline-flex min-h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-8 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
            >
              Apply now
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
                    <span className="text-[#f4791f]">Pitch it in five days.</span>
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-3">
                  {[
                    ["80", "participants"],
                    ["20", "teams"],
                    ["5", "days"],
                    ["RM12K", "up for grabs"],
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

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="The brief"
            title="Find a real problem. Build with AI. Pitch it in five days."
            body="This is founder training, not a classroom. You learn leadership by running a team, business by validating a real problem, and AI by shipping with it."
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
                  Every session produces something real.
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                  By Day 4 your team has a working prototype. By Day 5 you are on stage pitching
                  it.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                  And it is genuinely fun. Five days living in a hotel with 79 other builders,
                  late-night sprints, pizza night, and a Demo Day you will not forget.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="The four pillars"
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

      <section className="bg-[#0b1321] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionPill tone="dark">Your AI toolkit</SectionPill>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.7rem]">
              Codex turns plain English into working code.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/62 sm:text-lg">
              Every team is trained on it before the first Build Sprint, then uses it to take an
              idea to a working product by Demo Day.
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
                    Build with it from the first sprint through the final Demo Day product.
                    Provisioned for free for every participant.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Your 5-day journey"
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
            eyebrow="Logistics"
            title="Everything you need to show up ready."
            body="The full residential experience is sponsored, including accommodation, meals, and AI tool access."
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
            body="The two essentials about eligibility and experience."
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
            eyebrow="Our co-organisers"
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
                  The AI building toolkit every team learns before the first Build Sprint and
                  uses through Demo Day.
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
                  Co-organiser of the fully sponsored residential founder experience.
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
                  Powers the programme with trained co-leads, floor mentors, and industry coaches
                  who guide every team from idea to Demo Day.
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
                Selection is competitive. Applications close:{" "}
                <span className="font-bold text-white">to be confirmed</span>
              </p>
              <a
                href={REGISTER_URL}
                className="mt-8 inline-flex min-h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#f4791f] via-[#e0186e] to-[#7a3fc9] px-9 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgba(224,24,110,0.8)] transition-transform duration-300 hover:-translate-y-1"
              >
                Apply now
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
