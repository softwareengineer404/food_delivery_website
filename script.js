var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});
const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
cartIcon.addEventListener('click', ()=> cartTab.classList.add('cart-tab-active'));