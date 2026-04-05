import { createIcons, ArrowRight, Menu, X } from 'lucide';

// Initialize Lucide Icons
createIcons({
    icons: {
        ArrowRight,
        Menu,
        X
    }
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    follower.style.left = (e.clientX - 10) + 'px';
    follower.style.top = (e.clientY - 10) + 'px';
});

// Reveal Sections on Scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Hero Parallax on Scroll
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `scale(${1 + scroll * 0.0005}) translateY(${scroll * 0.1}px)`;
    }
});

// Horizontal Scroll for Diet Section (Simulated with simple scroll)
const dietRunner = document.querySelector('.diet-runner');
if (dietRunner) {
    window.addEventListener('scroll', () => {
        const rect = dietRunner.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const move = - (progress * 200); // Adjust for speed
            dietRunner.style.transform = `translateX(${move}px)`;
        }
    });
}

// Interactive Divider for Showdown
const showdown = document.querySelector('.showdown-container');
const pcosPane = document.querySelector('.pcos-pane');
const divider = document.querySelector('.divider');

if (showdown) {
    showdown.addEventListener('mousemove', (e) => {
        const rect = showdown.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        pcosPane.style.clipPath = `polygon(${x}% 0, 100% 0, 100% 100%, ${x}% 100%)`;
        divider.style.left = x + '%';
    });
}

// Magnetic Button Logic (Simple)
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('mousemove', (e) => {
        const rect = menuBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        menuBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    menuBtn.addEventListener('mouseleave', () => {
        menuBtn.style.transform = `translate(0, 0)`;
    });
}
