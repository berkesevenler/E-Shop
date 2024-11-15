/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//Berkes Functions


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addToCartButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = 'watch-page.html'; // Redirect to the new page
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addToCartButton1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = 'sunglasses-page.html'; // Redirect to the new page
  });
});

// Function to add an item to the cart
function addToCart(name, price) {
  let cartData = JSON.parse(localStorage.getItem('cart')) || { items: [], timestamp: Date.now() };
  cartData.items.push({ name: name, price: price });
  cartData.timestamp = Date.now(); // Update timestamp with each addition
  localStorage.setItem('cart', JSON.stringify(cartData));
  alert('Item added to cart!');
  displayCart();
  
  // Clear cart after 1 minute
  setTimeout(clearCart, 60000); // 60000 milliseconds = 1 minute
}

// Function to clear cart
function clearCart() {
  localStorage.removeItem('cart');
  displayCart(); // Update cart display after clearing
}

// Function to display cart items on cart.html
function displayCart() {
  let cartData = JSON.parse(localStorage.getItem('cart')) || {};
  let cart = cartData.items || [];
  let cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(function(item) {
      let itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  }
}

// Automatically update cart display when cart.html loads
document.addEventListener('DOMContentLoaded', function() {
  displayCart();
  
  // Check if cart is expired (older than 1 minute)
  let cartData = JSON.parse(localStorage.getItem('cart')) || {};
  let timestamp = cartData.timestamp || 0;
  if (Date.now() - timestamp > 60000) { // 60000 milliseconds = 1 minute
    clearCart();
  }
});

// Function to add an item to the cart
function addToCart1(name, price) {
  let cartData = JSON.parse(localStorage.getItem('cart')) || { items: [], timestamp: Date.now() };
  cartData.items.push({ name: name, price: price });
  cartData.timestamp = Date.now(); // Update timestamp with each addition
  localStorage.setItem('cart', JSON.stringify(cartData));
  alert('Item added to cart!');
  displayCart();
  
  // Clear cart after 1 minute
  setTimeout(clearCart, 60000); // 60000 milliseconds = 1 minute
}

// Function to display cart items on cart.html
function displayCart() {
  let cartData = JSON.parse(localStorage.getItem('cart')) || {};
  let cart = cartData.items || [];
  let cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(function(item) {
      let itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  }
}

// Automatically update cart display when cart.html loads
document.addEventListener('DOMContentLoaded', function() {
  displayCart();
  
  // Check if cart is expired (older than 1 minute)
  let cartData = JSON.parse(localStorage.getItem('cart')) || {};
  let timestamp = cartData.timestamp || 0;
  if (Date.now() - timestamp > 60000) { // 60000 milliseconds = 1 minute
    clearCart();
  }
});



//Elvins Functions

document.addEventListener("DOMContentLoaded", function () {
  document
  .getElementById("goToProduct")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = "wallet.html"; // Redirect to the new page
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
  .getElementById("goToProduct1")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = "hat.html"; // Redirect to the new page
  });
});

function addToCart3(name, price) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || {
    items: [],
    timestamp: Date.now(),
  };
  cartData.items.push({ name: name, price: price });
  cartData.timestamp = Date.now(); // Update timestamp with each addition
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("Item added to cart!");
  displayCart();
  
  // Clear cart after 1 minute
  setTimeout(clearCart, 60000); // 60000 milliseconds = 1 minute
}

// Function to clear cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCart(); // Update cart display after clearing
}

// Function to display cart items on cart.html
function displayCart() {
  let cartData = JSON.parse(localStorage.getItem("cart")) || {};
  let cart = cartData.items || [];
  let cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(function (item) {
      let itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  }
}

// Automatically update cart display when cart.html loads
document.addEventListener("DOMContentLoaded", function () {
  displayCart();
  
  // Check if cart is expired (older than 1 minute)
  let cartData = JSON.parse(localStorage.getItem("cart")) || {};
  let timestamp = cartData.timestamp || 0;
  if (Date.now() - timestamp > 60000) {
    // 60000 milliseconds = 1 minute
    clearCart();
  }
});

function addToCart4(name, price) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || {
    items: [],
    timestamp: Date.now(),
  };
  cartData.items.push({ name: name, price: price });
  cartData.timestamp = Date.now(); // Update timestamp with each addition
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("Item added to cart!");
  displayCart();
  
  // Clear cart after 1 minute
  setTimeout(clearCart, 60000); // 60000 milliseconds = 1 minute
}

//Haytham functionen
document.addEventListener('DOMContentLoaded', initializeCart);

function initializeCart() {
  const cartCountSpan = document.getElementById('cartCount');
  let cartCount = 0;
  const addToCartButtons = document.querySelectorAll('.addToCartButton');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', handleAddToCart);
  });

  function handleAddToCart() {
    cartCount++;
    cartCountSpan.textContent = cartCount;
  }
}

const inputQuantity = document.getElementById('inputQuantity');
const cartQuantity = document.getElementById('cartQuantity');
const addToCartBtn = document.getElementById('addToCartBtn');


function updateCartProductQuantity() {
  const quantity = parseInt(inputQuantity.value, 10);
  
  if (!isNaN(quantity) && quantity >= 0) {
    cartQuantity.textContent = quantity;
  } else {
    alert('Please enter a valid number');
  }
}

addToCartBtn.addEventListener('click', updateCartProductQuantity);

document.addEventListener("DOMContentLoaded", function () {
  // Define an object with the element IDs as keys and URLs as values
  const navigationConfig = {
    "darkGreyCoatImage": "/Coats/DarkGreyCoatPage.html",
    "navigateButton1": "/Coats/KhakiCoatPage.html",
    "navigateButton2": "/Coats/LongBlackCoat.html",
    "navigateButton3": "/Coats/DuffleCoat.html",
    "navigateButton4": "/Coats/SandMelangeCoat.html",
    "navigateButton5": "/Coats/SpiritHoodCoat.html",
    "navigateButton6": "/Coats/BlackLeatherCoat.html",
    "navigateButton7": "/Coats/BrownCoat.html",
    "navigateButton8": "/Sections/CoatsSection.html"
  };

  // Iterate over the configuration object
  for (const [elementId, url] of Object.entries(navigationConfig)) {
    // Get the element by ID
    const element = document.getElementById(elementId);
    
    // Add a click event listener if the element exists
    if (element) {
      element.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior
        window.location.href = url; // Redirect to the specified URL
      });
    }
  }
});

function imageClick(url) {
  window.location.href = url;
}
// Yahya function
//
function redirectToForgetPassword() {
  window.location.href = './forgetPassword.html';
}
// src/your-code.js
function redirectToRegisterPage() {
  window.location.assign('./registerPage.html');
}
function redirectToLoginPage() {
  window.location.href = 'loginPage.html';
}
function redirectToLoginPage() {
  window.location.href = 'loginPage.html';
}
// Exportiere die Funktion für den Test
module.exports = {
  redirectToRegisterPage
};
