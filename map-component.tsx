"use client"

import { useEffect, useRef, useState } from "react"
import { LocateFixed } from "lucide-react"
import { useGoogleMaps } from "@/hooks/use-google-maps"
import { usePrayerCalculations } from "@/hooks/use-prayer-calculations"
import { useTranslation } from "@/hooks/use-translation"

declare global {
  interface Window {
    google: any
    currentMapInstance: any
    useAgreedTime: boolean
    selectedLang: string
    lastClickedLatLng: any
    qiblaArrow: any
    userCircle: any
  }
}

interface MapComponentProps {
  onLoadingChange: (loading: boolean) => void
  selectedLang: string
  useAgreedTime: boolean
}

export function MapComponent({ onLoadingChange, selectedLang, useAgreedTime }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const infoWindowRef = useRef<any>(null)
  const userMarker = useRef<any>(null)
  const countdownInterval = useRef<any>(null)

  const [map, setMap] = useState<any>(null)
  const { isLoaded, error } = useGoogleMaps()
  const { calculatePrayerTimes, startClocksAndTimers } = usePrayerCalculations()
  const { t } = useTranslation(selectedLang as any)
  const tRef = useRef(t)
const selectedLangRef = useRef(selectedLang)

useEffect(() => {
  tRef.current = t
  selectedLangRef.current = selectedLang
  window.selectedLang = selectedLang
  window.useAgreedTime = useAgreedTime
}, [t, selectedLang, useAgreedTime])

  const prayerOrder = ["fajr", "sunrise", "dhohr", "asr", "maghrib", "isha"]

  useEffect(() => {
    window.selectedLang = selectedLang
    window.useAgreedTime = useAgreedTime
  }, [selectedLang, useAgreedTime])

  const parseTime = (timeText: string) => {
    const now = new Date()
    let clean = String(timeText || "").replace(/<[^>]*>/g, "").trim()

    const isPM = clean.toUpperCase().includes("PM") || clean.includes("م")
    const isAM = clean.toUpperCase().includes("AM") || clean.includes("ص")

    clean = clean.replace(/AM|PM|ص|م/gi, "").trim()

    let [hours, minutes] = clean.split(":").map(Number)

    if (isPM && hours < 12) hours += 12
    if (isAM && hours === 12) hours = 0

    const d = new Date(now)
    d.setHours(hours, minutes, 0, 0)

    if (d.getTime() < now.getTime()) d.setDate(d.getDate() + 1)

    return d
  }

  const formatLeft = (ms: number) => {
  const total = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60

  const mm = String(m).padStart(2, "0")
  const ss = String(s).padStart(2, "0")

  return `${h}h ${mm}m ${ss}s`
}

  const startPopupCountdown = (result: any) => {
    if (countdownInterval.current) clearInterval(countdownInterval.current)

    const update = () => {
      const now = new Date()
      let nextPrayer = "fajr"
      let minDiff = Infinity

      prayerOrder.forEach((key) => {
        const timeValue = result.displayTimes?.[key] || result.prayerTimes?.[key]
        if (!timeValue) return

        const diff = parseTime(timeValue).getTime() - now.getTime()

        if (diff > 0 && diff < minDiff) {
          minDiff = diff
          nextPrayer = key
        }
      })

      prayerOrder.forEach((key) => {
        const card = document.getElementById(`prayer-card-${key}`)
        const countdown = document.getElementById(`countdown-${key}`)

        if (card) {
          card.style.background = "linear-gradient(135deg,#1e3a8a,#3b82f6)"
          card.style.border = "3px solid #3b82f6"
        }

        if (countdown) countdown.innerHTML = ""
      })

      const activeCard = document.getElementById(`prayer-card-${nextPrayer}`)
      const activeCountdown = document.getElementById(`countdown-${nextPrayer}`)

      if (activeCard) {
        activeCard.style.background = "linear-gradient(135deg,#064e3b,#16a34a)"
        activeCard.style.border = "3px solid #22c55e"
      }

      if (activeCountdown) {
  const lang = selectedLangRef.current

const timeLeftText =
  lang === "ar"
    ? "الوقت المتبقي"
    : lang === "tr"
      ? "Kalan süre"
      : lang === "de"
        ? "Verbleibende Zeit"
        : lang === "fr"
          ? "Temps restant"
          : "Time left"

activeCountdown.innerHTML = `${timeLeftText}: ${formatLeft(minDiff)}`  }
    }

    update()
    countdownInterval.current = setInterval(update, 1000)
  }

  const prayerCard = (result: any, key: string, label: string) => {
    const timeValue = result.displayTimes?.[key] || result.prayerTimes?.[key]

    return `
      <div id="prayer-card-${key}" style="
        background:linear-gradient(135deg,#1e3a8a,#3b82f6);
        margin-bottom:8px;
        padding:10px 12px;
        border-radius:10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:3px solid #3b82f6;
        box-shadow:0 4px 8px rgba(59,130,246,0.4);
      ">
        <div>
          <div style="font-weight:bold; font-size:16px; color:white;">${label}</div>
          <div id="countdown-${key}" style="font-size:11px; color:#bbf7d0; font-weight:bold; margin-top:3px;"></div>
        </div>

        <div style="font-size:18px; font-weight:bold; color:#fbbf24;">
          ${String(timeValue).replace(/([AP]M)/, '<span style="font-size:11px;">$1</span>')}
        </div>
      </div>
    `
  }

const buildPopup = (result: any, lat: number, lng: number) => {
  const tt = tRef.current

  return `
  <div style="
      background:linear-gradient(135deg,rgba(0,0,0,.96),rgba(30,30,30,.98));
      color:white;
      border-radius:15px;
      padding:15px;
      width:360px;
      max-height:620px;
      overflow-y:auto;
      box-shadow:0 20px 40px rgba(0,0,0,.8);
      position:relative;
    ">
      <button id="closeInfoButton" style="
        position:absolute;
        top:8px;
        right:8px;
        width:32px;
        height:32px;
        background:#ef4444;
        border:2px solid white;
        border-radius:50%;
        color:white;
        font-size:20px;
        font-weight:bold;
        cursor:pointer;
      ">×</button>

      <h3 style="
        border:4px solid ${result.method === "agreed" ? "#34a853" : "#ea4335"};
        padding:8px;
        margin:0 0 15px 0;
        text-align:center;
        border-radius:10px;
        background:rgba(0,0,0,.5);
        font-size:18px;
      ">
        🕌 ${t.popupTitle}
      </h3>

      <div style="background:rgba(0,0,0,.4); padding:12px; border-radius:10px; border:4px solid #3b82f6; margin-bottom:12px;">
        <h4 style="text-align:center; color:#3b82f6; margin:0 0 12px 0; font-size:17px;">
          🕌 ${t.prayerTimes}
        </h4>

        ${prayerCard(result, "fajr", tt.fajr)}
${prayerCard(result, "sunrise", tt.sunrise)}
${prayerCard(result, "dhohr", tt.dhohr)}
${prayerCard(result, "asr", tt.asr)}
${prayerCard(result, "maghrib", tt.maghrib)}
${prayerCard(result, "isha", tt.isha)}
      </div>

      <div style="background:rgba(0,0,0,.4); padding:10px; border-radius:10px; border:3px solid white;">
        <h4 style="text-align:center; margin:0 0 10px 0;">📍 ${t.locationInfo}</h4>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
          <div style="background:#7c3aed; padding:7px; border-radius:6px; border:2px solid white;">
            <div style="font-size:10px;">${t.latitude}</div>
            <div style="font-size:11px; color:#fbbf24; font-weight:bold;">${lat.toFixed(5)}</div>
          </div>

          <div style="background:#7c3aed; padding:7px; border-radius:6px; border:2px solid white;">
            <div style="font-size:10px;">${t.longitude}</div>
            <div style="font-size:11px; color:#fbbf24; font-weight:bold;">${lng.toFixed(5)}</div>
          </div>

          <div style="background:#7c3aed; padding:7px; border-radius:6px; border:2px solid white;">
            <div style="font-size:10px;">${t.elevation}</div>
            <div style="font-size:11px; color:#fbbf24; font-weight:bold;">${result.elevation ?? 0}m</div>
          </div>

          <div style="background:#7c3aed; padding:7px; border-radius:6px; border:2px solid white;">
            <div style="font-size:10px;">${t.timeZone}</div>
            <div style="font-size:11px; color:#fbbf24; font-weight:bold;">${result.timeZoneId?.split("/")[1] || "Unknown"}</div>
          </div>

          <div style="grid-column:1/-1; background:#7c3aed; padding:7px; border-radius:6px; border:2px solid white;">
            <div style="font-size:10px;">${t.localTime}</div>
            <div id="liveClock" style="font-size:16px; color:#fbbf24; font-weight:bold;">${new Date().toLocaleTimeString()}</div>
          </div>

          <div style="grid-column:1/-1; background:#7c3aed; padding:7px; border-radius:6px; border:2px solid white;">
            <div style="font-size:10px;">${t.Address}</div>
            <div style="font-size:11px; color:#fbbf24; font-weight:bold;">${result.locationName}</div>
          </div>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:8px; margin-top:12px;">
        <button id="findButton" style="background:#fbbf24; color:black; border:none; padding:10px; border-radius:8px; cursor:pointer; font-weight:bold;">
          🧭 ${t.findQiblaButton}
        </button>

        <button id="settingsButton" style="background:#fbbf24; color:black; border:none; padding:10px; border-radius:8px; cursor:pointer; font-weight:bold;">
          ⚙️ ${t.settingsButton}
        </button>
      </div>
    </div>
  `
}

  const getQiblaBearing = (lat: number, lng: number) => {
    const makkahLat = 21.4225 * (Math.PI / 180)
    const makkahLng = 39.8262 * (Math.PI / 180)
    const userLat = lat * (Math.PI / 180)
    const userLng = lng * (Math.PI / 180)
    const deltaLng = makkahLng - userLng
    const y = Math.sin(deltaLng)
    const x = Math.cos(userLat) * Math.tan(makkahLat) - Math.sin(userLat) * Math.cos(deltaLng)
    return (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360
  }

  const toggleQiblaArrow = (lat: number, lng: number) => {
    if (window.qiblaArrow) {
      window.qiblaArrow.setMap(null)
      window.qiblaArrow = null
      return
    }

    const bearing = getQiblaBearing(lat, lng)
    const distance = 0.02
    const rad = bearing * (Math.PI / 180)

    const endLat = lat + distance * Math.cos(rad)
    const endLng = lng + (distance * Math.sin(rad)) / Math.cos(lat * (Math.PI / 180))

    window.qiblaArrow = new window.google.maps.Polyline({
      path: [{ lat, lng }, { lat: endLat, lng: endLng }],
      geodesic: true,
      strokeColor: "#60a5fa",
      strokeOpacity: 1,
      strokeWeight: 4,
      icons: [{
        icon: {
          path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          scale: 4,
          strokeColor: "#60a5fa",
          fillColor: "#60a5fa",
          fillOpacity: 1,
        },
        offset: "100%",
      }],
      map: mapInstance.current,
    })
  }

  const openPrayerPopup = async (lat: number, lng: number, position: any) => {
    try {
      onLoadingChange(true)

      const result = await calculatePrayerTimes(lat, lng, window.useAgreedTime || useAgreedTime, window.selectedLang || selectedLang)

      const infoWindow = infoWindowRef.current
      infoWindow.setContent(buildPopup(result, lat, lng))
      infoWindow.setPosition(position)
      infoWindow.open(mapInstance.current)

      window.lastClickedLatLng = { lat, lng }

      setTimeout(() => {
        startPopupCountdown(result)
        startClocksAndTimers(result.timeZoneId, selectedLang)

        document.getElementById("closeInfoButton")?.addEventListener("click", () => infoWindow.close())
        document.getElementById("findButton")?.addEventListener("click", () => toggleQiblaArrow(lat, lng))
        document.getElementById("settingsButton")?.addEventListener("click", () => (window as any).toggleSettingsPanel?.())
      }, 300)
    } catch (e) {
      console.error(e)
    } finally {
      onLoadingChange(false)
    }
  }
useEffect(() => {
  if (!mapInstance.current || !infoWindowRef.current || !window.lastClickedLatLng) return

  const lat = window.lastClickedLatLng.lat
  const lng = window.lastClickedLatLng.lng

  openPrayerPopup(lat, lng, { lat, lng })
}, [selectedLang, useAgreedTime])
  useEffect(() => {
    if (!isLoaded || !mapRef.current || map || !window.google) return

    const googleMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: 39.9334, lng: 32.8597 },
      zoom: 14,
      mapTypeId: "satellite",
      gestureHandling: "greedy",
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true,
mapTypeControl: false,
    })

    mapInstance.current = googleMap
    window.currentMapInstance = googleMap
    setMap(googleMap)

    infoWindowRef.current = new window.google.maps.InfoWindow({
      maxWidth: 420,
      pixelOffset: new window.google.maps.Size(0, -10),
    })

    googleMap.addListener("click", (event: any) => {
      if (!event.latLng) return
      const lat = event.latLng.lat()
      const lng = event.latLng.lng()
      openPrayerPopup(lat, lng, event.latLng)
    })

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude
        const lng = pos.coords.longitude

        googleMap.setCenter({ lat, lng })
        googleMap.setZoom(20)
googleMap.setZoom(15) // زوم أولي

setTimeout(() => {
  googleMap.setZoom(20) // يكبّر بعد شوي
}, 1000) 
        userMarker.current = new window.google.maps.Marker({
          position: { lat, lng },
          map: googleMap,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 9,
            fillColor: "#1a73e8",
            fillOpacity: 1,
            strokeColor: "#fff",
            strokeWeight: 3,
          },
        })
      })
    }
  }, [isLoaded, map])

  const goToMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude

      mapInstance.current?.setCenter({ lat, lng })
