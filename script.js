// Simple form validation and confirmation
document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Check if name and email are filled
    if (!name || !email) {
        alert('Please fill in all required fields.');
    } else {
        alert('Thank you for applying, ' + name + '! We will get in touch with you soon.');
        document.getElementById('applyForm').reset();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector(".nav-links");

    navbarToggler.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        navbarToggler.classList.toggle("active");  /* Toggle the active class */
    });

    // Close navbar when a nav-link is clicked (for mobile users)
    document.querySelectorAll(".nav-links a").forEach(item => {
        item.addEventListener("click", function () {
            if (navLinks.classList.contains("show")) {
                navLinks.classList.remove("show");
                navbarToggler.classList.remove("active");  /* Remove active class when links are clicked */
            }
        });
    });
});

// Navigation bar opacity when scroll-down
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50 && window.innerWidth > 768) {
        navbar.style.opacity = "0.7";
    } else {
        navbar.style.opacity = "1";
    }
});
