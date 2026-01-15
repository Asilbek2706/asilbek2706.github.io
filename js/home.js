"use strict";

const HomeApp = {
    init() {
        this.navbarScrollEffect();
        this.activeLinkHandler();
    },

    navbarScrollEffect() {
        const navContainer = document.querySelector('.nav-container');

        if (!navContainer) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navContainer.classList.add('scrolled');
            } else {
                navContainer.classList.remove('scrolled');
            }
        }, { passive: true });
    },

    activeLinkHandler() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => HomeApp.init());