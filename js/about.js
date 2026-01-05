/**
 * ASILBEK.DEV - ABOUT PAGE SMART ENGINE
 */

"use strict";

const AboutEngine = {
    init() {
        this.handleImageLoader();
        this.interactiveCards();
        this.parallaxElements();
    },

    // 1. RASM YUKLANISHI (Performance focus)
    handleImageLoader() {
        const profileImg = document.querySelector('.profile-circle');
        const container = document.querySelector('.circle-container');

        if (!profileImg) return;

        // Rasm yuklanishidan oldin loading klassini qo'shamiz
        container.classList.add('loading');

        const img = new Image();
        img.src = profileImg.src;

        img.onload = () => {
            profileImg.classList.add('loaded');
            container.classList.remove('loading');
        };

        img.onerror = () => {
            console.error("Profile image failed to load.");
            container.classList.remove('loading');
        };
    },

    // 2. MAGNETIC HOVER (Kartalar kursorni sezishi)
    interactiveCards() {
        const storyCard = document.querySelector('.bio-story');
        if (!storyCard) return;

        storyCard.addEventListener('mousemove', (e) => {
            const rect = storyCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Minimalistik 3D effekt (rotation-siz)
            const xRotation = (y - rect.height / 2) / 20;
            const yRotation = (x - rect.width / 2) / 20;

            storyCard.style.transform = `perspective(1000px) scale(1.01) translateY(-5px)`;
        });

        storyCard.addEventListener('mouseleave', () => {
            storyCard.style.transform = `none`;
        });
    },

    // 3. ARSENAL DELAYED REVEAL
    parallaxElements() {
        const items = document.querySelectorAll('.stack-grid span');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        items.forEach(item => {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            item.style.transition = "all 0.6s ease-out";
            observer.observe(item);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => AboutEngine.init());