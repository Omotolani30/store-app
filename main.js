document.addEventListener("DOMContentLoaded", function() {
    const currentPage = location.pathname.split("/").pop(); // Get the current page filename
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});