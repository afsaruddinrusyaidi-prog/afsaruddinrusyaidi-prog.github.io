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
    role: "President, Emerging Leaders Asia",
    meta: "Governance & Integrity Research",
  },
  date: "July 2026",
  read: "24 min read",
  blocks: [
    // ── I. Systemic threat ──────────────────────────────────────────────
    {
      type: "h2",
      id: "systemic-threat",
      text: "Credentials Fraud as a Systemic Corporate and Geopolitical Threat",
    },
    {
      type: "lead",
      text: "In the modern corporate and public administration landscape, credentials fraud has evolved from basic document inflation into a highly industrialised, technology-enabled risk vector. What was once an isolated embellishment is now a domain of strategic impersonation.",
    },
    {
      type: "p",
      text: "Historically, the offence was small and legible: extending employment dates to conceal a résumé gap, upgrading a job title by one rung. Contemporary credentials fraud is a different species. Driven by the democratisation of generative artificial intelligence, applicants can now mass-generate applications tuned to bypass Applicant Tracking Systems, construct synthetic portfolios, and produce polished, grammatically flawless résumés that completely mask the absence of underlying qualification.",
    },
    {
      type: "p",
      text: "The scale is underscored by empirical data from background screening and human resource research institutions. Roughly **78% of résumés contain misleading or fabricated information**, with nearly one in three applicants falsely claiming technical proficiency. A separate study indicates that **one in four job applicants in the United States** admits to actively lying on their résumé. The economic consequence is severe — an estimated **$600 billion annually** in lost productivity, operational disruption, depressed morale and direct legal liability.",
    },
    {
      type: "stats",
      items: [
        { value: "78%", label: "of résumés contain misleading or fabricated information", source: "CIChecked" },
        { value: "1 in 4", label: "US applicants admit to actively lying on their résumé", source: "Business.com" },
        { value: "$600B", label: "estimated annual global cost to employers", source: "Business.com" },
        { value: "71% / 20%", label: "of HR professionals have met fake candidate details — but only 20% trust their own detection", source: "Equifax TotalVerify" },
      ],
    },
    {
      type: "p",
      text: "That final pair is the operative statistic. **71% of HR professionals** have actively encountered fake or misleading candidate details during hiring, yet only **20% express high confidence** in their internal detection methods. The gap between exposure and capability is the vulnerability — and it sits inside standard corporate onboarding protocol, not outside it.",
    },
    {
      type: "p",
      text: "For high-profile corporate and public sector entities, the consequences compound. Credentials fraud compromises intellectual property, undermines regulatory compliance and inflicts reputational damage that outlasts the individual hire. The taxonomy below separates the nuisance tier from the tier that ends careers and breaches national security.",
    },
    {
      type: "table",
      caption: "Table 1 — Taxonomy of credentials fraud by mechanism and organisational impact",
      head: ["Fraud type", "Mechanism", "Risk level", "Long-term organisational impact"],
      rows: [
        [
          "Traditional embellishment",
          "Fabricating credentials, inflating titles, or altering employment timelines to hide gaps or outrank competitors.",
          "Moderate",
          "Substandard job performance, localised productivity loss, increased turnover.",
        ],
        [
          "AI-generated applications",
          "Bulk applications built from optimised keywords and synthetic project portfolios to clear initial filters.",
          "Moderate",
          "Saturated recruitment pipelines, loss of authentic candidate engagement, high false-positive volume.",
        ],
        [
          "Synthetic identities",
          "Genuine employment records stitched to fake contact details and fabricated personal data to construct a clean background check.",
          "High",
          "Severe compliance breaches, insider theft, compromised proprietary systems, background check circumvention.",
        ],
        [
          "Proxy interviewers",
          "Stand-in technical experts hired to pass live video screens, then replaced by the unqualified hire.",
          "High",
          "Immediate operational failure, critical skill deficits in specialised roles, rapid termination cycles.",
        ],
        [
          "State-sponsored IT schemes",
          "Threat actors using stolen identities and virtual private networks to secure remote technical positions.",
          "Critical",
          "National security breaches, OFAC compliance failures, corporate espionage, systemic data exfiltration.",
        ],
      ],
    },

    // ── II. Santos ──────────────────────────────────────────────────────
    {
      type: "h2",
      id: "george-santos",
      text: "The Spliced Reality of George Santos",
    },
    {
      type: "p",
      text: "The case of former New York Representative George Santos represents one of the most comprehensive campaigns of professional, academic and personal fabrication in modern political history. Following his election in November 2022 to represent New York's 3rd Congressional District, investigative reporting dissected his background and found that nearly every credential he claimed was fiction.",
    },
    {
      type: "p",
      text: "Santos claimed to have graduated from Baruch College and to have achieved significant financial success at Citigroup and Goldman Sachs. Neither institution held any record of his attendance or employment. This was not a sophisticated deception defeated by sophisticated means — it was a total failure of basic vetting by political parties and media outlets before a general election.",
    },
    {
      type: "p",
      text: "The fabrication extended into personal history. Santos falsely claimed Jewish heritage, asserted that his grandparents were Holocaust survivors who fled Soviet Ukraine and German-occupied Belgium, and stated that his mother was a financial executive who survived the September 11 attacks. Investigations established that his grandparents were born in Brazil, and that his mother — a domestic worker and home care nurse — was not in the United States in 2001.",
    },
    {
      type: "p",
      text: "The second-order consequences extended well beyond public embarrassment. The fabricated persona functioned as cover for financial and campaign irregularities. Santos operated a Florida-registered capital introduction company, Devolder Organization LLC, founded weeks after his previous employer, Harbor City Capital, was accused by the SEC of running a $17 million Ponzi scheme. He claimed Devolder managed $80 million in assets and paid him a $750,000 salary alongside more than $1 million in dividends — the stated source of the $705,000 he “loaned” his own campaign.",
    },
    {
      type: "table",
      caption: "Table 2 — Claimed profile against forensic reality",
      head: ["Claimed profile element", "Discovered forensic reality", "Financial / legal consequence"],
      rows: [
        [
          "Baruch College graduate; claimed to have made the Baruch volleyball team famous.",
          "No enrolment record found.",
          "Complete fabrication.",
        ],
        [
          "Goldman Sachs and Citigroup financial executive.",
          "No record of employment at either institution.",
          "Complete fabrication.",
        ],
        [
          "$11 million in personal assets, up from $55,000 in 2020.",
          "Fabricated net worth.",
          "Used to justify otherwise inexplicable campaign loans.",
        ],
        [
          "$11,000 paid for “staff apartment rentals”.",
          "Campaign funds covering personal housing.",
          "Conversion of campaign funds to personal use.",
        ],
        [
          "Routine operating expenditure for travel and staff meals.",
          "Over 40 disbursements between $199 and $200 — including 37 at exactly $199.99.",
          "Structured to sit beneath the $200 receipt requirement.",
        ],
        [
          "Ownership of a Maserati and multiple Hamptons properties.",
          "A leased 2015 Mercedes-Benz; residence in a Queens row house.",
          "Asset fabrication supporting the wealth narrative.",
        ],
        [
          "Producer of Broadway's Spider-Man: Turn Off the Dark.",
          "No association with the production.",
          "Complete fabrication.",
        ],
      ],
    },
    {
      type: "p",
      text: "Campaign finance complaints detail systematic violations of federal law: donations solicited in exchange for attendance at swearing-in events, and more than **$113,300 in contributions exceeding individual legal limits**. Notably, the exposure was not spearheaded by national media. A small local paper, the *North Shore Leader*, published critical financial inquiries months before the national press engaged. The investigations culminated in federal charges, historic expulsion from Congress, and convictions for felony wire fraud, check fraud and aggravated identity theft.",
    },
    {
      type: "quote",
      text: "The most consequential vetting in the Santos case was performed by a community newspaper with a fraction of the resources of the outlets that missed it.",
    },

    // ── III. Chang & Abagnale ───────────────────────────────────────────
    {
      type: "h2",
      id: "diplomatic-fabrications",
      text: "Diplomatic and Historical Fabrications",
    },
    {
      type: "p",
      text: "Public sector credentials fraud is uniquely hazardous, because it compromises national security and diplomatic integrity directly rather than through a chain of commercial consequences. The case of Mina Chang — Deputy Assistant Secretary for the U.S. State Department's Bureau of Conflict and Stabilization Operations — demonstrates the vulnerability of political appointment screening.",
    },
    {
      type: "p",
      text: "Appointed in April 2019, Chang held responsibility for conflict response initiatives bearing on national strategic interests. An NBC News investigation subsequently established extensive résumé falsification. She claimed a degree in international development from the University of Hawaii, which the university publicly refuted. She represented herself as a Harvard Business School alumna; her Harvard connection was a seven-week, non-degree Advanced Management Program costing $82,000 and carrying no academic prerequisites.",
    },
    {
      type: "p",
      text: "Chang also fabricated a *Time* magazine cover featuring her own face to promote her non-profit, “Linking the World”, and discussed the fake cover in recorded video interviews. She did not disclose that the charity's non-profit status had been revoked. She claimed to have addressed both the Republican and Democratic National Conventions and to have served on a United Nations panel on drones; investigation established she had spoken at marginal side events and held no verified association with the UN panel.",
    },
    {
      type: "p",
      text: "Diplomatic service forums later noted that Chang had leveraged photo opportunities in war zones with her husband — a former Special Forces officer running a legitimate NGO — to construct an extensive humanitarian career. Her nomination to a higher USAID role controlling a $1 billion budget was withdrawn under congressional scrutiny, yet she retained her State Department position until a forced resignation in November 2019.",
    },
    {
      type: "table",
      caption: "Table 3 — Public sector and historical fabrication, compared",
      head: ["Figure", "Primary claim", "Forensic reality", "Investigative source", "Consequence"],
      rows: [
        [
          "Mina Chang",
          "University of Hawaii degree, Harvard Business School alumna, Time cover appearance.",
          "Unaccredited school attendance, a seven-week open-enrolment course, and a self-made fake cover.",
          "NBC News investigative unit.",
          "Resigned from the U.S. State Department under pressure.",
        ],
        [
          "Frank Abagnale",
          "Extensive global bank fraud, impostor flights, high-level FBI consulting.",
          "Minor localised crimes; the majority of the high-profile escapades were self-fabricated myths.",
          "Alan Logan, The Greatest Hoax on Earth.",
          "Public deconstruction of a career built on the legend itself.",
        ],
      ],
    },
    {
      type: "p",
      text: "This history of fabricated authority predates the digital era. Frank Abagnale's story of high-level bank fraud and FBI consultancy was popularised globally before researcher Alan Logan subjected it to a detailed historical audit in *The Greatest Hoax on Earth*. Logan's research dismantled the claims, showing that many celebrated exploits were complete fabrications. The lesson generalises: societies remain highly vulnerable to narrative-driven fabulists who can project an aura of authority, and the projection does not require technology.",
    },

    // ── IV. Corporate governance ────────────────────────────────────────
    {
      type: "h2",
      id: "board-tolerance",
      text: "Classic Executive Deceptions and the Problem of Board Tolerance",
    },
    {
      type: "p",
      text: "The private sector is equally exposed. Executives use fabricated backgrounds to secure senior roles, and in many cases the fabrication survives for decades — surfacing only during a promotion cycle, an activist investor campaign, or an anonymous tip.",
    },
    {
      type: "cases",
      items: [
        {
          name: "Scott Thompson",
          role: "CEO, Yahoo!",
          text: "Hired January 2012. His résumé claimed dual degrees in accounting and computer science from Stonehill College. An activist investor exposed that only the accounting degree existed. After attempting to attribute the error to a headhunting firm, Thompson resigned after 130 days.",
        },
        {
          name: "Marilee Jones",
          role: "Dean of Admissions, MIT",
          text: "Led admissions at MIT from 1997 to 2007, sustaining a claim to three academic degrees for 28 years. She had campaigned to reduce space for extracurricular activities on student applications in order to eliminate “fluff” and exaggeration. A 2007 anonymous tip revealed she held no degrees at all. Immediate termination.",
        },
        {
          name: "Ronald Zarrella",
          role: "CEO, Bausch & Lomb",
          text: "Claimed an MBA from New York University. He had taken classes but never completed the programme. On discovery in 2002 the board rescinded his $1.1 million annual bonus but allowed him to retain the chief executive position, which he held until retiring in 2008.",
        },
        {
          name: "George O'Leary",
          role: "Head Coach, Notre Dame Football",
          text: "Hired in 2001; resigned after five days when his claimed master's degree from NYU was found fabricated, alongside claims of varsity football letters at the University of New Hampshire he had never earned. His coaching career survived — the University of Central Florida hired him in 2004.",
        },
        {
          name: "David Edmondson",
          role: "CEO, RadioShack",
          text: "Resigned in 2006 after a Fort Worth Star-Telegram investigation established that his claimed theology and psychology degrees from Pacific Coast Baptist College did not exist, and that he had attended the institution for two semesters.",
        },
        {
          name: "David Tovar",
          role: "VP Corporate Communications, Walmart",
          text: "A top spokesperson for the retailer, Tovar resigned after two decades when a background check run during a promotion review revealed he had never completed the coursework for his claimed University of Delaware degree.",
        },
      ],
    },
    {
      type: "p",
      text: "The varying corporate responses — immediate termination for Thompson and Jones, retention with a financial penalty for Zarrella — expose the more important finding. Boards routinely prioritise transaction cost minimisation and public relations damage control over absolute ethical compliance.",
    },
    {
      type: "p",
      text: "Executives caught in credentials deception reliably deploy neutralisation techniques: the infraction was victimless, the performance record speaks for itself, information distortion is ubiquitous in the industry. When a board retains a compromised executive, it answers those arguments in the affirmative. The signal transmitted downward is that operational continuity outranks institutional integrity — which is precisely the condition under which strategic misrepresentation propagates through the lower levels of an organisation.",
    },
    {
      type: "quote",
      text: "A board that retains a compromised executive has not contained the problem. It has published a policy.",
    },

    // ── V. Industrialised fraud ─────────────────────────────────────────
    {
      type: "h2",
      id: "transnational-networks",
      text: "Industrialised Transnational Deception: Axact and Manav Bharti",
    },
    {
      type: "p",
      text: "Demand for fraudulent credentials has produced an organised, transnational supply industry. These enterprises operate with corporate-level sophistication, using digital infrastructure to bypass regional regulation and national borders.",
    },
    { type: "h3", text: "The Axact cyber-university cartel" },
    {
      type: "p",
      text: "In May 2015, *The New York Times* exposed a degree mill operation run by Axact, an IT company based in Karachi, Pakistan, led by aspiring media mogul Shoaib Ahmed Shaikh. Axact operated at least **370 websites** for fictitious universities, online high schools and fake accreditation bodies. The inventory included 145 fictitious universities — Almeda University, Rochville University, Columbiana Barkley among them — 41 fake high schools, 18 bogus accreditation boards and 121 education search portals.",
    },
    {
      type: "p",
      text: "The company ran a 24-hour call centre where sales agents impersonated American educational officials, applying high-pressure sales technique to convert enquiries into degree purchases. To project legitimacy it offered forged U.S. State Department attestation letters, fabricated academic transcripts and telephone verification services. Reporting by the Edu Alliance Group further established a dual business model: Axact also operated as “proxy students”, ghostwriting term papers, sitting examinations and completing coursework for students enrolled at genuine Western and Pakistani institutions.",
    },
    {
      type: "flow",
      title: "The Axact conversion pipeline",
      steps: [
        "Customer arrives at one of 370 fictitious university websites",
        "24-hour call centre agent, posing as a US education official, secures the sale",
        "Upsell tier: forged State Department attestation, transcripts, verification hotline",
        "Payment routed through Caribbean shell companies to Karachi",
        "Diploma and “verified” academic transcript dispatched to the buyer",
      ],
    },
    {
      type: "p",
      text: "Class-action lawsuits reached US courts as early as 2007, and a 2009 judgment ordered Axact to pay $22 million in damages — never paid. The company continued to expand regardless. Disruption came only after the *New York Times* exposé, enabled by former Axact employee Yasir Jamshaid, who spent three days in the UAE providing documentation to reporter Declan Walsh.",
    },
    {
      type: "p",
      text: "Raids by Pakistan's Federal Investigation Agency seized servers, blank diplomas and company assets including a yacht, a beach house and **1,100 luxury motor vehicles** registered to the company. The case demonstrates how digital environments permit centralised fraud rings to operate borderless credential factories, arbitraging regulatory gaps across jurisdictions.",
    },
    { type: "h3", text: "The Manav Bharti University scandal" },
    {
      type: "p",
      text: "A parallel case emerged in India. Manav Bharti University, a private institution established in 2009 in Himachal Pradesh, was found to have sold **over 36,000 fake degrees across an eleven-year period**. The university was officially accredited and issued genuine degrees alongside the fabricated ones — its leadership simply operated a secondary market from inside a legitimate institution.",
    },
    {
      type: "p",
      text: "The fallout carried international consequence, particularly in tightly regulated labour markets. Singapore's Ministry of Manpower opened an investigation in 2021 into 23 foreign nationals who had submitted Manav Bharti qualifications in support of work pass applications. Criminal prosecutions followed, producing custodial sentences and permanent bans on working in the country.",
    },
    {
      type: "p",
      text: "The structural lesson is the one most verification programmes have not absorbed: **accreditation status is not a proxy for document authenticity**. Corrupt administration inside a legitimate university produces records that are authentic in form and entirely unearned in substance. A verification model that terminates at “the institution is accredited” will pass every one of the 36,000.",
    },

    // ── VI. Southeast Asia ──────────────────────────────────────────────
    {
      type: "h2",
      id: "southeast-asia",
      text: "Southeast Asian Geopolitical and Regional Dynamics",
    },
    {
      type: "p",
      text: "Southeast Asia — Singapore and Malaysia in particular — presents a distinctive environment for analysing credentials fraud. As premier economic hubs competing for highly skilled foreign talent, their immigration and work permit frameworks are primary targets for fabrication.",
    },
    { type: "h3", text: "Singapore's zero-tolerance enforcement framework" },
    {
      type: "p",
      text: "Singapore maintains a strict posture on work pass qualifications. The Ministry of Manpower permanently bars an average of **660 foreigners annually** from working in the country for submitting fake academic qualifications. First-time offenders face fines up to S$20,000, imprisonment up to two years, or both; repeat offenders face mandatory custodial terms.",
    },
    {
      type: "table",
      caption: "Table 4 — Singapore enforcement cases by exposure mechanism",
      head: ["Case profile / year", "Forged credential", "Exposure mechanism", "Outcome"],
      rows: [
        [
          "HIV Registry theft case (2016)",
          "Polytechnic lecturer; forged certificates used to secure teaching positions.",
          "Arrested for stealing confidential patient data from the national HIV Registry.",
          "Convicted; 28 months' imprisonment.",
        ],
        [
          "Primary school graduate (2013–2017)",
          "Civil engineer; forged NUS degree scroll and transcript.",
          "Applied for a promotion requiring independent professional certification.",
          "Convicted; 2 years and 11 months' imprisonment.",
        ],
        [
          "20-year residency case (2019)",
          "Permanent resident; forged Bachelor of Arts degree obtained through a relative in Pakistan.",
          "Routine retrospective audit of permanent residency documentation.",
          "Convicted; three weeks' imprisonment, residency revoked.",
        ],
        [
          "Work pass cases (2021)",
          "Two professionals; forged university certificates and inflated salary claims.",
          "Targeted random audit of Employment Pass applications by MOM.",
          "Convicted; six weeks' and four weeks' imprisonment.",
        ],
        [
          "IEASS think-tank scheme (2024)",
          "“International security experts” holding degrees from local universities.",
          "Analyst audit noting the absence of any physical footprint at the claimed Millenia Walk address.",
          "Digital profiles deleted; exposed as a cyber-espionage intelligence operation.",
        ],
      ],
    },
    {
      type: "p",
      text: "The final row deserves separate attention. The “Institute of East Asia Strategic Studies” used AI-generated profile photographs and fabricated LinkedIn profiles — claiming qualifications from institutions including the Singapore University of Social Sciences — to approach Western security analysts. The university held no record of the individuals. The claimed office at Millenia Walk did not exist.",
    },
    {
      type: "p",
      text: "This marks the threshold the discipline has crossed. Credentials fraud is no longer only an instrument of individual employment deception; it has been adopted by state-aligned threat actors as infrastructure for corporate and geopolitical intelligence operations. The credential is not the objective. It is the access token.",
    },
    { type: "h3", text: "Malaysia's academic integrity crises" },
    {
      type: "p",
      text: "In Malaysia, credentials fraud has bitten hardest on public trust in the political sphere. A significant scandal emerged in 2019 when the educational credentials of several high-profile politicians within the ruling coalition were publicly questioned.",
    },
    {
      type: "p",
      text: "Deputy Foreign Minister Marzuki Yahya admitted that his claimed business administration degree was not from the University of Cambridge in the United Kingdom, but from **Cambridge International University** — an unaccredited distance-learning degree mill based in the United States. Simultaneously, the credentials of Housing and Local Government Minister Zuraida Kamaruddin were called into question when the National University of Singapore stated publicly that it held no record of her enrolment.",
    },
    {
      type: "p",
      text: "The pattern in the Marzuki case is worth isolating, because it is the cheapest and most common fabrication in the region: **institutional name collision**. An unaccredited provider adopts a name differing from an elite institution by a single word, and the claim survives every check that does not include reading the full institutional name. It requires no forgery at all.",
    },

    // ── VII. Micro-level forensics ──────────────────────────────────────
    {
      type: "h2",
      id: "dossier-forensics",
      text: "Micro-Level Forensics: Anatomy of a Synthetic Executive Dossier",
    },
    {
      type: "note",
      title: "A note on this section",
      text: "The subject of this case study is a private individual, not a public figure, and the allegations here have not been tested by any court or regulator. Identifying details — the subject's name, contact information, and the names of third parties whose identities appear in the analysis — have been withheld. The forensic method, not the identity, is the contribution.",
    },
    {
      type: "p",
      text: "Where national political scandals and global diploma mills describe macro-level fraud, a single fabricated executive portfolio offers something the aggregate data cannot: the internal grammar of the construction. The dossier examined here — referred to throughout as *the subject* — is an instructive specimen of hyper-inflated, partially synthetic executive identity.",
    },
    { type: "h3", text: "Orthographic and chronological indicators" },
    {
      type: "p",
      text: "The document's first page lists a Doctorate of Business Administration from “Havard Business School (In-Pursuit)”. The misspelling of Harvard is a primary orthographic red flag. Authentic profiles from top-tier institutions do not misspell the institution — the name has been typed by the holder hundreds of times, and it is the single string a genuine alumnus is least likely to get wrong.",
    },
    {
      type: "p",
      text: "The chronology is the harder failure. The subject was twenty years old in 2004. Within that constraint the dossier asserts, concurrently:",
    },
    {
      type: "list",
      items: [
        "**Three bachelor's degrees on three continents** — Theology from Yale, Culinary Arts from a Swiss academy, Sports Science from the University of Nottingham.",
        "**“Youngest World Culinary Champion” (2003)** and a **“Youngest Michelin Star Award” (2004)** — the latter an award that does not exist; Michelin stars are conferred on restaurants, not individuals.",
        "**Elite national athletic status** as an “ex-national athlete”, plus an AFC “A” Coaching Licence.",
        "**Vice President of Training & Learning Development** at a FTSE 100 bank in 2009, **Head of SEA Regional Customer Care** in 2010, and **global or regional Chief Executive** of the same bank in 2011.",
      ],
    },
    {
      type: "p",
      text: "No timeline accommodates these. The three degrees are geographically and temporally mutually exclusive. The bank in question is a major multinational whose executive leadership is continuously and publicly documented; no such appointment appears in any record. A twenty-seven month ascent from departmental VP to group chief executive has no precedent at any institution of that size.",
    },
    { type: "h3", text: "The anchor: compartmentalised exaggeration" },
    {
      type: "p",
      text: "The most instructive element is not the grandiose claim but the true one. The dossier claims “Country CEO” of a named international equipment group. Cross-referencing against that company's official corporate directory produces a severe discrepancy: the directory lists a different chairman, founder and assistant CEO — and lists the subject, genuinely, as an **Area Manager**.",
    },
    {
      type: "quote",
      text: "The fraud is not built on a lie. It is built on a truth that a busy recruiter will confirm and then stop reading.",
    },
    {
      type: "p",
      text: "This is compartmentalised exaggeration, and it is the dominant architecture of modern executive fabrication. A real, verifiable, entry-to-mid-level position serves as the anchor of legitimacy. A superficial web search confirms employment at the named company — which is true — and the confirmation discharges the recruiter's sense of obligation. The fraudster is not betting that the title will go unchecked. They are betting that *confirming the employer* will substitute for *checking the title*, and that once one claim verifies, the surrounding claims inherit its credibility.",
    },
    { type: "h3", text: "Community anchoring and synthetic identity" },
    {
      type: "p",
      text: "Further analysis suggests a form of community-rooted identity synthesis. Both name components of the subject's persona are highly specific to an identifiable local religious network — appearing among ordained ministers and worship musicians active in that community.",
    },
    {
      type: "p",
      text: "The constructed persona appears to be composite. By splicing real names and active community identifiers drawn from a genuine local environment, the subject produces a localised digital footprint that passes basic background and geolocation search filters — a footprint that returns real, corroborating, geographically consistent results. Over that substrate the fabricated international banking and culinary profile is applied. The local layer is authentic and cheap to verify; the international layer is fabricated and expensive to verify. Screening processes reliably do the cheap check.",
    },
    {
      type: "p",
      text: "A final detail completes the pattern. Every page of the document carries the marker **“© copyright by Bloomberg 2026”**. Bloomberg is a financial news and data corporation; it does not copyright or publish personal curriculum vitae for external individuals. The stamp exists to spoof the visual language of a Bloomberg terminal report or financial press release, conferring institutional authority on an unverified document through typography alone.",
    },

    // ── VIII. Frameworks ────────────────────────────────────────────────
    {
      type: "h2",
      id: "verification-frameworks",
      text: "Verification Frameworks for Modern Risk Mitigation",
    },
    {
      type: "p",
      text: "Defending against fraud of this sophistication requires human resource and corporate security functions to move from passive document checking to active, multi-layered forensic verification. Three layers, applied together, close most of the gap between the 71% who encounter fraud and the 20% who can detect it.",
    },
    { type: "h3", text: "Layer one — document and metadata forensics" },
    {
      type: "p",
      text: "Verification begins with an audit of the electronic files the candidate submitted, not the claims printed inside them. Embedded metadata in submitted PDFs and portfolios yields several high-signal indicators:",
    },
    {
      type: "list",
      items: [
        "**Timeline discrepancies** — file creation and modification dates that cannot be reconciled with the claimed employment history.",
        "**Author mismatches** — an Author metadata field bearing a name other than the applicant's, typically indicating a professional proxy service or purchased template.",
        "**Sequential timestamps** — multiple applications from ostensibly unrelated candidates sharing template signatures or consecutive creation times, indicating a template-reliant fraud ring.",
        "**Submission IP auditing** — application logs routing through known proxy servers or VPNs, especially in combination with newly created email accounts and VOIP telephone numbers.",
      ],
    },
    { type: "h3", text: "Layer two — behavioural and context-based interviewing" },
    {
      type: "p",
      text: "In interviews, hiring managers should abandon conversational questioning in favour of structured behavioural diagnostics. Fabricated candidates arrive with polished success narratives; the technique works by demanding the material a narrative does not contain.",
    },
    {
      type: "flow",
      title: "The four-stage interrogation of a single claim",
      steps: [
        "Candidate claims: “I increased revenue by 200%”",
        "Detail Drill — define the baseline, break down the monthly progression, explain the calculation methodology, name the specific team members involved",
        "Obstacle Question — walk through a specific project failure: what went wrong, the technical detail of the issue, how it resolved",
        "Learning Loop — what would be done differently on a repeat, and what specific feedback the direct manager gave",
        "Proof Request — contemporaneous documentation: blinded performance reviews, leadership emails, technical documentation",
      ],
    },
    {
      type: "p",
      text: "The Obstacle Question carries most of the diagnostic weight. Fraudulent candidates memorise achievements, not setbacks, because the fabricated narrative has no failures in it — inventing one under pressure requires improvising operational detail the candidate has never possessed.",
    },
    {
      type: "p",
      text: "Throughout, interviewers should monitor for cognitive indicators of fabrication: vague or evasive language; a shift from first-person “I achieved” to collective “we achieved” precisely when detail is demanded; and rehearsed answers that fail to adapt when a follow-up question departs from the expected script.",
    },
    { type: "h3", text: "Layer three — the humanness verification paradigm" },
    {
      type: "p",
      text: "Generative AI has made it trivial to produce a clean professional identity: a polished LinkedIn profile with purchased connections, a fresh GitHub repository, a coherent portfolio site. Standard digital verification no longer establishes that an applicant exists.",
    },
    {
      type: "p",
      text: "The humanness paradigm inverts the search. Instead of examining the professional footprint — which is exactly what a fraudster invests in — it looks for the incidental, non-professional accounts real people accumulate across years of ordinary life: hobby forums, local sports meetups, community group activity, long-dormant accounts on platforms nobody would think to fake.",
    },
    {
      type: "p",
      text: "These signals are highly predictive precisely because they serve **no professional purpose**. They require years of organic engagement, cannot be back-dated, and are economically unfeasible for automated fraud operations to simulate at scale. Cross-referencing a candidate's professional profile against this broader footprint is currently the most reliable available method of distinguishing a real professional from a sterile synthetic identity constructed solely to clear a background check.",
    },
    {
      type: "quote",
      text: "A fabricated identity is optimised for the checks it expects. Its weakness is everything nobody would bother to fake.",
    },
    {
      type: "p",
      text: "The through-line across every case in this study — a congressman, a State Department appointee, six chief executives, two degree factories and one synthetic dossier — is that none were exposed by the screening process designed to catch them. They were exposed by an activist investor, an anonymous tip, a promotion review, a local newspaper, a defecting employee and a routine audit. The verification framework's purpose is to move that detection earlier, into the process, before the credential becomes an access token.",
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
