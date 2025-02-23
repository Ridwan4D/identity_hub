const serviceCards = document.querySelectorAll('.service_card');
const serviceCardBlurs = document.querySelectorAll('.service_card_blur');

serviceCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        if (serviceCardBlurs[index]) {
            serviceCardBlurs[index].classList.add("active");
        }
    });

    card.addEventListener('mouseleave', () => {
        if (serviceCardBlurs[index]) {
            serviceCardBlurs[index].classList.remove("active");
        }
    });
});






















new Swiper('.swiper', {
    loop: true,
    // spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.go_next',
        prevEl: '.go_prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});