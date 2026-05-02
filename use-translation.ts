import { translations, type Language } from "@/lib/translations"

export function useTranslation(lang: Language) {
  const t = translations[lang] || translations.en

  return { t }
}
