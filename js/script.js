const serviceCards = document.querySelectorAll('.service_card');
const serviceCardBlurs = document.querySelectorAll('.service_card_blur');

serviceCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        if (serviceCardBlurs[index]) {
            serviceCardBlurs[index].style.filter = "blur(39px)";
            serviceCardBlurs[index].style.height = "100px";
            serviceCardBlurs[index].style.width = "200px";
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (serviceCardBlurs[index]) {
            serviceCardBlurs[index].style.filter = "blur(20px)";
            serviceCardBlurs[index].style.height = "50px";
            serviceCardBlurs[index].style.width = "100px";
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