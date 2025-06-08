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
        Meta(charset="utf-8"),
        Meta(name="viewport", content="width=device-width, initial-scale=1.0"),
        Meta(name="description", content=f"{data['name']} - {data['profession']} | Portfolio Personal"),
        Meta(name="keywords", content="programador, desarrollo web, portfolio, software"),
        Meta(name="author", content=data['name']),
        Meta(property="og:title", content=f"{data['name']} - Portfolio Personal"),
        Meta(property="og:description", content=data['about'][:150] + "..."),
        Meta(property="og:type", content="website"),
        
        Link(rel="stylesheet", href="/static/styles.css"),
        Link(rel="stylesheet", href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"),
        Link(rel="preconnect", href="https://fonts.googleapis.com"),
        Link(rel="preconnect", href="https://fonts.gstatic.com", crossorigin=""),
        Link(rel="stylesheet", href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"),
        
        Script(src="/static/script.js", defer=True),
        
        Title(f"{data['name']} - Portfolio Personal")
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
                Li(A("Skills", href="#skills")),
                Li(A("Projects", href="#projects")),
                Li(A("Contact", href="#contact")),
                Li(
                    "Download CV",
                    Ul(
                        Li(A("Español", href=data['cv'], target="_blank")),
                        Li(A("English", href=data['cv_en'], target="_blank"))
                    )
                ),
                cls="nav-links"
            ),
            Div(
                A(I(cls="fab fa-linkedin"), href=data['linkedin']),
                A(I(cls="fab fa-github"), href=data['github']),
                A(I(cls="fab fa-youtube"), href=data['youtube']),
                A(I(cls="fab fa-medium"), href=data['medium']),
                # A(I(cls="fab fa-dev"), href=data['devto']),
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
                skills_preview(),
                Div(
                    A("Ver mi trabajo", href="#moments", cls="read-more"),
                    A("Contáctame", href="#contact", cls="read-more", style="margin-left: 1rem;"),
                    cls="cta-buttons"
                ),
                cls="about-me-section"
            ),
            cls="main-section",
            id="about"
        ),
        moments_section(data['experiences']),
        skills_section(),
        projects_section(),
        contact_section()
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

def skills_preview():
    """Preview de habilidades en la sección principal"""
    skills = ["Python", "JavaScript", "FastHTML", "React", "Node.js"]
    return Div(
        *[Span(skill, cls="skill-tag") for skill in skills],
        cls="skills-preview"
    )

def skills_section():
    """Sección completa de habilidades"""
    skills_data = {
        "Lenguajes": ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
        "Frameworks": ["FastHTML", "React", "Node.js", "Express", "Django"],
        "Herramientas": ["Git", "Docker", "VS Code", "Linux", "PostgreSQL"],
        "Cloud": ["AWS", "Vercel", "Netlify", "Heroku"]
    }
    
    return Section(
        H2("Skills", cls="section-title"),
        Div(
            *[skill_category(category, skills) for category, skills in skills_data.items()],
            cls="skills-grid"
        ),
        cls="skills-section",
        id="skills"
    )

def skill_category(title, skills):
    return Div(
        H3(title, cls="skill-category-title"),
        Div(
            *[Span(skill, cls="skill-item") for skill in skills],
            cls="skill-items"
        ),
        cls="skill-category"
    )

def projects_section():
    projects_data = [
        {
            "title": "Portfolio Personal",
            "description": "Sitio web personal desarrollado con FastHTML y diseño moderno.",
            "tech": ["FastHTML", "Python", "CSS", "JavaScript"],
            "link": "#",
            "github": "#"
        },
        {
            "title": "Proyecto en Desarrollo",
            "description": "Próximamente más proyectos interesantes.",
            "tech": ["React", "Node.js", "MongoDB"],
            "link": "#",
            "github": "#"
        }
    ]
    
    return Section(
        H2("Proyectos", cls="section-title"),
        Div(
            *[project_card(project) for project in projects_data],
            cls="projects-grid"
        ),
        cls="projects-section",
        id="projects"
    )

def project_card(project):
    return Div(
        H3(project["title"], cls="project-title"),
        P(project["description"], cls="project-description"),
        Div(
            *[Span(tech, cls="tech-tag") for tech in project["tech"]],
            cls="project-tech"
        ),
        Div(
            A("Ver Demo", href=project["link"], cls="project-link", target="_blank"),
            A("GitHub", href=project["github"], cls="project-link", target="_blank"),
            cls="project-links"
        ),
        cls="project-card"
    )

def contact_section():
    return Section(
        H2("Contacto", cls="section-title"),
        Div(
            Div(
                H3("¡Trabajemos juntos!", cls="contact-title"),
                P("¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!", cls="contact-description"),
                Div(
                    contact_item("fas fa-envelope", "Email", "tu@email.com", "mailto:tu@email.com"),
                    contact_item("fab fa-linkedin", "LinkedIn", "linkedin.com/in/tu-perfil", data['linkedin']),
                    contact_item("fab fa-github", "GitHub", "github.com/tu-usuario", data['github']),
                    cls="contact-items"
                ),
                cls="contact-info"
            ),
            contact_form(),
            cls="contact-content"
        ),
        cls="contact-section",
        id="contact"
    )

def contact_item(icon, label, text, link):
    return Div(
        I(cls=icon),
        Div(
            Strong(label),
            A(text, href=link, target="_blank" if link.startswith("http") else None),
            cls="contact-item-text"
        ),
        cls="contact-item"
    )

def contact_form():
    return Div(
        H3("Envíame un mensaje", cls="form-title"),
        Form(
            Input(type="text", name="name", placeholder="Tu nombre", required=True),
            Input(type="email", name="email", placeholder="Tu email", required=True),
            Input(type="text", name="subject", placeholder="Asunto", required=True),
            Textarea(name="message", placeholder="Tu mensaje", rows="5", required=True),
            Button("Enviar mensaje", type="submit", cls="submit-btn"),
            cls="contact-form",
            action="#",
            method="post"
        ),
        cls="form-container"
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
