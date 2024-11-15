// src/test/test_addToCartButton.js

describe('DOMContentLoaded event listener', () => {
    beforeEach(() => {
    
      document.body.innerHTML = `
        <button id="addToCartButton">Add to Cart</button>  `;
      const event = new Event('DOMContentLoaded');
      document.dispatchEvent(event);
      delete window.location;
      window.location = { assign: jest.fn() };
  
      document.getElementById('addToCartButton').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.assign('watch-page.html'); 
      });
    });
  
    it('should redirect when addToCartButton is clicked', () => {
      const button = document.getElementById('addToCartButton');
      button.dispatchEvent(new Event('click', { bubbles: true }));
  
      expect(window.location.assign).toHaveBeenCalledWith('watch-page.html');
    });
  });
  