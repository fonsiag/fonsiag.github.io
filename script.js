// ===== Translations =====
const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Ingeniería de control · CI/CD · Simulink",
    "hero.headline": "Muevo modelos de Simulink hasta software real, en producción.",
    "hero.sub": "Llevo tus modelos de control desde la simulación hasta el sistema desplegado: menos trabajo manual, menos sorpresas cuando el código ya está corriendo.",
    "hero.cta": "Cuéntame tu proyecto",
    "hero.cta2": "Ver proyectos →",
    "hero.cta3": "Descargar CV",
    "hero.photoPlaceholder": "Añade tu foto en images/alfonso.jpg",
    "hero.portraitCaption": "FIG. 00 — ALFONSO APARICIO",

    "about.title": "Sobre mí",
    "about.lead": "Me dedico a conectar el modelo con la máquina real. Genero código y DLLs desde Simulink, automatizo los tests que nadie quiere hacer a mano, y construyo los pipelines de CI/CD que hacen que un cambio llegue a producción sin sustos.",

    "cap1.title": "Código y DLLs",
    "cap1.body": "Tu modelo de Simulink se convierte en una interfaz DLL lista para integrar. Sin picar código a mano, sin errores de traducción.",
    "cap2.title": "Tests de integración",
    "cap2.body": "Cada cambio se valida solo, antes de llegar a producción. El pipeline de regresión hace el trabajo que nadie quiere hacer manualmente.",
    "cap3.title": "Repositorios y CI/CD",
    "cap3.body": "Control de versiones y compilación automática. Tu código queda trazable y desplegable en cualquier momento, no solo cuando alguien se acuerda.",

    "projects.title": "Proyectos",
    "proj1.title": "Generación de interfaces DLL desde modelos Simulink",
    "proj1.body": "Desarrollo de un flujo de generación automática de interfaces DLL a partir de modelos de Simulink, reduciendo el trabajo manual de integración entre el modelo de control y el software final.",
    "proj2.title": "CI/CD para sistemas de control",
    "proj2.body": "Integración de un pipeline de compilación automática con tests de regresión y control de versiones, permitiendo detectar errores de integración antes del despliegue.",
    "proj3.title": "Arquitectura de software para controlador de parque",
    "proj3.body": "Diseño de la arquitectura de software de un controlador de parque con múltiples funciones interconectadas, definiendo interfaces claras bajo un enfoque de Model-Based Design.",

    "services.title": "Servicios",
    "serv1.title": "Generación de código y DLLs",
    "serv1.body": "De modelo a interfaz de software lista para integrar en tu sistema.",
    "serv2.title": "CI/CD y automatización de tests",
    "serv2.body": "Pipelines que validan cada cambio automáticamente, sin trabajo manual.",
    "serv3.title": "Arquitectura de sistemas (MBD)",
    "serv3.body": "Definición de interfaces y estructura para sistemas de control complejos.",
    "services.note": "¿No ves tu problema aquí exactamente? Cuéntamelo de todas formas — casi siempre se resuelve con el enfoque correcto.",

    "contact.title": "Contacto",
    "contact.lead": "¿Tienes un problema de integración de control que resolver? Escríbeme, sin rodeos.",
    "contact.email": "Email"
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",

    "hero.eyebrow": "Control Engineering · CI/CD · Simulink",
    "hero.headline": "I move Simulink models all the way to software running in production.",
    "hero.sub": "I take your control models from simulation to deployed system: less manual work, fewer surprises once the code is actually running.",
    "hero.cta": "Tell me about your project",
    "hero.cta2": "View projects →",
    "hero.cta3": "Download CV",
    "hero.photoPlaceholder": "Add your photo at images/alfonso.jpg",
    "hero.portraitCaption": "FIG. 00 — ALFONSO APARICIO",

    "about.title": "About",
    "about.lead": "I connect the model to the real machine. I generate code and DLLs from Simulink, automate the tests nobody wants to run by hand, and build the CI/CD pipelines that let a change reach production without surprises.",

    "cap1.title": "Code and DLLs",
    "cap1.body": "Your Simulink model becomes a DLL interface ready to integrate. No hand-coding, no translation errors.",
    "cap2.title": "Integration testing",
    "cap2.body": "Every change validates itself before it reaches production. The regression pipeline does the work nobody wants to do by hand.",
    "cap3.title": "Repositories and CI/CD",
    "cap3.body": "Version control and automatic builds. Your code stays traceable and deployable at any moment, not just when someone remembers to check.",

    "projects.title": "Projects",
    "proj1.title": "DLL interface generation from Simulink models",
    "proj1.body": "Built an automated flow for generating DLL interfaces from Simulink models, cutting manual integration work between the control model and the final software.",
    "proj2.title": "CI/CD for control systems",
    "proj2.body": "Integrated an automatic build pipeline with regression tests and version control, catching integration errors before deployment.",
    "proj3.title": "Software architecture for a plant controller",
    "proj3.body": "Designed the software architecture for a plant controller with multiple interconnected functions, defining clear interfaces under a Model-Based Design approach.",

    "services.title": "Services",
    "serv1.title": "Code and DLL generation",
    "serv1.body": "From model to software interface, ready to integrate into your system.",
    "serv2.title": "CI/CD and test automation",
    "serv2.body": "Pipelines that validate every change automatically, with no manual work.",
    "serv3.title": "Systems architecture (MBD)",
    "serv3.body": "Interface and structure definition for complex control systems.",
    "services.note": "Doesn't quite fit? Tell me anyway — most integration problems get solved with the right approach.",

    "contact.title": "Contact",
    "contact.lead": "Have a control integration problem to solve? Get in touch, no small talk needed.",
    "contact.email": "Email"
  }
};

// ===== Language switching =====
const STORAGE_KEY = "site-lang";
const langToggle = document.getElementById("langToggle");
const langOpts = langToggle.querySelectorAll(".lang-opt");
const i18nEls = document.querySelectorAll("[data-i18n]");

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;
  i18nEls.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  langOpts.forEach((opt) => {
    opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
  });
  document.documentElement.setAttribute("lang", lang);
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
}

langToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("lang") === "en" ? "en" : "es";
  applyLanguage(current === "es" ? "en" : "es");
});

// Initialize from saved preference, default to Spanish
let initialLang = "es";
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "es") initialLang = saved;
} catch (e) { /* ignore */ }
applyLanguage(initialLang);

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
