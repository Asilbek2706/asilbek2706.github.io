export const initSpaceBackground = () => {
    // 1. Faqat bitta canvas borligini tekshirish
    let canvas = document.getElementById('space-bg');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'space-bg';
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');

    // 2. Canvas stillari
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none'; // Sayt tugmalari ishlashi uchun

    // 3. Oyna o'zgarganda (Resize) o'lchamni to'g'rilash
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const stars = [];
    const starCount = 150; // Optimallashtirish uchun sonini biroz kamaytirdik

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.5 + 0.1, // Har xil tezlik (chuqurlik effekti beradi)
            opacity: Math.random() // Miltillash uchun
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background qora emas, shaffof (CSS dagi bg-deep ko'rinishi uchun)
        ctx.fillStyle = "white";

        stars.forEach(s => {
            ctx.globalAlpha = s.opacity; // Miltillash effekti
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();

            // Harakat
            s.y += s.speed;

            // Miltillash dinamikasi
            s.opacity += (Math.random() - 0.5) * 0.05;
            if (s.opacity < 0.1) s.opacity = 0.1;
            if (s.opacity > 0.8) s.opacity = 0.8;

            // Pastga tushib ketsa tepadan qaytarish
            if (s.y > canvas.height) {
                s.y = 0;
                s.x = Math.random() * canvas.width;
            }
        });

        // 4. requestAnimationFrame - eng to'g'ri animatsiya usuli
        requestAnimationFrame(animate);
    }

    animate();
};