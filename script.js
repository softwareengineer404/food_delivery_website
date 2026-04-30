var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});
const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list')
cartIcon.addEventListener('click', ()=> cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click', ()=> cartTab.classList.remove('cart-tab-active'));

let productList = [];
const showCards = () =>{
    productList.forEach(product =>{
        const orderCard = document.cretaeElement('div');
        orderCard.classList.add('order-card');
        orderCard.innerHTML = `
        <div class="card-image">
            <img src="${product.image}"
        </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.price}</h4>
        <a href="#" class="btn">Add to Cart</a>
        `;
        cardList.appendChild(orderCard);
        const cardBtn = orderCard.querySelector('.card-btn');
        cardBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            addToCart();
        });
    });
}
const addToCart = () =>{
    
}
const initApp = () => {
    fetch('products.json').then
    (response => response.json()).then
    (data =>{
        productList = data;
        showCards();
    })
}
initApp();