import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowLeft, Languages } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionPill } from "@/components/SectionPill"
import { LEGAL_DOCS, LEGAL_UPDATED, UI_STRINGS, type Locale } from "@/data/legal"

/**
 * Shared shell for the legal documents: sidebar index, language toggle and
 * "last updated" line. Each document supplies only its own prose, so the three
 * pages can't drift apart in layout or fall out of sync on the update date.
 */
export function LegalLayout({
  locale,
  onLocaleChange,
  children,
}: {
  locale: Locale
  onLocaleChange: (next: Locale) => void
  children: ReactNode
}) {
  const { pathname } = useLocation()
  const t = UI_STRINGS[locale]
  const docs = LEGAL_DOCS[locale]

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:pb-32">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionPill>{t.legalIndexTitle}</SectionPill>
          <button
            type="button"
            onClick={() => onLocaleChange(locale === "en" ? "ms" : "en")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-flame/40 hover:text-flame"
          >
            <Languages className="size-4" />
            {t.switchLanguage}
          </button>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        {/* Document index — the Framer pattern: one shell, several documents. */}
        <Reveal>
          <nav aria-label={t.legalIndexTitle} className="lg:sticky lg:top-28">
            <ul className="flex flex-col gap-1">
              {docs.map((doc) => {
                const href = `/${doc.slug}`
                const active = pathname === href
                return (
                  <li key={doc.slug}>
                    <Link
                      to={href}
                      className={`block rounded-xl px-3 py-2 text-sm transition-colors ${
                        active
                          ? "bg-flame/8 font-bold text-flame"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-navy"
                      }`}
                    >
                      {doc.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link
              to="/legal"
              className="mt-4 inline-flex items-center gap-2 px-3 text-xs font-semibold text-muted-foreground transition-colors hover:text-flame"
            >
              <ArrowLeft className="size-3.5" />
              {t.backToLegal}
            </Link>
            <p className="mt-6 px-3 text-xs leading-relaxed text-muted-foreground">
              {t.lastUpdated}: {LEGAL_UPDATED}
            </p>
          </nav>
        </Reveal>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
