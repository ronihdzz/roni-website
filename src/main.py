from fasthtml.common import *

# Configuración de la app
app, rt = fast_app()

# Función para inyectar el CSS en el header
def inject_css():
    return Head(
        Link(rel="stylesheet", href="/static/styles.css")
    )

# Vista de la página principal
@rt("/")
def home_view():
    return Html(
        inject_css(),  # Inyecta el CSS en el header
        Body(
            Main(
                Div(
                    header(),
                    about_section(),
                    skills_section(),
                    projects_section(),
                    contact_section(),
                    cls="content"
                ),
                cls="main-container"
            )
        )
    )

# Componentes
def header():
    return Div(
        Img(src="/static/roni.jpg", alt="Foto de Roni Hernández", cls="profile-pic"),
        H1("Roni Hernández - Desarrollador y Automatización"),
        P("Bienvenido a mi portafolio personal. Echa un vistazo a mis proyectos."),
        A("Ir al blog", href="/blog", cls="btn-primary")
    )


def about_section():
    return Section(
        H1("Sobre Mí 😊"),
        P("""
        ¡Hola! Soy Roni Hernández y SOY BIEN PEDO, ME ENCCANTA EL ALCHOL, un entusiasta de la tecnología con experiencia en DevOps, ciberseguridad,
        y machine learning. 🚀 Disfruto enfrentando desafíos complejos y siempre estoy explorando nuevas
        tecnologías para mantenerme al filo de la innovación. 🛡️ ¡Prepárate para una aventura en el código!
        """),
        cls="section about"
    )

def skills_section():
    return Section(
        H1("Habilidades 💻"),
        Ul(
            Li("🌐 Desarrollo Backend (FastAPI, Django)"),
            Li("🐍 Automatización de procesos con Python (Scripting, Scraping)"),
            Li("📡 Internet de las Cosas (IoT)"),
            Li("🛠️ DevOps y Ciberseguridad (Docker, Kubernetes, CI/CD)"),
            Li("🧠 Machine Learning con Python (TensorFlow)")
        ),
        cls="section skills"
    )


def projects_section():
    return Section(
        H1("Proyectos 💼"),
        Ul(
            Li(A("🔧 Sistema de Automatización de Tareas con Python", href="#")),
            Li(A("🌐 Aplicación Web de Personal con Django", href="#")),
            Li(A("🛡️ Sistema IoT de domotica", href="#")),
            Li(A("🧠 Modelo Predictivo con Machine Learning", href="#"))
        ),
        cls="section projects"
    )



def contact_section():
    return Section(
        H2("Contacto"),
        P("Envíame un mensaje:"),
        Form(
            Input(type="email", placeholder="Tu correo"),
            Button("Enviar", type="submit"),
            cls="contact-form"
        ),
        cls="section contact"
    )

def contact_section():
    return Section(
        H1("Contacto 📬"),
        P("¿Tienes alguna idea interesante o deseas colaborar? ¡No dudes en contactarme! 💡"),
        Form(
            Input(type="email", placeholder="Tu correo"),
            Button("Enviar", type="submit"),
            cls="contact-form"
        ),
        cls="section contact"
    )


# Iniciar el servidor
serve()
