// js/menu.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('main-nav');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            // מוסיף/מסיר קלאס 'open' גם לכפתור וגם לתפריט
            hamburgerBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
    }
});