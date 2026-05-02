"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/use-translation"

interface PrayerTimesPopupProps {
  data: any
  selectedLang: "en" | "ar" | "tr" | "ur" | "hi" | "de" | "fr"
  onShowSettings: () => void
  onShowInfo: () => void
}

const prayers = [
  { key: "fajr", label: "fajr" },
  { key: "sunrise", label: "sunrise" },
  { key: "dhohr", label: "dhohr" },
  { key: "asr", label: "asr" },
  { key: "maghrib", label: "maghrib" },
  { key: "isha", label: "isha" },
]

function parsePrayerTime(timeStr: string, timeZoneId: string) {
  if (!timeStr) return null

  const now = new Date()
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timeZoneId,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now)

  const year = Number(parts.find((p) => p.type === "year")?.value)
  const month = Number(parts.find((p) => p.type === "month")?.value)
  const day = Number(parts.find((p) => p.type === "day")?.value)

  let clean = timeStr.replace(/[^\d:APMapmصم]/g, "").trim()

  let isPM = /PM|م/i.test(clean)
  let isAM = /AM|ص/i.test(clean)

  clean = clean.replace(/AM|PM|ص|م/gi, "").trim()

  let [hours, minutes] = clean.split(":").map(Number)

  if (isPM && hours < 12) hours += 12
  if (isAM && hours === 12) hours = 0

  const prayerDate = new Date(year, month - 1, day, hours, minutes, 0)

  return prayerDate
}

function formatRemaining(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return `${hours}h ${minutes}m ${seconds}s`
}

export function PrayerTimesPopup({ data, selectedLang, onShowSettings, onShowInfo }: PrayerTimesPopupProps) {
  const { t } = useTranslation(selectedLang)
  const [currentTime, setCurrentTime] = useState("")
  const [nextPrayer, setNextPrayer] = useState("")
  const [remaining, setRemaining] = useState("")

  useEffect(() => {
    const updateClock = () => {
      if (data.timeZoneId) {
        const now = new Date()

        const timeString = now.toLocaleTimeString(selectedLang === "ar" ? "ar-EG" : selectedLang, {
          timeZone: data.timeZoneId,
        })

        setCurrentTime(timeString)

        let nearestPrayer = ""
        let nearestDiff = Infinity

        prayers.forEach((prayer) => {
          const prayerDate = parsePrayerTime(data.prayerTimes[prayer.key], data.timeZoneId)

          if (!prayerDate) return

          let diff = prayerDate.getTime() - now.getTime()

          if (diff < 0) {
            diff += 24 * 60 * 60 * 1000
          }

          if (diff < nearestDiff) {
            nearestDiff = diff
            nearestPrayer = prayer.key
          }
        })

        setNextPrayer(nearestPrayer)
        setRemaining(formatRemaining(nearestDiff))
      }
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [data.timeZoneId, data.prayerTimes, selectedLang])

  const isAgreed = data.method === "agreed"

  return (
    <div className="bg-white border-[14px] border-gray-300 p-2.5 z-[2] min-w-[300px]">
      <h3
        className={`border-4 ${
          isAgreed ? "border-green-500" : "border-red-500"
        } text-black p-1 m-0.5 text-center text-sm font-bold`}
      >
        {t.popupTitle} ({isAgreed ? "Agreed" : "Astronomical"})
      </h3>

      <div className="text-xs mb-2">
        <p>
          <b>{t.latitude}:</b> <span className="text-blue-600">{data.location.lat.toFixed(5)}</span>
        </p>
        <p>
          <b>{t.longitude}:</b> <span className="text-blue-600">{data.location.lng.toFixed(5)}</span>
        </p>
        <p>
          <b>{t.date}:</b> <span className="text-blue-600">{data.date}</span>
        </p>
        <p>
          <b>🕒 {t.localTime}:</b> <span className="text-blue-600">{currentTime}</span>
        </p>
        <p>
          <b>📍 Location:</b> <span className="text-blue-600">{data.locationName}</span>
        </p>
      </div>

      <hr className="border-2 border-black my-2" />

      <div className="text-xs space-y-1">
        {prayers.map((prayer) => (
          <p
            key={prayer.key}
            className={`flex justify-between items-center rounded px-2 py-1 ${
              nextPrayer === prayer.key ? "bg-green-100 border border-green-500" : ""
            }`}
          >
            <span>
              <b>{t[prayer.label as keyof typeof t]}:</b>{" "}
              <span className="text-blue-600">{data.prayerTimes[prayer.key]}</span>
            </span>

            {nextPrayer === prayer.key && (
              <span className="text-green-700 font-bold text-[11px] ml-2">
                ⏳ {remaining}
              </span>
            )}
          </p>
        ))}
      </div>

      <div className="mt-2 space-y-1">
        <button onClick={onShowInfo} className="w-full bg-black text-white px-2 py-1 rounded text-xs cursor-pointer">
          <b>Info</b>
        </button>

        <button
          onClick={onShowSettings}
          className="w-full bg-red-800 text-white px-2 py-1 rounded text-xs cursor-pointer"
        >
          <b>Settings</b>
        </button>
      </div>
    </div>
  )
}