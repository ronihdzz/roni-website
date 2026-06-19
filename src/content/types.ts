/**
 * Tipos del contenido del sitio. Garantizan que content.es.ts y content.en.ts
 * compartan exactamente la misma forma (fuente unica de verdad tipada).
 */

export interface CvLinks {
  spanish: string;
  english: string;
}

export interface Personal {
  name: string;
  profession: string;
  titleParts: string[];
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

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface SiteContent {
  personal: Personal;
  contact: Contact;
  skills: Skills;
  experiences: Experience[];
  projects: Project[];
  seo: Seo;
}
