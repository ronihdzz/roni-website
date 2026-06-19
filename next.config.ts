import type { NextConfig } from "next";
import path from "path";

const stylesDir = path.join(process.cwd(), "src", "styles").replace(/\\/g, "/");

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  reactStrictMode: true,
  trailingSlash: false,
  // i18n nativo (Pages Router): "/" => es, "/en" => en. SSG por locale.
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: false,
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api", "import", "global-builtin"],
    additionalData: `@import "${stylesDir}/variables";\n@import "${stylesDir}/mixins";\n`,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
