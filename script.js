// Advanced Minimalist Cursor
const dot = document.querySelector('.cursor-dot');
const trail = document.querySelector('.cursor-trail');

window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;

    // Dot is instant
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';

    // Trail has a smooth delay
    trail.animate({
        left: x + 'px',
        top: y + 'px'
    }, { duration: 400, fill: "forwards" });
});

// Interactive hover effects
const interactive = document.querySelectorAll('a, button, .product-card');
interactive.forEach(el => {
    el.addEventListener('mouseenter', () => {
        trail.style.width = '60px';
        trail.style.height = '60px';
        trail.style.borderColor = 'var(--neon-color)';
        dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        trail.style.width = '40px';
        trail.style.height = '40px';
        trail.style.borderColor = 'rgba(0, 243, 255, 0.3)';
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('.section-animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.classList.contains('nav-discord')) return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
