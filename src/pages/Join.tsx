import { useState, type FormEvent } from "react"
import { ArrowRight, Check } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { SectionPill } from "@/components/SectionPill"
import { ORG, SCREENING_STEPS, TRACKS } from "@/data/content"
import { HERO_PHOTOS } from "@/data/media"

const INTENTS = [
  "Join as an alumni member",
  "Apply to the committee",
  "Partner as an employer",
  "Something else",
]

export default function Join() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Static intake for now — submissions are followed up via the ELA channels.
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Inset photo hero ── */}
      <PageHero
        image={HERO_PHOTOS.join}
        eyebrow="Network Intake Portal"
        title={
          <>
            Four checkpoints
            <br />
            between you and us.
          </>
        }
        subtitle="Whether you're an AYTP alumnus, a future committee member or a partner — the door is the same. Walk through it."
        cornerCaption="coffee circle · kuala lumpur"
      />

      {/* ── About strip ── */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[220px_1fr] lg:py-28">
        <Reveal>
          <SectionPill>How intake works</SectionPill>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-balance font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl lg:text-4xl">
            We screen for values and momentum — credentials come third.
          </p>
        </Reveal>
      </section>

      {/* ── Screening checkpoints ── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENING_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div className="relative flex h-full flex-col rounded-3xl border border-border bg-white p-7">
                <span className="font-display text-4xl font-bold text-flame">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
                {i < SCREENING_STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-border lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Intake form ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionPill className="mb-6">Start here</SectionPill>
            <h2 className="text-balance font-display text-3xl font-bold text-navy sm:text-4xl">
              Tell us where you&apos;re coming from.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              One form, whatever your door: alumni membership, committee
              recruitment or a partnership conversation. A real person reads
              every submission.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Alumni of any AYTP track welcome",
                "Committee intakes open every term",
                "Partners get a reply within the week",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-navy/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-flame" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted-foreground">
              Prefer DMs? Reach us at{" "}
              <a
                href={ORG.socials.instagramELA}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-navy underline underline-offset-2"
              >
                @emergingleadersasia
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[28px] bg-[#070c18] p-10 text-center text-cream">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-flame text-white">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">
                  You&apos;re in the pipeline.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                  Thanks for reaching out — someone from the committee will
                  follow up through the details you shared.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[28px] border border-border bg-white p-8 sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="min-h-12 w-full rounded-2xl border border-border bg-cream px-4 text-sm text-navy outline-none transition-colors focus:border-flame"
                    />
                  </Field>
                  <Field label="Email" name="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="min-h-12 w-full rounded-2xl border border-border bg-cream px-4 text-sm text-navy outline-none transition-colors focus:border-flame"
                    />
                  </Field>
                  <Field label="I want to…" name="intent">
                    <select
                      id="intent"
                      name="intent"
                      required
                      className="min-h-12 w-full appearance-none rounded-2xl border border-border bg-cream px-4 text-sm text-navy outline-none transition-colors focus:border-flame"
                      defaultValue={INTENTS[0]}
                    >
                      {INTENTS.map((intent) => (
                        <option key={intent} value={intent}>
                          {intent}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="AYTP track (if any)" name="track">
                    <select
                      id="track"
                      name="track"
                      className="min-h-12 w-full appearance-none rounded-2xl border border-border bg-cream px-4 text-sm text-navy outline-none transition-colors focus:border-flame"
                      defaultValue=""
                    >
                      <option value="">Not an AYTP alumnus</option>
                      {TRACKS.map((track) => (
                        <option key={track.acronym} value={track.acronym}>
                          {track.acronym} — {track.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Tell us more" name="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Where you are now, and what you're looking for from the network."
                        className="w-full rounded-2xl border border-border bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-flame"
                      />
                    </Field>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-1.5 rounded-full bg-flame px-8 text-sm font-semibold text-white shadow-[0_18px_36px_-14px_rgba(240,77,26,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
                >
                  Submit application
                  <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  children,
}: {
  label: string
  name: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
