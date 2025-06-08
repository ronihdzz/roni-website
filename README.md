# Proyecto de Portafolio Personal

Este proyecto es un portafolio personal desarrollado con Python y FastAPI. El sitio web muestra información personal, experiencias, proyectos, entradas de blog y permite la descarga del CV en formato PDF. Además, se han implementado funcionalidades de CI/CD para despliegues automáticos.

## Funcionalidades

- **Datos Dinámicos**: Los datos del sitio web se extraen de un archivo `data.json`, lo que permite una fácil actualización del contenido.
- **Sección "About Me"**: Muestra una breve descripción con la opción de "Ver más" para expandir el texto.
- **Sección "Moments"**: Renombrada desde "Experiences", muestra momentos destacados con descripciones y medios (imágenes o videos).
- **Sección "Skills"**: Presenta las principales habilidades técnicas organizadas por categorías.
- **Sección "Education"**: Muestra la formación académica relevante.
- **Sección "Projects"**: Espacio para listar proyectos personales.
- **Sección "Blog"**: Espacio para listar entradas de blog.
- **Sección "Download CV"**: Permite la visualización y descarga del CV en formato PDF.
- **Sección "Contact"**: Información de contacto.
- **Enlaces Sociales**: Enlaces a perfiles de LinkedIn, GitHub, YouTube, Medium y DEV Community.
- **Animaciones**: Animaciones atractivas en los enlaces de navegación.
- **Visor de PDF**: Visor embebido para mostrar el CV en formato PDF.

## Estructura del Proyecto

### Archivos Principales

- `main.py`: Archivo principal de la aplicación que configura las rutas y vistas.
- `data.json`: Archivo JSON que contiene los datos dinámicos del sitio web.
- `styles.css`: Archivo CSS que contiene los estilos del sitio web.
- `script.js`: Archivo JavaScript que maneja la funcionalidad de "Ver más" y "Ver menos".

### Estructura de Directorios

```
├── src
│ ├── main.py
│ ├── static
│ │ ├── styles.css
│ │ ├── script.js
│ │ ├── cv.pdf
│ │ └── data.json
└── README.md
```


## Despliegue

El proyecto está configurado con un entorno CI/CD que permite despliegues automáticos en diferentes entornos:

- **Rama `develop`**: Los commits en esta rama despliegan automáticamente el sitio en [https://dev.ronihdz.com](https://dev.ronihdz.com).
- **Rama `main`**: Los commits en esta rama despliegan automáticamente el sitio en [https://ronihdz.com](https://ronihdz.com).

## Cómo Ejecutar el Proyecto Localmente

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias:
    ```bash
    pip install -r requirements.txt
    ```

3. Ubicate dentro del directorio `src` y ejecuta la aplicación:
    ```bash
    uvicorn main:app --reload --port 9999
    ```

4. Abre tu navegador y visita `http://127.0.0.1:9999` para ver el sitio web en funcionamiento.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.