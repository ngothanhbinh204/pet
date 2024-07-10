//Menu
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('invisible');
})
// ------------------------------

var swiper = new Swiper(".banner-heading", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// ---------------------------------------

var swiperCachDung = new Swiper(".cachdung-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

var swiperStore = new Swiper(".store-slider", {
    slidesPerView: 2,
    spaceBetween: 200,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
});

// ---------------------------------------

