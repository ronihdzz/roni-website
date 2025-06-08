// JavaScript minimalista para portfolio personal

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Inicialización principal
function initializeApp() {
    initializeSidebarToggle();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeActiveNavigation();
    initializeIntersectionObserver();
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
    
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.className = 'fas fa-chevron-right';
        localStorage.setItem('sidebarCollapsed', 'true');
    } else {
        toggleBtn.className = 'fas fa-chevron-left';
        localStorage.setItem('sidebarCollapsed', 'false');
    }
}

// Restaurar estado de sidebar al cargar
document.addEventListener('DOMContentLoaded', function() {
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed');
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle i');
    
    if (sidebarCollapsed === 'true' && window.innerWidth > 768) {
        sidebar.classList.add('collapsed');
        toggleBtn.className = 'fas fa-chevron-right';
    }
});

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
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Manejar redimensionamiento
    window.addEventListener('resize', debounce(function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
            mobileToggle.style.display = 'none';
        } else {
            mobileToggle.style.display = 'block';
        }
    }, 250));
    
    // Mostrar/ocultar botón móvil según tamaño de pantalla
    if (window.innerWidth <= 768) {
        mobileToggle.style.display = 'block';
    }
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const isActive = sidebar.classList.contains('active');
    
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    sidebar.classList.add('active');
    sidebar.classList.remove('collapsed'); // Asegurar que no esté colapsada en móvil
    toggle.innerHTML = '<i class="fas fa-times"></i>';
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    sidebar.classList.remove('active');
    toggle.innerHTML = '<i class="fas fa-bars"></i>';
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
        readMoreLink.textContent = 'Ver menos';
    } else {
        // Contraer
        fullDescription.style.display = 'none';
        shortDescription.style.display = 'block';
        readMoreLink.textContent = 'Ver más';
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
