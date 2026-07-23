// ────────────────────────────────────────────────────────────────────────────
// ELA — Locked content. Single source of truth for every page.
// Facts, numbers, names, and partner claims are LOCKED. Do not improvise.
// ────────────────────────────────────────────────────────────────────────────

export const ORG = {
  name: "Emerging Leaders Asia",
  short: "ELA",
  tagline: "Asia's Ecosystem for Emerging Leaders",
  lede: "The premier alumni continuity engine of the Axiata Young Talent Programme (AYTP) — turning high-potential graduates into socially-conscious leaders across ASEAN.",
  socials: {
    instagramELA: "https://www.instagram.com/emergingleadersasia",
    instagramECL: "https://www.instagram.com/emergingcorpleaders",
    instagramAYTP: "https://www.instagram.com/axiatayoungtalentprogramme",
    linktree: "https://linktr.ee/emergingcorpleaders",
  },
} as const

export const VALUES = [
  {
    title: "Radical Accountability",
    body: "Transparent governance and ownership — we measure what we promise and publish where we stand.",
    accent: "amber",
  },
  {
    title: "Leading with Heart",
    body: "Community empathy first. Leadership is a relationship before it is a role.",
    accent: "red",
  },
  {
    title: "Agility",
    body: "Sustaining high standards amid industry shifts — we adapt the method, never the mission.",
    accent: "blue",
  },
] as const

// Global headline metrics — used for count-up matrices.
export interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  sub?: string
}

export const GLOBAL_STATS: Stat[] = [
  { value: 10, suffix: "+", label: "Years of Legacy", sub: "A decade of leadership continuity" },
  { value: 2500, suffix: "+", label: "Alumni Network", sub: "Top talent across the region" },
  { value: 1000, suffix: "+", label: "Talents Impacted", sub: "Across every leadership pipeline" },
  { value: 25, suffix: "", prefix: "~", label: "Premium Events", sub: "Delivered in the prior term" },
]

export const COMMITTEE_SIZE = 57

// ── The five AYTP pathways — ABSOLUTE EQUALS. Same structure, same depth. ────
// Updated 2026-07: ASBS (Axiata All-Star Bestari Scholars) is now a full
// fifth pathway card, not a footnote. Cohort/legacy figures are as supplied
// by the user — Historical Investment sums exactly to RM85.72M; the Cohorts
// Delivered figures do not sum to the 27 headline total, but both are
// transcribed verbatim as locked content.
export interface Track {
  acronym: string
  name: string
  /** Three fact chips derived from the pathway tagline. */
  chips: string[]
  accent: "orange" | "green" | "blue" | "purple" | "pink"
  blurb: string
  selection: {
    applicants: string
    selected: string
    /** "Scholars" or "Participants" — per the refined copy. */
    noun: string
    rate: string
  }
  programme: string
  investment: string
  /** Curriculum core shown in the coloured block (from the concept board). */
  core: string
  coreDetail: string
  legacyCohorts: string
  legacyDetail: string
  image: string
}

export const TRACKS: Track[] = [
  {
    acronym: "SLDP",
    name: "School Leadership Development Programme",
    chips: ["Ages 13–17", "5-Year Residential", "KYS & MRSM"],
    accent: "orange",
    blurb:
      "An equity-first leadership residency that develops high-potential students from an early age through holistic residential education.",
    selection: { applicants: "3,000+", selected: "Up to 20", noun: "Scholars", rate: "0.67%" },
    programme: "5-Year Residential Programme",
    investment: "RM27.20 Million",
    core: "Foundational Core",
    coreDetail: "The 4Cs, long-term holistic leadership frameworks",
    legacyCohorts: "8 Cohorts Delivered",
    legacyDetail: "136 high-pedigree residential scholars",
    image: "/media/gallery/life-talk.jpg",
  },
  {
    acronym: "ASBS",
    name: "Axiata All-Star Bestari Scholars",
    chips: ["Pre-University", "1-Year Scholarship", "Equity First"],
    accent: "green",
    blurb:
      "A scholarship pathway supporting outstanding students from B40 and underserved communities before they progress into higher education.",
    selection: { applicants: "1,800+", selected: "Up to 77", noun: "Scholars", rate: "4.28%" },
    programme: "1-Year Scholarship Programme",
    investment: "RM1.41 Million",
    core: "Equity & Social Impact Core",
    coreDetail: "Resilient leadership, future-ready skills, public policy",
    legacyCohorts: "3 Cohorts Delivered",
    legacyDetail: "77 Bestari Scholars",
    image: "/media/gallery/life-craft.jpg",
  },
  {
    acronym: "ULDP",
    name: "University Leadership Development Programme",
    chips: ["Undergraduate", "15+ Years Running", "Flagship"],
    accent: "blue",
    blurb:
      "ELA's flagship undergraduate leadership experience, developing future industry leaders through immersive leadership development.",
    selection: { applicants: "1,200+", selected: "Up to 80", noun: "Participants", rate: "6.67%" },
    programme: "2-Week Leadership Development Programme",
    investment: "RM13.44 Million",
    core: "Academic Core",
    coreDetail: "High-stakes business case analysis, agile delivery",
    legacyCohorts: "16 Cohorts Delivered",
    legacyDetail: "1,280 undergraduate leaders",
    image: "/media/gallery/init-workshop.jpg",
  },
  {
    acronym: "ADLP",
    name: "Axiata Digital Leaders Programme",
    chips: ["Digital-first", "ASEAN", "Youth + Girls Tracks"],
    accent: "purple",
    blurb:
      "Preparing future-ready leaders through digital capability building, emerging technologies and innovation leadership.",
    selection: { applicants: "1,000+", selected: "Up to 100", noun: "Participants", rate: "10.00%" },
    programme: "6-Month Digital Leadership Programme",
    investment: "RM2.07 Million",
    core: "Digital Core",
    coreDetail: "Data literacy, tech architecture, digital upskilling",
    legacyCohorts: "3 Cohorts Delivered",
    legacyDetail: "300 digital leaders",
    image: "/media/gallery/hero-speaker.jpg",
  },
  {
    acronym: "YCDP",
    name: "Young CEO Development Programme",
    chips: ["Executive Track", "12+ Years Running", "Capstone"],
    accent: "pink",
    blurb:
      "The executive leadership experience preparing senior operators and future CEOs for regional impact.",
    selection: { applicants: "1,800+", selected: "Up to 80", noun: "Participants", rate: "4.44%" },
    programme: "2-Year Executive Leadership Programme",
    investment: "RM41.60 Million",
    core: "Executive Core",
    coreDetail: "Corporate governance, ESG stewardship, C-suite simulations",
    legacyCohorts: "8 Cohorts Delivered",
    legacyDetail: "640 senior professionals & corporate executives",
    image: "/media/gallery/hero-panel.jpg",
  },
]

