"use client"

import { useTranslation } from "@/hooks/use-translation"

interface UserGuideDialogProps {
  isOpen: boolean
  onClose: () => void
  lang: string
}

export function UserGuideDialog({ isOpen, onClose, lang }: UserGuideDialogProps) {
  const { t } = useTranslation(lang as any)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">{t.userGuideTitle}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close user guide"
          >
            <span className="text-xl">×</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* How to Use */}
          <section>
            <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">📖</span>
              {t.howToUse}
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">1️⃣</span>
                <div>
                  <strong>{t.step1Title}</strong> {t.step1Desc}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">2️⃣</span>
                <div>
                  <strong>{t.step2Title}</strong> {t.step2Desc}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">3️⃣</span>
                <div>
                  <strong>{t.step3Title}</strong> {t.step3Desc}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">4️⃣</span>
                <div>
                  <strong>{t.step4Title}</strong> {t.step4Desc}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">5️⃣</span>
                <div>
                  <strong>{t.step5Title}</strong> {t.step5Desc}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">6️⃣</span>
                <div>
                  <strong>{t.step6Title}</strong> {t.step6Desc}
                </div>
              </div>
            </div>
          </section>

          {/* Calculation Methods */}
          <section className="border-t pt-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔢</span>
              {t.calculationMethods}
            </h3>
            <p className="text-gray-700 mb-3">{t.calculationMethodsIntro}</p>
            <div className="space-y-3 text-gray-700">
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-indigo-700">{t.mwlMethod}</strong>
                <div className="text-sm mt-1">{t.mwlDesc}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-indigo-700">{t.isnaMethod}</strong>
                <div className="text-sm mt-1">{t.isnaDesc}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-indigo-700">{t.egyptMethod}</strong>
                <div className="text-sm mt-1">{t.egyptDesc}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-indigo-700">{t.ummAlQuraMethod}</strong>
                <div className="text-sm mt-1">{t.ummAlQuraDesc}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-indigo-700">{t.karachiMethod}</strong>
                <div className="text-sm mt-1">{t.karachiDesc}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-indigo-700">{t.tehranMethod}</strong>
                <div className="text-sm mt-1">{t.tehranDesc}</div>
              </div>
            </div>
          </section>

          <section className="border-t pt-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🧮</span>
              {t.calculationEquations}
            </h3>
            <p className="text-gray-700 mb-3">{t.calculationEquationsIntro}</p>
            <div className="space-y-3 text-gray-700">
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-800">{t.equation1}</strong>
                <div className="text-sm mt-1 font-mono bg-white p-2 rounded border border-amber-300">
                  {t.equation1Formula}
                </div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <strong className="text-orange-800">{t.equation2}</strong>
                <div className="text-sm mt-1 font-mono bg-white p-2 rounded border border-orange-300">
                  {t.equation2Formula}
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <strong className="text-blue-800">{t.equation3}</strong>
                <div className="text-sm mt-1 font-mono bg-white p-2 rounded border border-blue-300">
                  {t.equation3Formula}
                </div>
              </div>
              <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-200">
                <strong className="text-cyan-800">{t.equation4}</strong>
                <div className="text-sm mt-1 font-mono bg-white p-2 rounded border border-cyan-300">
                  {t.equation4Formula}
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <strong className="text-green-800">{t.equation5}</strong>
                <div className="text-sm mt-1 font-mono bg-white p-2 rounded border border-green-300">
                  {t.equation5Formula}
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <strong className="text-purple-800">{t.equation6}</strong>
                <div className="text-sm mt-1 font-mono bg-white p-2 rounded border border-purple-300">
                  {t.equation6Formula}
                </div>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                <strong className="text-indigo-800">{t.equation7}</strong>
                <div className="text-sm mt-1 font-mono bg-white p-2 rounded border border-indigo-300">
                  {t.equation7Formula}
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-xs italic">
                {t.equationVariables}
              </div>
            </div>
          </section>

          {/* Asr Calculation */}
          <section className="border-t pt-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">☀️</span>
              {t.asrCalculation}
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="bg-blue-50 p-3 rounded-lg">
                <strong className="text-blue-700">{t.standardAsrTitle}</strong>
                <div className="text-sm mt-1">{t.standardAsrDesc}</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <strong className="text-blue-700">{t.hanafiAsrTitle}</strong>
                <div className="text-sm mt-1">{t.hanafiAsrDesc}</div>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="border-t pt-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              {t.tips}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span>•</span>
                <span>{t.tip1}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{t.tip2}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{t.tip3}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{t.tip4}</span>
              </li>
            </ul>
          </section>

          <section className="border-t pt-6">
            <div className="text-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <p className="text-sm text-indigo-900 font-semibold">{t.developerCredit}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
