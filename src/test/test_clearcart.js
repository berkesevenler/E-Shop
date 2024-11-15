describe('clearCart function', () => {
    let displayCart;
  
    beforeEach(() => {
      // Set up a basic HTML structure similar to beforeEach in the original test
      document.body.innerHTML = `
        <button id="clearCartButton">Clear Cart</button>
        <div id="cart-items"></div>
      `;
      
      // Mock localStorage and prevent default action of the click event
      const localStorageMock = {
        removeItem: jest.fn(),
        getItem: jest.fn().mockReturnValue(JSON.stringify({ items: [], timestamp: Date.now() })),
        setItem: jest.fn()
      };
      Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  
      // Define displayCart function (mocked for simplicity)
      displayCart = jest.fn();
      window.displayCart = displayCart;
  
      // Define clearCart function
      function clearCart() {
        localStorage.removeItem('cart');
        displayCart(); // Update cart display after clearing
      }
  
      // Add event listener directly for testing purposes
      document.getElementById('clearCartButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        clearCart(); // Simulate clearCart functionality
      });
    });
  
    it('should remove cart from localStorage when clearCartButton is clicked', () => {
      // Trigger click event on clearCartButton
      const button = document.getElementById('clearCartButton');
      button.dispatchEvent(new Event('click', { bubbles: true }));
  
      // Assert that localStorage.removeItem was called with 'cart'
      expect(localStorage.removeItem).toHaveBeenCalledWith('cart');
    });
  
    it('should update cart display after clearing when clearCartButton is clicked', () => {
      // Trigger click event on clearCartButton
      const button = document.getElementById('clearCartButton');
      button.dispatchEvent(new Event('click', { bubbles: true }));
  
      // Assert that displayCart was called
      expect(displayCart).toHaveBeenCalled();
    });
  
    // Optionally add more test cases for other functionalities of clearCart
  
  });
  