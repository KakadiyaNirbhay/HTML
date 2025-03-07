// scripts.js

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Interactive animations (e.g., reveal effects on scroll)
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.service-card');
    reveals.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.service-card a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.closest('a').getAttribute('href');

        // Fetch and load the new page content dynamically
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector('main').innerHTML = data; // Replace main content
                window.history.pushState({}, '', url); // Update the URL
            });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const fullPageServices = document.querySelectorAll('.full-page-service');
    const closeButtons = document.querySelectorAll('.services-close-btn');

    // Open the full-page service when icon is clicked
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const index = icon.getAttribute('data-index');
            const serviceToOpen = document.querySelector(`.full-page-service[data-index="${index}"]`);
            if (serviceToOpen) {
                serviceToOpen.classList.add('active');
            }
        });
    });

    // Close the full-page service when close button is clicked
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentService = btn.closest('.full-page-service');
            if (parentService) {
                parentService.classList.remove('active');
            }
        });
    });
});



