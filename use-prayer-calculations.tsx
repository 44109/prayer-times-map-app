"use client"

import { useCallback } from "react"
import { useTranslation } from "@/hooks/use-translation"

const GOOGLE_MAPS_API_KEY = "AIzaSyBJvmCNWOi3YMMLneoTH4zlRHoR5rHUVyE"

// Country methods mapping for Al-Adhan API
const countryMethods = {
  FR: 16, // UOIF (Union des Organisations Islamiques de France)
  DE: 6, // IGMG (Islamische Gemeinschaft Millî Görüş) for Germany
  GB: 17, // London Central Mosque
  TR: 13, // Diyanet İşleri Başkanlığı (Turkey)
  BE: 6, // Belgium often uses IGMG or MWL, IGMG is a good default
  NL: 16, // Netherlands often uses UOIF settings
  SE: 3, // Sweden often uses MWL
  IT: 16, // Italy often uses UOIF
  ES: 16, // Spain often uses UOIF
  CH: 16, // Switzerland often uses UOIF
  AT: 6, // Austria often uses IGMG/MWL
  SA: 4, // Umm Al-Qura University, Makkah
  EG: 5, // Egyptian General Authority of Survey
  PK: 1, // University of Islamic Sciences, Karachi
  US: 2, // Islamic Society of North America (ISNA)
  CA: 2, // ISNA for Canada as well
  AE: 8, // UAE/Dubai
  IR: 7, // Institute of Geophysics, University of Tehran
  KW: 9, // Kuwait
  QA: 10, // Qatar
  MY: 11, // JAKIM (Malaysia)
  SG: 12, // MUIS (Singapore)
  RU: 14, // Spiritual Administration of Muslims of Russia
  DZ: 18, // Algerian Ministry of Religious Affairs and Wakfs
  MA: 19, // Moroccan Ministry of Habous and Islamic Affairs
  TN: 20, // Tunisian Ministry of Religious Affairs
  ID: 21, // KEMENAG (Indonesian Ministry of Religious Affairs)
  BD: 22, // Islamic Foundation Bangladesh
  IN: 1, // Default to Karachi for India
  default: 3, // Muslim World League as a global default
}

declare global {
  interface Window {
    TZ: number
    fajrAngle: number
    ishaAngle: number
    lastClickedLatLng: any
    currentClockInterval: any
    countdownInterval: any
    prayerTimes: any
  }
}

