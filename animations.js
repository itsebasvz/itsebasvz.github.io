// 🌟 Animaciones de Scroll para el Portafolio de Sebs
// Efectos modernos y suaves para una experiencia increíble

document.addEventListener('DOMContentLoaded', function() {
    
    // � EFECTO TYPING PARA H1
    function setupTypingEffect() {
        const h1Elements = document.querySelectorAll('h1');
        
        h1Elements.forEach((h1, index) => {
            const originalText = h1.textContent.trim();
            h1.innerHTML = ''; // Usar innerHTML para poder agregar el span del cursor
            h1.classList.add('typing');
            
            // Crear cursor como span
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            cursor.innerHTML = '|';
            h1.appendChild(cursor);
            
            // Delay inicial para que empiece después de que carga la página
            setTimeout(() => {
                typeWriter(h1, originalText, cursor, 100); // Pasar el cursor
            }, 800 + (index * 200));
        });
    }
    
    // 🖊️ Función de máquina de escribir mejorada
    function typeWriter(element, text, cursor, speed = 100) {
        let i = 0;
        
        function type() {
            if (i < text.length) {
                // Insertar letra antes del cursor
                element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
                i++;
                // Pausa más larga después de puntuación
                const extraDelay = /[.!?]/.test(text.charAt(i-1)) ? 300 : 0;
                setTimeout(type, speed + extraDelay);
            } else {
                // Cuando termine de escribir, quitar el cursor después de 1.5 segundos
                setTimeout(() => {
                    cursor.remove();
                    element.classList.remove('typing');
                }, 1500);
            }
        }
        type();
    }
    
    // �🎯 Configuración del Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // 📱 Función para detectar si es dispositivo móvil
    const isMobile = window.innerWidth <= 768;

    // ✨ Observer para animaciones de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Una vez animado, deja de observar para mejor performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 🎨 Agregar clases de animación a elementos específicos
    function setupAnimations() {
        // Animar párrafos con retraso escalonado
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            p.classList.add('fade-up');
            p.style.animationDelay = `${index * 0.2}s`;
            observer.observe(p);
        });

        // Animar iconos de tecnologías
        const techIcons = document.querySelectorAll('.iconos img');
        techIcons.forEach((icon, index) => {
            icon.classList.add('scale-in');
            icon.style.animationDelay = `${index * 0.1}s`;
            observer.observe(icon);
        });

        // Animar títulos (excluyendo los que contienen imágenes)
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach((heading, index) => {
            // No animar si contiene imágenes o es la imagen de perfil
            if (!heading.querySelector('img')) {
                heading.classList.add('slide-down');
                heading.style.animationDelay = `${index * 0.3}s`;
                observer.observe(heading);
            }
        });

        // Animar la foto de perfil específicamente
        const profileImgContainer = document.querySelector('h3 img[alt="sebs"]');
        if (profileImgContainer) {
            const profileContainer = profileImgContainer.parentElement;
            profileContainer.classList.add('bounce-in');
            profileContainer.style.animationDelay = '0.8s'; // Aparece al final
            observer.observe(profileContainer);
        }

        // Animar el contenedor de iconos
        const iconContainers = document.querySelectorAll('.iconos');
        iconContainers.forEach(container => {
            container.classList.add('fade-up');
            observer.observe(container);
        });
    }

    // 🚀 Efectos especiales para Snorlax
    function setupSnorlaxEffects() {
        const snorlaxLink = document.querySelector('h2 a');
        if (snorlaxLink) {
            const snorlaxImg = snorlaxLink.querySelector('img');
            
            snorlaxLink.addEventListener('mouseenter', () => {
                snorlaxImg.style.transform = 'scale(1.05) rotate(2deg)';
                snorlaxImg.style.transition = 'all 0.3s ease';
            });
            
            snorlaxLink.addEventListener('mouseleave', () => {
                snorlaxImg.style.transform = 'scale(1) rotate(0deg)';
            });
            
            // Animación de pulso sutil cada 3 segundos
            setInterval(() => {
                if (!snorlaxLink.matches(':hover')) {
                    snorlaxImg.style.animation = 'pulse-subtle 0.6s ease-in-out';
                    setTimeout(() => {
                        snorlaxImg.style.animation = '';
                    }, 600);
                }
            }, 3000);
        }
    }

    //  Efecto parallax suave en scroll
    function setupParallaxEffect() {
        if (!isMobile) { // Solo en desktop para mejor performance
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.iconos');
                
                parallaxElements.forEach((element, index) => {
                    const speed = 0.5 + (index * 0.1);
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
            });
        }
    }

    // 🎪 Animación de hover para iconos de tecnología
    function setupTechIconsHover() {
        const techIcons = document.querySelectorAll('.iconos img');
        techIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) translateY(-5px)';
                icon.style.transition = 'all 0.3s ease';
                icon.style.filter = 'brightness(1.1) drop-shadow(0 5px 10px rgba(0,0,0,0.2))';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) translateY(0)';
                icon.style.filter = 'brightness(1) drop-shadow(none)';
            });
        });
    }

    // �� Inicializar todas las animaciones
    setupTypingEffect(); // ¡NUEVO! Efecto typing para h1
    setupAnimations();
    setupSnorlaxEffects();
    setupParallaxEffect();
    setupTechIconsHover();

    console.log('🚀 Animaciones de Sebs cargadas correctamente!');
});

// 🌟 Animación adicional: efecto de typing para textos (opcional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}