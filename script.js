// Quantity controls
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const count = document.getElementById('count');

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

// Image thumbnail switching
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    thumbnails.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.src = thumb.src;
  });
});

// Cart logic
const addToCartBtn = document.querySelector('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItems = document.getElementById('cart-items');

let cart = [];

addToCartBtn.addEventListener('click', () => {
  if (quantity === 0) return;

  const product = {
    name: 'Fall Limited Edition Sneakers',
    price: 125,
    quantity,
    img: mainImage.src
  };

  cart = [product]; // Replace cart with new item
  updateCartDisplay();
});

function updateCartDisplay() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty">Your cart is empty.</p>';
    cartCount.textContent = '0';
    return;
  }

  const item = cart[0];
  cartCount.textContent = item.quantity;

  cartItems.innerHTML = `
    <div class="cart-item">
      <img src="${item.img}" alt="Sneaker" />
      <div class="cart-item-details">
        <p>${item.name}</p>
        <p>$${item.price} × ${item.quantity} = <strong>$${item.price * item.quantity}</strong></p>
      </div>
      <button class="cart-item-delete">✖</button>
    </div>
  `;

  // Delete button
  document.querySelector('.cart-item-delete').addEventListener('click', () => {
    cart = [];
    updateCartDisplay();
  });
}

// Toggle cart dropdown on icon click
cartIcon.addEventListener('click', () => {
  cartDropdown.classList.toggle('hidden');
});
