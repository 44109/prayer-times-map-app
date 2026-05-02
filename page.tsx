"use client"

import React, { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { MapComponent } from "@/components/map-component"
import { WelcomeMessage } from "@/components/welcome-message"
import { LoadingIndicator } from "@/components/loading-indicator"
import { SettingsPanel } from "@/components/settings-panel"
import { SplashScreen } from "@/components/splash-screen"
import { UserGuideDialog } from "@/components/user-guide-dialog"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/hooks/use-translation"

export default function AccuratePrayerTimesApp() {
  const [selectedLang, setSelectedLang] = useState("en")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [showSplash, setShowSplash] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [useAgreedTime, setUseAgreedTime] = useState(false)
  const [showUserGuide, setShowUserGuide] = useState(false)
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
const [prayerData, setPrayerData] = useState<any>(null)
  const { t } = useTranslation(selectedLang as any)

  // Set up global variables
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.useAgreedTime = useAgreedTime
      window.selectedLang = selectedLang
    }
  }, [useAgreedTime, selectedLang])

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 13000) // Extended to 13 seconds to match welcome message
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("dir", selectedLang === "ar" || selectedLang === "ur" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", selectedLang)
    document.documentElement.id = "htmlRoot"

    if (isDarkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [selectedLang, isDarkMode])

  // Global toggle functions
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.toggleSettingsPanel = () => {
        const astroPanel = document.getElementById("astronomicalSettingsPanel")
        const agreedPanel = document.getElementById("agreedSettingsPanel")

        if (useAgreedTime) {
          if (agreedPanel) {
            const isVisible = agreedPanel.style.display !== "none"
            agreedPanel.style.display = isVisible ? "none" : "block"
          }
          if (astroPanel) {
            astroPanel.style.display = "none"
          }
        } else {
          if (astroPanel) {
            const isVisible = astroPanel.style.display !== "none"
            astroPanel.style.display = isVisible ? "none" : "block"
          }
          if (agreedPanel) {
            agreedPanel.style.display = "none"
          }
        }
      }
    }
  }, [useAgreedTime])

  // Listen for custom events from the map controls
  useEffect(() => {
    const handleLanguageChange = (e: any) => {
      setSelectedLang(e.detail.lang)
    }

    const handleDarkModeToggle = () => {
      setIsDarkMode(!isDarkMode)
    }

    window.addEventListener("languageChange", handleLanguageChange)
    window.addEventListener("darkModeToggle", handleDarkModeToggle)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
      window.removeEventListener("darkModeToggle", handleDarkModeToggle)
    }
  }, [isDarkMode])

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} selectedLang={selectedLang} />
  }

  return (
    <div className="relative h-screen w-full">
      {/* Welcome Message */}
      {showWelcome && <WelcomeMessage message={t.welcomeMessage} />}

      {/* Loading Indicator */}
      <LoadingIndicator isVisible={isLoading} message={t.loading} />

      {/* User Guide Button in top right corner */}
      <div className="fixed top-20 right-4 z-[1000] flex flex-col gap-3">
        <button
          onClick={() => setShowUserGuide(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold text-sm"
          aria-label={t.userGuideButton}
        >
          <span className="text-lg">📖</span>
          <span>{t.userGuideButton}</span>
        </button>

        <button
          onClick={() => setShowLanguageSelector(true)}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold text-sm"
          aria-label={t.languageButton}
        >
          <span className="text-lg">🌍</span>
          <span>{t.languageButton}</span>
        </button>
      </div>

      {/* Map Component */}
      <MapComponent 
        onLoadingChange={setIsLoading} 
        selectedLang={selectedLang} 
        useAgreedTime={useAgreedTime}
      />
      {/* Settings Panels */}
      <SettingsPanel useAgreedTime={false} onModeChange={setUseAgreedTime} selectedLang={selectedLang} />
      <SettingsPanel useAgreedTime={true} onModeChange={setUseAgreedTime} selectedLang={selectedLang} />

      {/* User Guide Dialog */}
      <UserGuideDialog isOpen={showUserGuide} onClose={() => setShowUserGuide(false)} lang={selectedLang as any} />

      <LanguageSelector
        isOpen={showLanguageSelector}
        onClose={() => setShowLanguageSelector(false)}
        currentLanguage={selectedLang}
        onLanguageChange={setSelectedLang}
      />
    </div>
  )
}