export const ECL_NOTE =
  "ECL (Emerging Corporate Leaders) is a sub-brand initiative — not a track."

// ── Ecosystem page — "The ELA Continuum" revamp (concept board, 2026-07) ─────
export const CONTINUUM_HERO = {
  kicker: "The ELA Continuum",
  headline: ["One Network.", "Five Gateways.", "A Lifetime of Leadership."],
  body:
    "Emerging Leaders Asia is not a scholarship. It is a continuum — a single, lifelong ecosystem that discovers leadership potential in early adolescence and stewards it all the way to the C-suite. Every programme is a gateway into the same alumni network, and every graduate becomes a permanent node in an intergenerational web of mentorship, collaboration, and shared ambition.",
  bold: "A scholar who enters at thirteen and an executive who enters at fifty belong to the same family. That is the design.",
} as const

// ── By the Numbers strip ─────────────────────────────────────────────────────
export interface HeadlineNumber {
  value: string
  /** Present when the value should count up from zero on scroll. */
  num?: number
  label: string
}

export const BY_THE_NUMBERS: { stats: HeadlineNumber[]; caption: string } = {
  stats: [
    { value: "RM85.72M", label: "Total Capital Invested" },
    { value: "2,433", num: 2433, label: "Leaders Developed" },
    { value: "38", num: 38, label: "Cohorts Delivered" },
    { value: "Ages 13 → C-Suite", label: "Leadership Span" },
    { value: "5", num: 5, label: "Active Programmes" },
  ],
  caption:
    "The single most selective gateway (SLDP) admits fewer than 1 in 150 applicants.",
}

// ── The Leadership Journey diagram ───────────────────────────────────────────
export const JOURNEY = {
  title: "The Leadership Journey",
  sub: "One continuum. Multiple entry points. One destination.",
  legend: { solid: "Leadership Pathway", dashed: "Digital Track (Cross-cutting)" },
  stages: [
    { role: "Foundation", acronym: "SLDP", lines: ["Ages 13–17", "5-Year Residential"] },
    { role: "Equity On-Ramp", acronym: "ASBS", lines: ["Pre-U", "1-Year Scholarship"] },
    { role: "Flagship Crucible", acronym: "ULDP", lines: ["Undergraduate", "2-Week Programme"] },
    { role: "Capstone", acronym: "YCDP", lines: ["Executive", "2-Year Programme"] },
  ],
  digital: { acronym: "ADLP", label: "Digital Track", sub: "Plugs in across every stage" },
} as const

// ── The ELA Alumni Network — destination card under the journey ──────────────
export const ALUMNI_NETWORK = {
  title: ["The ELA", "Alumni Network"],
  taglines: ["Intergenerational mentorship.", "Lifelong community.", "Exponential impact."],
  body:
    "Where every graduate — whether they joined at thirteen or as a senior executive — belongs for life. One network. Endless connections. Collective impact that multiplies across generations and borders.",
  stats: [
    { value: 2500, suffix: "+", label: "Alumni across ASEAN" },
    { value: 27, suffix: "", label: "Cohorts delivered" },
    { value: 1, suffix: "", label: "Shared mission" },
  ],
  features: [
    "One ELA Alumni Association",
    "Cross-track Connections",
    "Lifelong Learning & Collaboration",
    "Exponential Impact Together",
  ],
} as const

// ── Five Gateways — one horizontal row per programme ─────────────────────────
export interface Gateway {
  acronym: string
  name: string
  kicker: string
  blurb: string
  invested: string
  leaders: string
  leadersNoun: string
  cohorts: string
  acceptance: string
  image: string
}

export const GATEWAYS: Gateway[] = [
  {
    acronym: "SLDP",
    name: "School Leadership Development Programme",
    kicker: "Ages 13–17 · 5-Year Residential · Foundational Gateway",
    blurb:
      "Where the ELA journey begins. A five-year residential crucible built on Equity, Inclusion, and Courage.",
    invested: "RM27.20M",
    leaders: "136",
    leadersNoun: "Scholars",
    cohorts: "8",
    acceptance: "0.67%",
    image: "/media/gallery/life-talk.jpg",
  },
  {
    acronym: "ASBS",
    name: "Axiata All-Star Bestari Scholars",
    kicker: "Pre-University · 1-Year Scholarship · Equity First",
    blurb:
      "An equity-first accelerator for outstanding scholars from underserved communities.",
    invested: "RM1.41M",
    leaders: "77",
    leadersNoun: "Scholars",
    cohorts: "3",
    acceptance: "4.28%",
    image: "/media/gallery/life-craft.jpg",
  },
  {
    acronym: "ULDP",
    name: "University Leadership Development Programme",
    kicker: "Undergraduate · 15+ Years Running · Flagship",
    blurb:
      "The flagship crucible for undergraduate leaders. High-stakes learning. Real teams. Real impact.",
    invested: "RM13.44M",
    leaders: "1,280",
    leadersNoun: "Leaders",
    cohorts: "16",
    acceptance: "6.67%",
    image: "/media/gallery/init-workshop.jpg",
  },
  {
    acronym: "ADLP",
    name: "Axiata Digital Leaders Programme",
    kicker: "Digital-First · ASEAN Youth + Girls Tracks",
    blurb:
      "The digital vanguard equipping ASEAN builders with frontier-tech capabilities and a builder's mindset.",
    invested: "RM2.07M",
    leaders: "300",
    leadersNoun: "Leaders",
    cohorts: "3",
    acceptance: "10.00%",
    image: "/media/gallery/hero-speaker.jpg",
  },
  {
    acronym: "YCDP",
    name: "Young CEO Development Programme",
    kicker: "Executive Track · 12+ Years Running · Capstone",
    blurb:
      "The capstone where senior operators become principled corporate leaders.",
    invested: "RM41.60M",
    leaders: "640",
    leadersNoun: "Leaders",
    cohorts: "8",
    acceptance: "4.44%",
    image: "/media/gallery/hero-panel.jpg",
  },
]

