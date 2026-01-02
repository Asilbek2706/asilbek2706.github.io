"use strict";

// 1. NAVBAR LOGIC (Mobil menyu va Scroll effekti)
const handleNavbar = () => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.custom-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');

    if (menuToggle && navCollapse) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpened = navCollapse.classList.contains('show');

            menuToggle.classList.toggle('active');
            navCollapse.classList.toggle('show');

            // Sahifani qulflash (mobil menyu ochiqligida)
            document.body.style.overflow = !isOpened ? 'hidden' : '';
        });

        // Link bosilganda menyuni yopish
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navCollapse.classList.remove('show');
                document.body.style.overflow = '';
            });
        });

        // Menyu tashqarisiga bosilganda yopish
        document.addEventListener('click', (e) => {
            if (navCollapse.classList.contains('show') && !navbar.contains(e.target)) {
                menuToggle.classList.remove('active');
                navCollapse.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // Scroll effekti (Navbar foni o'zgarishi)
    const onScroll = () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('navbar-scrolled');
        } else {
            navbar?.classList.remove('navbar-scrolled');
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
};

// 2. FAQ LOGIC (Accordion + Typewriter Effect)
const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        const wrapper = item.querySelector('.faq-answer');
        const answerPara = item.querySelector('.answer-content p');

        // Asl matnni saqlash
        if (answerPara && !item.hasAttribute('data-text')) {
            item.setAttribute('data-text', answerPara.innerText.trim());
        }

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const originalText = item.getAttribute('data-text');

            // Akordeon: Boshqa barcha ochiqlarni yopish
            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                    const otherWrapper = el.querySelector('.faq-answer');
                    if (otherWrapper) otherWrapper.style.maxHeight = null;
                }
            });

            if (!isActive) {
                item.classList.add('active');

                // Typewriter effekti (faqat birinchi marta ochiqilganda)
                if (answerPara && !item.hasAttribute('data-typed')) {
                    answerPara.innerText = '';
                    item.setAttribute('data-typed', 'true');

                    let i = 0;
                    const type = () => {
                        if (i < originalText.length) {
                            answerPara.innerText += originalText.charAt(i);
                            i++;
                            // Matn yozilishi bilan balandlikni dinamik yangilab turish
                            wrapper.style.maxHeight = wrapper.scrollHeight + "px";
                            setTimeout(type, 10); // Tez yozish uchun 10ms
                        }
                    };
                    type();
                } else {
                    wrapper.style.maxHeight = wrapper.scrollHeight + "px";
                }
            } else {
                item.classList.remove('active');
                wrapper.style.maxHeight = null;
            }
        });
    });
};

// 3. PROGRESS BAR (Skill Counter)
const initProgress = () => {
    const percentEls = document.querySelectorAll('.val');
    if (percentEls.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target')) || 0;
                let count = 0;

                const timer = setInterval(() => {
                    count++;
                    el.innerText = count;
                    if (count >= target) clearInterval(timer);
                }, 25);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.8 });

    percentEls.forEach(el => observer.observe(el));
};

// 4. CONTACT FORM (Cyberpunk Style Logic)
const handleContactForm = () => {
    const form = document.querySelector('.cyber-form') || document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.cta-btn');
        if (!submitBtn) return;

        const originalContent = submitBtn.innerHTML;

        // Loading holati
        submitBtn.innerHTML = `<span>SENDING...</span> <i class="bi bi-arrow-repeat spin"></i>`;
        submitBtn.classList.add('loading');
        submitBtn.style.pointerEvents = 'none';

        // Imitatsiya (Simulatsiya)
        setTimeout(() => {
            submitBtn.innerHTML = `<span>MESSAGE SENT!</span> <i class="bi bi-check2-circle"></i>`;
            submitBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            submitBtn.style.borderColor = '#10b981';
            submitBtn.style.color = '#10b981';

            form.reset();

            // Asl holiga qaytarish
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.style = '';
                submitBtn.classList.remove('loading');
                submitBtn.style.pointerEvents = 'all';
            }, 4000);
        }, 1800);
    });
};

// 5. TYPEWRITER (Hero Section uchun)
// Agar initTypewriter funksiyasi boshqa joyda bo'lsa buni olib tashlang
const startHeroTypewriter = () => {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const phrases = [
        'Creative Developer',
        'Frontend Architect',
        'UI/UX Enthusiast',
        'Next.js Specialist'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            el.innerText = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            el.innerText = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Kutish vaqti
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    };

    type();
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    handleNavbar();
    initFAQ();
    initProgress();
    handleContactForm();
    startHeroTypewriter();

    // AOS (Animate on Scroll) ishga tushirish (agar mavjud bo'lsa)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }
});