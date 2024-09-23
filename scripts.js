document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const isLightTheme = document.body.classList.contains('light-theme');
    // Update button icon based on the current theme
    this.innerHTML = isLightTheme ? '<i class="ri-sun-line"style="color: rgb(40, 37, 37);"></i>' : '<i class="ri-moon-line" style="color: white;"></i>';

    // Store the current theme in localStorage
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

// Display "image name 1" section when the website is opened or refreshed
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored theme from localStorage
    const storedTheme = localStorage.getItem('theme');

    // Apply the stored theme
    if (storedTheme) {
        document.body.classList.add(storedTheme === 'light' ? 'light-theme' : 'dark-theme');
        document.body.classList.remove(storedTheme === 'light' ? 'dark-theme' : 'light-theme');
    } else {
        // Default to light theme if no theme is stored
        document.body.classList.add('light-theme');
    }

    // Initialize the button text based on the current theme
    const isLightTheme = document.body.classList.contains('light-theme');
    document.getElementById('themeToggle').innerHTML = isLightTheme ? '<i class="ri-sun-line"style="color: rgb(40, 37, 37);"></i>' : '<i class="ri-moon-line" style="color: white;"></i>';

    updateCarousel(imageData.item1); // Initialize the carousel with the default item
});