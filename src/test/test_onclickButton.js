describe('onclick addToCart button', () => {
    beforeEach(() => {
      // Set up a basic HTML structure
      document.body.innerHTML = `
        <button class="fancy-button" onclick="addToCart('Fancy Watch', 500000)">Add to Cart</button>
        <div id="cart-items"></div>
      `;
      
      // Mock localStorage and prevent default action of the click event
      localStorage.clear();
      delete window.location;
      window.location = { assign: jest.fn() };
      
      // Define displayCart function (mocked for testing)
      window.displayCart = jest.fn(() => {
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
      });
  
      // Define addToCart function (mocked for testing)
      window.addToCart = jest.fn((name, price) => {
        let cartData = JSON.parse(localStorage.getItem('cart')) || { items: [], timestamp: Date.now() };
        cartData.items.push({ name: name, price: price });
        cartData.timestamp = Date.now(); // Update timestamp with each addition
        localStorage.setItem('cart', JSON.stringify(cartData));
        alert('Item added to cart!');
        displayCart();
      
        // Mock redirection (replace with your actual logic)
        window.location.assign('watch-page.html');
      });
    });
  
    afterEach(() => {
      // Clear the localStorage mock after each test
      localStorage.clear();
    });
  
    it('should call addToCart function with correct arguments when button is clicked', () => {
      // Trigger click event on addToCart button
      const button = document.querySelector('.fancy-button');
      button.click();
  
      // Assert that addToCart function was called with the correct arguments
      expect(window.addToCart).toHaveBeenCalledWith('Fancy Watch', 500000);
    });
  
    it('should redirect to watch-page.html when addToCart button is clicked', () => {
      // Trigger click event on addToCart button
      const button = document.querySelector('.fancy-button');
      button.click();
  
      // Assert that window.location.assign was called with the correct URL
      expect(window.location.assign).toHaveBeenCalledWith('watch-page.html');
    });
  
    it('should display "Item added to cart!" alert when addToCart button is clicked', () => {
      // Spy on window.alert to check if it was called
      jest.spyOn(window, 'alert').mockImplementation(() => {});
  
      // Trigger click event on addToCart button
      const button = document.querySelector('.fancy-button');
      button.click();
  
      // Assert that window.alert was called with the correct message
      expect(window.alert).toHaveBeenCalledWith('Item added to cart!');
    });
  
    it('should update cart display when addToCart button is clicked', () => {
      // Mock localStorage with cart data
      localStorage.setItem('cart', JSON.stringify({ items: [{ name: 'Fancy Watch', price: 500000 }], timestamp: Date.now() }));
  
      // Trigger click event on addToCart button
      const button = document.querySelector('.fancy-button');
      button.click();
  
      // Check the content of cartItemsContainer
      const cartItemsContainer = document.getElementById('cart-items');
      expect(cartItemsContainer.innerHTML).toContain('<div class="cart-item">');
      expect(cartItemsContainer.innerHTML).toContain('<h3>Fancy Watch</h3>');
      expect(cartItemsContainer.innerHTML).toContain('<p>Price: $500000</p>');
    });
  
    // Optionally add more test cases for other functionalities of addToCart button
  });
  