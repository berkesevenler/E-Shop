describe('initializeCart function', () => {
    let cartCountSpan;
    let addToCartButtons;
    let cartCount;
  
    beforeEach(() => {

      document.body.innerHTML = `
        <span id="cartCount">0</span>
        <button class="addToCartButton">Add to Cart</button>
        <button class="addToCartButton">Add to Cart</button>
        <button class="addToCartButton">Add to Cart</button>
      `;
      

      cartCountSpan = document.getElementById('cartCount');
      addToCartButtons = document.querySelectorAll('.addToCartButton');
      cartCount = 0;
  

      function initializeCart() {
        cartCountSpan = document.getElementById('cartCount');
        addToCartButtons = document.querySelectorAll('.addToCartButton');
        cartCount = 0;
  
        addToCartButtons.forEach(button => {
          button.addEventListener('click', handleAddToCart);
        });
  
        function handleAddToCart() {
          cartCount++;
          cartCountSpan.textContent = cartCount;
        }
      }
  

      initializeCart();
    });
  
    it('should initialize cart count to 0 and set up event listeners on buttons', () => {

      expect(cartCountSpan.textContent).toBe('0');
  

      addToCartButtons[0].click();
  

      expect(cartCountSpan.textContent).toBe('1');
  

      addToCartButtons[1].click();
  

      expect(cartCountSpan.textContent).toBe('2');
    });
  });
  