// ── Closing — One Alumni Network band ────────────────────────────────────────
export const CONTINUUM_CLOSING = {
  kicker: "One Alumni Network",
  body:
    "Five gateways. Thirty-eight cohorts. RM85.72 million invested in 2,433 leaders spanning ages thirteen to the boardroom. But the number that matters most is one — the single alumni network every graduate belongs to for life.",
  bold: "That is what makes ELA a continuum, not just a collection of programmes.",
  cta: "Join the ELA Network",
} as const

// ── Four flagship community initiatives ──────────────────────────────────────
export interface Initiative {
  name: string
  tagline: string
  cadence: string
  pax: string
  duration?: string
  detail: string
  topics: string[]
  accent: "amber" | "orange" | "blue" | "red"
  image: string
}

export const INITIATIVES: Initiative[] = [
  {
    name: "Brewed Insights",
    tagline: "Café-style forums for the tough conversations",
    cadence: "Quarterly",
    pax: "30–40 pax",
    duration: "1–1.5 hours",
    detail:
      "A casual café-format forum tackling real-world topics — brain drain, personal branding vs. social media pressure — designed to showcase community intellect.",
    topics: ["Brain drain", "Personal branding", "Career pressure"],
    accent: "amber",
    image: "/media/gallery/life-talk.jpg",
  },
  {
    name: "Panel Discussions",
    tagline: "Multi-perspective industry deep-dives",
    cadence: "Bi-Monthly",
    pax: "70–100 pax",
    detail:
      "Marquee panels on AI & the Future of Work, digital finance and sustainability — featuring regional collaborators including ADA and YTL AI Labs.",
    topics: ["AI & Future of Work", "Digital Finance", "Sustainability / ESG"],
    accent: "blue",
    image: "/media/gallery/init-panel.jpg",
  },
  {
    name: "Upskilling Workshops",
    tagline: "Hands-on technical masterclasses",
    cadence: "Bi-Annually",
    pax: "70–100 pax",
    detail:
      "Practical, build-something sessions — 'Build with AI: Zero to Demo', LinkedIn optimisation sprints and personal-finance clinics.",
    topics: ["Build with AI: Zero to Demo", "LinkedIn mastery", "Personal finance"],
    accent: "orange",
    image: "/media/gallery/init-workshop.jpg",
  },
  {
    name: "Speed Mentoring",
    tagline: "Rapid-rotation career growth",
    cadence: "Bi-Annually",
    pax: "30–40 mentees",
    detail:
      "High-energy 8–10 minute rotations pairing early-career professionals with seasoned corporate mentors across the network.",
    topics: ["8–10 min rotations", "15 mentors per cycle", "Cross-industry"],
    accent: "red",
    image: "/media/gallery/hero-connect.jpg",
  },
]

// ── Partners & alliances ─────────────────────────────────────────────────────
// Only the official partner logos supplied by ELA appear here.
// NOTE: never include "Axiata Foundation" in partner/collaborator lists.
export interface PartnerOrg {
  name: string
  logo: string
  size?: "md" | "lg"
}

export const PARTNER_ORGS: PartnerOrg[] = [
  { name: "Axiata", logo: "/partners/axiata.png", size: "lg" },
  { name: "Axiata Young Talent Programme", logo: "/partners/aytp.webp" },
  { name: "Perdana Fellows Alumni Association", logo: "/partners/perdana-fellows.png", size: "lg" },
  { name: "ICMS", logo: "/partners/icms.png" },
]

// Marquee firms our members have gone on to. `size` nudges wide wordmarks
// (McKinsey, Goldman, etc.) larger so the lockups read at an even weight.
export interface Firm {
  name: string
  logo: string
  size?: "md" | "lg"
}

