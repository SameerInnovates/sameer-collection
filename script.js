document.addEventListener("DOMContentLoaded", () => {
    const movieGrid = document.querySelector(".movie-grid");

    // Enable horizontal scrolling using mouse wheel
    movieGrid.addEventListener("wheel", (event) => {
        event.preventDefault();
        movieGrid.scrollLeft += event.deltaY;
    });

    // Hover effect for login and start buttons
    const buttons = document.querySelectorAll(".login-btn, .start-btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.opacity = "0.8";
        });
        button.addEventListener("mouseleave", () => {
            button.style.opacity = "1";
        });
    });
});