export function usePrayerCalculations() {
  const { t } = useTranslation("en") // Default language

  const getRealTimezone = useCallback(async (lat: number, lng: number) => {
    const timestamp = Math.floor(Date.now() / 1000)

    if (!GOOGLE_MAPS_API_KEY) {
      console.warn("Google Maps API key is missing, using fallback timezone calculation")
      return {
        offset: Math.round(lng / 15),
        timeZoneId: null,
      }
    }

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${GOOGLE_MAPS_API_KEY}`,
      )
      const data = await response.json()

      if (data.status === "OK") {
        const offsetHours = (data.rawOffset + data.dstOffset) / 3600
        return {
          offset: Math.round(offsetHours * 2) / 2,
          timeZoneId: data.timeZoneId,
        }
      } else {
        console.warn("Google Maps Timezone API error:", data.status)
        return {
          offset: Math.round(lng / 15),
          timeZoneId: null,
        }
      }
    } catch (error) {
      console.warn("Timezone API request failed:", error)
      return {
        offset: Math.round(lng / 15),
        timeZoneId: null,
      }
    }
  }, [])

  const getLocationName = useCallback(async (lat: number, lng: number, lang: string) => {
    if (!GOOGLE_MAPS_API_KEY) {
      console.warn("Google Maps API key is missing, using fallback location name")
      return {
        name: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        geocodeResult: null,
      }
    }

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&language=${lang}&key=${GOOGLE_MAPS_API_KEY}`,
      )
      const data = await response.json()

      if (data.status === "OK" && data.results[0]) {
        return {
          name: data.results[0].formatted_address,
          geocodeResult: data.results[0],
        }
      } else {
        console.warn("Google Maps Geocoding API error:", data.status)
        return {
          name: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
          geocodeResult: null,
        }
      }
    } catch (error) {
      console.warn("Geocoding API request failed:", error)
      return {
        name: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        geocodeResult: null,
      }
    }
  }, [])

  const getElevation = useCallback(async (lat: number, lng: number) => {
    return new Promise<number>((resolve) => {
      if (!GOOGLE_MAPS_API_KEY || typeof window === "undefined" || !window.google || !window.google.maps) {
        console.warn("Google Maps Elevation Service not available, using default elevation")
        resolve(0)
        return
      }

      const elevator = new window.google.maps.ElevationService()
      elevator.getElevationForLocations(
        {
          locations: [{ lat, lng }],
        },
        (results: any, status: any) => {
          if (status === "OK" && results && results[0]) {
            resolve(Math.max(0, Math.round(results[0].elevation)))
          } else {
            console.warn("Google Maps Elevation Service error:", status)
            resolve(0)
          }
        },
      )
    })
  }, [])

  const formatDate = useCallback((date: Date, timeZoneId?: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: timeZoneId || undefined,
      }
      const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(date)
      const day = parts.find((p) => p.type === "day")?.value
      const month = parts.find((p) => p.type === "month")?.value
      const year = parts.find((p) => p.type === "year")?.value
      const weekday = parts.find((p) => p.type === "weekday")?.value
      return `${day}.${month}.${year} (${weekday})`
    } catch (e) {
      return "Invalid Date"
    }
  }, [])

  const getHijriDate = useCallback((date: Date, selectedLang: string) => {
    let locale = `en-TN-u-ca-islamic`
    if (selectedLang === "ar") locale = `ar-TN-u-ca-islamic`
    try {
      return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(date)
    } catch (e) {
      return "Hijri not supported"
    }
  }, [])

  // Math helper functions
  const sinDeg = (d: number) => Math.sin((d * Math.PI) / 180)
  const cosDeg = (d: number) => Math.cos((d * Math.PI) / 180)
  const acosDeg = (v: number) => (Math.acos(v) * 180) / Math.PI
  const atanDeg = (v: number) => (Math.atan(v) * 180) / Math.PI
  const tanDeg = (v: number) => Math.tan((v * Math.PI) / 180)

  const convertDecimalToTime = useCallback((decimalTime: number, selectedLang: string) => {
    if (isNaN(decimalTime) || decimalTime === null) return "****"

    let hours = Math.floor(decimalTime)
    const minutesDecimal = (decimalTime - hours) * 60
    let minutes = Math.round(minutesDecimal)

    if (minutes === 60) {
      minutes = 0
      hours += 1
    }

    const periodEn = hours >= 12 ? "PM" : "AM"
    const periodAr = hours >= 12 ? "م" : "ص"
    const adjustedHours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString()

    return selectedLang === "ar"
      ? `${adjustedHours}:${formattedMinutes} ${periodAr}`
      : `${adjustedHours}:${formattedMinutes} ${periodEn}`
  }, [])

  const formatApiTimeTo12Hour = useCallback((timeStr: string, selectedLang: string) => {
    if (!timeStr || typeof timeStr !== "string" || !timeStr.includes(":")) return "****"

    let [hours, minutes] = timeStr.split(":").map(Number)
    const periodEn = hours >= 12 ? "PM" : "AM"
    const periodAr = hours >= 12 ? "م" : "ص"
    hours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString()

    return selectedLang === "ar"
      ? `${hours}:${formattedMinutes} ${periodAr}`
      : `${hours}:${formattedMinutes} ${periodEn}`
  }, [])

  const calculateAstronomicalTimes = useCallback(
    (
      lat: number,
      lng: number,
      gmtOffset: number,
      elevation: number,
      selectedLang: string,
      fajrAngle = 18,
      ishaAngle = 18,
      asrMethod: "standard" | "hanafi" = "standard",
    ) => {
      const now = new Date()
      const dateDifference = (now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000

      const B = (360 / 365) * (dateDifference + 10 - 81)
      const E = 9.87 * sinDeg(2 * B) - 7.53 * cosDeg(B) - 1.5 * sinDeg(B)
      const DL = (lng - gmtOffset * 15) / 15
      const TR = 12 - E / 60 - DL
      const DEL = -23.45 * cosDeg((360 / 365) * (10 + dateDifference))
      const ALF = acosDeg(6370 / (6370 + elevation / 1000))

      const sinLat = sinDeg(lat)
      const cosLat = cosDeg(lat)
      const sinDel = sinDeg(DEL)
      const cosDel = cosDeg(DEL)

      // Fajr and Isha calculations
      const TI_fajr = acosDeg((sinDeg(-fajrAngle - ALF) - sinLat * sinDel) / (cosLat * cosDel))
      const TI_isha = acosDeg((sinDeg(-ishaAngle - ALF) - sinLat * sinDel) / (cosLat * cosDel))

      // Asr calculation
      const shadowFactor = asrMethod === "hanafi" ? 2 : 1
      const hasr = atanDeg(1 / (shadowFactor + Math.abs(tanDeg(lat - DEL))))
      const TIasr = acosDeg((sinDeg(hasr + ALF) - sinLat * sinDel) / (cosLat * cosDel))

      // Sunrise/Sunset calculation
      const TE1 = -(51 / 60) - ALF
      const TI1 = acosDeg((sinDeg(TE1) - sinLat * sinDel) / (cosLat * cosDel))

      return {
        fajr: convertDecimalToTime(TR - TI_fajr / 15, selectedLang),
        sunrise: convertDecimalToTime(TR - TI1 / 15, selectedLang),
        dhohr: convertDecimalToTime(TR, selectedLang),
        asr: convertDecimalToTime(TR + TIasr / 15, selectedLang),
        maghrib: convertDecimalToTime(TR + TI1 / 15, selectedLang),
        isha: convertDecimalToTime(TR + TI_isha / 15, selectedLang),
      }
    },
    [convertDecimalToTime],
  )

  const calculateAgreedTimes = useCallback(
    async (
      lat: number,
      lng: number,
      geocodeResult: any,
      selectedLang: string,
      methodId = "auto",
      asrMethod: "standard" | "hanafi" = "standard",
      fajrAngle = 18,
      ishaAngle = 17,
    ) => {
      let methodToUse = methodId
      let methodName = ""

      if (methodId === "auto") {
        const countryCode = geocodeResult?.address_components?.find((c: any) => c.types.includes("country"))?.short_name
        methodToUse = countryMethods[countryCode as keyof typeof countryMethods] || countryMethods["default"]
        // For auto mode, we'll get the method name from API response later
      } else {
        methodToUse = methodId
        // Get method name from our mapping
        const apiMethods = {
          "1": "University of Islamic Sciences, Karachi",
          "2": "Islamic Society of North America (ISNA)",
          "3": "Muslim World League",
          "4": "Umm Al-Qura University, Makkah",
          "5": "Egyptian General Authority of Survey",
          "6": "Islamische Gemeinschaft Millî Görüş (IGMG)",
          "7": "Institute of Geophysics, University of Tehran",
          "8": "Union Territory of Dubai",
          "9": "Kuwait",
          "10": "Qatar",
          "11": "Majlis Ugama Islam Singapura (MUIS), Singapore",
          "12": "Jabatan Kemajuan Islam Malaysia (JAKIM)",
          "13": "Diyanet İşleri Başkanlığı, Turkey",
          "14": "Spiritual Administration of Muslims of Russia",
          "16": "Union des Organisations Islamiques de France (UOIF)",
          "17": "London Central Mosque",
          "18": "Algerian Ministry of Religious Affairs and Wakfs",
          "19": "Moroccan Ministry of Habous and Islamic Affairs",
          "20": "Tunisian Ministry of Religious Affairs",
          "21": "KEMENAG (Indonesian Ministry of Religious Affairs)",
          "22": "Islamic Foundation Bangladesh",
          "99": "Custom",
        }
        methodName = apiMethods[methodToUse as keyof typeof apiMethods] || "Unknown Method"
      }

      const school = asrMethod === "hanafi" ? 1 : 0

      // ALWAYS include custom angles in the API URL - this is the key fix!
      const apiUrl = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=${methodToUse}&school=${school}&fajr=${fajrAngle}&isha=${ishaAngle}`

      console.log("API URL with custom angles:", apiUrl) // Debug log to verify angles are being sent

      try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        if (data.code !== 200) {
          throw new Error("Al-Adhan API failed")
        }

        const apiTimings = data.data.timings

        // If auto mode, use the method name from API response
        if (methodId === "auto") {
          methodName = data.data.meta.method.name
        }

        return {
          prayerTimes: {
            fajr: formatApiTimeTo12Hour(apiTimings.Fajr, selectedLang),
            sunrise: formatApiTimeTo12Hour(apiTimings.Sunrise, selectedLang),
            dhohr: formatApiTimeTo12Hour(apiTimings.Dhuhr, selectedLang),
            asr: formatApiTimeTo12Hour(apiTimings.Asr, selectedLang),
            maghrib: formatApiTimeTo12Hour(apiTimings.Maghrib, selectedLang),
            isha: formatApiTimeTo12Hour(apiTimings.Isha, selectedLang),
          },
          methodName: methodName,
          rawTimes: {
            fajr: apiTimings.Fajr,
            sunrise: apiTimings.Sunrise,
            dhohr: apiTimings.Dhuhr,
            asr: apiTimings.Asr,
            maghrib: apiTimings.Maghrib,
            isha: apiTimings.Isha,
          },
        }
      } catch (error) {
        throw new Error(`Failed to fetch prayer times: ${error}`)
      }
    },
    [formatApiTimeTo12Hour],
  )

  const calculatePrayerTimes = useCallback(
    async (lat: number, lng: number, useAgreedTime: boolean, selectedLang: string) => {
      try {
        // Get timezone and location info
        const [timezoneData, locationData, elevation] = await Promise.all([
          getRealTimezone(lat, lng),
          getLocationName(lat, lng, selectedLang),
          getElevation(lat, lng),
        ])

        const now = new Date()

        // Get settings from DOM or use defaults
        const timeZoneOption =
          document.querySelector('input[name="timeZone"]:checked')?.getAttribute("value") || "automatic"
        const gmtOffset = timeZoneOption === "manual" ? window.TZ || 0 : timezoneData.offset

        const result: any = {
          location: { lat, lng },
          method: useAgreedTime ? "agreed" : "astronomical",
          date: formatDate(now, timezoneData.timeZoneId),
          hijriDate: getHijriDate(now, selectedLang),
          locationName: locationData.name,
          timeZoneId: timezoneData.timeZoneId,
          elevation: useAgreedTime ? undefined : elevation,
        }

        if (useAgreedTime) {
          const selectedMethodId = (document.getElementById("methodSelect") as HTMLSelectElement)?.value || "auto"
          const agreedAsrMethod =
            document.querySelector('input[name="agreedAsrTime"]:checked')?.getAttribute("value") || "standard"

          // Get the current angle values from the input fields (user can modify these)
          const agreedFajrAngle =
            Number.parseFloat((document.getElementById("agreedFajrAngle") as HTMLInputElement)?.value) || 18
          const agreedIshaAngle =
            Number.parseFloat((document.getElementById("agreedIshaAngle") as HTMLInputElement)?.value) || 17

          const agreedResult = await calculateAgreedTimes(
            lat,
            lng,
            locationData.geocodeResult,
            selectedLang,
            selectedMethodId,
            agreedAsrMethod as "standard" | "hanafi",
            agreedFajrAngle,
            agreedIshaAngle,
          )

          result.prayerTimes = agreedResult.rawTimes // Store raw times for countdown
          result.displayTimes = agreedResult.prayerTimes // Store formatted times for display
          result.methodName = agreedResult.methodName
        } else {
          const fajrIshaOption =
            document.querySelector('input[name="fajrIsha"]:checked')?.getAttribute("value") || "automatic"
          const fajrAngle = fajrIshaOption === "manual" ? window.fajrAngle || 18 : 18
          const ishaAngle = fajrIshaOption === "manual" ? window.ishaAngle || 18 : 18
          const asrOption = document.querySelector('input[name="asrTime"]:checked')?.getAttribute("value") || "standard"

          const times = calculateAstronomicalTimes(
            lat,
            lng,
            gmtOffset,
            elevation,
            selectedLang,
            fajrAngle,
            ishaAngle,
            asrOption as "standard" | "hanafi",
          )

          result.prayerTimes = times
          result.displayTimes = times // For astronomical, raw and display are the same
        }

        // Store last clicked location globally
        if (typeof window !== "undefined") {
          window.lastClickedLatLng = { lat, lng }
        }

        return result
      } catch (error) {
        console.error("Error calculating prayer times:", error)
        throw error
      }
    },
    [
      getRealTimezone,
      getLocationName,
      getElevation,
      formatDate,
      getHijriDate,
      calculateAstronomicalTimes,
      calculateAgreedTimes,
    ],
  )

  const parsePrayerTime = useCallback((timeStr: string, selectedLang: string) => {
    if (!timeStr || timeStr === "****") return null
    const now = new Date()
    let hours: number, minutes: number

    if (timeStr.includes(":") && !timeStr.includes(" ")) {
      ;[hours, minutes] = timeStr.split(":").map(Number)
    } else {
      const isPM = selectedLang === "ar" ? timeStr.includes("م") : /PM/i.test(timeStr)
      const timePart = timeStr.split(" ")[0]
      ;[hours, minutes] = timePart.split(":").map(Number)
      if (isPM && hours < 12) hours += 12
      if (!isPM && hours === 12) hours = 0
    }

    const prayerDate = new Date(now)
    prayerDate.setHours(hours, minutes, 0, 0)
    if (prayerDate < now) {
      prayerDate.setDate(prayerDate.getDate() + 1)
    }
    return prayerDate
  }, [])

  const calculateTimeRemaining = useCallback(
    (prayerTimes: any, selectedLang: string) => {
      const now = new Date()
      const prayers = ["fajr", "sunrise", "dhohr", "asr", "maghrib", "isha"]
      let nextPrayer = null
      let minDiff = Number.POSITIVE_INFINITY

      for (const prayer of prayers) {
        const prayerTime = parsePrayerTime(prayerTimes[prayer], selectedLang)
        if (!prayerTime) continue
        const diff = prayerTime.getTime() - now.getTime()
        if (diff > 0 && diff < minDiff) {
          minDiff = diff
          nextPrayer = prayer
        }
      }

      if (!nextPrayer) {
        const fajrTime = parsePrayerTime(prayerTimes.fajr, selectedLang)
        if (fajrTime) {
          nextPrayer = "fajr"
          minDiff = fajrTime.getTime() - now.getTime()
        } else {
          return null
        }
      }

      const hours = Math.floor(minDiff / 3600000)
      const minutes = Math.floor((minDiff % 3600000) / 60000)
      const seconds = Math.floor((minDiff % 60000) / 1000)
      return { prayer: nextPrayer, hours, minutes, seconds }
    },
    [parsePrayerTime],
  )

  const updateCountdown = useCallback(
    (selectedLang: string) => {
      if (!window.prayerTimes || Object.keys(window.prayerTimes).length === 0) return
      const remaining = calculateTimeRemaining(window.prayerTimes, selectedLang)
      if (!remaining) return

      // Clear all existing countdowns
      document.querySelectorAll(".countdown").forEach((el) => {
        el.innerHTML = ""
        if (el.parentElement) el.parentElement.classList.remove("next-prayer")
      })

      const nextPrayerElement = document.querySelector(`[data-prayer="${remaining.prayer}"]`)
      if (nextPrayerElement) {
        const countdownText =
          selectedLang === "ar"
            ? `<span class="next-prayer">${t.nextPrayer}: ${t.remaining} ${remaining.seconds} ${t.seconds} ${remaining.minutes} ${t.minutes} ${remaining.hours} ${t.hours}</span>`
            : `<span class="next-prayer">${t.nextPrayer}: ${remaining.hours} ${t.hours} ${remaining.minutes} ${t.minutes} ${remaining.seconds} ${t.seconds} ${t.remaining}</span>`

        nextPrayerElement.innerHTML = countdownText
        if (nextPrayerElement.parentElement) {
          nextPrayerElement.parentElement.classList.add("next-prayer")
        }
      }
    },
    [calculateTimeRemaining, t],
  )

  const startClocksAndTimers = useCallback(
    (timeZoneId: string, selectedLang: string) => {
      if (window.currentClockInterval) clearInterval(window.currentClockInterval)
      window.currentClockInterval = setInterval(() => {
        const clockElement = document.getElementById("liveClock")
        if (clockElement && timeZoneId) {
          clockElement.textContent = new Date().toLocaleTimeString(selectedLang === "ar" ? "ar-EG" : selectedLang, {
            timeZone: timeZoneId,
          })
        } else {
          if (window.currentClockInterval) clearInterval(window.currentClockInterval)
        }
      }, 1000)

      updateCountdown(selectedLang)
      if (window.countdownInterval) clearInterval(window.countdownInterval)
      window.countdownInterval = setInterval(() => updateCountdown(selectedLang), 1000)
    },
    [updateCountdown],
  )

  return { calculatePrayerTimes, startClocksAndTimers }
}
