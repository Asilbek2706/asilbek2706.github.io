export const initSpaceBackground = () => {
    let canvas = document.getElementById('space-bg');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'space-bg';
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const stars = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random()
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        stars.forEach(s => {
            ctx.globalAlpha = s.opacity;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();

            s.y += s.speed;

            s.opacity += (Math.random() - 0.5) * 0.05;
            if (s.opacity < 0.1) s.opacity = 0.1;
            if (s.opacity > 0.8) s.opacity = 0.8;

            if (s.y > canvas.height) {
                s.y = 0;
                s.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
};