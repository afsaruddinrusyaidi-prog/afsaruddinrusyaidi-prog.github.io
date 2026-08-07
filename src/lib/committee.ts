/**
 * The live committee roster, read from the portal.
 *
 * This site has no backend. The roster, the profile pages and the figures under
 * "Leadership by the Numbers" come from portal.emergingleadersasia.com over
 * three unauthenticated endpoints, which are the only ones the portal answers
 * without a session.
 *
 * WHY THERE IS A FALLBACK
 *
 * Migrations 045 and 046 are applied and these endpoints answer, but a name
 * only reaches the roster once that person has ticked the consent box and
 * pressed Publish in the portal. Nobody is obliged to, and until somebody does,
 * `people` comes back empty.
 *
 * So the page must not depend on it. An empty roster leaves the hand-written
 * names in `data/content.ts` on screen, which is exactly what the page showed
 * before. As people publish, the live roster takes over on its own with nothing
 * to redeploy.
 *
 * The numbers are a separate question and are handled separately — see
 * `fetchCommittee`.
 *
 * A failure is never shown. The portal's 503 names an SQL file and tells the
 * reader to open phpMyAdmin: the right message for an admin screen and the
 * wrong one for the front door. A portal that cannot answer is treated exactly
 * like one that answered with nobody published.
 */

import { useEffect, useState } from "react"

const PORTAL = "https://portal.emergingleadersasia.com"

/** A person as they appear in the roster grid. */
export type RosterPerson = {
  slug: string
  name: string
  /** Their ELA seat — "Head of Revenue", "Programme Lead". Never their job. */
  title: string
  department: string | null
  code: string | null
  isHead: boolean
  /** Whether a photo exists AND they consented to it being shown. */
  photo: boolean
}

export type CommitteeNumbers = {
  committee: number
  hours: number
  projects: number
  openSeats: number
}

/**
 * A department and how full it is.
 *
 * `code` is the stable identity — MGT, REV, PRG. Names get reworded and this
 * page's artwork is keyed off the code so a rename does not silently drop a
 * card. `target` is null when nobody has set a headcount target, which is not
 * the same as a target of nought.
 */
export type DepartmentCount = {
  name: string
  code: string
  filled: number
  open: number
  target: number | null
}

export type PersonDetail = {
  slug: string
  name: string
  ela: {
    title: string
    department: string | null
    also: { title: string; department: string | null }[]
  }
  work: { title: string; organisation: string } | null
  bio: string | null
  linkedin: string | null
  photo: boolean
  skills: string[]
  verified: {
    hours: number | null
    projects: number
    deliverables: number
    since: string
  }
  education: {
    institution: string
    qualification: string | null
    field: string | null
    startYear: number | null
    endYear: number | null
  }[]
  experience: {
    organisation: string
    title: string
    startMonth: string | null
    endMonth: string | null
    description: string | null
  }[]
  projects: { name: string; code: string }[]
  articles: { slug: string; title: string; standfirst: string | null; publishedAt: string }[]
  awards: { kind: string; citation: string; term: string | null }[]
}

/** The portrait for a published person, or null when they have none. */
export function photoUrl(person: { slug: string; photo: boolean }): string | null {
  return person.photo ? `${PORTAL}/api/public/photo/${encodeURIComponent(person.slug)}` : null
}

/**
 * Any failure here is a quiet one.
 *
 * A 503 from the migration guard, a network error, DNS, CORS — none of them are
 * the visitor's problem and none of them should put an error on a page whose
 * job is to introduce fifty-seven people. The caller falls back to the
 * hand-written roster when this returns null.
 */
async function read<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${PORTAL}${path}`, { headers: { Accept: "application/json" } })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

/**
 * The roster and the figures, which stand or fall separately.
 *
 * This is the whole point of the split. An empty roster means nobody has
 * published yet, so the names keep coming from `data/content.ts`. But the
 * figures beside them count seats and approved time — they name nobody, they
 * need nobody's consent, and they are already true today.
 *
 * Throwing them away because the roster was empty is how this page came to
 * announce 57 committee members while the portal held 26.
 */
export async function fetchCommittee(): Promise<{
  people: RosterPerson[] | null
  numbers: CommitteeNumbers | null
  departments: DepartmentCount[] | null
}> {
  const data = await read<{
    people: RosterPerson[]
    numbers: CommitteeNumbers
    departments: DepartmentCount[]
  }>("/api/public/committee")

  if (!data) return { people: null, numbers: null, departments: null }

  return {
    people: Array.isArray(data.people) && data.people.length > 0 ? data.people : null,
    numbers: numbersOf(data.numbers),
    departments: Array.isArray(data.departments) && data.departments.length > 0
      ? data.departments
      : null,
  }
}

/** Ignores a figures block that is absent or not the shape it claims to be. */
function numbersOf(value: unknown): CommitteeNumbers | null {
  if (typeof value !== "object" || value === null) return null

  const record = value as Record<string, unknown>
  const keys: (keyof CommitteeNumbers)[] = ["committee", "hours", "projects", "openSeats"]

  return keys.every((key) => typeof record[key] === "number")
    ? (value as CommitteeNumbers)
    : null
}

export async function fetchPerson(slug: string): Promise<PersonDetail | null> {
  const data = await read<{ person: PersonDetail }>(
    `/api/public/committee/${encodeURIComponent(slug)}`,
  )
  return data?.person ?? null
}

/**
 * The roster and figures for the leadership page.
 *
 * `people` is null until somebody has published, and that is what the page
 * keys its behaviour off: null means the names on screen came from
 * `data/content.ts`, so there are no profile pages to link to — a hand-written
 * name has no slug, and nobody typed into a content file has consented to
 * anything. Only published people get a link.
 *
 * `numbers` and `departments` arrive independently and are usually present
 * while `people` is still null — they count seats rather than describe people.
 */
export function useCommittee(): {
  people: RosterPerson[] | null
  numbers: CommitteeNumbers | null
  departments: DepartmentCount[] | null
} {
  const [state, setState] = useState<{
    people: RosterPerson[] | null
    numbers: CommitteeNumbers | null
    departments: DepartmentCount[] | null
  }>({ people: null, numbers: null, departments: null })

  useEffect(() => {
    let cancelled = false

    void fetchCommittee().then((data) => {
      if (!cancelled) setState(data)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
