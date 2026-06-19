.PHONY: help up down restart stop start pause unpause logs status ps info shell shell-root install clean rebuild build build-no-cache destroy reset env-check env-show permissions fix-cambios kill-all nuke url ports network-inspect lint health inicio

GREEN=\033[0;32m
YELLOW=\033[1;33m
RED=\033[0;31m
CYAN=\033[0;36m
NC=\033[0m

help:
	@echo ""
	@echo "$(GREEN)=====================================================$(NC)"
	@echo "$(GREEN)    Roni Web - Comandos de Desarrollo                 $(NC)"
	@echo "$(GREEN)=====================================================$(NC)"
	@echo ""
	@echo "$(CYAN)COMANDOS PRINCIPALES:$(NC)"
	@echo "  $(YELLOW)make up$(NC)              - Levantar contenedor (app)"
	@echo "  $(YELLOW)make down$(NC)            - Bajar contenedor"
	@echo "  $(YELLOW)make restart$(NC)         - Reiniciar contenedor"
	@echo "  $(YELLOW)make status$(NC)          - Ver estado del contenedor"
	@echo "  $(YELLOW)make logs$(NC)            - Ver logs en tiempo real"
	@echo "  $(YELLOW)make info$(NC)            - Informacion completa del proyecto"
	@echo ""
	@echo "$(CYAN)LOGS Y DEBUG:$(NC)"
	@echo "  $(YELLOW)make logs$(NC)            - Ver logs en tiempo real"
	@echo "  $(YELLOW)make env-show$(NC)        - Ver variables de entorno activas"
	@echo "  $(YELLOW)make env-check$(NC)       - Verificar configuracion .env"
	@echo "  $(YELLOW)make health$(NC)          - Ver estado de salud del servicio"
	@echo ""
	@echo "$(CYAN)ACCESO A CONTENEDORES:$(NC)"
	@echo "  $(YELLOW)make shell$(NC)           - Entrar al contenedor (sh)"
	@echo "  $(YELLOW)make shell-root$(NC)      - Entrar al contenedor como root"
	@echo ""
	@echo "$(CYAN)DEPENDENCIAS Y CODIGO:$(NC)"
	@echo "  $(YELLOW)make install$(NC)         - Instalar/actualizar dependencias (npm)"
	@echo "  $(YELLOW)make lint$(NC)            - Ejecutar linter (ESLint)"
	@echo ""
	@echo "$(CYAN)LIMPIEZA Y MANTENIMIENTO:$(NC)"
	@echo "  $(YELLOW)make clean$(NC)           - Limpiar cache de Next.js (.next)"
	@echo "  $(YELLOW)make permissions$(NC)     - Corregir permisos"
	@echo "  $(YELLOW)make fix-cambios$(NC)     - Si los cambios no se ven (limpia + reinicia)"
	@echo ""
	@echo "$(CYAN)CONSTRUCCION Y RESET:$(NC)"
	@echo "  $(YELLOW)make build$(NC)           - Reconstruir imagen Docker"
	@echo "  $(YELLOW)make rebuild$(NC)         - Reconstruir todo desde cero"
	@echo "  $(YELLOW)make build-no-cache$(NC)  - Reconstruir sin usar cache"
	@echo "  $(YELLOW)make destroy$(NC)         - Bajar todo y borrar volumenes"
	@echo "  $(YELLOW)make reset$(NC)           - Reset completo (destroy + build + up)"
	@echo "  $(YELLOW)make nuke$(NC)            - Destruccion total (limpia TODO)"
	@echo ""
	@echo "$(CYAN)CONTROL AVANZADO:$(NC)"
	@echo "  $(YELLOW)make stop$(NC)            - Detener contenedor sin eliminarlo"
	@echo "  $(YELLOW)make start$(NC)           - Iniciar contenedor detenido"
	@echo "  $(YELLOW)make pause$(NC)           - Pausar contenedor (congelar)"
	@echo "  $(YELLOW)make unpause$(NC)         - Despausar contenedor"
	@echo "  $(YELLOW)make kill-all$(NC)        - Matar todos los contenedores"
	@echo ""
	@echo "$(CYAN)INFORMACION:$(NC)"
	@echo "  $(YELLOW)make url$(NC)             - Ver URL de acceso a la aplicacion"
	@echo "  $(YELLOW)make ports$(NC)           - Ver puertos expuestos"
	@echo "  $(YELLOW)make network-inspect$(NC) - Inspeccionar red de Docker"
	@echo ""
	@echo "$(GREEN)=====================================================$(NC)"
	@echo ""

up:
	@echo "$(GREEN)Levantando contenedor...$(NC)"
	@docker compose up -d
	@echo ""
	@echo "$(GREEN)Contenedor iniciado correctamente!$(NC)"
	@echo ""
	@make --no-print-directory url

down:
	@echo "$(YELLOW)Bajando contenedor...$(NC)"
	@docker compose down
	@echo "$(GREEN)Contenedor detenido$(NC)"

restart:
	@echo "$(YELLOW)Reiniciando contenedor...$(NC)"
	@docker compose restart
	@echo "$(GREEN)Contenedor reiniciado!$(NC)"
	@make --no-print-directory url

stop:
	@echo "$(YELLOW)Deteniendo contenedor...$(NC)"
	@docker compose stop
	@echo "$(GREEN)Contenedor detenido$(NC)"

start:
	@echo "$(GREEN)Iniciando contenedor...$(NC)"
	@docker compose start
	@echo "$(GREEN)Contenedor iniciado!$(NC)"
	@make --no-print-directory url

pause:
	@echo "$(YELLOW)Pausando contenedor...$(NC)"
	@docker compose pause
	@echo "$(GREEN)Contenedor pausado$(NC)"

unpause:
	@echo "$(GREEN)Despausando contenedor...$(NC)"
	@docker compose unpause
	@echo "$(GREEN)Contenedor activo nuevamente!$(NC)"

logs:
	@echo "$(CYAN)Logs en tiempo real (Ctrl+C para salir)...$(NC)"
	@docker compose logs -f --tail=100

status:
	@echo "$(CYAN)Estado del contenedor:$(NC)"
	@echo ""
	@docker compose ps
	@echo ""

ps: status

info:
	@echo ""
	@echo "$(GREEN)=====================================================$(NC)"
	@echo "$(GREEN)    Roni Web - Informacion del Proyecto               $(NC)"
	@echo "$(GREEN)=====================================================$(NC)"
	@echo ""
	@echo "$(CYAN)URLs de Acceso:$(NC)"
	@echo "   Aplicacion Web: $(YELLOW)http://localhost:3006$(NC)"
	@echo ""
	@echo "$(CYAN)Contenedores:$(NC)"
	@docker compose ps
	@echo ""
	@echo "$(CYAN)Volumenes Docker:$(NC)"
	@docker volume ls | grep roni || echo "   (ninguno)"
	@echo ""
	@echo "$(CYAN)Red Docker:$(NC)"
	@docker network ls | grep roni || echo "   (ninguna)"
	@echo ""
	@echo "$(CYAN)Uso de recursos:$(NC)"
	@docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" roni-web 2>/dev/null || echo "   Contenedor no esta corriendo"
	@echo ""

shell:
	@echo "$(CYAN)Entrando al contenedor...$(NC)"
	@docker compose exec roni-web sh

shell-root:
	@echo "$(CYAN)Entrando al contenedor como root...$(NC)"
	@docker compose exec -u root roni-web sh

install:
	@echo "$(GREEN)Instalando dependencias con npm...$(NC)"
	@docker compose exec roni-web npm install
	@echo "$(GREEN)Dependencias instaladas$(NC)"

lint:
	@echo "$(CYAN)Ejecutando ESLint...$(NC)"
	@docker compose exec roni-web npm run lint
	@echo "$(GREEN)Linting completado$(NC)"

clean:
	@echo "$(YELLOW)Limpiando cache de Next.js...$(NC)"
	@docker compose exec roni-web rm -rf .next/cache 2>/dev/null || true
	@echo "$(GREEN)Cache limpiado$(NC)"

permissions:
	@echo "$(YELLOW)Corrigiendo permisos...$(NC)"
	@docker compose exec roni-web bash -c "chmod -R 755 /app && chown -R node:node /app" 2>/dev/null || true
	@echo "$(GREEN)Permisos corregidos$(NC)"

fix-cambios: clean restart
	@echo "$(GREEN)Cache limpiado y contenedor reiniciado$(NC)"
	@echo "$(YELLOW)Recarga tu navegador (Ctrl+Shift+R para forzar)$(NC)"

rebuild:
	@echo "$(YELLOW)Reconstruyendo todo desde cero...$(NC)"
	@docker compose down
	@docker compose build --no-cache
	@docker compose up -d
	@echo "$(GREEN)Reconstruccion completa!$(NC)"
	@make --no-print-directory url

build:
	@echo "$(YELLOW)Construyendo imagen Docker...$(NC)"
	@docker compose build
	@echo "$(GREEN)Imagen construida!$(NC)"

build-no-cache:
	@echo "$(YELLOW)Construyendo imagen sin cache...$(NC)"
	@docker compose build --no-cache
	@echo "$(GREEN)Imagen construida!$(NC)"

destroy:
	@echo "$(RED)ADVERTENCIA: Esto borrara todos los volumenes (node_modules, .next cache)!$(NC)"
	@echo "$(YELLOW)Presiona Ctrl+C para cancelar, o Enter para continuar...$(NC)"
	@read confirm
	@echo "$(RED)Destruyendo todo...$(NC)"
	@docker compose down -v
	@echo "$(GREEN)Todo destruido (volumenes eliminados)$(NC)"

reset: destroy build up
	@echo "$(GREEN)Reset completo finalizado!$(NC)"

env-check:
	@echo "$(CYAN)Verificando configuracion de .env...$(NC)"
	@echo ""
	@if [ -f .env ]; then \
		echo "$(GREEN)Archivo .env existe$(NC)"; \
		echo ""; \
		echo "$(CYAN)Variables configuradas:$(NC)"; \
		grep -v '^#' .env | grep -v '^$$' | sed 's/^/   /' || true; \
	else \
		echo "$(RED)Archivo .env NO encontrado$(NC)"; \
		echo "$(YELLOW)Crea uno usando: cp .env.example .env$(NC)"; \
	fi
	@echo ""

env-show:
	@echo "$(CYAN)Variables de entorno del contenedor:$(NC)"
	@echo ""
	@docker compose exec roni-web env | grep -E '(NODE_ENV|NEXT_|TZ|WATCHPACK)' | sort || echo "$(RED)Contenedor no esta corriendo$(NC)"
	@echo ""

health:
	@echo "$(CYAN)Estado de salud del servicio:$(NC)"
	@echo ""
	@docker compose ps --format "table {{.Name}}\t{{.Status}}"
	@echo ""

kill-all:
	@echo "$(RED)Matando todos los contenedores...$(NC)"
	@docker compose kill
	@echo "$(GREEN)Todos los contenedores matados$(NC)"

nuke:
	@echo "$(RED)DESTRUCCION TOTAL$(NC)"
	@echo "$(RED)Esto eliminara:$(NC)"
	@echo "  - Contenedores"
	@echo "  - Volumenes (node_modules, .next cache)"
	@echo "  - Redes"
	@echo "  - Imagenes locales"
	@echo ""
	@echo "$(YELLOW)Presiona Ctrl+C para cancelar, o Enter para continuar...$(NC)"
	@read confirm
	@echo "$(RED)Ejecutando nuke...$(NC)"
	@docker compose down -v --rmi local --remove-orphans
	@docker system prune -f
	@echo "$(GREEN)Destruccion completa$(NC)"
	@echo "$(YELLOW)Para volver a usar: make build && make up$(NC)"

url:
	@echo "$(CYAN)URL de acceso:$(NC)"
	@echo ""
	@echo "   Aplicacion Web: $(GREEN)http://localhost:3006$(NC)"
	@echo ""
	@echo "$(YELLOW)Tip: Ctrl+Click en la URL para abrirla en el navegador$(NC)"
	@echo ""

ports:
	@echo "$(CYAN)Puertos expuestos:$(NC)"
	@echo ""
	@docker compose ps
	@echo ""

network-inspect:
	@echo "$(CYAN)Inspeccionando red Docker...$(NC)"
	@docker network inspect roni-website_default 2>/dev/null || echo "$(RED)Red no encontrada$(NC)"

inicio: up
	@echo "$(GREEN)Listo para desarrollar!$(NC)"
