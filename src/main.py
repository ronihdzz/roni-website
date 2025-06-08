from fasthtml.common import *
import os
import json

# Configuración de la app
app, rt = fast_app()

# Configurar la ruta para servir archivos estáticos
app.mount("/static", StaticFiles(directory="static"), name="static")

# Función para inyectar el CSS y el JS en el header
def inject_css():
    return Head(
        Link(rel="stylesheet", href="/static/styles.css"),
        Link(rel="stylesheet", href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"),
        Link(rel="preconnect", href="https://fonts.googleapis.com"),
        Link(rel="preconnect", href="https://fonts.gstatic.com", crossorigin=""),
        Link(rel="stylesheet", href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;700&display=swap"),
        Script(src="/static/script.js")
    )

# Función para leer datos desde un archivo JSON
def read_data(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

# Leer los datos desde el archivo JSON
data = read_data(os.path.join('.', 'static', 'data.json'))

# Vista de la página principal
@rt("/")
def home_view():
    return Html(
        inject_css(),  # Inyecta el CSS y el JS en el header
        Body(
            Div(
                sidebar(),  # Menú lateral
                main_content(),  # Contenido principal
                cls="container"
            )
        )
    )

# Componentes
def sidebar():
    return Nav(
        Div(
            Img(src="static/ronihdz_en_proyectos.jpeg", alt="Teaching", cls="teaching-image-sidebar"),
            H2(data['name']),
            P(data['profession']),
            Ul(
                Li(A("About", href="#about")),
                Li(A("Moments", href="#moments")),
                Li(A("Projects", href="#projects")),
                Li(A("Blog", href="#blog")),
                Li(A("Contact", href="#contact")),
                Li(A("Download CV", href=data['cv'], target="_blank")),
                cls="nav-links"
            ),
            Div(
                A(I(cls="fab fa-linkedin"), href=data['linkedin']),
                A(I(cls="fab fa-github"), href=data['github']),
                A(I(cls="fab fa-youtube"), href=data['youtube']),
                A(I(cls="fab fa-medium"), href=data['medium']),
                A(I(cls="fab fa-dev"), href=data['devto']),
                cls="social-links"
            ),
            cls="sidebar"
        )
    )

def main_content():
    about_me = data['about']
    max_length = 500  # Aumenta este valor para mostrar más texto antes de "Ver más"
    if len(about_me) > max_length:
        short_about_me = about_me[:max_length] + "..."
        full_about_me = about_me
        about_me_element = Div(
            P(short_about_me, cls="about-me-description short-description"),
            A("Ver más", href="#", cls="read-more", onclick="toggleAboutMe(event)"),
            P(full_about_me, cls="about-me-description full-description", style="display: none;")
        )
    else:
        about_me_element = P(about_me, cls="about-me-description")

    return Main(
        Section(
            Div(
                H1("Hola,", cls="title-part"),
                H1(f"Soy {data['name']},", cls="title-part"),
                H1(f"{data['profession']}", cls="title-part"),
                cls="title"
            ),
            Div(
                about_me_element,
                cls="about-me-section"
            ),
            cls="main-section",
            id="about"
        ),
        moments_section(data['experiences']),  # Renombrar la sección de experiencias a momentos
        projects_section(),  # Agregar la sección de proyectos
        blog_section(),  # Agregar la sección del blog
        contact_section()  # Agregar la sección de contacto
    )

def moments_section(experiences):
    return Section(
        H2("Moments", cls="section-title"),
        Div(
            *[experience_item(exp) for exp in experiences],
            cls="experiences"
        ),
        cls="experiences-section",
        id="moments"
    )

def projects_section():
    return Section(
        H2("Projects", cls="section-title"),
        P("Aquí iran mis proyectos."),
        cls="projects-section",
        id="projects"
    )

def blog_section():
    return Section(
        H2("Blog", cls="section-title"),
        P("Aquí iran mis entradas de blog."),
        cls="blog-section",
        id="blog"
    )

def contact_section():
    return Section(
        H2("Contact", cls="section-title"),
        P("Aquí  ira mi información de contacto."),
        cls="contact-section",
        id="contact"
    )


def experience_item(exp):
    media = exp['media']
    if media['type_resource'] == "video":
        media_element = Iframe(src=media['url'], cls="experience-media", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen=True)
    else:
        media_element = Img(src=media['url'], alt=exp['title'], cls="experience-media")
    
    description = exp['description']
    max_length = 200
    if len(description) > max_length:
        short_description = description[:max_length] + "..."
        full_description = description
        description_element = Div(
            P(short_description, cls="experience-description short-description"),
            A("Ver más", href="#", cls="read-more", onclick=f"showFullDescription(event, '{exp['title']}')"),
            P(full_description, cls="experience-description full-description", style="display: none;")
        )
    else:
        description_element = P(description, cls="experience-description")
    
    return Div(
        H3(exp['title'], cls="experience-title"),
        description_element,
        media_element,
        cls="experience-item"
    )

# Iniciar el servidor
serve()
