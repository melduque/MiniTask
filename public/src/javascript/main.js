document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('darkToggle');
    const body = document.body;

    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');

        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});
