document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const cards = document.querySelectorAll('.hero-main-card, .stat-item');

    // Efeito de Revelação ao Scroll
    const handleScroll = () => {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };

    // Efeito 3D nos Cards (Tilt)
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateX = (rect.height / 2 - y) / 20; 
            const rotateY = (x - rect.width / 2) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Dispara uma vez ao carregar
});
