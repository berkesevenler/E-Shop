describe('addToCart1 function', () => {
    beforeEach(() => {
      // Set up a basic HTML structure
      document.body.innerHTML = `
        <button id="addToCartButton">Add to Cart</button>
        <div id="cart-items"></div>
      `;
  
      // Mock localStorage
      const localStorageMock = (function() {
        let store = {};
        return {
          getItem: function(key) {
            return store[key] || null;
          },
          setItem: function(key, value) {
            store[key] = value.toString();
          },
          clear: function() {
            store = {};
          },
        };
      })();
  
      Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
      });
  
      // Mock window.location.assign
      delete window.location;
      window.location = { assign: jest.fn() };
  
      // Mock window.alert
      window.alert = jest.fn();
  
      // Mock displayCart function
      window.displayCart = jest.fn();
  
      // Mock clearCart function
      window.clearCart = jest.fn();
  
      // Define addToCart1 function
      function addToCart1(name, price) {
        let cartData = JSON.parse(localStorage.getItem('cart')) || { items: [], timestamp: Date.now() };
        cartData.items.push({ name, price });
        cartData.timestamp = Date.now(); // Update timestamp with each addition
        localStorage.setItem('cart', JSON.stringify(cartData));
        alert('Item added to cart!');
        displayCart();
  
        // Clear cart after 1 minute
        setTimeout(clearCart, 60000); // 60000 milliseconds = 1 minute
  
        // Redirection
        window.location.assign('sunglasses-page.html');
      }
  
      // Add event listener directly for testing purposes
      document.getElementById('addToCartButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default button behavior
        addToCart1('Sunglasses', 50); // Simulate addToCart1 functionality
      });
  
      // Make addToCart1 function available to the test scope
      window.addToCart1 = addToCart1;
    });
  
    afterEach(() => {
      // Clear the localStorage mock after each test
      localStorage.clear();
    });
  
    it('should redirect to sunglasses-page.html when addToCartButton is clicked', () => {
      // Trigger click event on addToCartButton
      const button = document.getElementById('addToCartButton');
      button.dispatchEvent(new Event('click', { bubbles: true }));
  
      // Assert that alert was called
      expect(window.alert).toHaveBeenCalledWith('Item added to cart!');
  
      // Assert that displayCart was called
      expect(window.displayCart).toHaveBeenCalled();
  
      // Assert that window.location.assign was called with the correct URL
      expect(window.location.assign).toHaveBeenCalledWith('sunglasses-page.html');
    });
  
    it('should call clearCart after 1 minute', () => {
      jest.useFakeTimers();
  
      // Trigger click event on addToCartButton
      const button = document.getElementById('addToCartButton');
      button.dispatchEvent(new Event('click', { bubbles: true }));
  
      // Fast forward time by 1 minute
      jest.advanceTimersByTime(60000);
  
      // Assert that clearCart was called
      expect(window.clearCart).toHaveBeenCalled();
  
      jest.useRealTimers();
    });
  
    // Optionally add more test cases for other functionalities of addToCart1
  });
  