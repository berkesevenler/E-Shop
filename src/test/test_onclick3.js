// Define the addToCart3 function globally for the test
window.addToCart3 = jest.fn();

// Test Suite
describe("Add to Cart button", () => {
  let button;

  beforeEach(() => {
    // Set up the DOM
    document.body.innerHTML = `
            <button class="fancy-button" onclick="addToCart3('Wallet', 18)">
              Add to Cart
            </button>
        `;

    // Get the button element
    button = document.querySelector(".fancy-button");
  });

  afterEach(() => {
    // Clear the mock call history
    window.addToCart3.mockClear();
  });

  it('should call addToCart3 with "Wallet" and 18 when clicked', () => {
    // Trigger the click event
    button.click();

    // Assert that addToCart3 was called with the correct arguments
    expect(window.addToCart3).toHaveBeenCalledWith("Wallet", 18);
  });
});