export const ALUMNI_FIRMS: Firm[] = [
  { name: "Google", logo: "/logos/google.png" },
  { name: "McKinsey & Company", logo: "/logos/mckinsey.png", size: "lg" },
  { name: "Goldman Sachs", logo: "/logos/goldman-sachs.webp", size: "lg" },
  { name: "Boston Consulting Group", logo: "/logos/bcg.png" },
  { name: "J.P. Morgan", logo: "/logos/jpmorgan.png", size: "lg" },
  { name: "Microsoft", logo: "/logos/microsoft.webp" },
  { name: "Meta", logo: "/logos/meta.png" },
  { name: "Nvidia", logo: "/logos/nvidia.webp" },
  { name: "Anthropic", logo: "/logos/anthropic.svg", size: "lg" },
  { name: "Accenture", logo: "/logos/accenture.webp", size: "lg" },
  { name: "Deloitte", logo: "/logos/deloitte.png", size: "lg" },
  { name: "PwC", logo: "/logos/pwc.webp" },
  { name: "EY", logo: "/logos/ey.webp" },
  { name: "KPMG", logo: "/logos/kpmg.webp" },
  { name: "Oliver Wyman", logo: "/logos/oliver-wyman.svg", size: "lg" },
  { name: "Citadel", logo: "/logos/citadel.webp", size: "lg" },
  { name: "Temasek Holdings", logo: "/logos/temasek.webp", size: "lg" },
  { name: "Khazanah Nasional", logo: "/logos/khazanah.png", size: "lg" },
  { name: "Bank Negara Malaysia", logo: "/logos/bank-negara.png" },
  { name: "Maybank", logo: "/logos/maybank.png" },
  { name: "Petronas", logo: "/logos/petronas.webp" },
  { name: "Saudi Aramco", logo: "/logos/saudi-aramco.png" },
  { name: "The World Bank", logo: "/logos/world-bank.png", size: "lg" },
  { name: "Grab", logo: "/logos/grab.png" },
  { name: "Shopee", logo: "/logos/shopee.webp" },
]

// ── Committee roster — Leadership page tabs (57-person team) ──────────────────
export interface Member {
  name: string
  role: string
  photo?: string
  bio?: string
}

export interface Department {
  id: string
  label: string
  blurb: string
  members: Member[]
}

export const EXECUTIVE_BOARD: Member[] = [
  {
    name: "Suhaila",
    role: "President",
    photo: "/committee/suhaila.png",
    bio: "Sets the direction for the ecosystem — chairing the committee and holding the standard across every track and initiative.",
  },
  {
    name: "Ikhwan",
    role: "Vice President",
    photo: "/committee/ikhwan.jpg",
    bio: "Turns strategy into delivery — aligning departments and keeping the community engine running term after term.",
  },
  {
    name: "Afsaruddin",
    role: "Treasurer",
    photo: "/committee/afsar.png",
    bio: "Stewards the revenue architecture and financial governance that keeps ELA's programming sustainable.",
  },
  {
    name: "Sofea",
    role: "Secretary",
    photo: "/committee/sofea.jpg",
    bio: "Keeps the machine accountable — governance, records and the connective tissue between every department.",
  },
]

export const DEPARTMENTS: Department[] = [
  {
    id: "exec",
    label: "Executive Board",
    blurb: "Governance, strategy and the office of the President.",
    members: EXECUTIVE_BOARD,
  },
  {
    id: "community",
    label: "Community",
    blurb: "Programming, growth and the member experience.",
    members: [
      { name: "Naavish", role: "Head of Community" },
      { name: "Zhong Yu", role: "Programme Manager" },
      { name: "Asyraf", role: "Growth Manager" },
      { name: "Hannah", role: "Social Media Lead" },
      { name: "Joanne", role: "Programme Lead" },
      { name: "Wei Juan", role: "Programme Lead" },
      { name: "Nik", role: "Programme Lead" },
      { name: "Afiq Hilmie", role: "Stakeholder Lead" },
      { name: "Nageskumar", role: "Stakeholder Lead" },
      { name: "Zahira", role: "Stakeholder Lead" },
    ],
  },
  {
    id: "revenue",
    label: "Revenue & BD",
    blurb: "Commercial strategy, partnerships and mentorship.",
    members: [
      { name: "David Miller", role: "Revenue Strategy Lead" },
      { name: "Jun Huo Yew", role: "Commercial & Mentorship PIC" },
      { name: "Ani Wahida (Anis)", role: "B2C Sales Manager" },
      { name: "Luqman", role: "Strategic Initiatives Lead" },
    ],
  },
  {
    id: "pnc",
    label: "People & Culture",
    blurb: "Internal frameworks, growth check-ins and Run & Makan.",
    members: [
      { name: "Farahin", role: "Head of People & Culture" },
      { name: "Razzan", role: "People & Culture Lead" },
      { name: "Yi Gei", role: "People & Culture Lead" },
      { name: "Sam", role: "People & Culture Lead" },
      { name: "Bryan", role: "People & Culture Lead" },
      { name: "Neo", role: "People & Culture Lead" },
      { name: "Arisha", role: "People & Culture Lead" },
      { name: "Afiqah", role: "People & Culture Lead" },
    ],
  },
]

// ── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Initiatives", to: "/initiatives" },
  { label: "Insights", to: "/insights" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Leadership", to: "/leadership" },
  { label: "Media", to: "/media" },
] as const

// ── Join — screening checkpoints ─────────────────────────────────────────────
export const SCREENING_STEPS = [
  {
    step: "01",
    title: "Application",
    detail: "Tell us who you are, which track you came through, and where you're headed next.",
  },
  {
    step: "02",
    title: "Alignment Review",
    detail: "We match your goals against active community, revenue and P&C squads.",
  },
  {
    step: "03",
    title: "Conversation",
    detail: "A short, human conversation — values and fit over credentials.",
  },
  {
    step: "04",
    title: "Onboarding",
    detail: "Join a squad, get a growth check-in cadence, and show up to your first Run & Makan.",
  },
]

// ═════════════════════════════════════════════════════════════════════════════
// Concept-board pages (2026-07) — Insights / Initiatives / Partnerships /
// Leadership / Media. Copy transcribed verbatim from the user's
// "ELA Website Design Concept" mockups.
// ═════════════════════════════════════════════════════════════════════════════

// ── Insights — "CEO Insights · Ideas that outlive the room." ─────────────────
export const INSIGHTS_HERO = {
  kicker: "CEO Insights",
  headline: ["Ideas that", "outlive the room."],
  body:
    "Every panel. Every workshop. Every conversation. Curated into lasting knowledge by the Emerging Leaders Asia community.",
  cta: "Browse Articles",
  tiles: [
    { label: "AI & Future of Work Panel", image: "/media/insights/hero-panel.jpg" },
    { label: "Workshop", image: "/media/insights/hero-workshop.jpg" },
    { label: "Speed Mentoring", image: "/media/gallery/hero-connect.jpg" },
    { label: "Alumni Podcast", image: "/media/insights/hero-podcast.jpg" },
  ],
} as const

