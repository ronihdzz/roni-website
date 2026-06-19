import type { Locale } from "@/config/i18n";
import type { SiteContent } from "./types";
import { contentEs } from "./content.es";
import { contentEn } from "./content.en";

const contentByLocale: Record<Locale, SiteContent> = {
  es: contentEs,
  en: contentEn,
};

/** Devuelve el contenido del sitio para el locale dado (fallback a "es"). */
export function getContent(locale: string | undefined): SiteContent {
  if (locale === "en") return contentByLocale.en;
  return contentByLocale.es;
}

export type { SiteContent } from "./types";
