"use client"

import { useEffect, useState } from "react"
import { AppLogo } from "./app-logo"
import { useTranslation } from "@/hooks/use-translation"

interface SplashScreenProps {
  onComplete: () => void
  selectedLang: string
}

export function SplashScreen({ onComplete, selectedLang }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useTranslation(selectedLang)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center z-50 opacity-0 transition-opacity duration-500" />
    )
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-center animate-pulse">
        <AppLogo size={120} showText={true} />
        <p className="text-white/80 text-base mt-2">{t.appSubtitle}</p>
        <p className="text-white/60 text-sm mt-1 italic">{t.byAuthor}</p>
        <div className="mt-8">
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
          </div>
          <p className="text-white/70 text-sm mt-4">{t.loading}</p>
        </div>
      </div>
    </div>
  )
}
