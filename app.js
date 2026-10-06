// Smooth scrolling for navigation links

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(
            link.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Automatically update footer year

const footerText = document.querySelector("footer p");

footerText.textContent =
    `© ${new Date().getFullYear()} Your Name. All rights reserved.`;
