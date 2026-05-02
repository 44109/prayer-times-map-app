"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    initMap: () => void
  }
}

export function useGoogleMaps() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const apiKey = "AIzaSyBJvmCNWOi3YMMLneoTH4zlRHoR5rHUVyE"

    if (!apiKey) {
      setError(
        "Google Maps API key is missing. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.",
      )
      return
    }

    if (apiKey === "your_api_key" || apiKey === "YOUR_API_KEY" || apiKey.length < 10) {
      setError(
        "Please replace the placeholder API key with your actual Google Maps API key in your environment variables.",
      )
      return
    }

    if (typeof window !== "undefined" && !window.google) {
      window.initMap = () => {
        setIsLoaded(true)
      }

      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=geometry,places,visualization&v=3.55`
      script.async = true
      script.defer = true

      script.onerror = () => {
        setError(
          "Failed to load Google Maps. Please check your API key and ensure the required APIs are enabled in Google Cloud Console.",
        )
      }

      document.head.appendChild(script)
    } else if (window.google) {
      setIsLoaded(true)
    }
  }, [])

  return { isLoaded, error }
}
