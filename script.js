/* ===== PRODUCT STORAGE ===== */
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Sample Product",
    price: 999,
    image: "https://via.placeholder.com/200",
    description: "This is a demo product"
  }
];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

/* ===== ADD PRODUCT (ADMIN) ===== */
function addProduct() {
  const name = document.getElementById("pname").value;
  const price = document.getElementById("pprice").value;
  const image = document.getElementById("pimage").value;
  const desc = document.getElementById("pdesc").value;

  if (!name || !price || !image) {
    alert("All fields required");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name,
    price,
    image,
    description: desc
  };

  products.push(newProduct);
  saveProducts();

  alert("Product Added Successfully");
  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
  document.getElementById("pimage").value = "";
  document.getElementById("pdesc").value = "";
}

/* ===== CART ===== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartEl = document.getElementById("cart");
if (cartEl) cartEl.innerText = `Cart 🛒 (${cart.length})`;

/* ===== LOAD PRODUCTS (HOME) ===== */
const grid = document.getElementById("productGrid");
if (grid) {
  products.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p class="price">₹${p.price}</p>
        <button onclick="viewProduct(${p.id})">View</button>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

/* ===== CART FUNCTIONS ===== */
function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  if (cartEl) cartEl.innerText = `Cart 🛒 (${cart.length})`;
  alert("Added to cart");
}

/* ===== PRODUCT DETAIL ===== */
function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
