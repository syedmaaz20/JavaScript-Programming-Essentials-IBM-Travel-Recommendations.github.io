// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('#navbar a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Image description toggle
    window.toggleImageDescription = function(img) {
        const desc = img.parentElement.nextElementSibling;
        if (desc.style.display === 'none' || desc.style.display === '') {
            desc.style.display = 'block';
        } else {
            desc.style.display = 'none';
        }
    };

    // Contact form submission
    const form = document.getElementById('emailForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulate email send
            document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent from ${email}.`;
            form.reset();
        });
    }
});