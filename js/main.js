// 1. Importlar har doim eng tepada bo'lishi kerak
import { initTypewriter } from './modules/typewriter.js';

// --- CURSOR FOLLOWER ---
const cursor = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - 10;
    const y = e.clientY - 10;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
});

const links = document.querySelectorAll('a, button, .skill-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-active'); // CSS orqali scale qilish osonroq
        cursor.style.background = '#ffffff';
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
        cursor.style.background = '';
    });
});

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- DOM CONTENT LOADED ---
document.addEventListener('DOMContentLoaded', () => {
    // Typewriter initialization
    initTypewriter('typewriter', ['Creative Developer', 'Full-stack Developer', 'UI/UX Designer']);

    // --- MOBILE MENU FUNCTIONALITY (YANGI QISM) ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Ikonkani almashtirish: List -> X
            if (navMenu.classList.contains('active')) {
                menuIcon.classList.replace('bi-list', 'bi-x-lg');
            } else {
                menuIcon.classList.replace('bi-x-lg', 'bi-list');
            }
        });

        // Menyu linklari bosilganda menyuni yopish
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuIcon.classList.replace('bi-x-lg', 'bi-list');
            });
        });
    }
});

// --- CONTACT FORM HANDLING ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending Pulse... <i class="bi bi-hourglass-split"></i>';
        btn.style.opacity = '0.7';
        btn.style.pointerEvents = 'none';

        setTimeout(() => {
            btn.innerHTML = 'Sent Successfully! <i class="bi bi-check-all"></i>';
            btn.style.background = '#00ff88';
            btn.style.boxShadow = '0 0 20px #00ff88';
            contactForm.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'all';
                btn.style.background = '';
                btn.style.boxShadow = '';
            }, 3000);
        }, 2000);
    });
}