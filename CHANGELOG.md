# Changelog

Todas las modificaciones relevantes de este proyecto se documentan en este archivo.

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). Versionado: [SemVer](https://semver.org/lang/es/).

## [Unreleased]

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

[Unreleased]: https://github.com/ronihdzz/roni-website/compare/v0.1.0...develop
[0.1.0]: https://github.com/ronihdzz/roni-website/releases/tag/v0.1.0
