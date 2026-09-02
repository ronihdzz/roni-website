import type { GetServerSideProps } from "next";
import { site } from "@/config/site";
import { normalizeLocale, type Locale } from "@/config/i18n";
import { getContent } from "@/content";
import type { SiteContent } from "@/content/types";

const LABELS = {
  es: {
    otherLang: "Versión en inglés",
    roles: "Roles actuales",
    about: "Acerca de",
    experience: "Experiencia",
    community: "Comunidad",
    moments: "Momentos destacados",
    projects: "Proyectos",
    skills: "Habilidades",
    links: "Enlaces",
    identity: "Identidad",
    fullName: "Nombre completo",
    alias: "Alias",
    site: "Sitio (español)",
    siteEn: "Sitio (inglés)",
    cv: "CV en español (PDF)",
    cvEn: "CV en inglés (PDF)",
    initiatives: "Iniciativas",
    at: "en",
  },
  en: {
    otherLang: "Spanish version",
    roles: "Current roles",
    about: "About",
    experience: "Experience",
    community: "Community",
    moments: "Highlights",
    projects: "Projects",
    skills: "Skills",
    links: "Links",
    identity: "Identity",
    fullName: "Full name",
    alias: "Alias",
    site: "Site (Spanish)",
    siteEn: "Site (English)",
    cv: "Spanish CV (PDF)",
    cvEn: "English CV (PDF)",
    initiatives: "Initiatives",
    at: "at",
  },
} as const;

/** Construye el documento llms.txt (https://llmstxt.org) a partir del contenido tipado. */
function buildLlmsTxt(locale: Locale, content: SiteContent): string {
  const t = LABELS[locale];
  const { personal, career, community, experiences, projects, skills, seo } = content;
  const otherHref = locale === "es" ? `${site.url}/en/llms.txt` : `${site.url}/llms.txt`;
  const lines: string[] = [];

  lines.push(`# ${site.name}`, "", `> ${seo.description}`, "");
  lines.push(`${t.otherLang}: ${otherHref}`, "");

  lines.push(`## ${t.roles}`, "");
  for (const role of personal.roles) {
    lines.push(`- ${role.title} ${t.at} ${role.org}${role.url ? ` (${role.url})` : ""}`);
  }
  lines.push("");

  lines.push(`## ${t.about}`, "", personal.about, "");

  lines.push(`## ${t.experience}`, "");
  for (const entry of career) {
    const org = entry.url ? `[${entry.org}](${entry.url})` : entry.org;
    const where = entry.location ? ` · ${entry.location}` : "";
    lines.push(`### ${entry.role} — ${org}`, "", `${entry.period}${where}`, "", entry.summary);
    if (entry.tags?.length) lines.push("", `Tags: ${entry.tags.join(", ")}`);
    lines.push("");
  }

  lines.push(`## ${t.community}: ${community.name}`, "");
  lines.push(`${community.role} — [${community.url}](${community.url}) · ${community.tagline}`, "");
  lines.push(community.description, "");
  lines.push(`${t.initiatives}: ${community.pillars.map((p) => p.label).join(", ")}`, "");

  lines.push(`## ${t.moments}`, "");
  for (const exp of experiences) {
    const award = exp.award ? ` (${exp.award})` : "";
    lines.push(`### ${exp.title}${award}`, "", `${exp.date} · ${exp.location}`, "", exp.description, "");
  }

  lines.push(`## ${t.projects}`, "");
  for (const project of projects) {
    const links = Object.values(project.links).filter(Boolean) as string[];
    const meta = [project.category, project.status].filter(Boolean).join(" · ");
    lines.push(`- **${project.title}** (${meta}): ${project.description}`);
    lines.push(`  ${project.technologies.join(", ")}${links.length ? ` — ${links.join(" · ")}` : ""}`);
  }
  lines.push("");

  lines.push(`## ${t.skills}`, "");
  for (const category of skills.categories) {
    lines.push(`- ${category.title}: ${category.items.map((s) => s.name).join(", ")}`);
  }
  lines.push("");

  lines.push(`## ${t.links}`, "");
  lines.push(`- ${t.site}: ${site.url}`);
  lines.push(`- ${t.siteEn}: ${site.url}/en`);
  lines.push(`- ${t.cv}: ${site.url}${personal.cv.spanish}`);
  lines.push(`- ${t.cvEn}: ${site.url}${personal.cv.english}`);
  lines.push(`- LinkedIn: ${site.social.linkedin}`);
  lines.push(`- GitHub: ${site.social.github}`);
  lines.push(`- YouTube: ${site.social.youtube}`);
  lines.push(`- Medium: ${site.social.medium}`);
  lines.push(`- dev.to: ${site.social.devto}`);
  lines.push(`- ${community.name}: ${community.url}`);
  lines.push(`- Email: ${site.email}`, "");

  lines.push(`## ${t.identity}`, "");
  lines.push(`- ${t.fullName}: ${site.fullName}`);
  lines.push(`- ${t.alias}: ${site.alias}`, "");

  return lines.join("\n");
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  const loc = normalizeLocale(locale);
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.write(buildLlmsTxt(loc, getContent(loc)));
  res.end();
  return { props: {} };
};

/** La respuesta se escribe en getServerSideProps; el componente no renderiza. */
export default function LlmsTxt() {
  return null;
}
