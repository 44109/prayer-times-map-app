export const translations = {
  en: {
    // App
    appTitle: "Accurate Prayer Times",
    appSubtitle: "Precise Islamic Prayer Schedule",
    welcomeMessage: "Please touch the screen to see prayer times",
    loading: "Loading prayer times...",
    byAuthor: "",
    

    // Prayer Names
    fajr: "Fajr",
    sunrise: "Sunrise",
    dhohr: "Dhohr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    prayerTimes: "Prayer Times",

    // Location Info
    locationInfo: "Location Information",
    latitude: "Latitude",
    longitude: "Longitude",
    elevation: "Elevation",
    timeZone: "Time Zone",
    hijri: "Hijri",
    date: "Date",
    localTime: "Local Time",
    Address: "Address",

    // Popup
    popupTitle: "Prayer Times",
    localPrayerTimes: "Local Prayer Times",
    method: "Method",

    // Buttons
    settingsButton: "Settings",
    userGuideButton: "User Guide",
    languageButton: "Language",
    findQiblaButton: "Find Qibla",

    // User Guide
    userGuideTitle: "User Guide",
    howToUse: "How to Use the Prayer Times App",
    step1Title: "Allow Location Access:",
    step1Desc:
      'When you open the app, click "Allow" when your browser asks for location permission. This will show accurate prayer times for your exact location.',
    step2Title: "Click on the Map:",
    step2Desc:
      "Touch or click anywhere on the map to see prayer times for that specific location. An info window will appear with all prayer times.",
    step3Title: "View Prayer Times:",
    step3Desc:
      "The info window shows all five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) plus Sunrise time. Prayer times are displayed at the top in yellow text.",
    step4Title: "Check Location Information:",
    step4Desc:
      "Below the prayer times, you'll find detailed location data including coordinates, elevation, timezone, Hijri date, and address.",
    step5Title: "Customize Settings:",
    step5Desc:
      "Click the yellow Settings button to adjust calculation methods, Fajr/Isha angles, and Asr time preferences.",
    step6Title: "Switch to Local Times:",
    step6Desc:
      'Use the green "Switch To Local Prayer Times" button to view prayer times based on local mosque schedules instead of astronomical calculations.',

    calculationMethods: "Calculation Methods",
    calculationMethodsIntro:
      "This app uses internationally recognized calculation methods to determine accurate prayer times based on astronomical calculations:",
    mwlMethod: "Muslim World League (MWL)",
    mwlDesc: "Fajr: 18°, Isha: 17° | Used widely across Europe and parts of the Middle East",
    isnaMethod: "Islamic Society of North America (ISNA)",
    isnaDesc: "Fajr: 15°, Isha: 15° | Standard for North America",
    egyptMethod: "Egyptian General Authority of Survey",
    egyptDesc: "Fajr: 19.5°, Isha: 17.5° | Used in Egypt and nearby regions",
    ummAlQuraMethod: "Umm al-Qura University (Makkah)",
    ummAlQuraDesc: "Fajr: 18.5°, Isha: 90 min after Maghrib | Official method for Saudi Arabia",
    karachiMethod: "University of Islamic Sciences, Karachi",
    karachiDesc: "Fajr: 18°, Isha: 18° | Uses Hanafi Asr calculation | Standard for Pakistan and Bangladesh",
    tehranMethod: "Institute of Geophysics, University of Tehran",
    tehranDesc: "Fajr: 17.7°, Isha: 14° | Used in Iran and some Shia communities",

    asrCalculation: "Asr Time Calculation",
    standardAsrTitle: "Standard (Shafi'i, Maliki, Hanbali)",
    standardAsrDesc: "Asr begins when the shadow of an object equals its length plus the shadow at noon.",
    hanafiAsrTitle: "Hanafi",
    hanafiAsrDesc:
      "Asr begins when the shadow of an object equals twice its length plus the shadow at noon. This results in a later Asr time.",

    tips: "Tips",
    tip1: "For most accurate results, allow browser location access instead of relying on IP-based detection",
    tip2: "The calculation method is auto-detected based on your country, but you can change it in Settings",
    tip3: "Fajr and Isha angles are automatically set based on your chosen calculation method",
    tip4: "All times are displayed in 12-hour format (AM/PM) and adjusted for your local timezone",

    calculationEquations: "Mathematical Equations",
    calculationEquationsIntro: "The following astronomical equations are used to calculate prayer times:",
    equation1: "Solar Equation of Time",
    equation1Formula: "E = 9.87 × sin(2B) - 7.53 × cos(B) - 1.5 × sin(B)",
    equation2: "Sun Declination Angle",
    equation2Formula: "δ = -23.45° × cos(360/365 × (dayOfYear + 10))",
    equation3: "Fajr Time",
    equation3Formula: "T(Fajr) = 12 - (1/15) × arccos[(sin(-α - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation4: "Sunrise & Maghrib",
    equation4Formula: "T = 12 ± (1/15) × arccos[(sin(-0.85° - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation5: "Dhuhr Time",
    equation5Formula: "T(Dhuhr) = 12 - E/60 - (λ - GMT×15)/15",
    equation6: "Asr Time",
    equation6Formula: "h(Asr) = arctan[1 / (shadowFactor + |tan(φ - δ)|)]",
    equation7: "Isha Time",
    equation7Formula: "T(Isha) = 12 + (1/15) × arccos[(sin(-β - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equationVariables:
      "Where: α = Fajr angle, β = Isha angle, φ = latitude, δ = sun declination, λ = longitude, ALF = altitude correction, shadowFactor = 1 (standard) or 2 (Hanafi)",

    developerCredit: "",

    // Settings
    adoptedPrayerTimeSettings: "Adopted Prayer Time Settings",
    prayerTimeSettings: "Prayer Time Settings",
    calculationMethod: "Calculation Method",
    angleForFajr: "Angle for Fajr and Isha Times",
    angleTitle: "Angle for Fajr and Isha Times",
    asrTime: "Asr time",
    asrTitle: "Asr time",
    standard: "Standard",
    hanafi: "Hanafi",
    apply: "Apply",
    switchToPrayerTimes: "Switch To Local Prayer Times",
    switchToAdoptedPrayerTimes: "Switch To Adopted Prayer Times",
    settingsTitle: "Time Zone Settings",
    automatic: "Automatic",
    manual: "Manual",
    degrees: "degrees",

    // Language Selector
    selectLanguage: "Select Language",
    english: "English",
    arabic: "Arabic",
    turkish: "Turkish",
    urdu: "Urdu",
    hindi: "Hindi",
    german: "German",
    french: "French",

    // Location Messages
    showingTimezone: "Showing {location} based on your timezone",
    showingIP: "Showing approximate location based on IP (may not be exact)",
  },
  ar: {
    // App
    appTitle: "أوقات صلاة دقيقة",
    appSubtitle: "جدول الصلاة الإسلامي الدقيق",
    welcomeMessage: "الرجاء لمس الشاشة لرؤية أوقات الصلاة",
    loading: "جاري تحميل أوقات الصلاة...",
    byAuthor: "",

    // Prayer Names
    fajr: "الفجر",
    sunrise: "الشروق",
    dhohr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
    prayerTimes: "أوقات الصلاة",

    // Location Info
    locationInfo: "معلومات الموقع",
    latitude: "خط العرض",
    longitude: "خط الطول",
    elevation: "الارتفاع",
    timeZone: "المنطقة الزمنية",
    hijri: "هجري",
    date: "التاريخ",
    localTime: "الوقت المحلي",
    Address: "العنوان",

    // Popup
    popupTitle: "أوقات الصلاة",
    localPrayerTimes: "أوقات الصلاة المحلية",
    method: "الطريقة",

    // Buttons
    settingsButton: "الإعدادات",
    userGuideButton: "دليل المستخدم",
    languageButton: "اللغة",
    findQiblaButton: "تحديد القبلة",

    // User Guide
    userGuideTitle: "دليل المستخدم",
    howToUse: "كيفية استخدام تطبيق أوقات الصلاة",
    step1Title: "السماح بالوصول إلى الموقع:",
    step1Desc:
      'عند فتح التطبيق، انقر على "السماح" عندما يطلب المتصفح إذن الموقع. سيعرض هذا أوقات الصلاة الدقيقة لموقعك بالضبط.',
    step2Title: "انقر على الخريطة:",
    step2Desc:
      "المس أو انقر في أي مكان على الخريطة لرؤية أوقات الصلاة لذلك الموقع المحدد. ستظهر نافذة معلومات تحتوي على جميع أوقات الصلاة.",
    step3Title: "عرض أوقات الصلاة:",
    step3Desc:
      "تعرض نافذة المعلومات جميع الصلوات الخمس اليومية (الفجر والظهر والعصر والمغرب والعشاء) بالإضافة إلى وقت الشروق. يتم عرض أوقات الصلاة في الأعلى بنص أصفر.",
    step4Title: "التحقق من معلومات الموقع:",
    step4Desc:
      "أسفل أوقات الصلاة، ستجد بيانات الموقع التفصيلية بما في ذلك الإحداثيات والارتفاع والمنطقة الزمنية والتاريخ الهجري والعنوان.",
    step5Title: "تخصيص الإعدادات:",
    step5Desc: "انقر على زر الإعدادات الأصفر لضبط طرق الحساب وزوايا الفجر والعشاء وتفضيلات وقت العصر.",
    step6Title: "التبديل إلى الأوقات المحلية:",
    step6Desc:
      'استخدم الزر الأخضر "التبديل إلى أوقات الصلاة المحلية" لعرض أوقات الصلاة بناءً على جداول المساجد المحلية بدلاً من الحسابات الفلكية.',

    calculationMethods: "طرق الحساب",
    calculationMethodsIntro:
      "يستخدم هذا التطبيق طرق حساب معترف بها دوليًا لتحديد أوقات الصلاة الدقيقة بناءً على الحسابات الفلكية:",
    mwlMethod: "رابطة العالم الإسلامي",
    mwlDesc: "الفجر: 18°، العشاء: 17° | تستخدم على نطاق واسع في أوروبا وأجزاء من الشرق الأوسط",
    isnaMethod: "الجمعية الإسلامية لأمريكا الشمالية",
    isnaDesc: "الفجر: 15°، العشاء: 15° | معيار لأمريكا الشمالية",
    egyptMethod: "الهيئة المصرية العامة للمساحة",
    egyptDesc: "الفجر: 19.5°، العشاء: 17.5° | تستخدم في مصر والمناطق المجاورة",
    ummAlQuraMethod: "جامعة أم القرى (مكة)",
    ummAlQuraDesc: "الفجر: 18.5°، العشاء: 90 دقيقة بعد المغرب | الطريقة الرسمية للمملكة العربية السعودية",
    karachiMethod: "جامعة العلوم الإسلامية، كراتشي",
    karachiDesc: "الفجر: 18°، العشاء: 18° | يستخدم حساب العصر الحنفي | معيار لباكستان وبنغلاديش",
    tehranMethod: "معهد الجيوفيزياء، جامعة طهران",
    tehranDesc: "الفجر: 17.7°، العشاء: 14° | تستخدم في إيران وبعض المجتمعات الشيعية",

    asrCalculation: "حساب وقت العصر",
    standardAsrTitle: "القياسي (الشافعي، المالكي، الحنبلي)",
    standardAsrDesc: "يبدأ العصر عندما يساوي ظل الجسم طوله بالإضافة إلى ظل الظهر.",
    hanafiAsrTitle: "الحنفي",
    hanafiAsrDesc: "يبدأ العصر عندما يساوي ظل الجسم ضعف طوله بالإضافة إلى ظل الظهر. ينتج عن هذا وقت عصر متأخر.",

    tips: "نصائح",
    tip1: "للحصول على نتائج أكثر دقة، اسمح بالوصول إلى الموقع في المتصفح بدلاً من الاعتماد على الكشف المستند إلى IP",
    tip2: "يتم اكتشاف طريقة الحساب تلقائيًا بناءً على بلدك، ولكن يمكنك تغييرها في الإعدادات",
    tip3: "يتم تعيين زوايا الفجر والعشاء تلقائيًا بناءً على طريقة الحساب المختارة",
    tip4: "يتم عرض جميع الأوقات بتنسيق 12 ساعة (صباحًا/مساءً) ومعدلة حسب منطقتك الزمنية المحلية",

    calculationEquations: "المعادلات الرياضية",
    calculationEquationsIntro: "تُستخدم المعادلات الفلكية التالية لحساب أوقات الصلاة:",
    equation1: "معادلة وقت الشمس",
    equation1Formula: "E = 9.87 × sin(2B) - 7.53 × cos(B) - 1.5 × sin(B)",
    equation2: "زاوية ميل الشمس",
    equation2Formula: "δ = -23.45° × cos(360/365 × (dayOfYear + 10))",
    equation3: "وقت الفجر",
    equation3Formula: "T(Fajr) = 12 - (1/15) × arccos[(sin(-α - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation4: "الشروق والمغرب",
    equation4Formula: "T = 12 ± (1/15) × arccos[(sin(-0.85° - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation5: "وقت الظهر",
    equation5Formula: "T(Dhuhr) = 12 - E/60 - (λ - GMT×15)/15",
    equation6: "وقت العصر",
    equation6Formula: "h(Asr) = arctan[1 / (shadowFactor + |tan(φ - δ)|)]",
    equation7: "وقت العشاء",
    equation7Formula: "T(Isha) = 12 + (1/15) × arccos[(sin(-β - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equationVariables:
      "حيث: α = زاوية الفجر، β = زاوية العشاء، φ = خط العرض، δ = ميل الشمس، λ = خط الطول، ALF = تصحيح الارتفاع، shadowFactor = 1 (قياسي) أو 2 (حنفي)",

    developerCredit: " ",

    // Settings
    adoptedPrayerTimeSettings: "إعدادات أوقات الصلاة المعتمدة",
    prayerTimeSettings: "إعدادات أوقات الصلاة",
    calculationMethod: "طريقة الحساب",
    angleForFajr: "زاوية الفجر والعشاء",
    angleTitle: "زاوية الفجر والعشاء",
    asrTime: "وقت العصر",
    asrTitle: "وقت العصر",
    standard: "القياسي",
    hanafi: "الحنفي",
    apply: "تطبيق",
    switchToPrayerTimes: "التبديل إلى أوقات الصلاة المحلية",
    switchToAdoptedPrayerTimes: "التبديل إلى أوقات الصلاة المعتمدة",
    settingsTitle: "إعدادات المنطقة الزمنية",
    automatic: "تلقائي",
    manual: "يدوي",
    degrees: "درجات",

    // Language Selector
    selectLanguage: "اختر اللغة",
    english: "الإنجليزية",
    arabic: "العربية",
    turkish: "التركية",
    urdu: "الأردية",
    hindi: "الهندية",
    german: "الألمانية",
    french: "الفرنسية",

    // Location Messages
    showingTimezone: "عرض {location} بناءً على منطقتك الزمنية",
    showingIP: "عرض الموقع التقريبي بناءً على IP (قد لا يكون دقيقًا)",
  },
  tr: {
    // App
    appTitle: "Doğru Namaz Vakitleri",
    appSubtitle: "Hassas İslami Namaz Programı",
    welcomeMessage: "Namaz vakitlerini görmek için ekrana dokunun",
    loading: "Namaz vakitleri yükleniyor...",
    byAuthor: "",

    // Prayer Names
    fajr: "İmsak",
    sunrise: "Güneş",
    dhohr: "Öğle",
    asr: "İkindi",
    maghrib: "Akşam",
    isha: "Yatsı",
    prayerTimes: "Namaz Vakitleri",

    // Location Info
    locationInfo: "Konum Bilgisi",
    latitude: "Enlem",
    longitude: "Boylam",
    elevation: "Yükseklik",
    timeZone: "Saat Dilimi",
    hijri: "Hicri",
    date: "Tarih",
    localTime: "Yerel Saat",
    Address: "Adres",

    // Popup
    popupTitle: "Namaz Vakitleri",
    localPrayerTimes: "Yerel Namaz Vakitleri",
    method: "Yöntem",

    // Buttons
    settingsButton: "Ayarlar",
    userGuideButton: "Kullanım Kılavuzu",
    languageButton: "Dil",
    findQiblaButton: "Kıbleyi Bul",

    // User Guide
    userGuideTitle: "Kullanım Kılavuzu",
    howToUse: "Namaz Vakitleri Uygulamasını Kullanma",
    step1Title: "Konum Erişimine İzin Verin:",
    step1Desc:
      'Uygulamayı açtığınızda, tarayıcınız konum izni istediğinde "İzin Ver"e tıklayın. Bu, tam konumunuz için doğru namaz vakitlerini gösterecektir.',
    step2Title: "Haritaya Tıklayın:",
    step2Desc:
      "Belirli bir konum için namaz vakitlerini görmek için haritada herhangi bir yere dokunun veya tıklayın. Tüm namaz vakitleriyle bir bilgi penceresi görünecektir.",
    step3Title: "Namaz Vakitlerini Görüntüleyin:",
    step3Desc:
      "Bilgi penceresi beş vakit namazı (İmsak, Öğle, İkindi, Akşam, Yatsı) ve Güneş vakti gösterir. Namaz vakitleri üstte sarı metinle görüntülenir.",
    step4Title: "Konum Bilgilerini Kontrol Edin:",
    step4Desc:
      "Namaz vakitlerinin altında koordinatlar, yükseklik, saat dilimi, Hicri tarih ve adres dahil ayrıntılı konum verileri bulacaksınız.",
    step5Title: "Ayarları Özelleştirin:",
    step5Desc:
      "Hesaplama yöntemlerini, İmsak/Yatsı açılarını ve İkindi vakti tercihlerini ayarlamak için sarı Ayarlar düğmesine tıklayın.",
    step6Title: "Yerel Vakitlere Geçin:",
    step6Desc:
      'Astronomik hesaplamalar yerine yerel cami programlarına dayalı namaz vakitlerini görüntülemek için yeşil "Yerel Namaz Vakitlerine Geç" düğmesini kullanın.',

    calculationMethods: "Hesaplama Yöntemleri",
    calculationMethodsIntro:
      "Bu uygulama, astronomik hesaplamalara dayalı doğru namaz vakitlerini belirlemek için uluslararası olarak tanınan hesaplama yöntemlerini kullanır:",
    mwlMethod: "İslam Dünya Birliği (MWL)",
    mwlDesc: "İmsak: 18°, Yatsı: 17° | Avrupa ve Orta Doğu'nun bazı bölgelerinde yaygın olarak kullanılır",
    isnaMethod: "Kuzey Amerika İslam Topluluğu (ISNA)",
    isnaDesc: "İmsak: 15°, Yatsı: 15° | Kuzey Amerika standardı",
    egyptMethod: "Mısır Genel Araştırma Otoritesi",
    egyptDesc: "İmsak: 19.5°, Yatsı: 17.5° | Mısır ve yakın bölgelerde kullanılır",
    ummAlQuraMethod: "Umm al-Qura Üniversitesi (Mekke)",
    ummAlQuraDesc: "İmsak: 18.5°, Yatsı: Akşamdan 90 dk sonra | Suudi Arabistan için resmi yöntem",
    karachiMethod: "İslam Bilimleri Üniversitesi, Karaçi",
    karachiDesc: "İmsak: 18°, Yatsı: 18° | Hanefi İkindi hesaplaması kullanır | Pakistan ve Bangladeş standardı",
    tehranMethod: "Jeofizik Enstitüsü, Tahran Üniversitesi",
    tehranDesc: "İmsak: 17.7°, Yatsı: 14° | İran ve bazı Şii topluluklarında kullanılır",

    asrCalculation: "İkindi Vakti Hesaplaması",
    standardAsrTitle: "Standart (Şafii, Maliki, Hanbeli)",
    standardAsrDesc: "İkindi, bir nesnenin gölgesi uzunluğu artı öğlen gölgesine eşit olduğunda başlar.",
    hanafiAsrTitle: "Hanefi",
    hanafiAsrDesc:
      "İkindi, bir nesnenin gölgesi uzunluğunun iki katı artı öğlen gölgesine eşit olduğunda başlar. Bu, daha geç bir İkindi vaktine neden olur.",

    tips: "İpuçları",
    tip1: "En doğru sonuçlar için, IP tabanlı tespite güvenmek yerine tarayıcı konum erişimine izin verin",
    tip2: "Hesaplama yöntemi ülkenize göre otomatik olarak algılanır, ancak Ayarlar'dan değiştirebilirsiniz",
    tip3: "Fecir ve Yatsı açıları, seçtiğiniz hesaplama yöntemine göre otomatik olarak ayarlanır",
    tip4: "Tüm saatler 12 saatlik formatta (ÖÖ/ÖS) gösterilir ve yerel saat diliminize göre ayarlanır",

    calculationEquations: "Matematiksel Denklemler",
    calculationEquationsIntro: "Namaz vakitlerini hesaplamak için aşağıdaki astronomik denklemler kullanılır:",
    equation1: "Güneş Zaman Denklemi",
    equation1Formula: "E = 9.87 × sin(2B) - 7.53 × cos(B) - 1.5 × sin(B)",
    equation2: "Güneş Sapma Açısı",
    equation2Formula: "δ = -23.45° × cos(360/365 × (dayOfYear + 10))",
    equation3: "İmsak Vakti",
    equation3Formula: "T(Fajr) = 12 - (1/15) × arccos[(sin(-α - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation4: "Güneş Doğuşu ve Akşam",
    equation4Formula: "T = 12 ± (1/15) × arccos[(sin(-0.85° - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation5: "Öğle Vakti",
    equation5Formula: "T(Dhuhr) = 12 - E/60 - (λ - GMT×15)/15",
    equation6: "İkindi Vakti",
    equation6Formula: "h(Asr) = arctan[1 / (shadowFactor + |tan(φ - δ)|)]",
    equation7: "Yatsı Vakti",
    equation7Formula: "T(Isha) = 12 + (1/15) × arccos[(sin(-β - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equationVariables:
      "Burada: α = İmsak açısı, β = Yatsı açısı, φ = enlem, δ = güneş sapması, λ = boylam, ALF = yükseklik düzeltmesi, shadowFactor = 1 (standart) veya 2 (Hanefi)",

    developerCredit: "",

    // Settings
    adoptedPrayerTimeSettings: "Adopted Prayer Time Settings",
    prayerTimeSettings: "Prayer Time Settings",
    calculationMethod: "Calculation Method",
    angleForFajr: "Angle for Fajr and Isha Times",
    angleTitle: "Angle for Fajr and Isha Times",
    asrTime: "Asr time",
    asrTitle: "Asr time",
    standard: "Standard",
    hanafi: "Hanafi",
    apply: "Apply",
    switchToPrayerTimes: "Switch To Local Prayer Times",
    switchToAdoptedPrayerTimes: "Switch To Adopted Prayer Times",
    settingsTitle: "Time Zone Settings",
    automatic: "Automatic",
    manual: "Manual",
    degrees: "degrees",

    // Language Selector
    selectLanguage: "Select Language",
    english: "English",
    arabic: "Arabic",
    turkish: "Turkish",
    urdu: "Urdu",
    hindi: "Hindi",
    german: "German",
    french: "French",

    // Location Messages
    showingTimezone: "Showing {location} based on your timezone",
    showingIP: "Showing approximate location based on IP (may not be exact)",
  },
  ur: {
    // App
    appTitle: "درست نماز کے اوقات",
    appSubtitle: "درست اسلامی نماز کا شیڈول",
    welcomeMessage: "نماز کے اوقات دیکھنے کے لیے اسکرین کو چھوئیں",
    loading: "نماز کے اوقات لوڈ ہو رہے ہیں...",
    byAuthor: " ",

    // Prayer Names
    fajr: "فجر",
    sunrise: "طلوع آفتاب",
    dhohr: "ظہر",
    asr: "عصر",
    maghrib: "مغرب",
    isha: "عشاء",
    prayerTimes: "نماز کے اوقات",

    // Location Info
    locationInfo: "مقام کی معلومات",
    latitude: "عرض البلد",
    longitude: "طول البلد",
    elevation: "بلندی",
    timeZone: "ٹائم زون",
    hijri: "ہجری",
    date: "تاریخ",
    localTime: "مقامی وقت",
    Address: "پتہ",

    // Popup
    popupTitle: "نماز کے اوقات",
    localPrayerTimes: "مقامی نماز کے اوقات",
    method: "طریقہ",

    // Buttons
    settingsButton: "ترتیبات",
    userGuideButton: "صارف گائیڈ",
    languageButton: "زبان",
    findQiblaButton: "قبلہ تلاش کریں",


    // User Guide
    userGuideTitle: "صارف گائیڈ",
    howToUse: "نماز کے اوقات کی ایپ کا استعمال",
    step1Title: "مقام تک رسائی کی اجازت دیں:",
    step1Desc:
      'جب آپ ایپ کھولیں تو اپنے براؤزر کی مقام کی اجازت کی درخواست پر "اجازت دیں" پر کلک کریں۔ یہ آپ کے عین مقام کے لیے درست نماز کے اوقات دکھائے گا۔',
    step2Title: "نقشے پر کلک کریں:",
    step2Desc:
      "اس مخصوص مقام کے لیے نماز کے اوقات دیکھنے کے لیے نقشے پر کہیں بھی چھوئیں یا کلک کریں۔ تمام نماز کے اوقات کے ساتھ ایک معلومات کی ونڈو ظاہر ہوگی۔",
    step3Title: "نماز کے اوقات دیکھیں:",
    step3Desc:
      "معلومات کی ونڈو پانچوں نمازیں (فجر، ظہر، عصر، مغرب، عشاء) اور طلوع آفتاب کا وقت دکھاتی ہے۔ نماز کے اوقات اوپر پیلے متن میں دکھائے جاتے ہیں۔",
    step4Title: "مقام کی معلومات چیک کریں:",
    step4Desc:
      "نماز کے اوقات کے نیچے، آپ کو تفصیلی مقام کا ڈیٹا ملے گا بشمول کوآرڈینیٹس، بلندی، ٹائم زون، ہجری تاریخ، اور پتہ۔",
    step5Title: "ترتیبات کو حسب ضرورت بنائیں:",
    step5Desc:
      "حساب کتاب کے طریقوں، فجر/عشاء کے زاویوں، اور عصر کے وقت کی ترجیحات کو ایڈجسٹ کرنے کے لیے پیلے ترتیبات بٹن پر کلک کریں۔",
    step6Title: "مقامی اوقات پر سوئچ کریں:",
    step6Desc:
      'فلکیاتی حسابات کے بجائے مقامی مسجد کے شیڈول کی بنیاد پر نماز کے اوقات دیکھنے کے لیے سبز "مقامی نماز کے اوقات پر سوئچ کریں" بٹن استعمال کریں۔',

    calculationMethods: "حساب کتاب کے طریقے",
    calculationMethodsIntro:
      "یہ ایپ فلکیاتی حسابات کی بنیاد پر درست نماز کے اوقات کا تعین کرنے کے لیے بین الاقوامی سطح پر تسلیم شدہ حساب کتاب کے طریقے استعمال کرتی ہے:",
    mwlMethod: "مسلم ورلڈ لیگ (MWL)",
    mwlDesc: "فجر: 18°، عشاء: 17° | یورپ اور مشرق وسطیٰ کے کچھ حصوں میں وسیع پیمانے پر استعمال ہوتا ہے",
    isnaMethod: "اسلامک سوسائٹی آف نارتھ امریکہ (ISNA)",
    isnaDesc: "فجر: 15°، عشاء: 15° | شمالی امریکہ کا معیار",
    egyptMethod: "مصری جنرل اتھارٹی آف سروے",
    egyptDesc: "فجر: 19.5°، عشاء: 17.5° | مصر اور قریبی علاقوں میں استعمال ہوتا ہے",
    ummAlQuraMethod: "ام القریٰ یونیورسٹی (مکہ)",
    ummAlQuraDesc: "فجر: 18.5°، عشاء: مغرب کے 90 منٹ بعد | سعودی عرب کا سرکاری طریقہ",
    karachiMethod: "یونیورسٹی آف اسلامک سائنسز، کراچی",
    karachiDesc: "فجر: 18°، عشاء: 18° | حنفی عصر کا حساب استعمال کرتا ہے | پاکستان اور بنگلہ دیش کا معیار",
    tehranMethod: "انسٹی ٹیوٹ آف جیو فزکس، یونیورسٹی آف تہران",
    tehranDesc: "فجر: 17.7°، عشاء: 14° | ایران اور کچھ شیعہ کمیونٹیز میں استعمال ہوتا ہے",

    asrCalculation: "عصر کے وقت کا حساب",
    standardAsrTitle: "معیاری (شافعی، مالکی، حنبلی)",
    standardAsrDesc: "عصر اس وقت شروع ہوتی ہے جب کسی چیز کا سایہ اس کی لمبائی کے برابر ہو جمع دوپہر کا سایہ۔",
    hanafiAsrTitle: "حنفی",
    hanafiAsrDesc:
      "عصر اس وقت شروع ہوتی ہے جب کسی چیز کا سایہ اس کی لمبائی کے دوگنا کے برابر ہو جمع دوپہر کا سایہ۔ اس سے عصر کا وقت دیر سے ہوتا ہے۔",

    tips: "تجاویز",
    tip1: "زیادہ درست نتائج کے لیے، IP پر مبنی پتہ لگانے پر انحصار کرنے کے بجائے براؤزر کی لوکیشن تک رسائی کی اجازت دیں",
    tip2: "حساب کا طریقہ آپ کے ملک کی بنیاد پر خودکار طور پر دریافت کیا جاتا ہے، لیکن آپ اسے ترتیبات میں تبدیل کر سکتے ہیں",
    tip3: "فجر اور عشاء کے زاویے آپ کے منتخب کردہ حساب کے طریقے کی بنیاد پر خودکار طور پر سیٹ ہو جاتے ہیں",
    tip4: "تمام اوقات 12 گھنٹے کی شکل میں (صبح/شام) دکھائے جاتے ہیں اور آپ کے مقامی ٹائم زون کے مطابق ایڈجسٹ کیے جاتے ہیں",

    calculationEquations: "ریاضیاتی مساوات",
    calculationEquationsIntro: "نماز کے اوقات کا حساب لگانے کے لیے درج ذیل فلکیاتی مساوات استعمال کی جاتی ہیں:",
    equation1: "شمسی وقت کی مساوات",
    equation1Formula: "E = 9.87 × sin(2B) - 7.53 × cos(B) - 1.5 × sin(B)",
    equation2: "سورج کا زاویہ انحراف",
    equation2Formula: "δ = -23.45° × cos(360/365 × (dayOfYear + 10))",
    equation3: "فجر کا وقت",
    equation3Formula: "T(Fajr) = 12 - (1/15) × arccos[(sin(-α - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation4: "طلوع اور مغرب",
    equation4Formula: "T = 12 ± (1/15) × arccos[(sin(-0.85° - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation5: "ظہر کا وقت",
    equation5Formula: "T(Dhuhr) = 12 - E/60 - (λ - GMT×15)/15",
    equation6: "عصر کا وقت",
    equation6Formula: "h(Asr) = arctan[1 / (shadowFactor + |tan(φ - δ)|)]",
    equation7: "عشاء کا وقت",
    equation7Formula: "T(Isha) = 12 + (1/15) × arccos[(sin(-β - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equationVariables:
      "جہاں: α = فجر کا زاویہ، β = عشاء کا زاویہ، φ = عرض البلد، δ = سورج کا انحراف، λ = طول البلد، ALF = بلندی کی اصلاح، shadowFactor = 1 (معیاری) یا 2 (حنفی)",

    developerCredit: " ",

    // Settings
    adoptedPrayerTimeSettings: "Kabul Edilen Namaz Vakti Ayarları",
    prayerTimeSettings: "Namaz Vakti Ayarları",
    calculationMethod: "Hesaplama Yöntemi",
    angleForFajr: "İmsak ve Yatsı Açıları",
    angleTitle: "İmsak ve Yatsı Açıları",
    asrTime: "İkindi vakti",
    asrTitle: "İkindi vakti",
    standard: "Standart",
    hanafi: "Hanefi",
    apply: "Uygula",
    switchToPrayerTimes: "Yerel Namaz Vakitlerine Geç",
    switchToAdoptedPrayerTimes: "Kabul Edilen Namaz Vakitlerine Geç",
    settingsTitle: "Saat Dilimi Ayarları",
    automatic: "Otomatik",
    manual: "Manuel",
    degrees: "derece",

    // Language Selector
    selectLanguage: "Dil Seçin",
    english: "İngilizce",
    arabic: "Arapça",
    turkish: "Türkçe",
    urdu: "Urduca",
    hindi: "Hintçe",
    german: "Almanca",
    french: "Fransızca",

    // Location Messages
    showingTimezone: "Saat diliminize göre {location} gösteriliyor",
    showingIP: "IP'ye dayalı yaklaşık konum gösteriliyor (tam olmayabilir)",
  },
  hi: {
    // App
    appTitle: "सटीक नमाज़ का समय",
    appSubtitle: "सटीक इस्लामी नमाज़ कार्यक्रम",
    welcomeMessage: "नमाज़ का समय देखने के लिए स्क्रीन को स्पर्श करें",
    loading: "नमाज़ का समय लोड हो रहा है...",
    byAuthor: "अब्दुल रहमान बिलानी द्वारा",

    // Prayer Names
    fajr: "फ़ज्र",
    sunrise: "सूर्योदय",
    dhohr: "ज़ुहर",
    asr: "अस्र",
    maghrib: "मग़रिब",
    isha: "इशा",
    prayerTimes: "नमाज़ का समय",

    // Location Info
    locationInfo: "स्थान की जानकारी",
    latitude: "अक्षांश",
    longitude: "देशांतर",
    elevation: "ऊंचाई",
    timeZone: "समय क्षेत्र",
    hijri: "हिजरी",
    date: "तारीख",
    localTime: "स्थानीय समय",
    Address: "पता",

    // Popup
    popupTitle: "नमाज़ का समय",
    localPrayerTimes: "स्थानीय नमाज़ का समय",
    method: "विधि",

    // Buttons
    settingsButton: "सेटिंग्स",
    userGuideButton: "उपयोगकर्ता गाइड",
    languageButton: "भाषा",
    findQiblaButton: "क़िबला खोजें",

    // User Guide
    userGuideTitle: "उपयोगकर्ता गाइड",
    howToUse: "नमाज़ समय ऐप का उपयोग कैसे करें",
    step1Title: "स्थान तक पहुंच की अनुमति दें:",
    step1Desc:
      'जब आप ऐप खोलते हैं, तो जब आपका ब्राउज़र स्थान अनुमति मांगता है तो "अनुमति दें" पर क्लिक करें। यह आपके सटीक स्थान के लिए सटीक नमाज़ का समय दिखाएगा।',
    step2Title: "मानचित्र पर क्लिक करें:",
    step2Desc:
      "उस विशिष्ट स्थान के लिए नमाज़ का समय देखने के लिए मानचित्र पर कहीं भी स्पर्श करें या क्लिक करें। सभी नमाज़ समय के साथ एक जानकारी विंडो दिखाई देगी।",
    step3Title: "नमाज़ समय देखें:",
    step3Desc:
      "जानकारी विंडो सभी पांच दैनिक नमाज़ें (फज्र, ज़ुहर, अस्र, मग़रिब, इशा) और सूर्योदय समय दिखाती है। नमाज़ का समय शीर्ष पर पीले टेक्स्ट में प्रदर्शित होता है।",
    step4Title: "स्थान की जानकारी जांचें:",
    step4Desc: "नमाज़ के समय के नीचे, आपको निर्देशांक, ऊंचाई, समय क्षेत्र, हिजरी तारीख और पता सहित विस्तृत स्थान डेटा मिलेगा।",
    step5Title: "सेटिंग्स को अनुकूलित करें:",
    step5Desc: "गणना विधियों, फज्र/इशा कोणों और अस्र समय प्राथमिकताओं को समायोजित करने के लिए पीले सेटिंग्स बटन पर क्लिक करें।",
    step6Title: "स्थानीय समय पर स्विच करें:",
    step6Desc:
      'खगोलीय गणनाओं के बजाय स्थानीय मस्जिद कार्यक्रम के आधार पर नमाज़ का समय देखने के लिए हरे "स्थानीय नमाज़ समय पर स्विच करें" बटन का उपयोग करें।',

    calculationMethods: "गणना विधियाँ",
    calculationMethodsIntro:
      "यह ऐप खगोलीय गणनाओं के आधार पर सटीक नमाज़ समय निर्धारित करने के लिए अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त गणना विधियों का उपयोग करता है:",
    mwlMethod: "मुस्लिम वर्ल्ड लीग (MWL)",
    mwlDesc: "फज्र: 18°, इशा: 17° | यूरोप और मध्य पूर्व के कुछ हिस्सों में व्यापक रूप से उपयोग किया जाता है",
    isnaMethod: "इस्लामिक सोसायटी ऑफ नॉर्थ अमेरिका (ISNA)",
    isnaDesc: "फज्र: 15°, इशा: 15° | उत्तरी अमेरिका का मानक",
    egyptMethod: "मिस्र जनरल अथॉरिटी ऑफ सर्वे",
    egyptDesc: "फज्र: 19.5°, इशा: 17.5° | मिस्र और आस-पास के क्षेत्रों में उपयोग किया जाता है",
    ummAlQuraMethod: "उम्म अल-कुरा विश्वविद्यालय (मक्का)",
    ummAlQuraDesc: "फज्र: 18.5°, इशा: मग़रिब के 90 मिनट बाद | सऊदी अरब की आधिकारिक विधि",
    karachiMethod: "यूनिवर्सिटी ऑफ इस्लामिक साइंसेज, कराची",
    karachiDesc: "फज्र: 18°, इशा: 18° | हनफ़ी अस्र गणना का उपयोग करता है | पाकिस्तान और बांग्लादेश का मानक",
    tehranMethod: "इंस्टीट्यूट ऑफ जियोफिजिक्स, तेहरान विश्वविद्यालय",
    tehranDesc: "फज्र: 17.7°, इशा: 14° | ईरान और कुछ शिया समुदायों में उपयोग किया जाता है",

    asrCalculation: "अस्र समय की गणना",
    standardAsrTitle: "मानक (शाफ़ई, मालिकी, हम्बली)",
    standardAsrDesc: "अस्र तब शुरू होती है जब किसी वस्तु की छाया उसकी लंबाई के बराबर हो जमा दोपहर की छाया।",
    hanafiAsrTitle: "हनफ़ी",
    hanafiAsrDesc:
      "अस्र तब शुरू होती है जब किसी वस्तु की छाया उसकी लंबाई के दोगुने के बराबर हो जमा दोपहर की छाया। इससे अस्र का समय देर से होता है।",

    tips: "सुझाव",
    tip1: "सबसे सटीक परिणामों के लिए, IP-आधारित पहचान पर निर्भर रहने के बजाय ब्राउज़र स्थान की पहुंच की अनुमति दें",
    tip2: "गणना विधि आपके देश के आधार पर स्वचालित रूप से पहचानी जाती है, लेकिन आप इसे सेटिंग्स में बदल सकते हैं",
    tip3: "फज्र और इशा कोण आपकी चुनी गई गणना विधि के आधार पर स्वचालित रूप से सेट हो जाते हैं",
    tip4: "सभी समय 12-घंटे के प्रारूप में (AM/PM) प्रदर्शित किए जाते हैं और आपके स्थानीय समय क्षेत्र के लिए समायोजित किए जाते हैं",

    calculationEquations: "गणितीय समीकरण",
    calculationEquationsIntro: "नमाज़ के समय की गणना के लिए निम्नलिखित खगोलीय समीकरणों का उपयोग किया जाता है:",
    equation1: "सौर समय समीकरण",
    equation1Formula: "E = 9.87 × sin(2B) - 7.53 × cos(B) - 1.5 × sin(B)",
    equation2: "सूर्य झुकाव कोण",
    equation2Formula: "δ = -23.45° × cos(360/365 × (dayOfYear + 10))",
    equation3: "फज्र का समय",
    equation3Formula: "T(Fajr) = 12 - (1/15) × arccos[(sin(-α - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation4: "सूर्योदय और मगरिब",
    equation4Formula: "T = 12 ± (1/15) × arccos[(sin(-0.85° - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation5: "ज़ुहर का समय",
    equation5Formula: "T(Dhuhr) = 12 - E/60 - (λ - GMT×15)/15",
    equation6: "असर का समय",
    equation6Formula: "h(Asr) = arctan[1 / (shadowFactor + |tan(φ - δ)|)]",
    equation7: "इशा का समय",
    equation7Formula: "T(Isha) = 12 + (1/15) × arccos[(sin(-β - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equationVariables:
      "जहाँ: α = फज्र कोण, β = इशा कोण, φ = अक्षांश, δ = सूर्य झुकाव, λ = देशांतर, ALF = ऊंचाई सुधार, shadowFactor = 1 (मानक) या 2 (हनफी)",

    developerCredit: "npm run dev",

    // Settings
    adoptedPrayerTimeSettings: "Adopted Prayer Time Settings",
    prayerTimeSettings: "Prayer Time Settings",
    calculationMethod: "Calculation Method",
    angleForFajr: "Angle for Fajr and Isha Times",
    angleTitle: "Angle for Fajr and Isha Times",
    asrTime: "Asr time",
    asrTitle: "Asr time",
    standard: "Standard",
    hanafi: "Hanafi",
    apply: "Apply",
    switchToPrayerTimes: "Switch To Local Prayer Times",
    switchToAdoptedPrayerTimes: "Switch To Adopted Prayer Times",
    settingsTitle: "Time Zone Settings",
    automatic: "Automatic",
    manual: "Manual",
    degrees: "degrees",

    // Language Selector
    selectLanguage: "Language",
    english: "English",
    arabic: "Arabic",
    turkish: "Turkish",
    urdu: "Urdu",
    hindi: "Hindi",
    german: "German",
    french: "French",

    // Location Messages
    showingTimezone: "Showing {location} based on your timezone",
    showingIP: "Showing approximate location based on IP (may not be exact)",
  },
  de: {
    // App
    appTitle: "Genaue Gebetszeiten",
    appSubtitle: "Präziser islamischer Gebetsplan",
    welcomeMessage: "Berühren Sie den Bildschirm, um Gebetszeiten anzuzeigen",
    loading: "Gebetszeiten werden geladen...",
    byAuthor: "",

    // Prayer Names
    fajr: "Fadschr",
    sunrise: "Sonnenaufgang",
    dhohr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Ischa",
    prayerTimes: "Gebetszeiten",

    // Location Info
    locationInfo: "Standortinformationen",
    latitude: "Breitengrad",
    longitude: "Längengrad",
    elevation: "Höhe",
    timeZone: "Zeitzone",
    hijri: "Hidschrī",
    date: "Datum",
    localTime: "Ortszeit",
    Address: "Adresse",

    // Popup
    popupTitle: "Gebetszeiten",
    localPrayerTimes: "Lokale Gebetszeiten",
    method: "Methode",

    // Buttons
    settingsButton: "Einstellungen",
    userGuideButton: "Benutzerhandbuch",
    languageButton: "Sprache",
      findQiblaButton: "Qibla finden",


    // User Guide
    userGuideTitle: "Benutzerhandbuch",
    howToUse: "So verwenden Sie die Gebetszeiten-App",
    step1Title: "Standortzugriff erlauben:",
    step1Desc:
      'Wenn Sie die App öffnen, klicken Sie auf "Erlauben", wenn Ihr Browser nach Standortberechtigung fragt. Dies zeigt genaue Gebetszeiten für Ihren genauen Standort.',
    step2Title: "Auf die Karte klicken:",
    step2Desc:
      "Berühren oder klicken Sie überall auf der Karte, um Gebetszeiten für diesen bestimmten Standort anzuzeigen. Ein Informationsfenster mit allen Gebetszeiten wird angezeigt.",
    step3Title: "Gebetszeiten anzeigen:",
    step3Desc:
      "Das Informationsfenster zeigt alle fünf täglichen Gebete (Fadschr, Zuhr, Asr, Maghrib, Ischa) plus Sonnenaufgangszeit. Gebetszeiten werden oben in gelbem Text angezeigt.",
    step4Title: "Standortinformationen überprüfen:",
    step4Desc:
      "Unter den Gebetszeiten finden Sie detaillierte Standortdaten einschließlich Koordinaten, Höhe, Zeitzone, Hijri-Datum und Adresse.",
    step5Title: "Einstellungen anpassen:",
    step5Desc:
      "Klicken Sie auf die gelbe Einstellungsschaltfläche, um Berechnungsmethoden, Fadschr/Ischa-Winkel und Asr-Zeitpräferenzen anzupassen.",
    step6Title: "Zu lokalen Zeiten wechseln:",
    step6Desc:
      'Verwenden Sie die grüne Schaltfläche "Zu lokalen Gebetszeiten wechseln", um Gebetszeiten basierend auf lokalen Moscheeplänen anstelle astronomischer Berechnungen anzuzeigen.',

    calculationMethods: "Berechnungsmethoden",
    calculationMethodsIntro:
      "Diese App verwendet international anerkannte Berechnungsmethoden, um genaue Gebetszeiten basierend auf astronomischen Berechnungen zu bestimmen:",
    mwlMethod: "Muslimische Weltliga (MWL)",
    mwlDesc: "Fadschr: 18°, Ischa: 17° | Weit verbreitet in Europa und Teilen des Nahen Ostens",
    isnaMethod: "Islamische Gesellschaft von Nordamerika (ISNA)",
    isnaDesc: "Fadschr: 15°, Ischa: 15° | Standard für Nordamerika",
    egyptMethod: "Ägyptische Generalbehörde für Vermessung",
    egyptDesc: "Fadschr: 19,5°, Ischa: 17,5° | Verwendet in Ägypten und nahen Regionen",
    ummAlQuraMethod: "Umm al-Qura Universität (Mekka)",
    ummAlQuraDesc: "Fadschr: 18,5°, Ischa: 90 Min nach Maghrib | Offizielle Methode für Saudi-Arabien",
    karachiMethod: "Universität für Islamische Wissenschaften, Karatschi",
    karachiDesc: "Fadschr: 18°, Ischa: 18° | Verwendet Hanafi Asr-Berechnung | Standard für Pakistan und Bangladesch",
    tehranMethod: "Institut für Geophysik, Universität Teheran",
    tehranDesc: "Fadschr: 17,7°, Ischa: 14° | Verwendet im Iran und einigen schiitischen Gemeinden",

    asrCalculation: "Asr-Zeitberechnung",
    standardAsrTitle: "Standard (Schafi'i, Maliki, Hanbali)",
    standardAsrDesc: "Asr beginnt, wenn der Schatten eines Objekts seiner Länge plus Mittagsschatten entspricht.",
    hanafiAsrTitle: "Hanafi",
    hanafiAsrDesc:
      "Asr beginnt, wenn der Schatten eines Objekts der doppelten Länge plus Mittagsschatten entspricht. Dies führt zu einer späteren Asr-Zeit.",

    tips: "Tipps",
    tip1: "Für die genauesten Ergebnisse erlauben Sie den Standortzugriff im Browser, anstatt sich auf IP-basierte Erkennung zu verlassen",
    tip2: "Die Berechnungsmethode wird automatisch basierend auf Ihrem Land erkannt, aber Sie können sie in den Einstellungen ändern",
    tip3: "Fajr- und Isha-Winkel werden automatisch basierend auf Ihrer gewählten Berechnungsmethode festgelegt",
    tip4: "Alle Zeiten werden im 12-Stunden-Format (AM/PM) angezeigt und an Ihre lokale Zeitzone angepasst",

    calculationEquations: "Mathematische Gleichungen",
    calculationEquationsIntro:
      "Die folgenden astronomischen Gleichungen werden zur Berechnung der Gebetszeiten verwendet:",
    equation1: "Sonnen-Zeitgleichung",
    equation1Formula: "E = 9.87 × sin(2B) - 7.53 × cos(B) - 1.5 × sin(B)",
    equation2: "Sonnendeklinationswinkel",
    equation2Formula: "δ = -23.45° × cos(360/365 × (dayOfYear + 10))",
    equation3: "Fajr-Zeit",
    equation3Formula: "T(Fajr) = 12 - (1/15) × arccos[(sin(-α - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation4: "Sonnenaufgang & Maghrib",
    equation4Formula: "T = 12 ± (1/15) × arccos[(sin(-0.85° - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation5: "Dhuhr-Zeit",
    equation5Formula: "T(Dhuhr) = 12 - E/60 - (λ - GMT×15)/15",
    equation6: "Asr-Zeit",
    equation6Formula: "h(Asr) = arctan[1 / (shadowFactor + |tan(φ - δ)|)]",
    equation7: "Isha-Zeit",
    equation7Formula: "T(Isha) = 12 + (1/15) × arccos[(sin(-β - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equationVariables:
      "Wobei: α = Fajr-Winkel, β = Isha-Winkel, φ = Breitengrad, δ = Sonnendeklination, λ = Längengrad, ALF = Höhenkorrektur, shadowFactor = 1 (Standard) oder 2 (Hanafi)",

    developerCredit: "",

    // Settings
    adoptedPrayerTimeSettings: "Einstellungen für übernommene Gebetszeiten",
    prayerTimeSettings: "Einstellungen für Gebetszeiten",
    calculationMethod: "Berechnungsmethode",
    angleForFajr: "Winkel für Fajr und Isha",
    angleTitle: "Winkel für Fajr und Isha",
    asrTime: "Asr-Zeit",
    asrTitle: "Asr-Zeit",
    standard: "Standard",
    hanafi: "Hanafi",
    apply: "Anwenden",
    switchToPrayerTimes: "Zu lokalen Gebetszeiten wechseln",
    switchToAdoptedPrayerTimes: "Zu übernommenen Gebetszeiten wechseln",
    settingsTitle: "Zeitzoneneinstellungen",
    automatic: "Automatisch",
    manual: "Manuell",
    degrees: "Grad",

    // Language Selector
    selectLanguage: "Sprache auswählen",
    english: "Englisch",
    arabic: "Arabisch",
    turkish: "Türkisch",
    urdu: "Urdu",
    hindi: "Hindi",
    german: "Deutsch",
    french: "Französisch",

    // Location Messages
    showingTimezone: "{location} wird basierend auf Ihrer Zeitzone angezeigt",
    showingIP: "Ungefährer Standort basierend auf IP wird angezeigt (möglicherweise nicht genau)",
  },
  fr: {
    // App
    appTitle: "Heures de prière précises",
    appSubtitle: "Programme de prière islamique précis",
    welcomeMessage: "Touchez l'écran pour voir les heures de prière",
    loading: "Chargement des heures de prière...",
    byAuthor: "",

    // Prayer Names
    fajr: "Fajr",
    sunrise: "Lever du soleil",
    dhohr: "Dhohr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    prayerTimes: "Heures de prière",

    // Location Info
    locationInfo: "Informations sur l'emplacement",
    latitude: "Latitude",
    longitude: "Longitude",
    elevation: "Altitude",
    timeZone: "Fuseau horaire",
    hijri: "Hijri",
    date: "Date",
    localTime: "Heure locale",
    Address: "Adresse",

    // Popup
    popupTitle: "Heures de prière",
    localPrayerTimes: "Heures de prière locales",
    method: "Méthode",

    // Buttons
    settingsButton: "Paramètres",
    userGuideButton: "Guide de l'utilisateur",
    languageButton: "Langue",
    findQiblaButton: "Trouver la Qibla",


    // User Guide
    userGuideTitle: "Guide de l'utilisateur",
    howToUse: "Comment utiliser l'application des heures de prière",
    step1Title: "Autoriser l'accès à la localisation:",
    step1Desc:
      "Lorsque vous ouvrez l'application, cliquez sur \"Autoriser\" lorsque votre navigateur demande l'autorisation de localisation. Cela affichera les heures de prière précises pour votre emplacement exact.",
    step2Title: "Cliquer sur la carte:",
    step2Desc:
      "Cliquez n'importe où sur la carte pour voir les heures de prière pour cet emplacement spécifique. Une fenêtre d'information apparaîtra avec toutes les heures de prière.",
    step3Title: "Afficher les heures de prière:",
    step3Desc:
      "La fenêtre d'information affiche les cinq prières quotidiennes (Fajr, Dhohr, Asr, Maghrib, Isha) plus l'heure du lever du soleil. Les heures de prière sont affichées en haut en texte jaune.",
    step4Title: "Vérifier les informations de localisation:",
    step4Desc:
      "Sous les heures de prière, vous trouverez des données de localisation détaillées, y compris les coordonnées, l'altitude, le fuseau horaire, la date hijri et l'adresse.",
    step5Title: "Personnaliser les paramètres:",
    step5Desc:
      "Cliquez sur le bouton Paramètres jaune pour ajuster les méthodes de calcul, les angles Fajr/Isha et les préférences de l'heure Asr.",
    step6Title: "Passer aux heures locales:",
    step6Desc:
      'Utilisez le bouton vert "Passer aux heures de prière locales" pour afficher les heures de prière basées sur les horaires des mosquées locales au lieu des calculs astronomiques.',

    calculationMethods: "Méthodes de calcul",
    calculationMethodsIntro:
      "Cette application utilise des méthodes de calcul reconnues internationalement pour déterminer les heures de prière précises basées sur des calculs astronomiques:",
    mwlMethod: "Ligue Islamique Mondiale (MWL)",
    mwlDesc: "Fajr: 18°, Isha: 17° | Largement utilisé en Europe et dans certaines parties du Moyen-Orient",
    isnaMethod: "Société Islamique d'Amérique du Nord (ISNA)",
    isnaDesc: "Fajr: 15°, Isha: 15° | Standard pour l'Amérique du Nord",
    egyptMethod: "Autorité Générale Égyptienne d'Arpentage",
    egyptDesc: "Fajr: 19,5°, Isha: 17,5° | Utilisé en Égypte et dans les régions voisines",
    ummAlQuraMethod: "Université Umm al-Qura (La Mecque)",
    ummAlQuraDesc: "Fajr: 18,5°, Isha: 90 min après Maghrib | Méthode officielle pour l'Arabie saoudite",
    karachiMethod: "Université des Sciences Islamiques, Karachi",
    karachiDesc: "Fajr: 18°, Isha: 18° | Utilise le calcul Asr Hanafi | Standard pour le Pakistan et le Bangladesh",
    tehranMethod: "Institut de Géophysique, Université de Téhéran",
    tehranDesc: "Fajr: 17,7°, Isha: 14° | Utilisé en Iran et dans certaines communautés chiites",

    asrCalculation: "Calcul de l'heure Asr",
    standardAsrTitle: "Standard (Chafi'i, Maliki, Hanbali)",
    standardAsrDesc: "Asr commence lorsque l'ombre d'un objet égale sa longueur plus l'ombre de midi.",
    hanafiAsrTitle: "Hanafi",
    hanafiAsrDesc:
      "Asr commence lorsque l'ombre d'un objet égale le double de sa longueur plus l'ombre de midi. Cela entraîne une heure Asr plus tard.",

    tips: "Conseils",
    tip1: "Pour des résultats plus précis, autorisez l'accès à la localisation du navigateur au lieu de vous fier à la détection basée sur IP",
    tip2: "La méthode de calcul est automatiquement détectée en fonction de votre pays, mais vous pouvez la modifier dans les paramètres",
    tip3: "Les angles de Fajr et Isha sont automatiquement définis en fonction de votre méthode de calcul choisie",
    tip4: "Toutes les heures sont affichées au format 12 heures (AM/PM) et ajustées à votre fuseau horaire local",

    calculationEquations: "Équations Mathématiques",
    calculationEquationsIntro:
      "Les équations astronomiques suivantes sont utilisées pour calculer les heures de prière:",
    equation1: "Équation du Temps Solaire",
    equation1Formula: "E = 9.87 × sin(2B) - 7.53 × cos(B) - 1.5 × sin(B)",
    equation2: "Angle de Déclinaison Solaire",
    equation2Formula: "δ = -23.45° × cos(360/365 × (dayOfYear + 10))",
    equation3: "Heure du Fajr",
    equation3Formula: "T(Fajr) = 12 - (1/15) × arccos[(sin(-α - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation4: "Lever du Soleil & Maghrib",
    equation4Formula: "T = 12 ± (1/15) × arccos[(sin(-0.85° - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equation5: "Heure du Dhuhr",
    equation5Formula: "T(Dhuhr) = 12 - E/60 - (λ - GMT×15)/15",
    equation6: "Heure de l'Asr",
    equation6Formula: "h(Asr) = arctan[1 / (shadowFactor + |tan(φ - δ)|)]",
    equation7: "Heure de l'Isha",
    equation7Formula: "T(Isha) = 12 + (1/15) × arccos[(sin(-β - ALF) - sin(φ)sin(δ)) / (cos(φ)cos(δ))]",
    equationVariables:
      "Où: α = angle Fajr, β = angle Isha, φ = latitude, δ = déclinaison solaire, λ = longitude, ALF = correction d'altitude, shadowFactor = 1 (standard) ou 2 (Hanafi)",

    developerCredit: "",

    // Settings
    adoptedPrayerTimeSettings: "Paramètres d'heures de prière adoptés",
    prayerTimeSettings: "Paramètres d'heures de prière",
    calculationMethod: "Méthode de calcul",
    angleForFajr: "Angles pour Fajr et Isha",
    angleTitle: "Angles pour Fajr et Isha",
    asrTime: "Heure Asr",
    asrTitle: "Heure Asr",
    standard: "Standard",
    hanafi: "Hanafi",
    apply: "Appliquer",
    switchToPrayerTimes: "Passer aux heures de prière locales",
    switchToAdoptedPrayerTimes: "Passer aux heures de prière adoptées",
    settingsTitle: "Paramètres de fuseau horaire",
    automatic: "Automatique",
    manual: "Manuel",
    degrees: "degrés",

    // Language Selector
    selectLanguage: "Sélectionner la langue",
    english: "Anglais",
    arabic: "Arabe",
    turkish: "Turc",
    urdu: "Ourdou",
    hindi: "Hindi",
    german: "Allemand",
    french: "Français",

    // Location Messages
    showingTimezone: "Affichage de {location} en fonction de votre fuseau horaire",
    showingIP: "Affichage de l'emplacement approximatif basé sur IP (peut ne pas être exact)",
  },
}

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.en
