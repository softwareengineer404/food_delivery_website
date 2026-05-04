/*var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});
*/
const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list')
const cartList = document.querySelector('.cart-list');  //Find the place where cart items will be displayed
cartIcon.addEventListener('click', ()=> cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click', ()=> cartTab.classList.remove('cart-tab-active'));

let productList = []; //Stores all products from products.json
let cartProduct = []; //Stores items added to the cart
const showCards = () =>{
    productList.forEach(product =>{  //Loop through each item in productList, or  product = one item (pizza, pasta, etc.
        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');
        orderCard.innerHTML = `
        <div class="card-image">
            <img src="${product.image}">
        </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.price}</h4>
        <a href="#" class="btn">Add to Cart</a>
        `;
        cardList.appendChild(orderCard);
        const cardBtn = orderCard.querySelector('.btn');
        cardBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            addToCart(product);
        });
    });
}
const addToCart = (product) =>{
    const existingProduct = cartProduct.find(item => item.id === product.id);
    if(existingProduct){
        alert('item already in cart');
        return;
    }
}
    cartProduct.push(product);
    let quantity = 1;
    let price = parseFloat(product.price.replace('$',''))
    const cartItem = document.createElement('div');
    cartItem.classList.add('item');
    cartItem.innerHTML = `
    
    `;
    cartList.appendChild(cartItem);
    const plusBtn = cartItem.querySelector('.plus');

    const quantityValue = cartItem.querySelector('.quantity-value');
    const itemTotal = cartItem.querySelector('.item-total')
    const minusBtn = cartItem.querySelector('.minus')
    plusBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        quantity++;
        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${price * quantity.toFixed(2)}`;

    });
    minusBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
            itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
        }
        else{
            cartItem.remove();
            cartProduct = cartProduct.filter(item => item.id !== product.id);
        }
});
const initApp = () => {
    fetch('products.json').then  //Go and get product data from file, Convert raw file → usable JS object Store fetched products into your variable
    (response => response.json()).then
    (data =>{
        productList = data; //productList = all food items
        showCards(); //Show food items in UI
    })
}
initApp();