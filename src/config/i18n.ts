/**
 * Configuracion i18n y textos de interfaz (chrome) por idioma.
 * El contenido (proyectos, skills, about...) vive en src/content; aqui solo
 * van las cadenas de UI que no dependen de los datos.
 */

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function normalizeLocale(value: string | undefined): Locale {
  return value === "en" ? "en" : "es";
}

/** Secciones del nav (el id coincide con el ancla en la pagina). */
export const navSections = [
  "about",
  "moments",
  "community",
  "skills",
  "projects",
  "contact",
] as const;
export type NavSection = (typeof navSections)[number];

type UiStrings = {
  nav: Record<NavSection, string>;
  downloadCv: string;
  spanishCv: string;
  englishCv: string;
  spanish: string;
  english: string;
  languageSelector: string;
  seeWork: string;
  contactMe: string;
  readMore: string;
  readLess: string;
  workTogether: string;
  email: string;
  phone: string;
  location: string;
  viewDemo: string;
  presentation: string;
  documentation: string;
  yearsExperience: string;
  openMenu: string;
  closeMenu: string;
  collapseSidebar: string;
  expandSidebar: string;
  footerRights: string;
  footerSource: string;
  footerBuilt: string;
  footerHeart: string;
  communityPillars: string;
  communityGallery: string;
  communityVisit: string;
  communityFollow: string;
  viewLarge: string;
  close: string;
};

export const ui: Record<Locale, UiStrings> = {
  es: {
    nav: {
      about: "Acerca de",
      moments: "Momentos",
      community: "Comunidad",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    downloadCv: "Descargar CV",
    spanishCv: "CV en Español",
    englishCv: "CV en Inglés",
    spanish: "Español",
    english: "English",
    languageSelector: "Idioma",
    seeWork: "Ver mi trabajo",
    contactMe: "Contáctame",
    readMore: "Ver más",
    readLess: "Ver menos",
    workTogether: "¡Trabajemos juntos!",
    email: "Email",
    phone: "Teléfono",
    location: "Ubicación",
    viewDemo: "Ver Demo",
    presentation: "Presentación",
    documentation: "Documentación",
    yearsExperience: "años de experiencia",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    collapseSidebar: "Colapsar panel",
    expandSidebar: "Expandir panel",
    footerRights: "Todos los derechos reservados",
    footerSource: "Código fuente disponible en",
    footerBuilt: "Desarrollado con",
    footerHeart: "amor",
    communityPillars: "Lo que hacemos",
    communityGallery: "Momentos de la comunidad",
    communityVisit: "Visitar uniconhub.org",
    communityFollow: "Sigue a UniconHub",
    viewLarge: "Ver en grande",
    close: "Cerrar",
  },
  en: {
    nav: {
      about: "About",
      moments: "Moments",
      community: "Community",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    downloadCv: "Download CV",
    spanishCv: "Spanish CV",
    englishCv: "English CV",
    spanish: "Español",
    english: "English",
    languageSelector: "Language",
    seeWork: "See my work",
    contactMe: "Contact me",
    readMore: "Read more",
    readLess: "Read less",
    workTogether: "Let's work together!",
    email: "Email",
    phone: "Phone",
    location: "Location",
    viewDemo: "View Demo",
    presentation: "Presentation",
    documentation: "Documentation",
    yearsExperience: "years of experience",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    collapseSidebar: "Collapse sidebar",
    expandSidebar: "Expand sidebar",
    footerRights: "All rights reserved",
    footerSource: "Source code available on",
    footerBuilt: "Built with",
    footerHeart: "love",
    communityPillars: "What we do",
    communityGallery: "Community moments",
    communityVisit: "Visit uniconhub.org",
    communityFollow: "Follow UniconHub",
    viewLarge: "View larger",
    close: "Close",
  },
};

export function getUi(locale: string | undefined): UiStrings {
  return ui[normalizeLocale(locale)];
}
