// 1. Importlar
import { initTypewriter } from './modules/typewriter.js';

// --- QURILMANI TEKSHIRISH (Mobile/Tablet o'chirish uchun) ---
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// --- CURSOR FOLLOWER ---
const initCursor = () => {
    const cursor = document.querySelector('.cursor-follower');
    if (!cursor) return;

    // Telefon va planshetlarda kursorni butunlay o'chiramiz
    if (isTouchDevice) {
        cursor.style.display = 'none';
        return;
    }

    document.addEventListener('mousemove', (e) => {
        // requestAnimationFrame orqali harakatni yanada silliq qilamiz
        requestAnimationFrame(() => {
            cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        });
    });

    const links = document.querySelectorAll('a, button, .skill-card, .method-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
    });
};

// --- NAVBAR SCROLL EFFECT ---
const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
};

// --- MOBILE MENU FUNCTIONALITY ---
const initMobileMenu = () => {
    const menuToggle = document.querySelector('.custom-toggler'); // SCSS dagi klassga moslab
    const navCollapse = document.querySelector('.navbar-collapse');

    if (menuToggle && navCollapse) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navCollapse.classList.toggle('show');

            // Body scrollni menyu ochiqligida to'xtatish
            document.body.style.overflow = navCollapse.classList.contains('show') ? 'hidden' : '';
        });

        // Link bosilganda menyuni yopish
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navCollapse.classList.remove('show');
                document.body.style.overflow = '';
            });
        });
    }
};

// --- CONTACT FORM HANDLING ---
const handleContactForm = () => {
    const contactForm = document.querySelector('.contact-form form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-primary');
        const originalContent = btn.innerHTML;

        // Visual Feedback
        btn.innerHTML = 'Sending... <i class="bi bi-hourglass-split"></i>';
        btn.style.pointerEvents = 'none';
        btn.style.filter = 'grayscale(1)';

        // Simulyatsiya (Haqiqiy backend bo'lsa fetch ishlatiladi)
        setTimeout(() => {
            btn.innerHTML = 'Sent Successfully! <i class="bi bi-check-all"></i>';
            btn.style.filter = 'none';
            btn.style.background = '#00ff88'; // Success green
            contactForm.reset();

            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.style.background = '';
                btn.style.pointerEvents = 'all';
            }, 3000);
        }, 1500);
    });
};

// --- BARCHASINI ISHGA TUSHIRISH ---
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter('typewriter', ['Creative Developer', 'Full-stack Developer', 'UI/UX Designer']);
    initCursor();
    handleNavbarScroll();
    initMobileMenu();
    handleContactForm();
});