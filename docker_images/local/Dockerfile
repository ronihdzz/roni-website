# =============================================================================
# Dockerfile de desarrollo local - Roni Web
# Hot-reload con npm dev, optimizado para desarrollo
# =============================================================================

FROM node:22-alpine

# Instalar herramientas utiles para desarrollo
RUN apk add --no-cache curl git bash

WORKDIR /app

# Copiar archivos de dependencias primero (mejor cache de Docker)
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci

# El codigo fuente se monta como volumen en docker-compose
# No se copia aqui para permitir hot-reload

EXPOSE 3000

# Healthcheck para verificar que el servidor de desarrollo responde
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Instalar dependencias al iniciar (por si hay cambios en package.json)
# y luego ejecutar el servidor de desarrollo con hot-reload
CMD ["sh", "-c", "npm install && npm run dev"]
