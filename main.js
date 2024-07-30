var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: 400,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 6,
        slideShadows: false,
    },
    initialSlide: 1, // Chỉ định slide thứ 2 (0-based index)
    navigation: {
        nextEl: ".swiper-button-next", // Selector cho nút next
        prevEl: ".swiper-button-prev", // Selector cho nút prev
    },
    // autoplay: {

    //     delay: 3000,
    //     disableOnInteraction: false,
    // }

    breakpoints: {
        100: {
            spaceBetween: 200,
        },
        576: {
            spaceBetween: 250,
        },
        768: {
            spaceBetween: 300,
        },
        992: {
            spaceBetween: 300,
        },
        1024: {
            spaceBetween: 400,
        },

    }

});


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('ion-icon[name="menu"]');
    const menuItems = document.querySelectorAll('.nav-links a');
    let menuOpen = false;

    function toggleMenu(e) {
        if (menuOpen) {
            e.name = 'menu';
            navLinks.classList.remove('top-[100%]');
            navLinks.classList.remove('opacity-100');
        } else {
            e.name = 'close';
            navLinks.classList.add('top-[100%]');
            navLinks.classList.add('opacity-100');
        }
        menuOpen = !menuOpen;
    }

    function handleClickOutside(event) {
        if (menuOpen && !navLinks.contains(event.target) && event.target !== menuToggle && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('top-[100%]');
            navLinks.classList.remove('opacity-100');
            menuToggle.name = 'menu';
            menuOpen = false;
        }
    }

    function handleMenuItemClick() {
        if (menuOpen) {
            navLinks.classList.remove('top-[100%]');
            navLinks.classList.remove('opacity-100');
            menuToggle.name = 'menu';
            menuOpen = false;
        }
    }

    menuToggle.addEventListener('click', function (e) {
        toggleMenu(e.target);
    });

    document.addEventListener('click', handleClickOutside);

    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
    });
});


var swiper2 = new Swiper(".gallery", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next", // Selector cho nút next
        prevEl: ".swiper-button-prev", // Selector cho nút prev
    },
});

var videoPlayer1 = document.getElementById("video_hero");
var video1 = document.getElementById("video1");
function stopVideo1() {
    videoPlayer1.style.display = 'none';
    video1.pause()
}

function playVideo1(file) {
    videoPlayer1.style.display = "block"
    video1.play();

}



var videoPlayer2 = document.getElementById("video_gallery");
var video2 = document.getElementById("video2");

function stopVideo2() {
    videoPlayer2.style.display = 'none';
    video2.pause();
}

function playVideo2(file) {
    videoPlayer2.style.display = "block"
    video2.play();
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            navLinks.forEach(link => {
                const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (targetLink) {
                    link.classList.remove('active');
                    targetLink.classList.add('active');
                }
            });
        }
    });
};

function toggleBackground(checkbox) {
    var item = checkbox.closest('.item-FAQ');
    if (checkbox.checked) {
        item.classList.add('bg-[#EFFEFF]', 'border-[#1DC8DA]');
    } else {
        item.classList.remove('bg-[#EFFEFF]', 'border-[#1DC8DA]');
    }
}


