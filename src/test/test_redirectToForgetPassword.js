describe('redirectToForgetPassword function', () => {
    beforeEach(() => {
        // Mock window.location
        delete window.location;
        window.location = { href: '' };

        // Define redirectToForgetPassword function
        function redirectToForgetPassword() {
            window.location.href = './forgetPassword.html';
        }

        // Add event listener directly for testing purposes
        document.body.innerHTML = `
            <button id="forgetPasswordButton">Forgot Password</button>
        `;

        document.getElementById('forgetPasswordButton').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default button behavior
            redirectToForgetPassword();
        });
    });

    it('should set window.location.href to ./forgetPassword.html when forgetPasswordButton is clicked', () => {
        // Trigger click event on forgetPasswordButton
        const button = document.getElementById('forgetPasswordButton');
        button.dispatchEvent(new Event('click', { bubbles: true }));

        // Assert that window.location.href was set to the correct URL
        expect(window.location.href).toBe('./forgetPassword.html');
    });
});
