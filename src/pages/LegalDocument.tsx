import { LegalLayout } from "@/components/LegalLayout"
import { Reveal } from "@/components/Reveal"
import { useLegalLocale } from "@/hooks/useLegalLocale"
import { UI_STRINGS, getLegalDoc, type LegalDoc } from "@/data/legal"

/**
 * Renders one legal document. All three routes (/privacy, /cookies, /terms)
 * share this component and differ only by slug, so a change to the reading
 * experience lands on every document at once.
 */
export default function LegalDocument({ slug }: { slug: LegalDoc["slug"] }) {
  const [locale, setLocale] = useLegalLocale()
  const doc = getLegalDoc(slug, locale)
  const t = UI_STRINGS[locale]

  return (
    <LegalLayout locale={locale} onLocaleChange={setLocale}>
      <Reveal>
        <h1 className="font-display text-[2.25rem] font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl">
          {doc.title}
        </h1>
        <div className="mt-6 max-w-2xl space-y-4">
          {doc.intro.map((para) => (
            <p key={para} className="text-[17px] leading-relaxed text-muted-foreground">
              {para}
            </p>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-border bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          {t.reviewNotice}
        </p>
      </Reveal>

      <div className="mt-12 max-w-2xl space-y-10">
        {doc.sections.map((section, index) => (
          <Reveal key={section.heading} delay={Math.min(index * 0.04, 0.24)}>
            <section>
              <h2 className="font-display text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                {section.heading}
              </h2>
              {section.body?.map((para) => (
                <p key={para} className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 flex flex-col gap-2.5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-flame" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </Reveal>
        ))}
      </div>
    </LegalLayout>
  )
}
