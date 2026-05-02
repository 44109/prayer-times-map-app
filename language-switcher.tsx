"use client"

interface LanguageSwitcherProps {
  selectedLang: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSwitcher({ selectedLang, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <select
      id="languageSwitcher"
      value={selectedLang}
      onChange={(e) => onLanguageChange(e.target.value)}
      className="relative overflow-hidden group cursor-pointer"
    >
      <option value="en">🌐 English</option>
      <option value="tr">🇹🇷 Türkçe</option>
      <option value="ar">🇸🇦 العربية</option>
    </select>
  )
}
