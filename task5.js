// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image: "https://via.placeholder.com/250x150?text=Headphones"
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$89.99",
    image: "https://via.placeholder.com/250x150?text=Smartwatch"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$39.99",
    image: "https://via.placeholder.com/250x150?text=Speaker"
  },
  {
    id: 4,
    name: "Portable Charger",
    price: "$25.99",
    image: "https://via.placeholder.com/250x150?text=Charger"
  }
];

// Function to load products into the DOM
function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// Add to Cart action
function addToCart(productName) {
  alert(`"${productName}" added to your cart!`);
}

// Optimize on load
window.addEventListener("DOMContentLoaded", loadProducts);
