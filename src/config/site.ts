/**
 * Datos del sitio independientes del idioma (identidad, contacto, redes).
 * Lo localizado (profesion, about, ubicacion, copy) vive en src/content.
 */

export const site = {
  name: "Roni Hernández",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://ronihdz.com",
  email: "ronihdzbel@gmail.com",
  phone: "+52 55 13086150",
  phoneHref: "tel:+525513086150",
  themeColor: "#2563eb",
  social: {
    linkedin: "https://www.linkedin.com/in/ronihdz/",
    github: "https://github.com/ronihdzz",
    youtube: "https://www.youtube.com/@ronihdzz",
    medium: "https://ronihdz.medium.com/",
    devto: "https://dev.to/ronihdz",
  },
  /** Repo del propio sitio (footer). */
  repo: "https://github.com/ronihdzz/roni-website",
} as const;
