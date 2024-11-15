describe("addToCart3 function", () => {
  beforeEach(() => {
    // Set up a basic HTML structure
    document.body.innerHTML = `
      <button id="addToCartButton">Add to Cart</button>
      <div id="cart-items"></div>
    `;

    // Mock localStorage
    localStorage.clear();
    jest.useFakeTimers(); // Use fake timers for the test

    // Define addToCart3 function
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

    // Define displayCart function
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

    // Clear cart function
    function clearCart() {
      localStorage.removeItem("cart");
      displayCart();
    }

    // Add event listener for testing purposes
    document
      .getElementById("addToCartButton")
      .addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default action
        addToCart3("Sunglasses", 50); // Simulate addToCart3 functionality
      });
  });

  it("should add an item to the cart and display it", () => {
    // Trigger click event on addToCartButton
    const button = document.getElementById("addToCartButton");
    button.dispatchEvent(new Event("click", { bubbles: true }));

    // Assert that the item has been added to localStorage
    const cartData = JSON.parse(localStorage.getItem("cart"));
    expect(cartData.items.length).toBe(1);
    expect(cartData.items[0].name).toBe("Sunglasses");
    expect(cartData.items[0].price).toBe(50);
  });

  it("should clear the cart after 1 minute", () => {
    // Trigger click event
    const button = document.getElementById("addToCartButton");
    button.dispatchEvent(new Event("click", { bubbles: true }));

    // Fast-forward the timer by 1 minute
    jest.advanceTimersByTime(60000); // Move forward in time by 1 minute

    // Check that the cart is cleared
    const cartData = JSON.parse(localStorage.getItem("cart"));
    expect(cartData).toBeNull(); // Now this should pass
    const cartItemsContainer = document.getElementById("cart-items");
    expect(cartItemsContainer.innerHTML).toContain("Your cart is empty.");
  });
});