export const INSIGHT_TOPICS = [
  "All",
  "Leadership",
  "AI & Tech",
  "Future of Work",
  "Digital",
  "ESG & Sustainability",
  "Career",
  "Community",
  "Finance",
] as const

export const FEATURED_STORY = {
  tag: "Leadership",
  type: "Editorial",
  title: ["Thinking That", "Leaves the Room."],
  body:
    "The best ideas don't end when the session does. A distillation of insights from our latest forum on leadership, purpose and long-term impact.",
  read: "6 min read",
  date: "May 14, 2025",
  author: {
    name: "Aiman Hakim",
    meta: "ULDP Alumni · 2019 Cohort",
    role: "Strategy Manager, PETRONAS",
  },
  image: "/media/insights/featured-thinking.jpg",
} as const

export interface Article {
  tag: string
  title: string
  excerpt: string
  author: string
  read: string
  image: string
}

export const LATEST_INSIGHTS: Article[] = [
  {
    tag: "AI & Tech",
    title: "AI Co-pilot, Not Auto-pilot: Redefining Human Advantage",
    excerpt: "How leaders can stay relevant in an AI-augmented world.",
    author: "Sarah Tan",
    read: "4 min read",
    image: "/media/insights/art-ai-copilot.jpg",
  },
  {
    tag: "ESG & Sustainability",
    title: "Sustainability Is a Strategy, Not a Report",
    excerpt: "Why ESG must live in your operations, not just your annual report.",
    author: "Daniel Ho",
    read: "5 min read",
    image: "/media/insights/art-sustainability.jpg",
  },
  {
    tag: "Future of Work",
    title: "The New Career Currency: Adaptability + Curiosity",
    excerpt: "Technical skills open doors. Curiosity keeps you in the room.",
    author: "Priya Nair",
    read: "4 min read",
    image: "/media/insights/art-career-currency.jpg",
  },
  {
    tag: "Leadership",
    title: "Leading Through Uncertainty: Clarity Over Confidence",
    excerpt: "In volatile times, clarity inspires more than certainty.",
    author: "Ariff Azman",
    read: "6 min read",
    image: "/media/insights/art-uncertainty.jpg",
  },
]

export const EDITORIAL_COLLECTIONS = [
  { title: "Brewed Insights", blurb: "Short takes from our community.", count: "37 Articles", color: "#5b21b6" },
  { title: "Panel Briefings", blurb: "Key ideas from our forums.", count: "18 Articles", color: "#1d3f8f" },
  { title: "Playbooks", blurb: "Step-by-step guides from workshops.", count: "14 Guides", color: "#c2410c" },
  { title: "Field Notes", blurb: "On-the-ground observations.", count: "22 Notes", color: "#59702c" },
  { title: "Speed Mentoring Lessons", blurb: "Advice that moves you forward.", count: "26 Lessons", color: "#b3175e" },
] as const

export const MOST_READ = [
  { title: "AI Won't Replace Leaders. Leaders Who Use AI Will.", read: "7 min read", image: "/media/insights/read-ai-leaders.jpg" },
  { title: "Digital Finance Is Trust Infrastructure", read: "5 min read", image: "/media/insights/read-digital-finance.jpg" },
  { title: "The Mentorship Dividend", read: "4 min read", image: "/media/gallery/life-chat.jpg" },
  { title: "Building Personal Brands That Last", read: "6 min read", image: "/media/insights/read-personal-brand.jpg" },
  { title: "Designing a Career You Don't Need to Escape", read: "5 min read", image: "/media/insights/read-career-escape.jpg" },
] as const

export const CONTRIBUTORS = [
  { name: "Dr. Reena Malik", topic: "AI & Technology", meta: "ULDP Alumna · 2016 Cohort", photo: "/media/insights/person-reena.jpg" },
  { name: "Marcus Lee", topic: "Finance", meta: "YCDP Alumnus · 2018 Cohort", photo: "/media/insights/person-marcus.jpg" },
  { name: "Nadia Izzati", topic: "Sustainability", meta: "ASBS Alumna · 2020 Cohort", photo: "/media/insights/person-nadia.jpg" },
  { name: "Jonas Tan", topic: "Leadership", meta: "SLDP Alumnus · 2015 Cohort", photo: "/media/insights/person-jonas.jpg" },
] as const

export const INSIGHT_ISSUES = [
  { num: "Issue #14", title: "The Future of Leadership", meta: "12 Stories · May 2025", image: "/media/insights/issue-leadership.jpg" },
  { num: "Issue #13", title: "AI at the Frontier", meta: "11 Stories · Apr 2025", image: "/media/insights/issue-frontier.jpg" },
  { num: "Issue #12", title: "Purpose in Practice", meta: "10 Stories · Mar 2025", image: "/media/insights/issue-purpose.jpg" },
  { num: "Issue #11", title: "Future of Work", meta: "9 Stories · Feb 2025", image: "/media/insights/issue-future-work.jpg" },
] as const

export const NEWSLETTER = {
  title: "Stay ahead of the conversation.",
  sub: "Get the latest insights, straight to your inbox.",
  cta: "Subscribe",
} as const

// ── Initiatives — "The ecosystem doesn't grow by accident." ──────────────────
export const INITIATIVES_HERO = {
  kicker: "The Operating System",
  headline: ["The ecosystem", "doesn't grow", "by accident."],
  body:
    "It grows through carefully designed formats that bring scholars, professionals, executives and mentors into the same room — again and again.",
  primary: "See all initiatives",
  secondary: "Watch the story",
} as const

