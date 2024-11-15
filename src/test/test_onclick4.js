// Define the addToCart4 function globally for the test
window.addToCart4 = jest.fn();

// Test Suite
describe("Add to Cart button", () => {
  let button;

  beforeEach(() => {
    // Set up the DOM
    document.body.innerHTML = `
            <button class="fancy-button" onclick="addToCart4('Hat', 18)">
              Add to Cart
            </button>
        `;

    // Get the button element
    button = document.querySelector(".fancy-button");
  });

  afterEach(() => {
    // Clear the mock call history
    window.addToCart4.mockClear();
  });

  it('should call addToCart4 with "Hat" and 18 when clicked', () => {
    // Trigger the click event
    button.click();

    // Assert that addToCart4 was called with the correct arguments
    expect(window.addToCart4).toHaveBeenCalledWith("Hat", 18);
  });
});
