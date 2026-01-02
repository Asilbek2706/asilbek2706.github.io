"use strict";

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
            document.body.style.overflow = !isOpened ? 'hidden' : '';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navCollapse.classList.remove('show');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', (e) => {
            if (navCollapse.classList.contains('show') && !navbar.contains(e.target)) {
                menuToggle.classList.remove('active');
                navCollapse.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    const onScroll = () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('navbar-scrolled');
        } else {
            navbar?.classList.remove('navbar-scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
};

const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        const wrapper = item.querySelector('.faq-answer');
        const answerPara = item.querySelector('.answer-content p');

        if (answerPara && !item.hasAttribute('data-text')) {
            item.setAttribute('data-text', answerPara.innerText.trim());
        }

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const originalText = item.getAttribute('data-text');

            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                    const otherWrapper = el.querySelector('.faq-answer');
                    if (otherWrapper) otherWrapper.style.maxHeight = null;
                }
            });

            if (!isActive) {
                item.classList.add('active');
                if (answerPara && !item.hasAttribute('data-typed')) {
                    answerPara.innerText = '';
                    item.setAttribute('data-typed', 'true');
                    let i = 0;
                    const type = () => {
                        if (i < originalText.length) {
                            answerPara.innerText += originalText.charAt(i);
                            i++;
                            wrapper.style.maxHeight = wrapper.scrollHeight + "px";
                            setTimeout(type, 10);
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

const initProgress = () => {
    const percentEls = document.querySelectorAll('.val');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // HTML-dagi data-target qiymatini oladi, agar u yo'q bo'lsa 45 gacha sanaydi
                const targetValue = parseInt(el.getAttribute('data-target')) || 45;
                let currentValue = 0;

                el.innerText = "0";

                const updateCount = () => {
                    const increment = 1; // Silliq sanash uchun

                    if (currentValue < targetValue) {
                        currentValue += increment;
                        el.innerText = currentValue;
                        // requestAnimationFrame silliq animatsiya beradi
                        setTimeout(() => {
                            requestAnimationFrame(updateCount);
                        }, 30); // Sanash tezligi (30ms)
                    } else {
                        el.innerText = targetValue;
                    }
                };

                updateCount();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1 });

    percentEls.forEach(el => observer.observe(el));
};

const handleContactForm = () => {
    const form = document.querySelector('.cyber-form') || document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.cta-btn');
        if (!submitBtn) return;

        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>SENDING...</span> <i class="bi bi-arrow-repeat spin"></i>`;
        submitBtn.classList.add('loading');
        submitBtn.style.pointerEvents = 'none';

        setTimeout(() => {
            submitBtn.innerHTML = `<span>MESSAGE SENT!</span> <i class="bi bi-check2-circle"></i>`;
            submitBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            submitBtn.style.borderColor = '#10b981';
            submitBtn.style.color = '#10b981';
            form.reset();

            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.style = '';
                submitBtn.classList.remove('loading');
                submitBtn.style.pointerEvents = 'all';
            }, 4000);
        }, 1800);
    });
};

const startHeroTypewriter = () => {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const phrases = ['Creative Developer', 'Frontend Architect', 'UI/UX Enthusiast', 'Next.js Specialist'];
    let phraseIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 100;

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
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        setTimeout(type, typingSpeed);
    };
    type();
};

document.addEventListener('DOMContentLoaded', () => {
    handleNavbar();
    initFAQ();
    initProgress();
    handleContactForm();
    startHeroTypewriter();

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }
});