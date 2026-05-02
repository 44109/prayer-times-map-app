"use client"

import { useState, useEffect } from "react"

interface LanguageSelectorProps {
  isOpen: boolean
  onClose: () => void
  currentLanguage: string
  onLanguageChange: (lang: string) => void
}

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export function LanguageSelector({ isOpen, onClose, currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage)

  useEffect(() => {
    if (isOpen) {
      setSelectedLanguage(currentLanguage)
    }
  }, [isOpen, currentLanguage])

  const handleApply = () => {
    onLanguageChange(selectedLanguage)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">🌍 Select Language</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close language selector"
          >
            <span className="text-xl">×</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-200 ${
                selectedLanguage === lang.code
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              <span className="text-3xl">{lang.flag}</span>
              <span className="text-lg font-semibold">{lang.name}</span>
              {selectedLanguage === lang.code && <span className="ml-auto text-xl">✓</span>}
            </button>
          ))}
        </div>

        <div className="p-6 pt-0">
          <button
            onClick={handleApply}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply Language
          </button>
        </div>
      </div>
    </div>
  )
}
