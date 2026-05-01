document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuHamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const reveals = document.querySelectorAll('.reveal');
    const cards = document.querySelectorAll('.hero-main-card, .stat-item');

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- ANIMAÇÃO DE REVELAÇÃO (SCROLL) ---
    const handleScroll = () => {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };

    // --- EFEITO 3D NOS CARDS ---
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 60; 
            const rotateY = (x - centerX) / 60;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = "transform 0.5s ease";
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            setTimeout(() => { card.style.transition = "transform 0.1s ease-out"; }, 500);
        });
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
