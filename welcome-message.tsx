"use client"

import { useEffect, useState } from "react"

interface WelcomeMessageProps {
  message: string
}

export function WelcomeMessage({ message }: WelcomeMessageProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 12000) // Extended to 12 seconds as requested

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "linear-gradient(135deg, rgba(52, 168, 83, 0.95), rgba(15, 157, 88, 0.95))",
        color: "white",
        padding: "15px 25px",
        borderRadius: "30px",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0 10px 30px rgba(52, 168, 83, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        animation: "slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1), fadeOut 0.6s ease-in 11.4s forwards",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(15px)",
        textAlign: "center",
        maxWidth: "90vw",
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>🕌</span>
        <span>{message}</span>
        <span style={{ fontSize: "20px" }}>📍</span>
      </div>
    </div>
  )
}
