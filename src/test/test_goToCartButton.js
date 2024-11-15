// Define the goToCart function globally for the test
window.goToCart = jest.fn();

// Test Suite
describe("Go to Cart button", () => {
  let button;

  beforeEach(() => {
    // Set up the DOM
    document.body.innerHTML = `
            <button class="fancy-button" type="submit" onclick="goToCart()">
              Go to Cart
            </button>
        `;

    // Get the button element
    button = document.querySelector(".fancy-button");
  });

  afterEach(() => {
    // Clear the mock call history
    window.goToCart.mockClear();
  });

  it("should call goToCart when clicked", () => {
    // Trigger the click event
    button.click();

    // Assert that goToCart was called
    expect(window.goToCart).toHaveBeenCalled();
  });
});
