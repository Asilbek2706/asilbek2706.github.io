export const initProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                // CSS'da widthni 0 qilib, targetni data-atributda saqlaymiz
                const targetWidth = bar.getAttribute('data-width') || '0%';

                // Bir oz kechikish bilan animatsiyani boshlaymiz
                requestAnimationFrame(() => {
                    bar.style.width = targetWidth;
                    bar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.5, 0.5, 1)';
                });

                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.2 }); // 0.5 juda baland, 0.2 qulayroq

    progressBars.forEach(bar => {
        // Boshlang'ich holat
        bar.style.width = '0%';
        observer.observe(bar);
    });
};

export const initProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;

                // 1. HTML style ichidagi widthni olamiz (masalan: 90%)
                const targetWidth = bar.style.width;

                // 2. Animatsiya boshlanishi uchun widthni vaqtincha nolga tushiramiz
                bar.style.width = '0%';

                // 3. Bir lahzadan so'ng animatsiya bilan widthni qaytaramiz
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.5, 0.5, 1)';
                        bar.style.width = targetWidth;
                    }, 50);
                });

                // Bir marta ishlagandan keyin kuzatishni to'xtatamiz
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.3 }); // Bar 30% ko'ringanda animatsiya boshlanadi

    progressBars.forEach(bar => observer.observe(bar));
};