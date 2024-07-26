document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    const colors = ['#ff00ff', '#00ffff', '#ff00aa', '#aa00ff', '#00ffaa'];

    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            card.style.backgroundColor = randomColor;
        });

        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Form submission (replace with your own logic)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        contactForm.reset();
        
    });
    

});