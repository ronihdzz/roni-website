# Roni Web

Portafolio personal de **Roni Hernández** — Sr Software Engineer.
Sitio bilingüe (ES/EN) construido con **Next.js 16** (Pages Router), **React 19**,
**TypeScript** y **SCSS Modules**.

> Migrado desde FastHTML/Python. El diseño dark original (slate + azul/cyan) se
> conservó 1:1; el contenido vive ahora en `src/content` tipado.

## Stack

- **Next.js 16.2** (Pages Router, `output: standalone`, React Compiler)
- **React 19** + **TypeScript 5** (strict, `noUncheckedIndexedAccess`)
- **SCSS Modules** con auto-import de `variables` y `mixins` (ver `next.config.ts`)
- **i18n nativo** de Next: `/` (es) y `/en` (en), SSG por locale con `getStaticProps`
- **lucide-react** (chrome de UI) + **react-icons** (Simple Icons / Font Awesome para marcas)
- **next-sitemap** para `sitemap.xml` / `robots.txt`
- Despliegue con **Docker** + **Dokploy** vía **GitHub Actions**

## Estructura

```
src/
  config/        site.ts (identidad), i18n.ts (locales + textos de UI)
  content/       types.ts + content.es.ts / content.en.ts (contenido tipado por idioma)
  components/
    layout/      Layout (estado colapso/movil), Sidebar, Footer
    home/        Hero (About), Moments, Skills, Projects, Contact
    ui/          Dropdown, ReadMore, Reveal, Tag, Media, SkillIcon
    seo/         Seo (meta + OG + hreflang + JSON-LD Person)
  hooks/         useClickOutside, usePersistedState, useScrollSpy, useInView
  pages/         _app, _document (lang por locale), index (getStaticProps)
  styles/        globals.scss (tokens :root), _variables.scss, _mixins.scss
public/          imagenes, CVs (cv.pdf / cv_en.pdf), favicon
docker_images/
  app/           Dockerfile.app (produccion, multi-stage standalone, no-root)
  local/         Dockerfile (desarrollo con hot-reload)
.github/workflows/ main.yml (build+push+deploy) + deploy-reusable.yml (webhook Dokploy)
```

## Desarrollo

### Opción A — Local (Node 22+)

```bash
cp .env.example .env.local
npm install
npm run dev          # http://localhost:3000
```

### Opción B — Docker (vía Makefile)

```bash
make build           # construir imagen de desarrollo
make up              # levantar contenedor  -> http://localhost:3006
make logs            # ver logs en tiempo real
make help            # ver todos los comandos
```

## Build de producción

```bash
npm run build && npm start
```

Usa salida `standalone` y se ejecuta como usuario no-root. Ver
`docker_images/app/Dockerfile.app`.

## Internacionalización

- ES en `/`, EN en `/en` (SSG por locale; `getStaticProps` elige `content.es` / `content.en`).
- El selector de idioma enlaza entre locales; `canonical` + `hreflang` por idioma.
- Textos de interfaz en `src/config/i18n.ts`; contenido en `src/content/content.{es,en}.ts`.

## CI/CD

`.github/workflows/main.yml` se dispara en push a `main` y `develop`:

1. **Build & Push** de la imagen Docker al registry.
2. **Deploy** al entorno correspondiente vía webhook de Dokploy (`develop`→development / `main`→production).

Requiere las siguientes **variables** y **secrets** en el repositorio:

| Tipo     | Nombre                       | Ejemplo / Descripción                                          |
|----------|------------------------------|----------------------------------------------------------------|
| Variable | `BRANCH_TAG_MAP`             | `{"main":"prod","develop":"dev"}`                             |
| Variable | `REGISTRY_TYPE`              | vacío (registry custom) o `dockerhub`                          |
| Variable | `REGISTRY_URL`               | `registry.ronihdz.com` (si es custom)                         |
| Variable | `REGISTRY_PROJECT`           | `roni`                                                         |
| Variable | `REGISTRY_IMAGE_NAME`        | `roni-web`                                                     |
| Variable | `DOCKERFILE_PATH`            | Opcional; default `docker_images/app/Dockerfile.app`          |
| Secret   | `REGISTRY_USERNAME`          | Usuario del registry                                          |
| Secret   | `REGISTRY_PASSWORD`          | Password/token del registry                                   |
| Secret   | `DOKPLOY_DEPLOY_WEBHOOK_URL` | Webhook de despliegue de Dokploy (por entorno)               |

La imagen se publica como `:<tag>-<timestamp>` y `:<tag>-latest`, creando además
un tag `:<tag>-rollback` desde la imagen previa. `docker-compose.prod.yml` la
consume en Dokploy con labels de Traefik (`Host(ronihdz.com)`, TLS letsencrypt,
puerto 3000).

## SEO

- Configura `NEXT_PUBLIC_BASE_URL` para canonical, hreflang, JSON-LD y sitemap.
- `npm run build` ejecuta `next-sitemap` (`postbuild`) generando `public/sitemap.xml` y `public/robots.txt`.
