// ===== STATE =====
const state = {
  lang: "fr",
  currency: "EUR",
  billing: "monthly"
};

// ===== TRANSLATIONS (6 langues) =====
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_pricing: "Tarifs",
    nav_studio: "Studio",
    nav_about: "Qui sommes-nous",
    nav_support: "Support",
    nav_legal: "CGU",
    login: "Connexion",
    register: "Inscription",
    hero_line_1: "Créer des shorts",
    hero_line_2: "automatiquement",
    hero_desc: "Transforme tes vidéos en contenu viral sans effort.",
    cta_try: "Tester",
    cta_pricing: "Voir tarifs",
    cta_start: "Commencer",
    pricing_title: "Tarifs",
    monthly: "Mensuel",
    yearly: "Annuel",
    choose_plan: "Choisir",
    studio_title: "Créer un short",
    choose_video: "Choisir une vidéo",
    simulate_render: "Simuler rendu",
    reset: "Réinitialiser",
    about_title: "Qui sommes-nous",
    support_title: "Support",
    send_message: "Envoyer",
    footer_desc: "Plateforme simple et efficace."
  },

  en: {
    nav_home: "Home",
    nav_pricing: "Pricing",
    nav_studio: "Studio",
    nav_about: "About",
    nav_support: "Support",
    nav_legal: "Terms",
    login: "Login",
    register: "Register",
    hero_line_1: "Create shorts",
    hero_line_2: "automatically",
    hero_desc: "Turn your videos into viral content.",
    cta_try: "Try",
    cta_pricing: "Pricing",
    cta_start: "Start",
    pricing_title: "Pricing",
    monthly: "Monthly",
    yearly: "Yearly",
    choose_plan: "Choose",
    studio_title: "Create short",
    choose_video: "Choose video",
    simulate_render: "Simulate render",
    reset: "Reset",
    about_title: "About",
    support_title: "Support",
    send_message: "Send",
    footer_desc: "Simple powerful platform."
  },

  es: {
    nav_home: "Inicio",
    nav_pricing: "Precios",
    nav_studio: "Estudio",
    nav_about: "Sobre nosotros",
    nav_support: "Soporte",
    nav_legal: "Condiciones",
    login: "Conexión",
    register: "Registro",
    hero_line_1: "Crear shorts",
    hero_line_2: "automáticamente",
    hero_desc: "Convierte tus videos en contenido viral.",
    cta_try: "Probar",
    cta_pricing: "Precios",
    cta_start: "Empezar",
    pricing_title: "Precios",
    monthly: "Mensual",
    yearly: "Anual",
    choose_plan: "Elegir",
    studio_title: "Crear short",
    choose_video: "Elegir video",
    simulate_render: "Simular",
    reset: "Reiniciar",
    about_title: "Sobre nosotros",
    support_title: "Soporte",
    send_message: "Enviar",
    footer_desc: "Plataforma simple y potente."
  },

  ar: {
    nav_home: "الرئيسية",
    nav_pricing: "الأسعار",
    nav_studio: "الاستوديو",
    nav_about: "من نحن",
    nav_support: "الدعم",
    nav_legal: "الشروط",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    hero_line_1: "أنشئ فيديوهات",
    hero_line_2: "قصيرة تلقائياً",
    hero_desc: "حوّل فيديوهاتك إلى محتوى فيروسي.",
    cta_try: "جرب",
    cta_pricing: "الأسعار",
    cta_start: "ابدأ",
    pricing_title: "الأسعار",
    monthly: "شهري",
    yearly: "سنوي",
    choose_plan: "اختر",
    studio_title: "إنشاء فيديو",
    choose_video: "اختر فيديو",
    simulate_render: "تشغيل",
    reset: "إعادة",
    about_title: "من نحن",
    support_title: "الدعم",
    send_message: "إرسال",
    footer_desc: "منصة بسيطة وقوية."
  },

  hi: {
    nav_home: "होम",
    nav_pricing: "कीमत",
    nav_studio: "स्टूडियो",
    nav_about: "हमारे बारे में",
    nav_support: "सपोर्ट",
    nav_legal: "नियम",
    login: "लॉगिन",
    register: "रजिस्टर",
    hero_line_1: "शॉर्ट वीडियो",
    hero_line_2: "स्वचालित बनाएं",
    hero_desc: "अपने वीडियो को वायरल कंटेंट में बदलें।",
    cta_try: "ट्राय करें",
    cta_pricing: "कीमत देखें",
    cta_start: "शुरू करें",
    pricing_title: "कीमत",
    monthly: "मासिक",
    yearly: "वार्षिक",
    choose_plan: "चुनें",
    studio_title: "वीडियो बनाएं",
    choose_video: "वीडियो चुनें",
    simulate_render: "चलाएं",
    reset: "रीसेट",
    about_title: "हमारे बारे में",
    support_title: "सपोर्ट",
    send_message: "भेजें",
    footer_desc: "सरल और शक्तिशाली प्लेटफॉर्म।"
  },

  zh: {
    nav_home: "首页",
    nav_pricing: "价格",
    nav_studio: "工作室",
    nav_about: "关于我们",
    nav_support: "支持",
    nav_legal: "条款",
    login: "登录",
    register: "注册",
    hero_line_1: "自动创建",
    hero_line_2: "短视频",
    hero_desc: "将视频转化为热门内容。",
    cta_try: "试用",
    cta_pricing: "价格",
    cta_start: "开始",
    pricing_title: "价格",
    monthly: "月付",
    yearly: "年付",
    choose_plan: "选择",
    studio_title: "创建视频",
    choose_video: "选择视频",
    simulate_render: "生成",
    reset: "重置",
    about_title: "关于我们",
    support_title: "支持",
    send_message: "发送",
    footer_desc: "简单高效的平台。"
  }
};

// ===== APPLY TRANSLATIONS =====
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });

  document.body.dir = (lang === "ar") ? "rtl" : "ltr";
}

// ===== NAVIGATION =====
document.querySelectorAll("[data-view]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".section").forEach(s => s.hidden = true);
    document.getElementById(btn.dataset.view).hidden = false;
  });
});

// ===== LANGUAGE SWITCH =====
document.getElementById("lang").addEventListener("change", e => {
  state.lang = e.target.value;
  applyTranslations(state.lang);
});

// ===== INIT =====
window.addEventListener("load", () => {
  applyTranslations("fr");
});