export const INIT_STATS = [
  { value: 25, suffix: "+", label: "Events delivered per term" },
  { value: 4, suffix: "", label: "Flagship formats that engage" },
  { value: 38, suffix: "", label: "Cohorts since inception" },
] as const

export const COMMUNITY_ENGINE = {
  kicker: "One Community Engine",
  headline: ["Every format.", "Every connection.", "One purpose."],
  body:
    "Our initiatives are designed as a continuum — creating touchpoints that develop leaders and strengthen our community.",
  center: { title: "Our Community", lines: ["Scholars · Professionals", "Executives · Mentors", "Partners"] },
  spokes: [
    { label: "Brewed Insights", sub: "Quarterly conversations that spark ideas", color: "#f4791f" },
    { label: "Panel Discussions", sub: "Industry perspectives that shape thinking", color: "#7a3fc9" },
    { label: "Upskilling Workshops", sub: "Skills that build real-world impact", color: "#2456c4" },
    { label: "Speed Mentoring", sub: "Mentorship that accelerates growth", color: "#e0186e" },
    { label: "People & Culture", sub: "Experiences that build belonging", color: "#e0186e" },
    { label: "CEO Insights", sub: "Ideas that outlive the room", color: "#d6357a" },
  ],
} as const

export interface Flagship {
  name: string
  blurb: string
  cadence: string
  roomSize: string
  duration: string
  color: string
  soft: string
  image: string
}

export const FLAGSHIP_FORMATS: Flagship[] = [
  {
    name: "Brewed Insights",
    blurb: "Café-style forums for the tough conversations that matter.",
    cadence: "Quarterly",
    roomSize: "30–40 pax",
    duration: "1–1.5 hours",
    color: "#f4791f",
    soft: "#fdf3ec",
    image: "/media/gallery/life-talk.jpg",
  },
  {
    name: "Panel Discussions",
    blurb: "Multi-perspective industry deep-dives with experts.",
    cadence: "Bi-Monthly",
    roomSize: "70–100 pax",
    duration: "Session-based",
    color: "#7a3fc9",
    soft: "#f4effb",
    image: "/media/insights/hero-panel.jpg",
  },
  {
    name: "Upskilling Workshops",
    blurb: "Hands-on technical masterclasses to future-proof careers.",
    cadence: "Bi-Annually",
    roomSize: "70–100 pax",
    duration: "Session-based",
    color: "#2456c4",
    soft: "#eef3fc",
    image: "/media/gallery/init-workshop.jpg",
  },
  {
    name: "Speed Mentoring",
    blurb: "Rapid-rotation mentoring for exponential growth.",
    cadence: "Bi-Annually",
    roomSize: "30–40 mentees",
    duration: "Session-based",
    color: "#e0186e",
    soft: "#fdeef4",
    image: "/media/gallery/hero-connect.jpg",
  },
]

export const ANNUAL_RHYTHM = {
  months: [
    { month: "Jan", label: "Brewed Insights", color: "#f4791f" },
    { month: "Feb", label: "Panel Discussion", color: "#7a3fc9" },
    { month: "Mar", label: "Upskilling Workshop", color: "#2456c4" },
    { month: "Apr", label: "Speed Mentoring", color: "#e0186e" },
    { month: "May", label: "Run & Makan", color: "#f4791f" },
    { month: "Jun", label: "Pickleball Socials", color: "#7a3fc9" },
  ],
  caption:
    "This rhythm continues — creating consistent opportunities to learn, connect and grow together.",
} as const

export const RIPPLE_IMPACT = {
  kicker: "The Impact We Create",
  headline: ["From every room,", "real impact."],
  body:
    "Our initiatives don't end when the event does. They create ripple effects across careers, companies and communities.",
  stats: [
    { value: 450, suffix: "+", label: "Articles & insights published", color: "#e0631d" },
    { value: 1200, suffix: "+", label: "Mentorship connections", color: "#7a3fc9" },
    { value: 180, suffix: "+", label: "AI prototypes & projects built", color: "#2456c4" },
    { value: 300, suffix: "+", label: "Career moves & promotions", color: "#c9195f" },
    { value: 100, suffix: "+", label: "Corporate partners engaged", color: "#e0631d" },
  ],
} as const

export const CULTURE_SECTION = {
  kicker: "People & Culture",
  headline: ["Culture is", "the product."],
  body:
    "Beyond the boardroom, it's the shared experiences that build trust, friendships and a lifelong community.",
  link: "Explore People & Culture",
  cards: [
    { title: "Run & Makan", sub: "Outdoors. Movement. Meaningful conversations.", image: "/media/gallery/hero-run.jpg", color: "#f4791f" },
    { title: "Growth Check-ins", sub: "Monthly conversations that keep us moving forward.", image: "/media/gallery/life-chat.jpg", color: "#7a3fc9" },
    { title: "Pickleball Socials", sub: "High-energy games. Real connections. All levels welcome.", image: "/media/gallery/life-activity.jpg", color: "#2456c4" },
    { title: "Community Moments", sub: "The small moments that build a strong community.", image: "/media/gallery/life-guitar.jpg", color: "#e0186e" },
  ],
} as const

export const INIT_CLOSING = {
  headline: ["Be part of what", "moves leaders forward."],
  body: "Join the next room. Bring your voice. Shape the future together.",
  primary: "Join the Network",
  secondary: "Partner With Us",
} as const

// ── Partnerships — "Hire from the room everyone wants into." ─────────────────
export const PARTNER_HERO = {
  kicker: "B2B Talent Gateway",
  headline: ["Hire from the room", "everyone wants into."],
  body:
    "Direct access to 2,500+ vetted alumni across five leadership pathways — through placements, employer branding and strategic alliances.",
  primary: "Become a Partner",
  secondary: "Explore opportunities",
  tiles: [
    { label: "Industry Panel Kuala Lumpur", image: "/media/insights/hero-panel.jpg" },
    { label: "Workshop", image: "/media/insights/hero-workshop.jpg" },
    { label: "Alumni Podcast", image: "/media/insights/hero-podcast.jpg" },
  ],
} as const

