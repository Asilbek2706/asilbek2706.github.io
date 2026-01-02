"use strict";

/**
 * 1. Typewriter Funksiyasi
 * Bu funksiya berilgan element ichiga so'zlarni navbatma-navbat yozib beradi.
 */
const initTypewriter = (elementId, words) => {
    const el = document.getElementById(elementId);
    if (!el) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        // Matnni kesish (yozish yoki o'chirish)
        el.textContent = isDeleting
            ? currentWord.substring(0, charIndex - 1)
            : currentWord.substring(0, charIndex + 1);

        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

        // Tezlikni sozlash
        let typeSpeed = isDeleting ? 50 : 150;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // So'z yozib bo'lingach kutish
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Keyingi so'zga o'tishdan oldin kutish
        }
        setTimeout(type, typeSpeed);
    }
    type();
};

/**
 * 2. Asosiy Logika (DOMContentLoaded)
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- TYPEWRITER CHAQIRISH ---
    initTypewriter('typewriter', ['Frontend Developer', 'Junior ReactJS Engineer', 'UI/UX Designer', 'Freelancer']);

    // --- NAVBAR & TOGGLER ---
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.custom-toggler');
    const navCollapse = document.getElementById('asilbekNav');

    if (menuToggle && navCollapse) {
        menuToggle.onclick = (e) => {
            e.preventDefault();
            const isOpen = navCollapse.classList.contains('show');

            if (!isOpen) {
                menuToggle.classList.add('active');
                navCollapse.classList.add('show');
                document.body.style.overflow = 'hidden';
            } else {
                menuToggle.classList.remove('active');
                navCollapse.classList.remove('show');
                document.body.style.overflow = '';
            }
        };

        document.querySelectorAll('.nav-link').forEach(link => {
            link.onclick = () => {
                menuToggle.classList.remove('active');
                navCollapse.classList.remove('show');
                document.body.style.overflow = '';
            };
        });
    }

    // --- SKILLS PROGRESS ---
    const percentEls = document.querySelectorAll('.val');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target')) || 45;
                let current = 0;

                const step = () => {
                    if (current < target) {
                        current++;
                        el.innerText = current;
                        setTimeout(step, 20);
                    }
                };
                step();
                skillObserver.unobserve(el);
            }
        });
    }, { threshold: 0.1 });

    percentEls.forEach(el => skillObserver.observe(el));

    // --- FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.onclick = () => {
            const item = btn.parentElement;
            const answerWrapper = item.querySelector('.faq-answer');
            const answerPara = item.querySelector('.answer-content p');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(el => {
                el.classList.remove('active');
                el.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');

                if (!item.hasAttribute('data-original')) {
                    item.setAttribute('data-original', answerPara.innerText);
                }
                const fullText = item.getAttribute('data-original');

                if (!item.hasAttribute('data-typed')) {
                    answerPara.innerText = '';
                    let i = 0;
                    const typing = setInterval(() => {
                        if (i < fullText.length) {
                            answerPara.innerText += fullText.charAt(i);
                            answerWrapper.style.maxHeight = answerWrapper.scrollHeight + "px";
                            i++;
                        } else {
                            clearInterval(typing);
                            item.setAttribute('data-typed', 'true');
                        }
                    }, 10);
                } else {
                    answerWrapper.style.maxHeight = answerWrapper.scrollHeight + "px";
                }
            }
        };
    });

    // --- SCROLL NAVBAR EFFECT ---
    window.onscroll = () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    };
});