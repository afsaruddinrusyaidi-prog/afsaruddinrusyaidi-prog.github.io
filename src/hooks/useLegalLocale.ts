import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"
import type { Locale } from "@/data/legal"

/**
 * Language selection for the legal documents, held in the URL as ?lang=ms.
 *
 * Deliberately NOT localStorage: these pages state that we store nothing on
 * your device, and persisting a preference there would make our own cookie
 * notice untrue. The URL also makes a language shareable, which matters when
 * someone forwards the Bahasa Malaysia notice to a committee member.
 */
export function useLegalLocale(): [Locale, (next: Locale) => void] {
  const [params, setParams] = useSearchParams()
  const locale: Locale = params.get("lang") === "ms" ? "ms" : "en"

  const setLocale = useCallback(
    (next: Locale) => {
      const updated = new URLSearchParams(params)
      if (next === "en") updated.delete("lang")
      else updated.set("lang", next)
      setParams(updated, { replace: true })
    },
    [params, setParams],
  )

  return [locale, setLocale]
}
