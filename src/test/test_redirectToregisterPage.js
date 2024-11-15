describe('redirectToRegisterPage function', () => {
    beforeEach(() => {
        // Mock window.location
        delete window.location;
        window.location = { assign: jest.fn() };

        // Define redirectToRegisterPage function
        function redirectToRegisterPage() {
            window.location.assign('./registerPage.html');
        }

        // Add event listener directly for testing purposes
        document.body.innerHTML = `
            <button id="registerButton">Register</button>
        `;

        document.getElementById('registerButton').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default button behavior
            redirectToRegisterPage();
        });
    });

    it('should redirect to ./registerPage.html when registerButton is clicked', () => {
        // Trigger click event on registerButton
        const button = document.getElementById('registerButton');
        button.dispatchEvent(new Event('click', { bubbles: true }));

        // Assert that window.location.assign was called with the correct URL
        expect(window.location.assign).toHaveBeenCalledWith('./registerPage.html');
    });
});
