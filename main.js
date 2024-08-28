document.addEventListener("DOMContentLoaded", function() {
    const currentPage = location.pathname.split("/").pop(); // Get the current page filename
    const navLinks = document.querySelectorAll(".nav .nav-links");

    navLinks.forEach(link => {
        if (nav-items.getAttribute("href") === currentPage) {
            nav-items.classList.add("active");
        }
    });
});