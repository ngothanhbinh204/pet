//Menu
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('invisible');
})

const slider = document.getElementById('slider');
const slides = slider.children;
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
const totalSlides = slides.length - 1;

next.addEventListener('click', () => {
    if (index >= totalSlides - 1) {
        index = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0)`;
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
            index++;
            slider.style.transform = `translateX(-${index * 100}%)`;
        }, 20);
    } else {
        index++;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});

prev.addEventListener('click', () => {
    if (index <= 0) {
        index = totalSlides - 1;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
            index--;
            slider.style.transform = `translateX(-${index * 100}%)`;
        }, 20);
    } else {
        index--;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});
