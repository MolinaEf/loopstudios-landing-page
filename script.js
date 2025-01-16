const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');

const navMenu = document.getElementById('nav-menu');

openMenuBtn.addEventListener('click', () => {
    console.log('open menu');   
    navMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});