"use client"

interface DarkModeToggleProps {
  isDarkMode: boolean
  onToggle: () => void
}

export function DarkModeToggle({ isDarkMode, onToggle }: DarkModeToggleProps) {
  return (
    <button id="darkModeToggle" onClick={onToggle} className="relative overflow-hidden group">
      <span className="relative z-10 flex items-center space-x-2">
        <span className="text-lg">{isDarkMode ? "☀️" : "🌙"}</span>
        <span className="font-semibold">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  )
}
