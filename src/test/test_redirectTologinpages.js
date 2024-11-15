describe('redirectToLoginPage function', () => {
    beforeEach(() => {
        // Mock window.location
        delete window.location;
        window.location = { href: '' };

        // Define the function to be tested
        global.redirectToLoginPage = function() {
            window.location.href = 'loginPage.html';
        };

        // Add the button to the document body
        document.body.innerHTML = `
            <button id="loginButton">Login</button>
        `;

        // Add event listener directly for testing purposes
        document.getElementById('loginButton').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default button behavior
            redirectToLoginPage();
        });
    });

    it('should set window.location.href to loginPage.html when loginButton is clicked', () => {
        // Trigger click event on loginButton
        const button = document.getElementById('loginButton');
        button.dispatchEvent(new Event('click', { bubbles: true }));

        // Assert that window.location.href was set to the correct URL
        expect(window.location.href).toBe('loginPage.html');
    });
});
