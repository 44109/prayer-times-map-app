"use client"

import { useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"

interface SettingsPanelProps {
  useAgreedTime: boolean
  onModeChange: (useAgreed: boolean) => void
  selectedLang: string
}

const apiMethods = {
  auto: "Auto-detect by Country",
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

const angleDefaults = {
  "1": { fajr: 18, isha: 18 },
  "2": { fajr: 15, isha: 15 },
  "3": { fajr: 18, isha: 17 },
  "4": { fajr: 18.5, isha: 90 },
  "5": { fajr: 19.5, isha: 17.5 },
  "6": { fajr: 12, isha: 12 },
  "7": { fajr: 17.7, isha: 14 },
  "8": { fajr: 18.2, isha: 18.2 },
  "9": { fajr: 18, isha: 17 },
  "10": { fajr: 18, isha: 17 },
  "11": { fajr: 20, isha: 18 },
  "12": { fajr: 20, isha: 18 },
  "13": { fajr: 18, isha: 17 },
  "14": { fajr: 16, isha: 15 },
  "16": { fajr: 12, isha: 12 },
  "17": { fajr: 18, isha: 17 },
  "18": { fajr: 18, isha: 17 },
  "19": { fajr: 19, isha: 17 },
  "20": { fajr: 18, isha: 18 },
  "21": { fajr: 20, isha: 18 },
  "22": { fajr: 18, isha: 18 },
}

const asrDefaults = {
  "1": "hanafi", // Karachi uses Hanafi
  "2": "standard", // ISNA uses Standard
  "3": "standard", // MWL uses Standard
  "4": "standard", // Umm al-Qura uses Standard
  "5": "standard", // Egypt uses Standard
  "6": "standard", // IGMG uses Standard
  "7": "standard", // Tehran uses Standard
  "8": "standard", // Dubai uses Standard
  "9": "standard", // Kuwait uses Standard
  "10": "standard", // Qatar uses Standard
  "11": "standard", // Singapore uses Standard
  "12": "standard", // Malaysia uses Standard
  "13": "standard", // Turkey uses Standard
  "14": "standard", // Russia uses Standard
  "16": "standard", // France uses Standard
  "17": "standard", // London uses Standard
  "18": "standard", // Algeria uses Standard
  "19": "standard", // Morocco uses Standard
  "20": "standard", // Tunisia uses Standard
  "21": "standard", // Indonesia uses Standard
  "22": "hanafi", // Bangladesh uses Hanafi
}

export function SettingsPanel({ useAgreedTime, onModeChange, selectedLang }: SettingsPanelProps) {
  const { t } = useTranslation(selectedLang)

  useEffect(() => {
    const setupEventListeners = () => {
      const applyAstro = document.getElementById("applyAstronomicalSettingsButton")
      const applyAgreed = document.getElementById("applyAgreedSettingsButton")
      const switchModeBtn = document.getElementById("switchModeButton")
      const switchModeBtnAgreed = document.getElementById("switchModeButtonAgreed")
      const methodSelect = document.getElementById("methodSelect") as HTMLSelectElement

      // Function to trigger immediate recalculation
      const triggerRecalculation = () => {
        if (window.lastClickedLatLng && window.currentMapInstance) {
          setTimeout(() => {
            const syntheticEvent = {
              latLng: {
                lat: window.lastClickedLatLng.lat,
                lng: window.lastClickedLatLng.lng,
              },
            }
            window.google.maps.event.trigger(window.currentMapInstance, "click", syntheticEvent)
          }, 100)
        }
      }

      // Function to update input states like in the original HTML
      const updateInputStates = () => {
        const timeZoneOption = document.querySelector('input[name="timeZone"]:checked')?.getAttribute("value")
        const fajrIshaOption = document.querySelector('input[name="fajrIsha"]:checked')?.getAttribute("value")

        const gmtOffsetInput = document.getElementById("gmtOffset") as HTMLInputElement
        const fajrAngleInput = document.getElementById("fajrAngle") as HTMLInputElement
        const ishaAngleInput = document.getElementById("ishaAngle") as HTMLInputElement

        if (gmtOffsetInput) {
          gmtOffsetInput.disabled = timeZoneOption === "automatic"
        }

        if (fajrAngleInput && ishaAngleInput) {
          const isAutomatic = fajrIshaOption === "automatic"
          fajrAngleInput.disabled = isAutomatic
          ishaAngleInput.disabled = isAutomatic

          // Update global variables like in the original
          if (typeof window !== "undefined") {
            window.fajrAngle = isAutomatic ? 18 : Number.parseFloat(fajrAngleInput.value) || 18
            window.ishaAngle = isAutomatic ? 18 : Number.parseFloat(ishaAngleInput.value) || 18
          }
        }
      }

      // Attach radio listeners like in the original HTML
      const attachRadioListeners = () => {
        document.querySelectorAll('input[name="timeZone"]').forEach((radio) => {
          radio.addEventListener("change", () => {
            updateInputStates()
            triggerRecalculation()
          })
        })

        document.querySelectorAll('input[name="fajrIsha"]').forEach((radio) => {
          radio.addEventListener("change", () => {
            updateInputStates()
            triggerRecalculation()
          })
        })

        document.querySelectorAll('input[name="asrTime"]').forEach((radio) => {
          radio.addEventListener("change", triggerRecalculation)
        })
      }

      if (applyAstro) {
        applyAstro.onclick = () => {
          const gmtOffset = Number.parseFloat((document.getElementById("gmtOffset") as HTMLInputElement).value)
          const timeZoneOption = (document.querySelector('input[name="timeZone"]:checked') as HTMLInputElement).value

          if (typeof window !== "undefined") {
            window.TZ = timeZoneOption === "manual" && !isNaN(gmtOffset) ? gmtOffset : 0
          }

          updateInputStates()
          document.getElementById("astronomicalSettingsPanel")!.style.display = "none"
          triggerRecalculation()
        }
      }

      if (applyAgreed) {
        applyAgreed.onclick = () => {
          document.getElementById("agreedSettingsPanel")!.style.display = "none"
          triggerRecalculation()
        }
      }

      if (switchModeBtn) {
        switchModeBtn.onclick = () => {
          window.useAgreedTime = true
          onModeChange(true)
          document.getElementById("astronomicalSettingsPanel")!.style.display = "none"
          document.getElementById("agreedSettingsPanel")!.style.display = "block"
        }
      }

      if (switchModeBtnAgreed) {
        switchModeBtnAgreed.onclick = () => {
          window.useAgreedTime = false
          onModeChange(false)
          document.getElementById("agreedSettingsPanel")!.style.display = "none"
          document.getElementById("astronomicalSettingsPanel")!.style.display = "block"
        }
      }

      if (methodSelect) {
        methodSelect.onchange = () => {
          const selected = methodSelect.value
          const fajrInput = document.getElementById("agreedFajrAngle") as HTMLInputElement
          const ishaInput = document.getElementById("agreedIshaAngle") as HTMLInputElement
          const standardRadio = document.getElementById("agreedAsrStandard") as HTMLInputElement
          const hanafiRadio = document.getElementById("agreedAsrHanafi") as HTMLInputElement

          if (angleDefaults[selected as keyof typeof angleDefaults]) {
            fajrInput.value = angleDefaults[selected as keyof typeof angleDefaults].fajr.toString()
            ishaInput.value = angleDefaults[selected as keyof typeof angleDefaults].isha.toString()
          }

          if (asrDefaults[selected as keyof typeof asrDefaults]) {
            const asrMethod = asrDefaults[selected as keyof typeof asrDefaults]
            if (asrMethod === "standard") {
              standardRadio.checked = true
            } else {
              hanafiRadio.checked = true
            }
          }

          triggerRecalculation()
        }
      }

      // Add immediate recalculation for angle inputs when they change
      const fajrAngleInput = document.getElementById("fajrAngle") as HTMLInputElement
      const ishaAngleInput = document.getElementById("ishaAngle") as HTMLInputElement

      if (fajrAngleInput) {
        fajrAngleInput.addEventListener("input", () => {
          if (typeof window !== "undefined") {
            window.fajrAngle = Number.parseFloat(fajrAngleInput.value) || 18
          }
          triggerRecalculation()
        })
      }

      if (ishaAngleInput) {
        ishaAngleInput.addEventListener("input", () => {
          if (typeof window !== "undefined") {
            window.ishaAngle = Number.parseFloat(ishaAngleInput.value) || 18
          }
          triggerRecalculation()
        })
      }

      // Add listeners for agreed time angle inputs
      const agreedFajrInput = document.getElementById("agreedFajrAngle") as HTMLInputElement
      const agreedIshaInput = document.getElementById("agreedIshaAngle") as HTMLInputElement

      if (agreedFajrInput) {
        agreedFajrInput.addEventListener("input", triggerRecalculation)
      }

      if (agreedIshaInput) {
        agreedIshaInput.addEventListener("input", triggerRecalculation)
      }

      // Initialize states and attach listeners
      updateInputStates()
      attachRadioListeners()
    }

    const populateMethodDropdown = () => {
      const select = document.getElementById("methodSelect") as HTMLSelectElement
      if (select && select.children.length === 0) {
        select.innerHTML = ""
        for (const key in apiMethods) {
          const option = document.createElement("option")
          option.value = key
          option.textContent = apiMethods[key as keyof typeof apiMethods]
          select.appendChild(option)
        }
        select.value = "auto"
      }
    }

    setTimeout(() => {
      populateMethodDropdown()
      setupEventListeners()
    }, 100)
  }, [onModeChange])

  useEffect(() => {
    const handleLanguageChange = () => {
      const panels = document.querySelectorAll(".settings-panel")
      panels.forEach((panel) => {
        if (panel && panel.style.display !== "none") {
          panel.classList.add("language-updating")
          setTimeout(() => {
            panel.classList.remove("language-updating")
          }, 100)
        }
      })
    }

    window.addEventListener("languageChange", handleLanguageChange)
    return () => window.removeEventListener("languageChange", handleLanguageChange)
  }, [selectedLang])

  if (useAgreedTime) {
    return (
      <div className="settings-panel islamic-pattern" id="agreedSettingsPanel" style={{ display: "none" }}>
        <div className="relative z-10">
          <button
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full cursor-pointer transition-colors z-50"
            onClick={() => {
              const panel = document.getElementById("agreedSettingsPanel")
              if (panel) panel.style.display = "none"
            }}
            aria-label="Close settings"
          >
            ✖
          </button>

          <div className="flex items-center justify-center mb-6 pr-10">
            <h3 className="text-xl font-bold text-center">{t.adoptedPrayerTimeSettings}</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="methodSelect" className="block mb-3 font-bold text-gray-700">
                {t.calculationMethod}:
              </label>
              <select
                id="methodSelect"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  appearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              ></select>
            </div>

            <div className="border-t-2 border-gray-200 pt-6">
              <h3 className="font-bold mb-4" data-i18n="angleTitle">
                {t.angleTitle}
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <span className="text-lg">🌅</span>
                  <span data-i18n="fajr" className="font-medium">
                    {t.fajr}:
                  </span>
                  <input
                    type="text"
                    defaultValue={18}
                    className="w-20 px-2 py-1 bg-gray-100 border border-gray-300 rounded cursor-not-allowed"
                    id="agreedFajrAngle"
                    readOnly
                  />
                  <span className="text-sm text-gray-500">{t.degrees}</span>
                </label>
                <label className="flex items-center space-x-3">
                  <span className="text-lg">🌙</span>
                  <span data-i18n="isha" className="font-medium">
                    {t.isha}:
                  </span>
                  <input
                    type="text"
                    defaultValue={17}
                    className="w-20 px-2 py-1 bg-gray-100 border border-gray-300 rounded cursor-not-allowed"
                    id="agreedIshaAngle"
                    readOnly
                  />
                  <span className="text-sm text-gray-500">{t.degrees}</span>
                </label>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 pt-6">
              <h3 className="font-bold mb-4" data-i18n="asrTitle">
                {t.asrTitle}
              </h3>
              <div className="space-y-3 opacity-75">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="agreedAsrTime"
                    value="standard"
                    id="agreedAsrStandard"
                    defaultChecked
                    disabled
                  />
                  <span data-i18n="standard" className="font-medium">
                    {t.standard}
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="agreedAsrTime" value="hanafi" id="agreedAsrHanafi" disabled />
                  <span data-i18n="hanafi" className="font-medium">
                    {t.hanafi}
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button className="apply-settings-button" data-i18n="apply" id="applyAgreedSettingsButton">
                <span className="flex items-center justify-center space-x-2">
                  <span>✅</span>
                  <span>{t.apply}</span>
                </span>
              </button>

              <button className="switch-mode-button" id="switchModeButtonAgreed">
                <span className="flex items-center justify-center space-x-2">
                  <span>{t.switchToPrayerTimes}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="settings-panel islamic-pattern" id="astronomicalSettingsPanel" style={{ display: "none" }}>
      <div className="relative z-10">
        <div
          className="close-btn-fixed"
          onClick={() => {
            const panel = document.getElementById("astronomicalSettingsPanel")
            if (panel) panel.style.display = "none"
          }}
        >
          ✖
        </div>

        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-2xl">🔭</span>
          <h3 className="text-xl font-bold">{t.prayerTimeSettings}</h3>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4 flex items-center space-x-2" data-i18n="settingsTitle">
              <span className="text-lg">🌍</span>
              <span>{t.settingsTitle}</span>
            </h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="radio" name="timeZone" value="automatic" defaultChecked />
                <span data-i18n="automatic" className="font-medium">
                  {t.automatic}
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="timeZone" value="manual" />
                <span data-i18n="manual" className="font-medium">
                  {t.manual}
                </span>
                <span>GMT ±</span>
                <input type="number" min="-12" max="12" defaultValue={0} className="w-16 px-2 py-1" id="gmtOffset" />
              </label>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="font-bold mb-4 flex items-center space-x-2" data-i18n="angleTitle">
              <span>{t.angleTitle}</span>
            </h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="radio" name="fajrIsha" value="automatic" defaultChecked />
                <span data-i18n="automatic" className="font-medium">
                  {t.automatic}
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="fajrIsha" value="manual" />
                <span data-i18n="manual" className="font-medium">
                  {t.manual}
                </span>
              </label>
              <div className="ml-8 space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🌅</span>
                  <span data-i18n="fajr" className="font-medium">
                    {t.fajr}:
                  </span>
                  <input
                    type="number"
                    min="12"
                    max="20"
                    step="0.5"
                    defaultValue={18}
                    className="w-16 px-2 py-1"
                    id="fajrAngle"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🌙</span>
                  <span data-i18n="isha" className="font-medium">
                    {t.isha}:
                  </span>
                  <input
                    type="number"
                    min="12"
                    max="20"
                    step="0.5"
                    defaultValue={18}
                    className="w-16 px-2 py-1"
                    id="ishaAngle"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="font-bold mb-4 flex items-center space-x-2" data-i18n="asrTitle">
              <span>{t.asrTitle}</span>
            </h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="radio" name="asrTime" value="standard" defaultChecked />
                <span data-i18n="standard" className="font-medium">
                  {t.standard}
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="asrTime" value="hanafi" />
                <span data-i18n="hanafi" className="font-medium">
                  {t.hanafi}
                </span>
              </label>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <button className="apply-settings-button" data-i18n="apply" id="applyAstronomicalSettingsButton">
              <span className="flex items-center justify-center space-x-2">
                <span>✅</span>
                <span>{t.apply}</span>
              </span>
            </button>

            <button className="switch-mode-button" id="switchModeButton">
              <span className="flex items-center justify-center space-x-2">
                <span>{t.switchToAdoptedPrayerTimes}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
