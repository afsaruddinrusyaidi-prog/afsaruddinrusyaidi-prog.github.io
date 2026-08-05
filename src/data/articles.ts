/**
 * Long-form article content.
 *
 * Prose lives here as structured blocks, the same separation the legal
 * documents use: `articles.ts` owns the words, `ArticleBody` owns how they
 * look. Adding a piece means adding an entry to ARTICLES — no new component.
 *
 * Inline markup inside `text` fields: **bold** and [label](https://url).
 */

export type Block =
  /** Opening paragraph — set larger than body copy. */
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  /** Section heading. `id` anchors the sticky "On this page" rail. */
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  /** Four-up figure strip for the numbers that carry an argument. */
  | { type: "stats"; items: { value: string; label: string; source?: string }[] }
  /** Wide reference tables — rendered in a horizontally scrollable frame. */
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "quote"; text: string; cite?: string }
  /** Vertical process diagram, replacing the ASCII flow charts. */
  | { type: "flow"; title: string; steps: string[] }
  /** Named case studies with a role line — the executive roll-call sections. */
  | { type: "cases"; items: { name: string; role: string; text: string }[] }
  /** Bulleted list where each item leads with a bold term. */
  | { type: "list"; items: string[] }
  /** Editorial callout — used for the anonymisation note. */
  | { type: "note"; title: string; text: string }

export interface Source {
  label: string
  publisher: string
  url: string
}

export interface LongformArticle {
  slug: string
  tag: string
  kicker: string
  title: string
  deck: string
  author: { name: string; role: string; meta: string }
  date: string
  read: string
  /** Optional lead image. Omitted here — the hero is typographic. */
  image?: string
  blocks: Block[]
  sources: Source[]
}