export const PARTNER_STATS = [
  { value: 2500, suffix: "+", label: "Vetted alumni and ecosystem leaders", color: "#e0631d" },
  { value: 5, suffix: "", label: "Leadership pathways from school to executive", color: "#3c7d2f" },
  { value: 38, suffix: "", label: "Cohorts delivered across the ecosystem", color: "#2456c4" },
  { value: 85, suffix: "M+", prefix: "RM", label: "Leadership investment and ecosystem support", color: "#7a3fc9" },
] as const

export const NETWORK_RADIAL = {
  kicker: "Our Network. Your Advantage",
  headline: ["Exceptional leaders.", "Diverse backgrounds.", "Endless potential."],
  body:
    "Our ecosystem spans every stage of leadership — united by purpose, grounded in values, and connected for life.",
  link: "Meet our community",
  nodes: [
    "Scholars",
    "Undergraduates",
    "Young Professionals",
    "Entrepreneurs & Founders",
    "Executives",
    "Government & Public Sector",
    "Academia & Researchers",
    "Corporate Leaders",
  ],
} as const

export const PARTNER_WAYS = [
  {
    num: "01",
    title: "Career Toolkits",
    body: "Professional, paid subscription toolkits that compound early-career momentum.",
    color: "#e0631d",
    soft: "#fdf3ec",
  },
  {
    num: "02",
    title: "Employer Branding",
    body: "Curated employer-branding setups that put partners in front of 2,500+ alumni.",
    color: "#3c7d2f",
    soft: "#eef6ef",
  },
  {
    num: "03",
    title: "B2B Talent Outsourcing",
    body: "Strategic talent channels connecting corporate stakeholders to vetted network talent.",
    color: "#2456c4",
    soft: "#eef3fc",
  },
] as const

export const PARTNER_TIERS = [
  {
    num: "01",
    name: "Access",
    accent: "#2456c4",
    best: false,
    features: ["Job & internship broadcasts to the network", "Quarterly talent digest"],
  },
  {
    num: "02",
    name: "Partner",
    accent: "#6d28d9",
    best: true,
    features: [
      "Everything in Access",
      "Co-branded event or workshop each term",
      "Brand mention across ELA channels",
    ],
  },
  {
    num: "03",
    name: "Alliance",
    accent: "#e0631d",
    best: false,
    features: [
      "Everything in Partner",
      "Dedicated B2B talent-outsourcing channel",
      "Curated shortlist from 2,500+ alumni",
      "Named programme sponsorship",
      "Priority mentorship pipeline access",
    ],
  },
] as const

export const PARTNER_VOICES = {
  kicker: "Alumni Impact",
  headline: ["Different paths.", "One network.", "Infinite impact."],
  link: "Meet more leaders",
  quotes: [
    {
      name: "Nadia Izzati",
      meta: "ULDP Alumna '20",
      role: "Strategy Associate, Boston Consulting Group",
      quote: "ULDP shaped how I think about impact — not just for myself, but for others.",
    },
    {
      name: "Adrian Lee",
      meta: "YCDP Alumnus '18",
      role: "Group CEO, Axiata Digital",
      quote: "The ELA network is where I continue to learn, give back, and build together.",
    },
    {
      name: "Marcus Tan",
      meta: "ASBS Alumnus '17",
      role: "Founder & CEO, GreenEdge Solutions",
      quote: "From a small village to building across ASEAN — ELA opened the door.",
    },
  ],
} as const

export const PARTNER_CLOSING = {
  kicker: "B2B Gateway",
  headline: ["Let's put your roles", "in front of the network."],
  body: "Placements, branding or a strategic alliance — start with one conversation.",
  card: {
    title: "Start the conversation",
    sub: "Our team will be in touch within 1 working day.",
    cta: "Talk to our team",
  },
} as const

// ── Leadership — "57 leaders. One shared standard." ──────────────────────────
export const LEAD_HERO = {
  kicker: "The People Behind the Ecosystem",
  headline: ["57 leaders.", "One shared standard."],
  body:
    "Every programme. Every partnership. Every conversation. Built by volunteers who believe leadership is something you practise, not inherit.",
  primary: "Meet the team",
  secondary: "Watch our story",
  image: "/media/gallery/hero-cafe.jpg",
} as const

export const LEAD_FLOW = {
  kicker: "How ELA Works",
  headline: ["An ecosystem", "of leaders."],
  body: "Clear structure. Shared purpose. Stronger community.",
  steps: ["Executive Board", "Department Leads", "Programme Leads", "Committee Members", "The Community"],
  caption: "Ideas flow back. Impact multiplies.",
} as const

export const EXEC_CARDS = [
  {
    role: "President",
    name: "Suhaila",
    blurb: "Leads the vision, strategy and overall direction of the ecosystem.",
    photo: "/committee/suhaila.png",
    roleColor: "#f79433",
  },
  {
    role: "Vice President",
    name: "Ikhwan",
    blurb: "Drives programmes, community growth and strategic partnerships.",
    photo: "/committee/ikhwan.jpg",
    roleColor: "#e0186e",
  },
  {
    role: "Treasurer",
    name: "Afsaruddin",
    blurb: "Oversees financial stewardship and sustainability.",
    photo: "/committee/afsar.png",
    roleColor: "#a78bfa",
  },
  {
    role: "Secretary",
    name: "Sofea",
    blurb: "Ensures governance, documentation and internal communication.",
    photo: "/committee/sofea.jpg",
    roleColor: "#29a8e0",
  },
] as const

