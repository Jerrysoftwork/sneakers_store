const navMen = document.getElementById('nav-men');
const navCollections = document.getElementById('nav-collections');
const collectionsSection = document.getElementById('collections-section');
const productContainer = document.querySelector('.product-container');

// Quantity controls
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

// Add to cart
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

// Show men's shoes
navMen.addEventListener('click', (e) => {
  e.preventDefault();

  productContainer.classList.remove('hidden');
  collectionsSection.classList.add('hidden');

  mainImage.src = 'images/men1.jpeg';
  thumbnails.forEach((thumb, index) => {
    thumb.src = `images/men${index + 1}.jpeg`;
  });

  thumbnails.forEach(t => t.classList.remove('active'));
  thumbnails[0].classList.add('active');
});

// Show collections
navCollections.addEventListener('click', (e) => {
  e.preventDefault();
  productContainer.classList.add('hidden');
  collectionsSection.classList.remove('hidden');
});

// Back button handler
function goBackToProduct() {
  collectionsSection.classList.add('hidden');
  productContainer.classList.remove('hidden');
}
