"use client"

interface AppLogoProps {
  size?: number
  showText?: boolean
}

export function AppLogo({ size = 64, showText = true }: AppLogoProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div 
        className="relative rounded-2xl shadow-lg"
        style={{
          width: size,
          height: size,
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-2xl mb-1">🕌</div>
          <div className="text-xs font-bold tracking-wider">PRAYER</div>
          <div className="text-xs font-bold tracking-wider">TIME</div>
        </div>
      </div>
      {showText && (
        <div className="text-center">
          <h1 className="text-lg font-bold text-white">Accurate Prayer Times</h1>
          <p className="text-sm text-gray-300">Precise Islamic Prayer Schedule</p>
        </div>
      )}
    </div>
  )
}