export const LEAD_NUMBERS = [
  { value: 57, suffix: "", label: "Committee members" },
  { value: 4, suffix: "", label: "Departments" },
  { value: 12, suffix: "+", label: "Programme leads" },
  { value: 250, suffix: "+", label: "Volunteer hours per month" },
  { value: 1, suffix: "", label: "Shared mission" },
] as const

export const LEAD_DEPTS = [
  {
    title: "Community",
    body: "Building meaningful connections and a world-class member experience.",
    members: "12 Members",
    image: "/media/gallery/life-talk.jpg",
    color: "#f4791f",
  },
  {
    title: "Revenue & BD",
    body: "Fueling growth through partnerships, revenue and strategic alliances.",
    members: "11 Members",
    image: "/media/gallery/init-workshop.jpg",
    color: "#e0186e",
  },
  {
    title: "People & Culture",
    body: "Nurturing our people and strengthening a culture of belonging.",
    members: "13 Members",
    image: "/media/gallery/life-activity.jpg",
    color: "#7a3fc9",
  },
  {
    title: "Operations",
    body: "Designing systems and processes that enable excellence at scale.",
    members: "11 Members",
    image: "/media/gallery/hero-briefing.jpg",
    color: "#2456c4",
  },
] as const

export const LEAD_QUOTES = [
  { quote: "We hold ourselves accountable, even when it's hard.", name: "Naavish" },
  { quote: "Empathy is our superpower.", name: "Hannah" },
  { quote: "We adapt fast, but our mission stays unchanged.", name: "Afiq Hilmie" },
] as const

export const LEAD_CLOSING = {
  kicker: "We're Recruiting",
  headline: ["Lead with us.", "Leave your mark."],
  body: "New committee intakes open every term across all departments.",
  primary: "Apply to the Committee",
  secondary: "See life at ELA",
} as const

// ── Media — "Leadership isn't only documented. It's lived." ──────────────────
export const MEDIA_HERO = {
  kicker: "The ELA Story",
  headline: ["Leadership isn't", "only documented.", "It's lived."],
  body: ["Every programme. Every conversation. Every breakthrough.", "Captured by the people building the ecosystem."],
  film: { label: "Watch 2026 Ecosystem Film", length: "5:12 min" },
} as const

export const MEDIA_FILTERS = [
  "All",
  "Leadership",
  "Mentorship",
  "Panels",
  "Workshops",
  "Community",
  "Behind the Scenes",
  "Celebration",
  "Travel",
] as const

export const FEATURED_MOMENTS = [
  {
    tag: "Panel",
    tagColor: "#6d28d9",
    title: "AI & The Future of Work Panel",
    meta: "Kuala Lumpur",
    date: "May 2026",
    image: "/media/insights/hero-panel.jpg",
  },
  {
    tag: "Community",
    tagColor: "#e0631d",
    title: "Run & Makan",
    meta: "Perdana Botanical Garden, KL",
    date: "Apr 2026",
    image: "/media/gallery/hero-run.jpg",
  },
  {
    tag: "Mentoring",
    tagColor: "#c9195f",
    title: "Speed Mentoring Session",
    meta: "",
    date: "Mar 2026",
    image: "/media/gallery/hero-connect.jpg",
  },
  {
    tag: "Workshop",
    tagColor: "#2456c4",
    title: "Build with AI: Zero to Demo",
    meta: "",
    date: "Feb 2026",
    image: "/media/gallery/hero-speaker.jpg",
  },
] as const

export const MEDIA_QUOTE = {
  quote: "The best rooms are the ones where curiosity meets courage.",
  by: "ELA Community",
} as const

export const MEDIA_TIMELINE = [
  { year: "2023", title: "The Beginning", meta: "12 events", image: "/media/gallery/hero-cafe.jpg", active: false },
  { year: "2024", title: "Growing Stronger", meta: "24 events", image: "/media/gallery/life-chat.jpg", active: false },
  { year: "2025", title: "Expanding Reach", meta: "38 events", image: "/media/gallery/hero-forum.jpg", active: false },
  { year: "2026", title: "Raising Impact", meta: "52 events", image: "/media/gallery/hero-briefing.jpg", active: true },
  { year: "2027", title: "What's Next", meta: "Upcoming", image: "/media/gallery/hero-connect.jpg", active: false },
] as const

export const PHOTO_STORIES = [
  { title: "ULDP 2026", count: "72 photos", image: "/media/gallery/hero-community.jpg" },
  { title: "Run & Makan Series", count: "34 photos", image: "/media/gallery/life-picnic.jpg" },
  { title: "Brewed Insights Forums", count: "81 photos", image: "/media/gallery/life-talk.jpg" },
  { title: "Speed Mentoring Sessions", count: "29 photos", image: "/media/gallery/hero-connect.jpg" },
  { title: "Community Celebrations", count: "45 photos", image: "/media/gallery/life-community.jpg" },
] as const

export const ECOSYSTEM_FACES = {
  kicker: "Faces of the Ecosystem",
  headline: ["The people", "behind every", "moment."],
  link: "Meet the team",
  cards: [
    { quote: "I joined to grow. I stayed to give back.", image: "/media/gallery/life-craft.jpg" },
    { quote: "Leadership is best learnt in community.", image: "/media/gallery/life-guitar.jpg" },
    { quote: "Every event starts with trust and teamwork.", image: "/media/gallery/life-activity.jpg" },
    { quote: "We don't just plan events. We build impact.", image: "/media/gallery/hero-briefing.jpg" },
    { quote: "This is more than a committee. It's purpose.", image: "/media/gallery/life-community.jpg" },
  ],
} as const

export const MEDIA_CLOSING = {
  headline: ["The camera only", "catches who", "shows up."],
  body: "Some arrive as students. Some arrive as executives. Everyone leaves with a story.",
  primary: "Join the Network",
  secondary: "See our Initiatives",
} as const
