// JavaScript minimalista para portfolio personal

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initializeContactFormMailto();
});

// Inicialización principal
function initializeApp() {
    initializeSidebarToggle();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeActiveNavigation();
    initializeIntersectionObserver();
    initializeLanguageToggle();
}

// ====== TOGGLE SIDEBAR DESKTOP ======
function initializeSidebarToggle() {
    // Crear botón móvil si no existe
    if (!document.querySelector('.mobile-menu-toggle')) {
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileToggle.setAttribute('aria-label', 'Abrir menú');
        mobileToggle.style.display = 'none';
        mobileToggle.onclick = toggleMobileMenu;
        document.body.appendChild(mobileToggle);
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle i');
    const main = document.querySelector('main');
    
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.className = 'fas fa-chevron-right';
        localStorage.setItem('sidebarCollapsed', 'true');
        // Añadir una clase temporal para animación suave
        main.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        // Forzar el centrado del contenido
        setTimeout(() => {
            main.style.display = 'flex';
            main.style.flexDirection = 'column';
            main.style.alignItems = 'center';
        }, 50);
    } else {
        toggleBtn.className = 'fas fa-chevron-left';
        localStorage.setItem('sidebarCollapsed', 'false');
        main.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        // Restaurar el display normal
        setTimeout(() => {
            main.style.display = '';
            main.style.flexDirection = '';
            main.style.alignItems = '';
        }, 50);
    }
    
    // Remover la transición después de la animación
    setTimeout(() => {
        main.style.transition = '';
    }, 300);
}

// Restaurar estado de sidebar al cargar
document.addEventListener('DOMContentLoaded', function() {
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed');
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle i');
    const main = document.querySelector('main');
    
    if (sidebarCollapsed === 'true' && window.innerWidth > 768) {
        sidebar.classList.add('collapsed');
        if (toggleBtn) toggleBtn.className = 'fas fa-chevron-right';
        // Aplicar el centrado inmediatamente
        if (main) {
            main.style.display = 'flex';
            main.style.flexDirection = 'column';
            main.style.alignItems = 'center';
        }
    }
});

// ====== TOGGLE DE IDIOMA ======
function initializeLanguageToggle() {
    // Manejar visibilidad del botón de idioma móvil
    const mobileLanguageToggle = document.querySelector('.mobile-language-toggle');
    
    function handleResize() {
        if (mobileLanguageToggle) {
            if (window.innerWidth <= 768) {
                mobileLanguageToggle.style.display = 'block';
            } else {
                mobileLanguageToggle.style.display = 'none';
            }
        }
    }
    
    // Ejecutar al cargar
    handleResize();
    
    // Ejecutar en redimensionamiento
    window.addEventListener('resize', debounce(handleResize, 250));
}

// ====== MENÚ MÓVIL ======
function initializeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    // Cerrar menú al hacer clic en enlaces
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Manejar redimensionamiento
    window.addEventListener('resize', debounce(function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
            if (mobileToggle) mobileToggle.style.display = 'none';
        } else {
            if (mobileToggle) mobileToggle.style.display = 'block';
        }
    }, 250));
    
    // Mostrar/ocultar botón móvil según tamaño de pantalla
    if (window.innerWidth <= 768 && mobileToggle) {
        mobileToggle.style.display = 'block';
    }
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const isActive = sidebar && sidebar.classList.contains('active');
    
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (sidebar) {
        sidebar.classList.add('active');
        sidebar.classList.remove('collapsed'); // Asegurar que no esté colapsada en móvil
    }
    if (toggle) {
        toggle.innerHTML = '<i class="fas fa-times"></i>';
    }
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (sidebar) {
        sidebar.classList.remove('active');
    }
    if (toggle) {
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
    document.body.style.overflow = '';
}

// ====== NAVEGACIÓN SUAVE ======
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                smoothScrollToTarget(targetElement, targetId);
            }
        });
    });
}

function smoothScrollToTarget(targetElement, targetId) {
    const isMobile = window.innerWidth <= 768;
    const headerOffset = isMobile ? 60 : 20;
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - headerOffset;
    
    // Cerrar menú móvil si está abierto
    if (isMobile) {
        closeMobileMenu();
    }
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    // Actualizar enlace activo
    setTimeout(() => {
        updateActiveNavLink(targetId);
    }, 300);
}

// ====== NAVEGACIÓN ACTIVA ======
function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1
    };
    
    const navigationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = '#' + entry.target.id;
                updateActiveNavLink(sectionId);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        navigationObserver.observe(section);
    });
}

function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`.nav-links a[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ====== ANIMACIONES DE ENTRADA ======
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos
    const elementsToAnimate = document.querySelectorAll(
        '.experience-item, .skill-category, .project-card'
    );
    
    elementsToAnimate.forEach(el => observer.observe(el));
}

// ====== FUNCIONES PARA MOSTRAR/OCULTAR CONTENIDO ======
function showFullDescription(event, title) {
    event.preventDefault();
    
    const experienceItem = event.target.closest('.experience-item');
    if (!experienceItem) return;
    
    const shortDescription = experienceItem.querySelector('.short-description');
    const fullDescription = experienceItem.querySelector('.full-description');
    const readMoreLink = event.target;
    
    toggleDescription(shortDescription, fullDescription, readMoreLink);
}

function toggleAboutMe(event) {
    event.preventDefault();
    
    const aboutMeSection = document.querySelector('.about-me-section');
    if (!aboutMeSection) return;
    
    const shortDescription = aboutMeSection.querySelector('.short-description');
    const fullDescription = aboutMeSection.querySelector('.full-description');
    const readMoreLink = event.target;
    
    toggleDescription(shortDescription, fullDescription, readMoreLink);
}

function toggleDescription(shortDescription, fullDescription, readMoreLink) {
    const isExpanded = fullDescription.style.display !== 'none' && fullDescription.style.display !== '';
    
    if (!isExpanded) {
        // Expandir
        shortDescription.style.display = 'none';
        fullDescription.style.display = 'block';
        // El texto "Ver menos" se establecerá desde el servidor según el idioma
        readMoreLink.textContent = readMoreLink.textContent.includes('more') ? 'Read less' : 'Ver menos';
    } else {
        // Contraer
        fullDescription.style.display = 'none';
        shortDescription.style.display = 'block';
        // El texto "Ver más" se establecerá desde el servidor según el idioma
        readMoreLink.textContent = readMoreLink.textContent.includes('less') ? 'Read more' : 'Ver más';
    }
}

// ====== UTILIDADES ======
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ====== FUNCIONES GLOBALES ======
window.toggleSidebar = toggleSidebar;
window.showFullDescription = showFullDescription;
window.toggleAboutMe = toggleAboutMe;

// ====== LOG DE INICIALIZACIÓN ======
console.log('🚀 Portfolio minimalista inicializado');
console.log('📱 Modo:', window.innerWidth <= 768 ? 'Móvil' : 'Escritorio');
console.log('🌐 Idioma detectado desde la URL o configuración del servidor');

function initializeContactFormMailto() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.querySelector('[name="name"]')?.value || '';
        const email = form.querySelector('[name="email"]')?.value || '';
        const subject = form.querySelector('[name="subject"]')?.value || '';
        const message = form.querySelector('[name="message"]')?.value || '';

        // Correo de destino
        const to = 'troni.hdz@gmail.com';

        // Construir mailto
        const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nombre: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailto;
    });
}