mapInstance.current?.setZoom(15) // أول شي زوم عادي

setTimeout(() => {
  mapInstance.current?.setZoom(20) // بعد شوي يكبّر
}, 1000)
      if (userMarker.current) userMarker.current.setMap(null)

      userMarker.current = new window.google.maps.Marker({
        position: { lat, lng },
        map: mapInstance.current,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 9,
          fillColor: "#1a73e8",
          fillOpacity: 1,
          strokeColor: "#fff",
          strokeWeight: 3,
        },
      })
    })
  }

  return (
    <>
    
      <button
        onClick={goToMyLocation}
        style={{
          position: "absolute",
          bottom: "90px",
          right: "20px",
          zIndex: 9999,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "none",
background: "#6d28d9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,.3)",
        }}
      >
        <LocateFixed size={22} color="white" />
      </button>
<div style={{
  position: "absolute",
  top: "20px",
  left: "20px",
  zIndex: 9999
}}>
  <div style={{
    display: "flex",
    background: "black",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
  }}>
    
    <button
      onClick={() => mapInstance.current?.setMapTypeId("roadmap")}
      style={{
        padding: "8px 14px",
        color: "white",
        background: "#111",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      Map
    </button>

    <button
      onClick={() => mapInstance.current?.setMapTypeId("satellite")}
      style={{
        padding: "8px 14px",
        color: "white",
        background: "#111",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      Satellite
    </button>

  </div>
</div>
      <div className="relative h-full w-full">
        <div ref={mapRef} className="h-full w-full" id="map" />

        {error && (
          <div className="absolute inset-0 bg-black text-white flex items-center justify-center z-50">
            Google Maps API Error
          </div>
        )}

        {!isLoaded && !error && (
          <div className="absolute inset-0 bg-black text-white flex items-center justify-center z-50">
            Loading Map...
          </div>
        )}
      </div>
    </>
  )
}