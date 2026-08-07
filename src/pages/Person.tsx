/**
 * One committee member's public profile.
 *
 * Reached only from a card on /leadership, and only for somebody who has
 * published: the portal returns 404 for an unlisted profile, a withheld one and
 * a slug that never existed, deliberately making all three indistinguishable.
 * So this page has exactly two states — a profile, or "not found" — and must
 * never explain which kind of nothing it is looking at.
 *
 * The figures under "Verified by the portal" are counted from approved
 * timesheets and delivered work, not typed in by the person they describe.
 * That is the whole point of serving this from the portal rather than from a
 * CMS: a claim on a CV is an assertion, and these are records.
 */

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Award, Building2, GraduationCap, Sparkles } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { fetchPerson, photoUrl, type PersonDetail } from "@/lib/committee"

/** "2026-08" → "Aug 2026". Months arrive as YYYY-MM and never as a full date. */
function month(value: string | null): string {
  if (!value) return "Present"
  const [y, m] = value.split("-")
  const date = new Date(Number(y), Number(m) - 1, 1)
  return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" })
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

  return (
    <span className="flex size-28 items-center justify-center rounded-full bg-cream-deep font-display text-2xl font-extrabold text-navy">
      {initials}
    </span>
  )
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Award
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6d28d9]">
        <Icon className="size-4" />
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export default function Person() {
  const { slug = "" } = useParams()
  const [person, setPerson] = useState<PersonDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    void fetchPerson(slug).then((data) => {
      if (cancelled) return
      setPerson(data)
      setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [slug])

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-6 pt-32 sm:px-8">
        <div className="h-28 w-28 animate-pulse rounded-full bg-cream-deep" />
        <div className="mt-6 h-8 w-64 animate-pulse rounded-full bg-cream-deep" />
        <div className="mt-3 h-4 w-40 animate-pulse rounded-full bg-cream-deep" />
      </div>
    )
  }

  // Unlisted, withheld and nonexistent all land here, saying the same thing.
  // Naming the difference would broadcast that somebody is in trouble.
  if (!person) {
    return (
      <div className="mx-auto max-w-3xl px-6 pt-32 text-center sm:px-8">
        <h1 className="font-display text-3xl font-extrabold text-navy">Profile not found</h1>
        <p className="mt-3 text-muted-foreground">
          This profile isn&rsquo;t available. It may not be published.
        </p>
        <Link
          to="/leadership"
          className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-navy bg-navy px-6 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-navy-700"
        >
          <ArrowLeft className="size-4" /> Back to leadership
        </Link>
      </div>
    )
  }

  const src = photoUrl(person)
  const { verified } = person

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-28 sm:px-8 sm:pt-32">
      <Link
        to="/leadership"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-navy"
      >
        <ArrowLeft className="size-4" /> Leadership
      </Link>

      <Reveal>
        <header className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          {src ? (
            <img src={src} alt="" className="size-28 rounded-full object-cover" />
          ) : (
            <Initials name={person.name} />
          )}

          <div className="min-w-0">
            <h1 className="font-display text-3xl font-extrabold leading-tight text-navy">
              {person.name}
            </h1>
            <p className="mt-1 font-semibold text-navy">
              {person.ela.title}
              {person.ela.department && (
                <span className="text-muted-foreground"> · {person.ela.department}</span>
              )}
            </p>

            {/* A second seat is common — somebody heads one team and sits on
                another. Listing only the primary one understates the load. */}
            {person.ela.also.map((seat) => (
              <p key={seat.title} className="text-sm text-muted-foreground">
                {seat.title}
                {seat.department && ` · ${seat.department}`}
              </p>
            ))}

            {/* Their day job, kept visibly separate from their ELA seat. The
                two get conflated constantly and they are not the same thing. */}
            {person.work && (
              <p className="mt-2 text-sm text-muted-foreground">
                {person.work.title} at {person.work.organisation}
              </p>
            )}

            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-block text-sm font-semibold text-[#6d28d9] hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </header>
      </Reveal>

      {person.bio && (
        <p className="mt-8 text-lg leading-relaxed text-navy/80">{person.bio}</p>
      )}

      {/* ── Counted, not claimed ── */}
      <div className="mt-8 grid gap-4 rounded-[24px] border border-border bg-white px-6 py-5 shadow-sm sm:grid-cols-3">
        {verified.hours !== null && (
          <div>
            <p className="font-display text-2xl font-extrabold text-navy">{verified.hours}</p>
            <p className="text-xs text-muted-foreground">Volunteer hours</p>
          </div>
        )}
        <div>
          <p className="font-display text-2xl font-extrabold text-navy">{verified.projects}</p>
          <p className="text-xs text-muted-foreground">Projects</p>
        </div>
        <div>
          <p className="font-display text-2xl font-extrabold text-navy">
            {verified.deliverables}
          </p>
          <p className="text-xs text-muted-foreground">Deliverables</p>
        </div>
        <p className="text-xs text-muted-foreground sm:col-span-3">
          Counted from approved timesheets and delivered work since {month(verified.since)}.
        </p>
      </div>

      {person.skills.length > 0 && (
        <Section icon={Sparkles} title="Skills">
          <div className="flex flex-wrap gap-2">
            {person.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-navy"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      )}

      {person.experience.length > 0 && (
        <Section icon={Building2} title="Experience">
          <ul className="space-y-5">
            {person.experience.map((job, i) => (
              <li key={`${job.organisation}-${i}`}>
                <p className="font-bold text-navy">{job.title}</p>
                <p className="text-sm text-muted-foreground">
                  {job.organisation} · {month(job.startMonth)} – {month(job.endMonth)}
                </p>
                {job.description && (
                  <p className="mt-1 text-sm leading-relaxed text-navy/75">{job.description}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {person.education.length > 0 && (
        <Section icon={GraduationCap} title="Education">
          <ul className="space-y-4">
            {person.education.map((item, i) => (
              <li key={`${item.institution}-${i}`}>
                <p className="font-bold text-navy">{item.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {[item.qualification, item.field].filter(Boolean).join(", ")}
                  {item.startYear && ` · ${item.startYear}–${item.endYear ?? "present"}`}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {person.awards.length > 0 && (
        <Section icon={Award} title="Recognition">
          <ul className="space-y-3">
            {person.awards.map((award, i) => (
              <li key={i} className="rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
                <p className="font-bold text-navy">
                  Top Contributor{award.term && ` · ${award.term}`}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-navy/75">{award.citation}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {person.articles.length > 0 && (
        <Section icon={Sparkles} title="Writing">
          <ul className="space-y-3">
            {person.articles.map((article) => (
              <li key={article.slug}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="font-bold text-navy hover:underline"
                >
                  {article.title}
                </Link>
                {article.standfirst && (
                  <p className="text-sm text-muted-foreground">{article.standfirst}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  )
}
