// Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple change icon
        const icon = navToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
        } else {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.replace('ph-x', 'ph-list');
    });
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.about-card, .skill-category, .project-card, .timeline-item, .cert-list li');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
});

revealElements.forEach(el => {
    el.classList.add('reveal-init');
    revealObserver.observe(el);
});

// Typing Effect for Hero
const typingText = document.querySelector('.typing-text');
const words = ["Java Backend Developer", "Data Science Enthusiast", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();

    // CV Modal Logic
    const cvModal = document.getElementById('cv-modal');
    const openModalTrigger = document.getElementById('open-cv-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    function openCV() {
        if (cvModal) {
            cvModal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeCV() {
        if (cvModal) {
            cvModal.classList.remove('is-open');
            document.body.style.overflow = 'auto';
        }
    }

    if (openModalTrigger) openModalTrigger.addEventListener('click', openCV);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeCV);
    if (cvModal) {
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) closeCV();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCV();
    });
});