const CREDENTIALS_FRAUD: LongformArticle = {
  slug: "pathology-of-credentials-fraud",
  tag: "Leadership",
  kicker: "Research · Governance & Integrity",
  title: "The Pathology of Credentials Fraud",
  deck:
    "Forensic investigations into executive, public sector and transnational fabrication — and the verification frameworks that catch what a background check misses.",
  author: {
    name: "Afsaruddin Rusyaidi",
    role: "Treasurer, Emerging Leaders Asia",
    meta: "Governance & Integrity Research",
  },
  date: "July 2026",
  read: "5 min read",
  blocks: [
    // ── I. Scale ────────────────────────────────────────────────────────
    { type: "h2", id: "the-scale", text: "The Scale of the Problem" },
    {
      type: "lead",
      text: "Credentials fraud has evolved from document inflation into an industrialised, technology-enabled risk vector. What was once an isolated embellishment — a stretched employment date, a title nudged up one rung — is now a domain of strategic impersonation.",
    },
    {
      type: "p",
      text: "Generative AI has changed the economics. Applicants can mass-produce applications tuned to bypass Applicant Tracking Systems, construct synthetic portfolios, and generate polished, flawless résumés that completely mask the absence of underlying qualification. The numbers describe a screening apparatus that is comprehensively outmatched.",
    },
    {
      type: "stats",
      items: [
        { value: "78%", label: "of résumés contain misleading or fabricated information", source: "CIChecked" },
        { value: "1 in 4", label: "US applicants admit to actively lying on their résumé", source: "Business.com" },
        { value: "$600B", label: "estimated annual global cost to employers", source: "Business.com" },
        { value: "71% / 20%", label: "of HR teams have met fake candidate details — only 20% trust their own detection", source: "Equifax TotalVerify" },
      ],
    },
    {
      type: "p",
      text: "That final pair is the operative statistic. The gap between **exposure** and **capability** is the vulnerability, and it sits inside standard onboarding protocol rather than outside it. Not every fabrication carries the same weight, however — the taxonomy separates the nuisance tier from the tier that breaches national security.",
    },
    {
      type: "table",
      caption: "Taxonomy of credentials fraud by mechanism and impact",
      head: ["Fraud type", "Mechanism", "Risk", "Organisational impact"],
      rows: [
        [
          "Traditional embellishment",
          "Inflated titles or altered timelines to hide gaps.",
          "Moderate",
          "Substandard performance, localised productivity loss, turnover.",
        ],
        [
          "AI-generated applications",
          "Bulk applications with optimised keywords and synthetic portfolios.",
          "Moderate",
          "Saturated pipelines, loss of authentic candidate engagement.",
        ],
        [
          "Synthetic identities",
          "Genuine employment records stitched to fabricated personal data.",
          "High",
          "Compliance breaches, insider theft, background check circumvention.",
        ],
        [
          "Proxy interviewers",
          "Stand-in experts pass the live screen, then the unqualified hire appears.",
          "High",
          "Immediate operational failure, critical skill deficits.",
        ],
        [
          "State-sponsored schemes",
          "Threat actors using stolen identities and VPNs to win remote roles.",
          "Critical",
          "National security breaches, espionage, systemic data exfiltration.",
        ],
      ],
    },

    // ── II. High office ─────────────────────────────────────────────────
    { type: "h2", id: "high-office", text: "When Fabrication Reaches High Office" },
    {
      type: "p",
      text: "Former New York Representative **George Santos** claimed degrees from Baruch College and a career at Goldman Sachs and Citigroup. No institution held any record of him. He also fabricated Holocaust-survivor grandparents and a mother who survived September 11 while not in the country. The persona was not vanity — it was cover for financial irregularity, including over 40 campaign disbursements pitched between $199 and $200 to sit beneath the receipt threshold. It ended in expulsion from Congress and convictions for wire fraud and aggravated identity theft.",
    },
    {
      type: "p",
      text: "**Mina Chang** held a Deputy Assistant Secretary post at the U.S. State Department, running conflict response programmes. Her claimed University of Hawaii degree was refuted by the university; her Harvard credential was a seven-week, non-degree course with no academic prerequisites. She fabricated a *Time* magazine cover featuring herself and discussed it in recorded interviews. She resigned in November 2019.",
    },
    // ── III. Industrialised supply ──────────────────────────────────────
    { type: "h2", id: "industrialised-supply", text: "The Industrialised Supply Side" },
    {
      type: "p",
      text: "Demand has produced organised supply. In 2015 *The New York Times* exposed **Axact**, a Karachi IT company running at least 370 websites for fictitious universities and bogus accreditation boards. A 24-hour call centre staffed by agents impersonating American education officials converted enquiries into degree sales, upselling forged State Department attestation letters. Raids seized servers, a yacht, and 1,100 luxury vehicles registered to the company.",
    },
    {
      type: "p",
      text: "India's **Manav Bharti University** is the more instructive case. Officially accredited, it sold over 36,000 fake degrees across eleven years while issuing genuine ones alongside. Singapore prosecuted 23 foreign nationals who submitted its qualifications for work passes. The lesson most verification programmes have not absorbed: **accreditation status is not a proxy for document authenticity**. A check that terminates at “the institution is accredited” passes all 36,000.",
    },

    // ── IV. Regional ────────────────────────────────────────────────────
    { type: "h2", id: "regional", text: "The Regional Picture" },
    {
      type: "p",
      text: "Singapore's Ministry of Manpower permanently bars an average of **660 foreigners annually** for submitting fake qualifications in work pass applications. Exposure comes overwhelmingly from retrospective audit and promotion review rather than initial screening — one civil engineer's forged NUS degree surfaced only when he applied for a role requiring independent certification, four years in.",
    },
    {
      type: "p",
      text: "The 2024 “Institute of East Asia Strategic Studies” case marks a threshold. The fake Singapore think tank used AI-generated profile photographs and fabricated LinkedIn profiles claiming local university credentials to approach Western security analysts. The universities held no records; the claimed Millenia Walk office did not exist. Credentials fraud is no longer only an instrument of employment deception — it has become infrastructure for intelligence operations. The credential is not the objective. It is the access token.",
    },
    {
      type: "p",
      text: "In Malaysia the damage has landed on public trust. Deputy Foreign Minister Marzuki Yahya's claimed Cambridge degree proved to be from **Cambridge International University**, an unaccredited American degree mill. This is the cheapest fabrication in the region and requires no forgery at all: **institutional name collision**, where a provider adopts a name differing from an elite institution by a single word, survives every check that does not include reading the full name.",
    },

    // ── V. Anatomy ──────────────────────────────────────────────────────
    { type: "h2", id: "anatomy", text: "The Anatomy of a Fabricated Executive" },
    {
      type: "note",
      title: "A note on this section",
      text: "This case study concerns a private individual, and the allegations have not been tested by any court or regulator. Identifying details — the subject's name, contact information, and third parties named in the source material — have been withheld. The method, not the identity, is the contribution.",
    },
    {
      type: "p",
      text: "One dossier examined for this study asserted, of a subject aged twenty in 2004: three bachelor's degrees on three continents, a “Youngest World Culinary Champion” title, a “Youngest Michelin Star Award” (an award that does not exist — stars are conferred on restaurants, not people), elite national athletic status, and a twenty-seven month ascent from departmental VP to group chief executive of a FTSE 100 bank. It also misspelled “Harvard”.",
    },
    {
      type: "p",
      text: "The instructive element is not the grandiose claim but the true one. The dossier claimed “Country CEO” of a named equipment group. That company's official directory does list the subject — as an **Area Manager**.",
    },
    {
      type: "quote",
      text: "The fraud is not built on a lie. It is built on a truth that a busy recruiter will confirm and then stop reading.",
    },
    {
      type: "p",
      text: "This is **compartmentalised exaggeration**, the dominant architecture of modern executive fabrication. A real, verifiable, mid-level position anchors legitimacy. A superficial search confirms employment at the named company — which is true — and that confirmation discharges the recruiter's sense of obligation. The bet is not that the title goes unchecked. It is that *confirming the employer* substitutes for *checking the title*, and that once one claim verifies, the surrounding claims inherit its credibility.",
    },

    // ── VI. Framework ───────────────────────────────────────────────────
    { type: "h2", id: "what-works", text: "What Actually Works" },
    {
      type: "p",
      text: "Closing the gap between the 71% who encounter fraud and the 20% who can detect it requires three layers applied together.",
    },
    {
      type: "list",
      items: [
        "**Document metadata forensics.** Audit the file, not the claims inside it. Creation dates that cannot be reconciled with the claimed history; an Author field bearing someone else's name; sequential timestamps across supposedly unrelated candidates, indicating a template-reliant fraud ring.",
        "**Structured behavioural interviewing.** Fabricated candidates arrive with polished success narratives. The technique works by demanding what a narrative does not contain.",
        "**Humanness verification.** A polished LinkedIn profile and a fresh GitHub repository no longer establish that an applicant exists.",
      ],
    },
    {
      type: "flow",
      title: "Interrogating a single claim",
      steps: [
        "Candidate claims: “I increased revenue by 200%”",
        "Detail Drill — define the baseline, break down the monthly progression, explain the calculation, name the people involved",
        "Obstacle Question — walk through a specific project failure: what went wrong, the technical detail, how it resolved",
        "Learning Loop — what would change on a repeat, and what feedback the direct manager gave",
        "Proof Request — blinded performance reviews, leadership emails, technical documentation",
      ],
    },
    {
      type: "p",
      text: "The Obstacle Question carries most of the diagnostic weight, because fabricated narratives contain no failures — inventing one under pressure requires improvising operational detail the candidate never possessed. Watch for the shift from “I achieved” to “we achieved” precisely when detail is demanded.",
    },
    {
      type: "p",
      text: "The third layer inverts the search. Rather than examining the professional footprint — exactly what a fraudster invests in — it looks for the incidental accounts real people accumulate over years: hobby forums, local meetups, community groups. These are predictive precisely because they serve **no professional purpose**, cannot be back-dated, and are economically unfeasible to simulate at scale.",
    },
    {
      type: "quote",
      text: "A fabricated identity is optimised for the checks it expects. Its weakness is everything nobody would bother to fake.",
    },
    {
      type: "p",
      text: "Across every case here — a congressman, a State Department appointee, two degree factories and one synthetic dossier — none were caught by the process built to catch them. They were caught by an activist investor, a local newspaper, a defecting employee, a promotion review and a routine audit. The purpose of a verification framework is to move that detection earlier, before the credential becomes an access token.",
    },
  ],
  sources: [
    {
      label: "Red Flags Revealed: The Truth Behind Common Resume Lies",
      publisher: "CIChecked",
      url: "https://www.cichecked.com/blog/red-flags-revealed-the-truth-behind-common-resume-lies",
    },
    {
      label: "The Shocking Cost of Resume Fraud",
      publisher: "Business.com",
      url: "https://www.business.com/articles/the-shocking-cost-of-resume-fraud/",
    },
    {
      label: "Beyond the Resume: A Deep Dive into Employment Verification Data",
      publisher: "Equifax TotalVerify",
      url: "https://totalverify.equifax.com/blog/all-blogs/-/post/beyond-the-resume-a-deep-dive-into-employment-verification-data",
    },
    {
      label: "Who Is Rep.-Elect George Santos? His Résumé May Be Largely Fiction",
      publisher: "The New York Times",
      url: "https://www.nytimes.com/2022/12/19/nyregion/george-santos-ny-republicans.html",
    },
    {
      label: "Mina Chang — biography and investigation record",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Mina_Chang",
    },
    {
      label: "Pretend — investigative podcast on con artists and fabricated identity",
      publisher: "Apple Podcasts",
      url: "https://podcasts.apple.com/in/channel/pretend/id6443456985",
    },
    {
      label: "Successful Resume Fraud: Conjectures on the Origins of Amorality in the Workplace",
      publisher: "ResearchGate",
      url: "https://www.researchgate.net/publication/258151894_Successful_Resume_Fraud",
    },
    {
      label: "Fake Diplomas, Real Cash: Pakistani Company Axact Reaps Millions",
      publisher: "The New York Times",
      url: "https://www.nytimes.com/2015/05/18/world/asia/fake-diplomas-real-cash-pakistani-company-axact-reaps-millions-columbiana-barkley.html",
    },
    {
      label: "Why Firms Fall Prey to Dishonest Job Seekers",
      publisher: "The Straits Times",
      url: "https://www.straitstimes.com/singapore/why-firms-fall-prey-to-dishonest-job-seekers-0",
    },
  ],
}

export const ARTICLES: Record<string, LongformArticle> = {
  [CREDENTIALS_FRAUD.slug]: CREDENTIALS_FRAUD,
}

export function getArticle(slug: string | undefined): LongformArticle | undefined {
  return slug ? ARTICLES[slug] : undefined
}

/** Section headings, in order — drives the sticky "On this page" rail. */
export function getSections(article: LongformArticle) {
  return article.blocks.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
}
