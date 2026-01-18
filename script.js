let cartCount = 0;

// Cart count show karne ke liye
const cartSpan = document.querySelector(".nav-right span:last-child");

document.querySelectorAll(".product-card button").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartSpan.innerText = "Cart 🛒 (" + cartCount + ")";
    alert("Product added to cart!");
  });
});