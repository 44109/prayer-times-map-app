"use client"

import { useEffect, useState } from "react"

function toArabicNumbers(str: string) {
  return str.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d])
}

const translations = {
  en: {
    next: "Next",
    time: "Time Left",
  },
  ar: {
    next: "الصلاة القادمة",
    time: "الوقت المتبقي",
  },
  tr: {
    next: "Sonraki",
    time: "Kalan Süre",
  },
  ur: {
    next: "اگلی نماز",
    time: "باقی وقت",
  },
  hi: {
    next: "अगली नमाज़",
    time: "शेष समय",
  },
  de: {
    next: "Nächste",
    time: "Verbleibende Zeit",
  },
}

const prayerNames = {
  en: {
    fajr: "Fajr",
    dhohr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
  },
  ar: {
    fajr: "الفجر",
    dhohr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
  },
  tr: {
    fajr: "İmsak",
    dhohr: "Öğle",
    asr: "İkindi",
    maghrib: "Akşam",
    isha: "Yatsı",
  },
  ur: {
    fajr: "فجر",
    dhohr: "ظہر",
    asr: "عصر",
    maghrib: "مغرب",
    isha: "عشاء",
  },
  hi: {
    fajr: "फ़ज्र",
    dhohr: "ज़ुहर",
    asr: "असर",
    maghrib: "मगरिब",
    isha: "इशा",
  },
  de: {
    fajr: "Fajr",
    dhohr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
  },
}

function getNextPrayer(prayerTimes: any) {
  if (!prayerTimes) return null

  const now = new Date()

  const prayers = [
    { id: "fajr", time: prayerTimes.fajr },
    { id: "dhohr", time: prayerTimes.dhohr },
    { id: "asr", time: prayerTimes.asr },
    { id: "maghrib", time: prayerTimes.maghrib },
    { id: "isha", time: prayerTimes.isha },
  ].filter((p) => p.time)

  for (const p of prayers) {
    const clean = String(p.time).trim()

    // يحذف AM / PM إذا موجودة
    let normalized = clean.trim()

let isPM = normalized.toLowerCase().includes("pm")

normalized = normalized.replace(/\s?(AM|PM)/i, "")

let [h, m] = normalized.split(":").map(Number)

if (isPM && h < 12) h += 12
if (!isPM && h === 12) h = 0

  

    if (Number.isNaN(h) || Number.isNaN(m)) continue

    const prayerDate = new Date()
    prayerDate.setHours(h, m, 0, 0)

    if (prayerDate > now) {
      return { ...p, date: prayerDate }
    }
  }

  const first = prayers[0]
  if (!first) return null

  const normalized = String(first.time).trim().replace(/\s?(AM|PM)/i, "")
  const [h, m] = normalized.split(":").map(Number)

  const nextDay = new Date()
  nextDay.setDate(nextDay.getDate() + 1)
  nextDay.setHours(h, m, 0, 0)

  return { ...first, date: nextDay }
}

export default function NextPrayerCountdown({
  selectedLang,
}: {
  selectedLang: string
}) {
  const [timeLeft, setTimeLeft] = useState("")
  const [nextPrayer, setNextPrayer] = useState("")
  const [livePrayerTimes, setLivePrayerTimes] = useState<any>(null)

  const t =
    translations[selectedLang as keyof typeof translations] || translations.en

  useEffect(() => {
    const interval = setInterval(() => {
      const times = typeof window !== "undefined" ? (window as any).prayerTimes : null

      if (!times) return

      setLivePrayerTimes(times)

      const next = getNextPrayer(times)
      if (!next) return

      const now = new Date()
      const diff = next.date.getTime() - now.getTime()

      const h = Math.floor(diff / (1000 * 60 * 60))
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft(`${h}h ${m}m ${s}s`)
      setNextPrayer(next.id)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!livePrayerTimes) return null

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999999,
        background: "rgba(48, 26, 148, 0.9)",
        padding: "20px",
        borderRadius: "15px",
        color: "white",
        fontSize: "18px",
        textAlign: "center",
        minWidth: "220px",
      }}
    >
      <div>
        {t.next}:{" "}
        {prayerNames[selectedLang as keyof typeof prayerNames]?.[
          nextPrayer as keyof (typeof prayerNames)["en"]
        ] || nextPrayer}
      </div>

      <div>
        {t.time}:{" "}
        {selectedLang === "ar" ? toArabicNumbers(timeLeft) : timeLeft}
      </div>
    </div>
  )
}