// Define the function to be tested
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
  
  describe('displayCart function', () => {
    let cartItemsContainer;
  
    beforeEach(() => {
      // Set up the DOM
      document.body.innerHTML = `
        <div id="cart-items"></div>
      `;
      cartItemsContainer = document.getElementById('cart-items');
  
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
    });
  
    afterEach(() => {
      // Clear the localStorage mock after each test
      localStorage.clear();
    });
  
    it('should display "Your cart is empty." when the cart is empty', () => {
      // Mock empty cart in localStorage
      localStorage.setItem('cart', JSON.stringify({ items: [] }));
  
      displayCart();
  
      expect(cartItemsContainer.innerHTML).toBe('<p>Your cart is empty.</p>');
    });
  
    it('should display cart items correctly when the cart is not empty', () => {
      // Mock non-empty cart in localStorage
      const mockCartItems = [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
      ];
      localStorage.setItem('cart', JSON.stringify({ items: mockCartItems }));
  
      displayCart();
  
      // Check that cart items are displayed
      const itemElements = cartItemsContainer.getElementsByClassName('cart-item');
      expect(itemElements.length).toBe(2);
      expect(itemElements[0].innerHTML).toContain('<h3>Item 1</h3>');
      expect(itemElements[0].innerHTML).toContain('<p>Price: $10</p>');
      expect(itemElements[1].innerHTML).toContain('<h3>Item 2</h3>');
      expect(itemElements[1].innerHTML).toContain('<p>Price: $20</p>');
    });
  });
  