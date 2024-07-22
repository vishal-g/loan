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