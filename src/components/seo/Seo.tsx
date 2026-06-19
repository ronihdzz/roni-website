import Head from "next/head";
import { useRouter } from "next/router";
import { site } from "@/config/site";
import type { Seo as SeoData } from "@/content/types";

type SeoProps = {
  seo: SeoData;
  jobTitle: string;
};

/**
 * Meta tags (SEO + Open Graph + Twitter), canonical/hreflang por locale y
 * JSON-LD (Person). Centraliza el <head> del sitio.
 */
export default function Seo({ seo, jobTitle }: SeoProps) {
  const { locale } = useRouter();
  const isEn = locale === "en";
  const canonical = isEn ? `${site.url}/en` : site.url;
  const ogLocale = isEn ? "en_US" : "es_MX";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle,
    description: seo.description,
    email: site.email,
    telephone: site.phoneHref.replace("tel:", ""),
    sameAs: [
      site.social.linkedin,
      site.social.github,
      site.social.youtube,
      site.social.medium,
      site.social.devto,
    ],
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(", ")} />
      <meta name="author" content={site.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={site.themeColor} />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="es" href={site.url} />
      <link rel="alternate" hrefLang="en" href={`${site.url}/en`} />
      <link rel="alternate" hrefLang="x-default" href={site.url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
