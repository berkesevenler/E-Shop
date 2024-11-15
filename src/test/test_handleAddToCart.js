describe('handleAddToCart function', () => {
    let cartCountSpan;
    let cartCount;
    let handleAddToCart;
  
    beforeEach(() => {
      document.body.innerHTML = `
        <span id="cartCount">0</span>
      `;
      
      cartCountSpan = document.getElementById('cartCount');
      cartCount = 0;

      handleAddToCart = () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
      };
    });
  
    it('should increment cartCount and update cartCountSpan textContent', () => {
      expect(cartCountSpan.textContent).toBe('0');
  
 
      handleAddToCart();
  

      expect(cartCount).toBe(1);

      expect(cartCountSpan.textContent).toBe('1');
  

      handleAddToCart();
  

      expect(cartCount).toBe(2);

      expect(cartCountSpan.textContent).toBe('2');
    });
  });