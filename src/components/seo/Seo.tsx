import Head from "next/head";
import { useRouter } from "next/router";
import { site } from "@/config/site";
import type { SiteContent } from "@/content/types";

type SeoProps = {
  content: SiteContent;
};

/**
 * Meta tags (SEO + Open Graph + Twitter), canonical/hreflang por locale y
 * JSON-LD (@graph con Person, Organization de la comunidad y WebSite).
 * Centraliza el <head> del sitio.
 */
export default function Seo({ content }: SeoProps) {
  const { locale } = useRouter();
  const { seo, personal, career, community, skills, contact } = content;
  const isEn = locale === "en";
  const canonical = isEn ? `${site.url}/en` : site.url;
  const ogLocale = isEn ? "en_US" : "es_MX";
  const ogImage = `${site.url}${site.ogImage}`;

  const personId = `${site.url}/#person`;
  const orgId = `${community.url}/#organization`;
  const workRole = personal.roles.find((role) => role.kind === "work");
  const communityEntry = career.find((entry) => entry.id === "uniconhub");
  const education = career.filter((entry) => entry.kind === "education");
  const knowsAbout = Array.from(
    new Set([
      ...skills.featured,
      ...skills.categories.flatMap((category) =>
        category.items.map((item) => item.name),
      ),
    ]),
  );
  const communitySameAs = Object.values(community.social).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        alternateName: [site.fullName, site.alias],
        givenName: site.givenName,
        familyName: site.familyName,
        url: site.url,
        image: `${site.url}${personal.photo}`,
        jobTitle: personal.profession,
        description: seo.description,
        email: site.email,
        telephone: site.phoneHref.replace("tel:", ""),
        address: {
          "@type": "PostalAddress",
          addressLocality: contact.location,
          addressCountry: "MX",
        },
        ...(workRole && {
          worksFor: {
            "@type": "Organization",
            name: workRole.org,
            url: workRole.url,
          },
        }),
        memberOf: {
          "@type": "OrganizationRole",
          roleName: community.role,
          ...(communityEntry?.start && { startDate: communityEntry.start }),
          memberOf: { "@id": orgId },
        },
        alumniOf: education.map((entry) => ({
          "@type": "CollegeOrUniversity",
          name: entry.org,
          url: entry.url,
        })),
        knowsAbout,
        knowsLanguage: ["es", "en"],
        sameAs: [
          site.social.linkedin,
          site.social.github,
          site.social.youtube,
          site.social.medium,
          site.social.devto,
          community.url,
        ],
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: community.name,
        url: community.url,
        logo: `${site.url}${community.logo}`,
        slogan: community.tagline,
        ...(communityEntry?.start && { foundingDate: communityEntry.start }),
        founder: { "@id": personId },
        sameAs: communitySameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: ["es", "en"],
        author: { "@id": personId },
      },
    ],
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(", ")} />
      <meta name="author" content={site.name} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={site.themeColor} />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="es" href={site.url} />
      <link rel="alternate" hrefLang="en" href={`${site.url}/en`} />
      <link rel="alternate" hrefLang="x-default" href={site.url} />

      {/* Open Graph */}
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
