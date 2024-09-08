function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark Mode Toggle Function
function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Initialize Dark Mode based on localStorage or system preference
document.addEventListener('DOMContentLoaded', () => {
    const userPreference = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userPreference) {
        document.documentElement.classList.toggle('dark', userPreference === 'dark');
    } else if (prefersDarkScheme) {
        document.documentElement.classList.add('dark');
    }

    // Add event listener for dark mode toggle button
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});
