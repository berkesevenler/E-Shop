describe("clearCart function", () => {
  let displayCart;

  beforeEach(() => {
    // Set up basic HTML structure
    setupHTML();

    // Mock localStorage
    mockLocalStorage();

    // Mock displayCart function
    displayCart = jest.fn();
    window.displayCart = displayCart;

    // Add event listener for clearCartButton
    setupClearCartButton();
  });

  const setupHTML = () => {
    document.body.innerHTML = `
            <button id="clearCartButton">Clear Cart</button>
            <div id="cart-items"></div>
        `;
  };

  const mockLocalStorage = () => {
    const localStorageMock = {
      removeItem: jest.fn(),
      getItem: jest
        .fn()
        .mockReturnValue(JSON.stringify({ items: [], timestamp: Date.now() })),
      setItem: jest.fn(),
    };
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
  };

  const setupClearCartButton = () => {
    document
      .getElementById("clearCartButton")
      .addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default behavior
        clearCart(); // Clear the cart
      });
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    displayCart(); // Update cart display after clearing
  };

  it("should remove cart from localStorage when clearCartButton is clicked", () => {
    // Trigger click event on clearCartButton
    triggerClick("clearCartButton");

    // Assert that localStorage.removeItem was called with 'cart'
    expect(localStorage.removeItem).toHaveBeenCalledWith("cart");
  });

  it("should update cart display after clearing when clearCartButton is clicked", () => {
    // Trigger click event on clearCartButton
    triggerClick("clearCartButton");

    // Assert that displayCart was called
    expect(displayCart).toHaveBeenCalled();
  });

  const triggerClick = (buttonId) => {
    const button = document.getElementById(buttonId);
    button.dispatchEvent(new Event("click", { bubbles: true }));
  };

  // Optionally add more test cases for other functionalities of clearCart
});
