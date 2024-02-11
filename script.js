// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Select the navigation bar
    const navbar = document.getElementById('navbar');

    // Check if the window has scrolled past a certain point (e.g., 0)
    if (window.scrollY > 0) {
        // Add a class to the navigation bar when scrolled
        navbar.classList.add('navbar-scrolled');
    } else {
        // Remove the class if not scrolled
        navbar.classList.remove('navbar-scrolled');
    }
});
