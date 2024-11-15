// Mock the displayCart function
const displayCart = jest.fn();

// Mock the clearCart function
const clearCart = jest.fn();

// Add the event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  displayCart();

  // Check if cart is expired (older than 1 minute)
  let cartData = JSON.parse(localStorage.getItem('cart')) || {};
  let timestamp = cartData.timestamp || 0;
  if (Date.now() - timestamp > 60000) { // 60000 milliseconds = 1 minute
    clearCart();
  }
});

describe('DOMContentLoaded event listener', () => {
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

    // Clear mocks
    displayCart.mockClear();
    clearCart.mockClear();
  });

  afterEach(() => {
    // Clear the localStorage mock after each test
    localStorage.clear();
  });

  it('should call displayCart on DOMContentLoaded', () => {
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);

    expect(displayCart).toHaveBeenCalled();
  });

  it('should not call clearCart if the cart is not expired', () => {
    const notExpiredTimestamp = Date.now();
    localStorage.setItem('cart', JSON.stringify({ timestamp: notExpiredTimestamp }));

    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);

    expect(clearCart).not.toHaveBeenCalled();
  });

  it('should call clearCart if the cart is expired', () => {
    const expiredTimestamp = Date.now() - 60001; // More than 1 minute ago
    localStorage.setItem('cart', JSON.stringify({ timestamp: expiredTimestamp }));

    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);

    expect(clearCart).toHaveBeenCalled();
  });
});
