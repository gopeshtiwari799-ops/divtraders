let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart").innerText = `Cart 🛒 (${cart.length})`;

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("productGrid");
    data.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.image}">
          <h4>${p.name}</h4>
          <p class="price">₹${p.price}</p>
          <button onclick="viewProduct(${p.id})">View</button>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    });
  });

function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart").innerText = `Cart 🛒 (${cart.length})`;
  alert("Added to cart");
}

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
