describe('imageClick function', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <img id="testImage" src="test.jpg" alt="Test Image" />
      `;

      delete window.location;
      window.location = { href: '', assign: jest.fn() };

      function imageClick(url) {
        window.location.href = url;
      }
  
      document.getElementById('testImage').addEventListener('click', function(event) {
        event.preventDefault();
        imageClick('http://example.com'); 
      });
    });
  
    it('should set window.location.href to the given URL when the image is clicked', () => {
      const image = document.getElementById('testImage');
      image.dispatchEvent(new Event('click', { bubbles: true }));
  
      expect(window.location.href).toBe('http://example.com');
    });
  
  
  });