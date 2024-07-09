//Menu
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('invisible');
})