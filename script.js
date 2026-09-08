/* ==========================================================================
   GREENPERFECT CORPORATION - ENTERPRISE JAVASCRIPT
   ========================================================================== */

   document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navigation Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle Functionality
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 3. Interactive WhatsApp Quote Form Handling
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const servicio = document.getElementById('servicio').value;
            const ubicacion = document.getElementById('ubicacion').value.trim();
            const detalles = document.getElementById('mensaje').value.trim();
            
            if (!nombre || !telefono || !servicio || !ubicacion) {
                alert('Please fill in all required fields (Name, Phone, Service, and Location).');
                return;
            }
            
            const targetWhatsAppNumber = "17867280740"; // Harold Morales WhatsApp number
            
            const whatsappMessage = `Hello GreenPerfect Team, My name is ${nombre}. Phone: ${telefono}. I am interested in: ${servicio}. Property Location: ${ubicacion}.Additional Details:\n${detalles || 'None provided'}`;
            
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
        });
    }

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetID = this.getAttribute('href');
            if (targetID === '#') return;
            
            const targetElement = document.querySelector(targetID);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});