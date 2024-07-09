//Menu
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('invisible');
})

// ------------------------------

const prevBanner1 = document.getElementById('prevBanner1');
const nextBanner1 = document.getElementById('nextBanner1');
const carousel = document.getElementById('carousel');
const indicators = document.querySelectorAll('.indicator');
let offset = 0;

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === offset) {
            indicator.classList.add('bg-main-color');
            indicator.classList.remove('bg-gray-300');
        } else {
            indicator.classList.add('bg-gray-300');
            indicator.classList.remove('bg-main-color');
        }
    });
}

prevBanner1.addEventListener('click', () => {
    if (offset > 0) {
        offset--;
    } else {
        offset = carousel.childElementCount - 1;
    }
    carousel.style.transform = `translateX(-${offset * 100}%)`;
    updateIndicators();
});

nextBanner1.addEventListener('click', () => {
    if (offset < carousel.childElementCount - 1) {
        offset++;
    } else {
        offset = 0;
    }
    carousel.style.transform = `translateX(-${offset * 100}%)`;
    updateIndicators();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        offset = index;
        carousel.style.transform = `translateX(-${offset * 100}%)`;
        updateIndicators();
    });
});

updateIndicators();


// ---------------------------------------

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


// ---------------------------------------

const sliderMap = document.getElementById('sliderMap');
const slidesMap = sliderMap.children;
const prevMap = document.getElementById('prevMap');
const nextMap = document.getElementById('nextMap');
let indexMap = 0;
const totalSlidesMap = slidesMap.length - 1;

nextMap.addEventListener('click', () => {
    if (indexMap >= totalSlidesMap - 1) {
        indexMap = 0;
        sliderMap.style.transition = 'none';
        sliderMap.style.transform = `translateX(0)`;
        setTimeout(() => {
            sliderMap.style.transition = 'transform 0.5s ease-in-out';
            indexMap++;
            sliderMap.style.transform = `translateX(-${indexMap * 100}%)`;
        }, 20);
    } else {
        indexMap++;
        sliderMap.style.transform = `translateX(-${indexMap * 100}%)`;
    }
});

prevMap.addEventListener('click', () => {
    if (indexMap <= 0) {
        indexMap = totalSlides - 1;
        sliderMap.style.transition = 'none';
        sliderMap.style.transform = `translateX(-${indexMap * 100}%)`;
        setTimeout(() => {
            sliderMap.style.transition = 'transform 0.5s ease-in-out';
            indexMap--;
            sliderMap.style.transform = `translateX(-${indexMap * 100}%)`;
        }, 20);
    } else {
        indexMap--;
        sliderMap.style.transform = `translateX(-${indexMap * 100}%)`;
    }
});

