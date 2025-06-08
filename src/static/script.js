// Funcionalidad mejorada para el sitio web personal

document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeIntersectionObserver();
    initializeTypingEffect();
    initializeParallaxEffect();
    initializeThemeToggle();
});

// Menú móvil
function initializeMobileMenu() {
    // Crear botón de menú móvil si no existe
    if (!document.querySelector('.mobile-menu-toggle')) {
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileToggle.setAttribute('aria-label', 'Abrir menú');
        document.body.appendChild(mobileToggle);
        
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        const sidebar = document.querySelector('.sidebar');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const isActive = sidebar.classList.contains('active');
    
    if (isActive) {
        sidebar.classList.remove('active');
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
        toggle.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = '';
    } else {
        sidebar.classList.add('active');
        toggle.innerHTML = '<i class="fas fa-times"></i>';
        toggle.setAttribute('aria-label', 'Cerrar menú');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
        toggle.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = '';
    }
}

// Scroll suave mejorado
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar enlace activo
                updateActiveNavLink(targetId);
            }
        });
    });
}

function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`a[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Intersection Observer para animaciones
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animar elementos hijos con delay
                const children = entry.target.querySelectorAll('.experience-item, .skill-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observar secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
    
    // Observar elementos individuales
    const animatedElements = document.querySelectorAll('.experience-item, .about-me-section');
    animatedElements.forEach(el => observer.observe(el));
}

// Efecto de escritura para el título
function initializeTypingEffect() {
    const titleParts = document.querySelectorAll('.title-part');
    
    titleParts.forEach((part, index) => {
        if (index === titleParts.length - 1) { // Solo el último elemento (profesión)
            const text = part.textContent;
            part.textContent = '';
            part.style.borderRight = '2px solid var(--accent-color)';
            
            let charIndex = 0;
            const typingSpeed = 100;
            
            setTimeout(() => {
                const typeWriter = () => {
                    if (charIndex < text.length) {
                        part.textContent += text.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeWriter, typingSpeed);
                    } else {
                        // Efecto de cursor parpadeante
                        setTimeout(() => {
                            part.style.borderRight = 'none';
                        }, 1000);
                    }
                };
                typeWriter();
            }, 1200); // Delay para que aparezca después de las otras partes
        }
    });
}

// Efecto parallax sutil
function initializeParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Toggle de tema (si se quiere añadir)
function initializeThemeToggle() {
    // Esta función se puede expandir para añadir un toggle de tema claro/oscuro
    // Por ahora solo detecta la preferencia del sistema
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // El usuario prefiere tema claro
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Escuchar cambios en la preferencia del tema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
}

// Funciones mejoradas para mostrar/ocultar contenido
function showFullDescription(event, title) {
    event.preventDefault();
    
    const experienceItem = event.target.closest('.experience-item');
    if (!experienceItem) return;
    
    const shortDescription = experienceItem.querySelector('.short-description');
    const fullDescription = experienceItem.querySelector('.full-description');
    const readMoreLink = event.target;
    
    // Añadir transición suave
    experienceItem.style.transition = 'all 0.3s ease';
    
    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        // Mostrar descripción completa
        shortDescription.style.opacity = '0';
        setTimeout(() => {
            shortDescription.style.display = 'none';
            fullDescription.style.display = 'block';
            fullDescription.style.opacity = '0';
            
            // Fade in de la descripción completa
            setTimeout(() => {
                fullDescription.style.opacity = '1';
            }, 50);
            
            readMoreLink.textContent = 'Ver menos';
            readMoreLink.classList.add('expanded');
        }, 200);
    } else {
        // Mostrar descripción corta
        fullDescription.style.opacity = '0';
        setTimeout(() => {
            fullDescription.style.display = 'none';
            shortDescription.style.display = 'block';
            shortDescription.style.opacity = '0';
            
            // Fade in de la descripción corta
            setTimeout(() => {
                shortDescription.style.opacity = '1';
            }, 50);
            
            readMoreLink.textContent = 'Ver más';
            readMoreLink.classList.remove('expanded');
        }, 200);
    }
}

function toggleAboutMe(event) {
    event.preventDefault();
    
    const aboutMeSection = document.querySelector('.about-me-section');
    if (!aboutMeSection) return;
    
    const shortDescription = aboutMeSection.querySelector('.short-description');
    const fullDescription = aboutMeSection.querySelector('.full-description');
    const readMoreLink = event.target;
    
    // Añadir transición suave
    aboutMeSection.style.transition = 'all 0.3s ease';
    
    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        // Mostrar descripción completa
        shortDescription.style.opacity = '0';
        setTimeout(() => {
            shortDescription.style.display = 'none';
            fullDescription.style.display = 'block';
            fullDescription.style.opacity = '0';
            
            // Fade in de la descripción completa
            setTimeout(() => {
                fullDescription.style.opacity = '1';
            }, 50);
            
            readMoreLink.textContent = 'Ver menos';
            readMoreLink.classList.add('expanded');
        }, 200);
    } else {
        // Mostrar descripción corta
        fullDescription.style.opacity = '0';
        setTimeout(() => {
            fullDescription.style.display = 'none';
            shortDescription.style.display = 'block';
            shortDescription.style.opacity = '0';
            
            // Fade in de la descripción corta
            setTimeout(() => {
                shortDescription.style.opacity = '1';
            }, 50);
            
            readMoreLink.textContent = 'Ver más';
            readMoreLink.classList.remove('expanded');
        }, 200);
    }
}

// Utilidades adicionales
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

// Lazy loading para imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Medir el tiempo de carga
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Página cargada en ${loadTime}ms`);
        
        // Si el tiempo de carga es muy alto, se podrían tomar medidas
        if (loadTime > 3000) {
            console.warn('Tiempo de carga alto detectado');
        }
    });
}

// Añadir efectos de cursor personalizado (opcional)
function initializeCustomCursor() {
    if (window.innerWidth > 768) { // Solo en desktop
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Efectos especiales en hover
        const interactiveElements = document.querySelectorAll('a, button, .experience-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }
}

// Inicializar funciones adicionales cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
    initializePerformanceMonitoring();
    // initializeCustomCursor(); // Descomenta si quieres el cursor personalizado
});
