let swiper = new Swiper(".scrolling-slider", {
    direction: "vertical",
    spaceBetween: 42,
    slidesPerView: 1,
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const checkboxes = document.querySelectorAll('.compare__checkbox');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.classList.add('active');
        } else {
            this.parentElement.classList.remove('active');
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
const videoBtn = document.querySelector('.videobanner__btn');
const videoBanner = document.querySelector('.videobanner-video');
const closeBtn = document.querySelector('.videobanner__close');
videoBtn.addEventListener('click', function() {
    videoBanner.classList.add('active');
    document.body.classList.add('no-scroll');
});
closeBtn.addEventListener('click', function() {
    videoBanner.classList.remove('active');
    document.body.classList.remove('no-scroll');
    video.pause();
    video.currentTime = 0;
});