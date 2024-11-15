describe('addToCart function', () => {
    beforeEach(() => {
      // Set up a basic HTML structure similar to beforeEach in the original test
      document.body.innerHTML = `
        <button id="addToCartButton">Add to Cart</button>
        <div id="cart-items"></div>
      `;
      
      // Mock localStorage and prevent default action of the click event
      localStorage.clear();
      delete window.location;
      window.location = { assign: jest.fn() };
  
      // Define addToCart function
      function addToCart(name, price) {
        let cartData = JSON.parse(localStorage.getItem('cart')) || { items: [], timestamp: Date.now() };
        cartData.items.push({ name: name, price: price });
        cartData.timestamp = Date.now(); // Update timestamp with each addition
        localStorage.setItem('cart', JSON.stringify(cartData));
        alert('Item added to cart!');
        displayCart();
    
        // Mock redirection (replace with your actual logic)
        window.location.assign('watch-page.html');
      }
  
      // Define displayCart function (mocked for simplicity)
      function displayCart() {
        let cartData = JSON.parse(localStorage.getItem('cart')) || {};
        let cart = cartData.items || [];
        let cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) {
          cartItemsContainer = document.createElement('div');
          cartItemsContainer.id = 'cart-items';
          document.body.appendChild(cartItemsContainer);
        }
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
  
      // Add event listener directly for testing purposes
      document.getElementById('addToCartButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        addToCart('Sunglasses', 50); // Simulate addToCart functionality
      });
    });
  
    it('should redirect to watch-page.html when addToCartButton is clicked', () => {
      // Trigger click event on addToCartButton
      const button = document.getElementById('addToCartButton');
      button.dispatchEvent(new Event('click', { bubbles: true }));
  
      // Assert that window.location.assign was called with the correct URL
      expect(window.location.assign).toHaveBeenCalledWith('watch-page.html');
    });
  
    // Optionally add more test cases for other functionalities of addToCart
  
  });
  