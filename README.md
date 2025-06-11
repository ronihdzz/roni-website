# Portafolio Personal - Roni Hernández

<!-- Language Menu -->
<div align="center">

**Choose your language / Elige tu idioma:**

[![English](https://img.shields.io/badge/English-📖-blue?style=for-the-badge&logo=googletranslate&logoColor=white)](README_EN.md)
[![Español](https://img.shields.io/badge/Español-📖-red?style=for-the-badge&logo=googletranslate&logoColor=white)](README.md)

</div>

---

Un portafolio web personal moderno y responsivo desarrollado con **FastHTML** y **Python**, que presenta información profesional, experiencias, proyectos y habilidades de manera dinámica e interactiva.

## 🎯 ¿Qué hace este proyecto?

Este proyecto es un **sitio web de portafolio personal** que sirve como una plataforma profesional para mostrar:

- **Información personal y profesional** con contenido dinámico multiidioma (Español/Inglés)
- **Secciones interactivas** que incluyen "Acerca de mí", "Momentos destacados", "Habilidades", "Proyectos" y "Contacto"
- **Descarga de CV** en ambos idiomas con visor PDF integrado
- **Formulario de contacto** funcional para comunicación directa
- **Diseño responsivo** que se adapta a diferentes dispositivos
- **Animaciones y efectos visuales** para una experiencia de usuario moderna

## 🚀 Tecnologías Utilizadas

### Backend
- **[FastHTML](https://github.com/answerdotai/fasthtml)** - Framework web moderno de Python para desarrollo rápido
- **[Uvicorn](https://www.uvicorn.org/)** - Servidor ASGI de alto rendimiento

### Frontend
- **HTML5** con componentes dinámicos generados por FastHTML
- **CSS3** con diseño responsivo y animaciones
- **JavaScript (ES6)** para interactividad del cliente
- **Font Awesome** para iconografía
- **Google Fonts** (Inter & JetBrains Mono) para tipografía

### Contenido y Datos
- **JSON** para almacenamiento de contenido dinámico
- **Multiidioma** (Español/Inglés) con cambio dinámico
- **PDFs** para CVs descargables

### DevOps y Despliegue
- **Docker** y **Docker Compose** para containerización
- **GitHub Actions** para CI/CD automatizado
- **Digital Ocean** como plataforma de hosting
- **Multi-environment deployment** (development, staging, production)

## 📁 Estructura del Proyecto

```
├── .github/
│   └── workflows/
│       └── cli.yml                 # Pipeline CI/CD con GitHub Actions
├── src/
│   ├── main.py                     # Aplicación principal FastHTML
│   ├── static/
│   │   ├── data.json              # Contenido dinámico (Español)
│   │   ├── data_en.json           # Contenido dinámico (Inglés)
│   │   ├── styles.css             # Estilos CSS principales
│   │   ├── script.js              # JavaScript para interactividad
│   │   ├── cv.pdf                 # CV en Español
│   │   ├── cv_en.pdf              # CV en Inglés
│   │   ├── roni.jpg               # Foto de perfil
│   │   ├── ronihdz_en_proyectos.jpeg
│   │   └── *.png                  # Iconos y logos
│   └── __pycache__/               # Cache de Python
├── env/                           # Entorno virtual de Python
├── Dockerfile.deploy              # Configuración Docker para producción
├── docker-compose.yml             # Orquestación de contenedores
├── requirements.txt               # Dependencias de Python
├── .gitignore                     # Archivos ignorados por Git
├── LICENSE                        # Licencia del proyecto
├── README.md                      # Documentación del proyecto (Español)
└── README_EN.md                   # Documentación del proyecto (Inglés)
```

### Componentes Clave

#### `src/main.py`
Aplicación principal que incluye:
- Configuración de rutas y vistas
- Manejo de idiomas dinámico
- Componentes reutilizables (sidebar, secciones, formularios)
- Inyección de metadatos SEO
- Servicio de archivos estáticos

#### `src/static/data.json` y `src/static/data_en.json`
Archivos de contenido estructurado que contienen:
- Información personal y profesional
- Experiencias y momentos destacados
- Habilidades organizadas por categorías
- Proyectos con enlaces y descripciones
- Información de contacto
- Metadatos SEO

#### `src/static/styles.css`
Estilos CSS que proporcionan:
- Diseño responsivo con CSS Grid y Flexbox
- Tema oscuro moderno
- Animaciones y transiciones suaves
- Componentes interactivos (dropdowns, modales)
- Optimización para diferentes dispositivos

#### `src/static/script.js`
JavaScript que maneja:
- Funcionalidad "Ver más/Ver menos"
- Dropdowns de idioma y CV
- Sidebar colapsable
- Validación de formularios
- Smooth scrolling entre secciones

## 🌐 Despliegue Automático

El proyecto implementa un sistema de **CI/CD robusto** con diferentes entornos:

- **Branch `development`** → Deploy automático a [dev.ronihdz.com](https://dev.ronihdz.com)
- **Branch `main`** → Deploy automático a [ronihdz.com](https://ronihdz.com)

### Pipeline de Despliegue
1. **Build y Push** - Construcción de imagen Docker y push a Digital Ocean Container Registry
2. **Deploy** - Despliegue automático al servidor correspondiente vía SSH
3. **Multi-environment** - Mapeo automático de branches a entornos

## 🛠️ Cómo Ejecutar Localmente

### Prerequisitos
- Python 3.11+
- pip (gestor de paquetes de Python)

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ronihdzz/website.git
   cd website
   ```

2. **Crear y activar entorno virtual:**
   ```bash
   python -m venv env
   source env/bin/activate  # En Windows: env\Scripts\activate
   ```

3. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Ejecutar la aplicación:**
   ```bash
   cd src
   uvicorn main:app --reload --port 9999
   ```

5. **Abrir en el navegador:**
   ```
   http://127.0.0.1:9999
   ```

### Usando Docker

```bash
# Construir y ejecutar con Docker Compose
docker-compose up --build

# Acceder en: http://localhost:9000
```

## 🔧 Personalización

Para adaptar este portafolio a tus necesidades:

1. **Modificar contenido:** Edita `src/static/data.json` y `src/static/data_en.json`
2. **Cambiar estilos:** Personaliza `src/static/styles.css`
3. **Añadir funcionalidad:** Extiende `src/main.py` con nuevas rutas o componentes
4. **Actualizar assets:** Reemplaza imágenes y PDFs en `src/static/`

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

**Desarrollado con ❤️ por Roni Hernández**

🌐 **Website:** [ronihdz.com](https://ronihdz.com)  
📧 **Email:** ronihdzbel@gmail.com  
💼 **LinkedIn:** [linkedin.com/in/ronihdz](https://linkedin.com/in/ronihdz)  
🔧 **GitHub:** [github.com/ronihdzz](https://github.com/ronihdzz)