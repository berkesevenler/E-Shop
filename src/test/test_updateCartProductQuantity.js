describe('updateCartQuantity function', () => {
  let inputQuantity;
  let cartQuantity;
  let addToCartBtn;

  // Helper function to set up DOM elements
  const setupDOM = () => {
    document.body.innerHTML = `
      <input id="inputQuantity" type="number" value="1" />
      <span id="cartQuantity"></span>
      <button id="addToCartBtn">Add to Cart</button>
    `;
    inputQuantity = document.getElementById('inputQuantity');
    cartQuantity = document.getElementById('cartQuantity');
    addToCartBtn = document.getElementById('addToCartBtn');
  };

  // Helper function to trigger the updateCartQuantity
  const clickAddToCart = () => {
    addToCartBtn.dispatchEvent(new Event('click', { bubbles: true }));
  };

  // Define the updateCartQuantity function
  function updateCartQuantity() {
    const quantity = parseInt(inputQuantity.value, 10);

    if (!isNaN(quantity) && quantity >= 0) {
      cartQuantity.textContent = quantity;
    } else {
      alert('Please enter a valid number');
    }
  }

  beforeEach(() => {
    setupDOM();
    addToCartBtn.addEventListener('click', updateCartQuantity);
  });

  it('should update cartQuantity with the input value when valid', () => {
    const validQuantity = '3';

    inputQuantity.value = validQuantity;
    clickAddToCart();

    expect(cartQuantity.textContent).toBe(validQuantity);
  });

  it('should alert the user if the input is not a valid number', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    inputQuantity.value = '-1';
    clickAddToCart();

    expect(window.alert).toHaveBeenCalledWith('Please enter a valid number');

    window.alert.mockRestore();
  });
});
