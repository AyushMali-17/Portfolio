//taking help from ClaudeAI





document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = getRandomColor();
        });

        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    const tagline = document.querySelector('.tagline');
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        contactForm.reset();
    });

    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    

    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        observer.observe(card);
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    createAnimatedBackground();
});

function createAnimatedBackground() {
    const background = document.createElement('div');
    background.classList.add('animated-background');
    document.body.appendChild(background);

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        background.appendChild(star);
    }
}

