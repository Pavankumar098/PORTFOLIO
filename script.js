// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Select the navigation bar element with the ID 'navbar'
    const navbar = document.getElementById('navbar');

    // Check if the current scroll position of the window is greater than 0
    if (window.scrollY > 0) {
        // If the scroll position is greater than 0, add the 'navbar-scrolled' class to the navigation bar
        navbar.classList.add('navbar-scrolled');
    } else {
        // If the scroll position is 0 or less, remove the 'navbar-scrolled' class from the navigation bar
        navbar.classList.remove('navbar-scrolled');
    }
});
