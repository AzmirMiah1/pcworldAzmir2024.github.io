// Select the navbar element
const navbar = document.querySelector('.navbar'); // Adjust '.navbar' to match your class or ID
const originalHeight = navbar.offsetHeight; // Get the initial height of the navbar

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky'); // Add the 'sticky' class when scrolled
        navbar.style.height = originalHeight + 10 + 'px'; // Increase the height
    } else {
        navbar.classList.remove('sticky'); // Remove the 'sticky' class when at the top
        navbar.style.height = originalHeight + 'px'; // Reset to original height
    }
});
