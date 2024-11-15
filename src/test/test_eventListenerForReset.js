// Mock the displayCart function
const displayCart = jest.fn();

// Mock the clearCart function
const clearCart = jest.fn();

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initializeCart();
});

const initializeCart = () => {
  displayCart();
  handleCartExpiration();
};

const handleCartExpiration = () => {
  const cartData = getCartData();
  const timestamp = cartData.timestamp || 0;

  if (isCartExpired(timestamp)) {
    clearCart();
  }
};

const getCartData = () => {
  return JSON.parse(localStorage.getItem("cart")) || {};
};

const isCartExpired = (timestamp) => {
  return Date.now() - timestamp > 60000; // 60000 milliseconds = 1 minute
};

describe("DOMContentLoaded event listener", () => {
  let cartItemsContainer;

  beforeEach(() => {
    setupDOM();
    setupLocalStorageMock();
    resetMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  const setupDOM = () => {
    document.body.innerHTML = `
            <div id="cart-items"></div>
        `;
    cartItemsContainer = document.getElementById("cart-items");
  };

  const setupLocalStorageMock = () => {
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
          store[key] = value.toString();
        },
        clear: () => {
          store = {};
        },
      };
    })();

    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  };

  const resetMocks = () => {
    displayCart.mockClear();
    clearCart.mockClear();
  };

  it("should call displayCart on DOMContentLoaded", () => {
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);

    expect(displayCart).toHaveBeenCalled();
  });

  it("should not call clearCart if the cart is not expired", () => {
    const notExpiredTimestamp = Date.now();
    localStorage.setItem(
      "cart",
      JSON.stringify({ timestamp: notExpiredTimestamp })
    );

    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);

    expect(clearCart).not.toHaveBeenCalled();
  });

  it("should call clearCart if the cart is expired", () => {
    const expiredTimestamp = Date.now() - 60001; // More than 1 minute ago
    localStorage.setItem(
      "cart",
      JSON.stringify({ timestamp: expiredTimestamp })
    );

    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);

    expect(clearCart).toHaveBeenCalled();
  });
});
