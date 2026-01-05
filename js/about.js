/**
 * ABOUT PAGE SPECIFIC LOGIC
 * Clean & Minimalist Version
 */

"use strict";

const AboutPage = {
    init() {
        // Faqat mazmunli mantiqlarni qoldiramiz
        this.initArsenalLayout();
        this.handleImageError();
    },

    // 1. Arsenal bo'limini tartiblash (hech qanday sakrashlarsiz)
    initArsenalLayout() {
        const badges = document.querySelectorAll('.stack-grid span');
        if (!badges.length) return;

        // Animatsiyasiz, shunchaki elementlar tayyorligini tekshirish
        // Kelajakda bu yerga dinamik ma'lumotlar qo'shish mumkin
        console.log(`Arsenal loaded with ${badges.length} technologies.`);
    },

    // 2. Profil rasmida xatolik bo'lsa (masalan yuklanmasa) o'rniga placeholder qo'yish
    handleImageError() {
        const profileImg = document.querySelector('.profile-circle');
        if (profileImg) {
            profileImg.onerror = () => {
                profileImg.src = 'https://ui-avatars.com/api/?name=Asilbek+Karomatov&background=0dcaf0&color=fff';
            };
        }
    }
};

document.addEventListener('DOMContentLoaded', () => AboutPage.init());