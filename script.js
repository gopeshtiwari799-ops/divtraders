/* ===== PRODUCT STORAGE ===== */
let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

/* ===== ADD PRODUCT FUNCTION ===== */
function addProduct() {
  const name = document.getElementById("pname").value;
  const price = document.getElementById("pprice").value;
  const image = document.getElementById("pimage").value;
  const desc = document.getElementById("pdesc").value;

  if (!name || !price || !image) {
    alert("Please fill all required fields");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name: name,
    price: price,
    image: image,
    description: desc
  };

  products.push(newProduct);
  saveProducts();

  alert("✅ Product Added Successfully");

  // Clear form
  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
  document.getElementById("pimage").value = "";
  document.getElementById("pdesc").value = "";
}

/* ===== LOAD PRODUCTS ON HOME ===== */
const grid = document.getElementById("productGrid");
if (grid) {
  products.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p class="price">₹${p.price}</p>
      </div>
    `;
  });
}
