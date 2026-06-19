/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ronihdz.com";

const config = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/404", "/500"],
  alternateRefs: [
    { href: siteUrl, hreflang: "es" },
    { href: `${siteUrl}/en`, hreflang: "en" },
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  transform: async (_config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
    alternateRefs: _config.alternateRefs ?? [],
  }),
};

module.exports = config;
