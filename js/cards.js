document.addEventListener('DOMContentLoaded', function() {
    const findItems = document.querySelectorAll('.find__item');
    findItems.forEach(function(findItem) {
        const findItemImage = findItem.querySelector('.find__item-image');
        findItemImage.addEventListener('click', function() {
            if (window.innerWidth < 481) {
                if (findItem.classList.contains('active')) {
                    findItem.classList.remove('active');
                } else {
                    findItems.forEach(function(item) {
                        item.classList.remove('active');
                    });
                    findItem.classList.add('active');
                }
            } else {
                findItem.classList.remove('active');
            }
        });
    });
    window.addEventListener('resize', function() {
        findItems.forEach(function(findItem) {
            if (window.innerWidth >= 500) {
                findItem.classList.remove('active');
            }
        });
    });

    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        const top = item.querySelector('.faq__item-top');
        top.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    });
    document.querySelector('.find__more').addEventListener('click', function() {
        document.querySelector('.find__content').classList.toggle('active');
    });

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

    const axixLeftBtns = document.querySelectorAll('.axix__left-btn');
    const findItemMores = document.querySelectorAll('.find__item-more');
    const applyonline = document.querySelector('.applyonline');
    const axix = document.querySelector('.axix');
    const body = document.querySelector('.body');
    axixLeftBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            applyonline.classList.add('active');
        });
    });
    findItemMores.forEach(item => {
        item.addEventListener('click', function() {
            axix.classList.add('active');
            body.classList.add('no-scroll');
        });
    });
    

    const formElements = document.querySelectorAll('.apply__form-select, .apply__form-block input');
    function updateClass(event) {
        const element = event.target;
        if (element.value) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }
    formElements.forEach(element => {
        element.addEventListener('change', updateClass);
        element.addEventListener('input', updateClass); 
        updateClass({ target: element });
    });
});
