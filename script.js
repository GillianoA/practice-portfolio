document.getElementById("menu-toggle").addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        event.preventDefault(); // Prevent form submission
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address!");
        event.preventDefault(); // Prevent form submission
    }
});