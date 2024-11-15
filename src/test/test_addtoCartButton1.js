describe('DOMContentLoaded event listener', () => {
    beforeEach(() => {
    
      document.body.innerHTML = `
        <button id="addToCartButton1">Add to Cart</button>  `;
      const event = new Event('DOMContentLoaded');
      document.dispatchEvent(event);
      delete window.location;
      window.location = { assign: jest.fn() };
  
      document.getElementById('addToCartButton1').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.assign('sunglasses-page.html'); 
      });
    });
  
    it('should redirect when addToCartButton1 is clicked', () => {
      const button = document.getElementById('addToCartButton1');
      button.dispatchEvent(new Event('click', { bubbles: true }));
  
      expect(window.location.assign).toHaveBeenCalledWith('sunglasses-page.html');
    });
  });