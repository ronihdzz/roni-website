from fasthtml.common import *
import os
import json

# Configuración de la app
app, rt = fast_app()

# Configurar la ruta para servir archivos estáticos
app.mount("/static", StaticFiles(directory="static"), name="static")

# Función para leer datos desde un archivo JSON
def read_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

# Variables globales para manejar los idiomas
current_language = 'en'  # Idioma por defecto
data_es = read_data(os.path.join('.', 'static', 'data.json'))
data_en = read_data(os.path.join('.', 'static', 'data_en.json'))

def get_current_data():
    return data_en if current_language == 'en' else data_es

# Función para inyectar el CSS y el JS en el header
def inject_css():
    data = get_current_data()
    return Head(
        Meta(charset="utf-8"),
        Meta(name="viewport", content="width=device-width, initial-scale=1.0"),
        Meta(name="description", content=f"{data['personal']['name']} - {data['personal']['profession']} | Portfolio Personal"),
        Meta(name="keywords", content=", ".join(data['meta']['seo']['keywords'])),
        Meta(name="author", content=data['personal']['name']),
        Meta(property="og:title", content=f"{data['personal']['name']} - Portfolio Personal"),
        Meta(property="og:description", content=data['meta']['seo']['description']),
        Meta(property="og:type", content="website"),
        
        Link(rel="stylesheet", href="/static/styles.css"),
        Link(rel="stylesheet", href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"),
        Link(rel="preconnect", href="https://fonts.googleapis.com"),
        Link(rel="preconnect", href="https://fonts.gstatic.com", crossorigin=""),
        Link(rel="stylesheet", href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"),
        
        Script(src="/static/script.js", defer=True),
        
        Title(f"{data['personal']['name']} - Portfolio Personal")
    )

# Vista de la página principal
@rt("/")
def home_view():
    return Html(
        inject_css(),
        Body(
            Div(
                sidebar(),
                Main(
                    main_content(),
                ),
                cls="container"
            )
        )
    )

# Ruta para cambiar idioma
@rt("/change-language/{lang}")
def change_language(lang: str):
    global current_language
    if lang in ['es', 'en']:
        current_language = lang
        return RedirectResponse("/", status_code=302)
    else:
        return {"error": "Invalid language"}

# Función para obtener textos de la interfaz según el idioma
def get_ui_text(key):
    ui_texts = {
        'es': {
            'about': 'Acerca de',
            'moments': 'Momentos',
            'skills': 'Habilidades',
            'projects': 'Proyectos',
            'contact': 'Contacto',
            'download_cv': 'Descargar CV',
            'spanish': 'Español',
            'english': 'English',
            'see_work': 'Ver mi trabajo',
            'contact_me': 'Contáctame',
            'read_more': 'Ver más',
            'read_less': 'Ver menos',
            'projects_title': 'Proyectos',
            'contact_title': 'Contacto',
            'work_together': '¡Trabajemos juntos!',
            'email': 'Email',
            'phone': 'Teléfono',
            'location': 'Ubicación'
        },
        'en': {
            'about': 'About',
            'moments': 'Moments', 
            'skills': 'Skills',
            'projects': 'Projects',
            'contact': 'Contact',
            'download_cv': 'Download CV',
            'spanish': 'Español',
            'english': 'English',
            'see_work': 'See my work',
            'contact_me': 'Contact me',
            'read_more': 'Read more',
            'read_less': 'Read less',
            'projects_title': 'Projects',
            'contact_title': 'Contact',
            'work_together': 'Let\'s work together!',
            'email': 'Email',
            'phone': 'Phone',
            'location': 'Location'
        }
    }
    return ui_texts.get(current_language, ui_texts['es']).get(key, key)

# Componentes
def sidebar():
    data = get_current_data()
    return Nav(
        Div(
            Button(
                I(cls="fas fa-chevron-left"),
                cls="sidebar-toggle",
                onclick="toggleSidebar()",
                title="Colapsar sidebar"
            ),
            Button(
                get_ui_text('english') if current_language == 'es' else get_ui_text('spanish'),
                cls="language-toggle",
                onclick=f"window.location.href='/change-language/{'en' if current_language == 'es' else 'es'}'",
                title="Cambiar idioma / Change language"
            ),
            Img(src="static/ronihdz_en_proyectos.jpeg", alt="Foto de perfil - Programador", cls="teaching-image-sidebar"),
            H2(data['personal']['name']),
            P(data['personal']['profession']),
            Ul(
                Li(A(Span(get_ui_text('about')), href="#about", role="menuitem")),
                Li(A(Span(get_ui_text('moments')), href="#moments", role="menuitem")),
                Li(A(Span(get_ui_text('skills')), href="#skills", role="menuitem")),
                Li(A(Span(get_ui_text('projects')), href="#projects", role="menuitem")),
                Li(A(Span(get_ui_text('contact')), href="#contact", role="menuitem")),
                Li(
                    A(
                        Span(get_ui_text('download_cv')),
                        href="#",
                        cls="cv-dropdown-trigger"
                    ),
                    Ul(
                        Li(A(get_ui_text('spanish'), href=data['personal']['cv']['spanish'], target="_blank", rel="noopener noreferrer")),
                        Li(A(get_ui_text('english'), href=data['personal']['cv']['english'], target="_blank", rel="noopener noreferrer"))
                    ),
                    cls="cv-dropdown"
                ),
                cls="nav-links",
                role="menu"
            ),
            Div(
                A(I(cls="fab fa-linkedin"), href=data['social_links']['linkedin'], target="_blank", rel="noopener noreferrer", aria_label="LinkedIn"),
                A(I(cls="fab fa-github"), href=data['social_links']['github'], target="_blank", rel="noopener noreferrer", aria_label="GitHub"),
                A(I(cls="fab fa-youtube"), href=data['social_links']['youtube'], target="_blank", rel="noopener noreferrer", aria_label="YouTube"),
                A(I(cls="fab fa-medium"), href=data['social_links']['medium'], target="_blank", rel="noopener noreferrer", aria_label="Medium"),
                cls="social-links"
            ),
            # Botón de idioma para móvil
            Button(
                get_ui_text('english') if current_language == 'es' else get_ui_text('spanish'),
                cls="mobile-language-toggle",
                onclick=f"window.location.href='/change-language/{'en' if current_language == 'es' else 'es'}'",
                title="Cambiar idioma / Change language",
                style="display: none;"
            ),
            cls="sidebar"
        )
    )

def main_content():
    data = get_current_data()
    about_me = data['personal']['about']
    max_length = 400
    if len(about_me) > max_length:
        short_about_me = about_me[:max_length] + "..."
        full_about_me = about_me
        about_me_element = Div(
            P(short_about_me, cls="about-me-description short-description"),
            A(get_ui_text('read_more'), href="#", cls="read-more", onclick="toggleAboutMe(event)"),
            P(full_about_me, cls="about-me-description full-description", style="display: none;")
        )
    else:
        about_me_element = P(about_me, cls="about-me-description")

    return (
        Section(
            Div(
                *[H1(title_part, cls="title-part") for title_part in data['personal']['title_parts']],
                cls="title"
            ),
            Div(
                about_me_element,
                skills_preview(),
                Div(
                    A(get_ui_text('see_work'), href="#moments", cls="read-more"),
                    A(get_ui_text('contact_me'), href="#contact", cls="read-more"),
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
        H2(get_ui_text('moments'), cls="section-title"),
        Div(
            *[experience_item(exp) for exp in experiences],
            cls="experiences"
        ),
        cls="experiences-section",
        id="moments"
    )

def skills_preview():
    """Preview de habilidades en la sección principal"""
    data = get_current_data()
    featured_skills = data['skills']['featured'][:6]
    return Div(
        *[Span(skill, cls="skill-tag") for skill in featured_skills],
        cls="skills-preview"
    )

def skills_section():
    """Sección completa de habilidades"""
    data = get_current_data()
    skills_data = data['skills']['categories']
    
    return Section(
        H2(get_ui_text('skills'), cls="section-title"),
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
            *[skill_item(skill) for skill in skills],
            cls="skill-items"
        ),
        cls="skill-category"
    )

def skill_item(skill):
    """Renderiza un skill individual con icono y nivel"""
    if isinstance(skill, dict):
        icon = I(cls=skill.get('icon', 'fas fa-code'))
        skill_span = Span(
            icon,
            Span(skill['name'], cls="skill-name"),
            # Span(f"{skill['level']} ({skill['years']} años)" if current_language == 'es' else f"{skill['level']} ({skill['years']} years)", cls="skill-level"),
            cls="skill-item detailed",
            title=f"{skill['name']} - {skill['level']} ({skill['years']} años de experiencia)" if current_language == 'es' else f"{skill['name']} - {skill['level']} ({skill['years']} years of experience)"
        )
    else:
        skill_span = Span(skill, cls="skill-item")
    
    return skill_span

def projects_section():
    data = get_current_data()
    projects_data = data['projects']
    featured_projects = [p for p in projects_data if p.get('featured', False)]
    projects_to_show = featured_projects[:10] if featured_projects else projects_data[:10]
    
    return Section(
        H2(get_ui_text('projects_title'), cls="section-title"),
        Div(
            *[project_card(project) for project in projects_to_show],
            cls="projects-grid"
        ),
        cls="projects-section",
        id="projects"
    )

def project_card(project):
    # Generar links dinámicamente basado en lo que esté disponible
    links = []
    if project.get("links", {}).get("demo"):
        links.append(A("Ver Demo" if current_language == 'es' else "View Demo", href=project["links"]["demo"], cls="project-link", target="_blank"))
    if project.get("links", {}).get("github"):
        links.append(A("GitHub", href=project["links"]["github"], cls="project-link", target="_blank"))
    if project.get("links", {}).get("presentation"):
        links.append(A("Presentación" if current_language == 'es' else "Presentation", href=project["links"]["presentation"], cls="project-link", target="_blank"))
    
    # Mostrar awards si existen
    awards_section = []
    if project.get("awards"):
        awards_section = [
            Div(
                *[Span(award, cls="award-tag") for award in project["awards"]],
                cls="project-awards"
            )
        ]
    
    return Div(
        H3(project["title"], cls="project-title"),
        P(project["description"], cls="project-description"),
        *awards_section,
        Div(
            *[Span(tech, cls="tech-tag") for tech in project["technologies"]],
            cls="project-tech"
        ),
        Div(
            *links,
            cls="project-links"
        ) if links else "",
        cls="project-card"
    )

def contact_section():
    data = get_current_data()
    contact_data = data['contact']
    
    return Section(
        H2(get_ui_text('contact_title'), cls="section-title"),
        Div(
            Div(
                H3(get_ui_text('work_together'), cls="contact-title"),
                P(contact_data['form']['subtitle'], cls="contact-description"),
                Div(
                    contact_item("fas fa-envelope", get_ui_text('email'), contact_data['email'], f"mailto:{contact_data['email']}"),
                    contact_item("fas fa-phone", get_ui_text('phone'), contact_data['phone'], f"tel:{contact_data['phone']}"),
                    contact_item("fas fa-map-marker-alt", get_ui_text('location'), contact_data['location'], "#"),
                    contact_item("fab fa-linkedin", "LinkedIn", "linkedin.com/in/ronihdz", data['social_links']['linkedin']),
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
    data = get_current_data()
    form_data = data['contact']['form']
    
    # Generar campos dinámicamente desde el JSON
    form_fields = []
    for field in form_data['fields']:
        if field['type'] == 'textarea':
            form_fields.append(
                Textarea(
                    name=field['name'],
                    placeholder=field['placeholder'],
                    rows=str(field.get('rows', 5)),
                    required=field.get('required', False)
                )
            )
        else:
            form_fields.append(
                Input(
                    type=field['type'],
                    name=field['name'],
                    placeholder=field['placeholder'],
                    required=field.get('required', False)
                )
            )
    
    return Div(
        H3(form_data['title'], cls="form-title"),
        Form(
            *form_fields,
            Button(form_data['submit_text'], type="submit", cls="submit-btn"),
            cls="contact-form",
            action=form_data['action'],
            method=form_data['method']
        ),
        cls="form-container"
    )

def experience_item(exp):
    media = exp['media']
    if media['type_resource'] == "video":
        # Modificar URL de YouTube para remover autoplay y añadir parámetros para no autoplay
        video_url = media['url']
        if 'youtube.com' in video_url or 'youtu.be' in video_url:
            # Asegurar que no hay autoplay y añadir parámetros de control
            if '?' in video_url:
                video_url += '&autoplay=0&rel=0&controls=1&showinfo=0'
            else:
                video_url += '?autoplay=0&rel=0&controls=1&showinfo=0'
        
        media_element = Iframe(
            src=video_url, 
            cls="experience-media", 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen=True,
            loading="lazy"  # Lazy loading para mejor performance
        )
    else:
        media_element = Img(
            src=media['url'], 
            alt=exp['title'], 
            cls="experience-media",
            loading="lazy"
        )
    
    description = exp['description']
    max_length = 200
    if len(description) > max_length:
        short_description = description[:max_length] + "..."
        full_description = description
        description_element = Div(
            P(short_description, cls="experience-description short-description"),
            A(get_ui_text('read_more'), href="#", cls="read-more", onclick=f"showFullDescription(event, '{exp['title']}')"),
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

# Ruta para manejar el formulario de contacto
@rt("/contact")
def contact_post(name: str, email: str, subject: str, message: str):
    print(f"Nuevo mensaje de contacto:")
    print(f"Nombre: {name}")
    print(f"Email: {email}")
    print(f"Asunto: {subject}")
    print(f"Mensaje: {message}")
    
    success_text = {
        'es': {
            'title': '¡Mensaje enviado!',
            'message': f'Gracias {name}, he recibido tu mensaje y te responderé pronto.',
            'back': 'Volver al inicio'
        },
        'en': {
            'title': 'Message sent!',
            'message': f'Thank you {name}, I have received your message and will respond soon.',
            'back': 'Back to home'
        }
    }
    
    text = success_text.get(current_language, success_text['es'])
    
    return Div(
        H2(text['title'], cls="success-title"),
        P(text['message'], cls="success-message"),
        A(text['back'], href="/", cls="read-more"),
        cls="success-container"
    )

# Iniciar el servidor
serve()
