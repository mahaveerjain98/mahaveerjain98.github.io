document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for contacting me!');
        form.reset();
    });

    // GSAP animations
    gsap.from(".section", { duration: 1, y: 50, opacity: 
