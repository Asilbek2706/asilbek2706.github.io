export const initProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width') || bar.style.width || '0%';

                bar.style.width = '0%';

                requestAnimationFrame(() => {
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.5, 0.5, 1)';
                        bar.style.width = targetWidth;
                    }, 50);
                });

                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => observer.observe(bar));
};