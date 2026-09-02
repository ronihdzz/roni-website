/**
 * Tipos del contenido del sitio. Garantizan que content.es.ts y content.en.ts
 * compartan exactamente la misma forma (fuente unica de verdad tipada).
 */

export interface CvLinks {
  spanish: string;
  english: string;
}

export type RoleKind = "work" | "community";

/** Rol actual (chip bajo el titulo del hero). El icono se elige por `kind`. */
export interface Role {
  kind: RoleKind;
  title: string;
  org: string;
  url?: string;
}

export interface Personal {
  name: string;
  profession: string;
  titleParts: string[];
  roles: Role[];
  about: string;
  photo: string;
  cv: CvLinks;
}

export interface Skill {
  name: string;
  level: string;
  years: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: Skill[];
}

export interface Skills {
  featured: string[];
  categories: SkillCategory[];
}

export type MediaType = "video" | "image";

export interface Media {
  url: string;
  type: MediaType;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  award: string | null;
  media: Media;
  tags: string[];
}

export interface ProjectLinks {
  demo?: string | null;
  github?: string | null;
  documentation?: string | null;
  presentation?: string | null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: string;
  featured: boolean;
  links: ProjectLinks;
  awards?: string[];
  dateCreated: string;
  dateUpdated: string;
}

export type ContactFieldType = "text" | "email" | "textarea";

export interface ContactField {
  name: string;
  type: ContactFieldType;
  placeholder: string;
  required: boolean;
  rows?: number;
}

export interface ContactForm {
  title: string;
  subtitle: string;
  submitText: string;
  fields: ContactField[];
}

export interface Contact {
  location: string;
  form: ContactForm;
}

export type CareerKind = "work" | "community" | "education";

/**
 * Entrada de trayectoria. No se renderiza como seccion: alimenta los datos
 * estructurados (JSON-LD en Seo) y /llms.txt.
 */
export interface CareerEntry {
  id: string;
  kind: CareerKind;
  current: boolean;
  org: string;
  url?: string;
  role: string;
  /** Texto mostrado (p. ej. "abr. 2022 – ago. 2025"). */
  period: string;
  /** Fechas ISO (YYYY-MM) para datos estructurados; opcionales. */
  start?: string;
  end?: string;
  location?: string;
  summary: string;
  tags?: string[];
}

/** Pilar/iniciativa de la comunidad; el icono se resuelve por `id`. */
export interface CommunityPillar {
  id: string;
  label: string;
}

export interface CommunityVideo {
  url: string;
  poster: string;
  caption: string;
}

export interface CommunityPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface CommunitySocial {
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

/** Seccion "Comunidad" (UniconHub). */
export interface Community {
  name: string;
  url: string;
  logo: string;
  role: string;
  tagline: string;
  description: string;
  pillars: CommunityPillar[];
  video: CommunityVideo;
  photos: CommunityPhoto[];
  social: CommunitySocial;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface SiteContent {
  personal: Personal;
  contact: Contact;
  skills: Skills;
  career: CareerEntry[];
  community: Community;
  experiences: Experience[];
  projects: Project[];
  seo: Seo;
}
