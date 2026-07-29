import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { LegalLayout } from "@/components/LegalLayout"
import { Reveal } from "@/components/Reveal"
import { useLegalLocale } from "@/hooks/useLegalLocale"
import { LEGAL_CONTACT, LEGAL_DOCS, UI_STRINGS } from "@/data/legal"

/** Index of the legal documents — the Airbnb "Legal" screen, on the web. */
export default function Legal() {
  const [locale, setLocale] = useLegalLocale()
  const t = UI_STRINGS[locale]
  const docs = LEGAL_DOCS[locale]

  return (
    <LegalLayout locale={locale} onLocaleChange={setLocale}>
      <Reveal>
        <h1 className="font-display text-[2.25rem] font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl">
          {t.legalIndexTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          {t.legalIndexLede}
        </p>
      </Reveal>

      <div className="mt-10 grid max-w-2xl gap-4">
        {docs.map((doc, index) => (
          <Reveal key={doc.slug} delay={index * 0.06}>
            <Link
              to={`/${doc.slug}${locale === "ms" ? "?lang=ms" : ""}`}
              className="group flex items-start justify-between gap-6 rounded-[26px] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame/25 hover:shadow-lg sm:p-7"
            >
              <div>
                <h2 className="font-display text-xl font-extrabold tracking-tight text-navy">
                  {doc.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {doc.summary}
                </p>
              </div>
              <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {locale === "en" ? "Data protection enquiries: " : "Pertanyaan perlindungan data: "}
          <a
            href={`mailto:${LEGAL_CONTACT}`}
            className="font-semibold text-flame underline-offset-4 hover:underline"
          >
            {LEGAL_CONTACT}
          </a>
        </p>
      </Reveal>
    </LegalLayout>
  )
}
