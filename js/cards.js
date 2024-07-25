document.addEventListener('DOMContentLoaded', function() {
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




    const buttons = document.querySelectorAll('.find__btn');
    const items = document.querySelectorAll('.find__item');
    const content = document.querySelector('.find__content');

    function filterItems(filter) {
        buttons.forEach(btn => btn.classList.remove('active'));
        items.forEach(item => item.classList.remove('active'));
        content.classList.remove('all');
        content.classList.remove('active');

        if (filter === 'all') {
            content.classList.add('all');
            items.forEach(item => item.classList.add('active'));
        } else {
            items.forEach(item => {
                if (item.getAttribute('data-name') === filter) {
                    item.classList.add('active');
                }
            });
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-name');
            button.classList.add('active');
            filterItems(filter);
        });
    });
    const allButton = document.querySelector('.find__btn[data-name="all"]');
    if (allButton) {
        allButton.click();
    }

});
