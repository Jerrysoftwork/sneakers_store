// Quantity control
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const count = document.getElementById('count');
const cartCount = document.getElementById('cart-count');
const addToCartBtn = document.querySelector('.add-to-cart');

let quantity = 0;

plus.addEventListener('click', () => {
  quantity++;
  count.textContent = quantity;
});

minus.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    count.textContent = quantity;
  }
});

// Image switching
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    thumbnails.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.src = thumb.src;
  });
});

// Add to cart and save to localStorage
addToCartBtn.addEventListener('click', () => {
  if (quantity === 0) return;

  const product = {
    name: 'Fall Limited Edition Sneakers',
    price: 125,
    quantity,
    img: mainImage.src
  };

  localStorage.setItem('cart', JSON.stringify([product]));
  cartCount.textContent = quantity;
});
// Update cart count on page load
window.addEventListener('load', () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (cart && cart.length > 0) {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalQuantity;
  } else {
    cartCount.textContent = '0';
  }
});
// Add images and update HTML and CSS for sneakers store project        