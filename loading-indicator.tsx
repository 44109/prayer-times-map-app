"use client"

interface LoadingIndicatorProps {
  isVisible: boolean
  message: string
}

export function LoadingIndicator({ isVisible, message }: LoadingIndicatorProps) {
  if (!isVisible) return null

  return (
    <div id="loadingIndicator" data-i18n="loading" className="islamic-pattern">
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
          <span className="text-lg font-semibold">{message}</span>
        </div>
      </div>
    </div>
  )
}
