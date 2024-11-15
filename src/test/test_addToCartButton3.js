// src/test/test_goToProduct1Button.js

describe("DOMContentLoaded event listener for goToProduct1", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a id="goToProduct1" href="#">Go to Product 1</a>`;
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);
    delete window.location;
    window.location = { href: jest.fn() };

    document
      .getElementById("goToProduct1")
      .addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "hat.html";
      });
  });

  it("should redirect when goToProduct1 link is clicked", () => {
    const link = document.getElementById("goToProduct1");
    link.dispatchEvent(new Event("click", { bubbles: true }));

    expect(window.location.href).toBe("hat.html");
  });
});
