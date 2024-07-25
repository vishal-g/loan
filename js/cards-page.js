document.addEventListener('DOMContentLoaded', function() {
    let axixSwiper = new Swiper(".axix__slider", {
        spaceBetween: 50,
        slidesPerView: 1,
        loop: false,
        speed: 1000,
        navigation: {
            nextEl: '.axix__slider-next',
            prevEl: '.axix__slider-prev',
        },
        on: {
            slideChange: function () {
                updateActiveSlide();
            }
        }
    });
    function updateActiveSlide() {
        const slides = document.querySelectorAll('.axix__mobile-item');
        const activeIndex = axixSwiper.activeIndex;
        slides.forEach((slide, index) => {
            if (index === activeIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    window.addEventListener('resize', function () {
        if (window.innerWidth < 481) {
            updateActiveSlide();
        }
    });
    updateActiveSlide();
});
