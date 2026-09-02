# Changelog

Todas las modificaciones relevantes de este proyecto se documentan en este archivo.

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). Versionado: [SemVer](https://semver.org/lang/es/).

## [Unreleased]

## [0.2.0] - 2026-09-02

Actualización de contenido y experiencia: "Acerca de" con Mercado Pago, la IA en el
flujo de trabajo y UniconHub; nueva sección Comunidad con visor de fotos y videos;
proyectos de herramientas con IA; y mejoras de legibilidad para IA y buscadores
(texto completo en el HTML, JSON-LD enriquecido, imagen Open Graph y `llms.txt`).

### Added
- Sección **Comunidad** (`#community`, después de "Momentos"): UniconHub en tono sobrio con el video del equipo, descripción, iniciativas, fotos y enlaces a uniconhub.org y sus redes.
- Hero: chips con los roles actuales (Senior Software Engineer @ Mercado Pago; Cofundador y líder @ UniconHub).
- Proyectos de herramientas con IA (skills de code review para Claude Code, bot de Slack sobre BigQuery vía MCP, RAG sobre documentación, procesamiento de documentos, preguntas automáticas para el equipo); los proyectos sin enlace público muestran su estado.
- Visor (lightbox) para ver fotos y videos en grande: clic en las fotos de Comunidad y de Momentos, y botón "Ver en grande" sobre los videos; cierra con Escape, con el botón o tocando fuera.
- Habilidades nuevas con iconos: Claude Code, MCP, RAG, Agentes IA, Grafana, Datadog y BigQuery.
- Legibilidad para IA y buscadores: texto completo siempre presente en el HTML (el recorte "Ver más" es solo visual), un único `<h1>`, JSON-LD con `@graph` (Person con nombre completo, `worksFor`, `memberOf`, `alumniOf`, `knowsAbout`; Organization de UniconHub con `founder`; WebSite), imagen Open Graph/Twitter (`public/og-image.jpg`), meta `robots` y `/llms.txt` (`/en/llms.txt`) generado del contenido.
- Tipos de contenido: `Role`, `CareerEntry` (trayectoria: Mercado Pago, UniconHub, Fairplay, Scitum/Telmex, UNAM; solo alimenta JSON-LD y `llms.txt`) y `Community` en `SiteContent`; identidad (nombre completo, alias, imagen OG) en `src/config/site.ts`.
- Assets: `uniconhub-mark.png` (isotipo oficial) y fotos `uniconhub-*.jpg` en `public/`.

### Changed
- Texto "Acerca de" actualizado conservando la redacción original (monolito y core bancario en Fairplay, Telmex, stack) e incorporando Mercado Pago, la IA en el flujo de trabajo y UniconHub.
- Profesión corregida ("Sr Sofware Engenieer" → "Senior Software Engineer"), SEO real en lugar del texto genérico y skills destacadas actualizadas.
- Fondos alternados entre secciones tras insertar "Comunidad" (Habilidades y Contacto pasan a fondo de superficie; Proyectos a fondo base).

## [0.1.0] - 2026-06-19

Primera versión versionada del sitio. Reescritura completa del portafolio desde
FastHTML/Python a Next.js, conservando el diseño y el contenido, y adoptando un
flujo de despliegue con Docker + Dokploy vía GitHub Actions.

### Added
- Reescritura del portafolio a **Next.js 16** (Pages Router, React 19, TypeScript estricto, SCSS Modules), con salida `standalone` y React Compiler.
- Internacionalización ES/EN con routing nativo de Next: español en `/` e inglés en `/en`, prerenderizado estático (SSG) por idioma vía `getStaticProps`, con `canonical` y `hreflang` por locale.
- Despliegue Docker + Dokploy vía GitHub Actions: build multi-stage no-root, imágenes versionadas por timestamp, tag de `rollback` automático y deploy por entorno (`develop` → development, `main` → production) con workflow reutilizable.
- Contenido del sitio externalizado y tipado en `src/content` (`content.es.ts` / `content.en.ts` validados por la interfaz `SiteContent`); textos de interfaz centralizados en `src/config/i18n.ts`.
- Componentes reutilizables (`Sidebar`, `Footer`, `Dropdown`, `ReadMore`, `Reveal`, `Tag`, `Media`, `SkillIcon`) y hooks (`useClickOutside`, `usePersistedState`, `useScrollSpy`, `useInView`).
- SEO: meta tags, Open Graph, Twitter Card, `hreflang` por idioma y JSON-LD (`Person`); `sitemap.xml` y `robots.txt` generados con `next-sitemap`.
- Iconografía con `lucide-react` (UI) y `react-icons` (Simple Icons / Font Awesome para marcas).
- Tooling de desarrollo: `Makefile`, `docker-compose.yml` (dev) y `docker-compose.prod.yml` (Traefik/Dokploy), `Dockerfile.app` (producción) y `Dockerfile` (local), `.dockerignore` y `.env.example`.

### Changed
- Manejo de idioma: de una variable global mutable en el servidor (estado compartido entre peticiones, con recarga) a i18n nativo por ruta, sin recargas.
- Modelo de habilidades: las categorías pasan de un objeto con claves traducidas a un array `{ id, title, items }` con `id` estable entre idiomas.

### Fixed
- Formulario de contacto: el correo destino apuntaba a una dirección equivocada; ahora usa el email real de contacto.

### Removed
- Stack FastHTML/Python (`src/main.py`, `requirements.txt`, `Dockerfile.deploy`) y los estáticos servidos a mano (`data.json`, `script.js`, `styles.css`).

[Unreleased]: https://github.com/ronihdzz/roni-website/compare/v0.2.0...develop
[0.2.0]: https://github.com/ronihdzz/roni-website/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/ronihdzz/roni-website/releases/tag/v0.1.0
