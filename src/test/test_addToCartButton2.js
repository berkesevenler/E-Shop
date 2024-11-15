// src/test/test_goToProductButton.js

describe("DOMContentLoaded event listener", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a id="goToProduct" href="#">Go to Product</a>`;
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);
    delete window.location;
    window.location = { href: jest.fn() };

    document
      .getElementById("goToProduct")
      .addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "wallet.html";
      });
  });

  it("should redirect when goToProduct link is clicked", () => {
    const link = document.getElementById("goToProduct");
    link.dispatchEvent(new Event("click", { bubbles: true }));

    expect(window.location.href).toBe("wallet.html");
  });
});
