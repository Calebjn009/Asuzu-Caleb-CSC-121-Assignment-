document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector("#menu-toggle");
    const nav = document.querySelector("#main-nav");

    if (menu) {
        menu.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }

    document.querySelectorAll("#main-nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("show");
        });
    });

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const form = document.querySelector("#borrowing-form");

    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const name = document.querySelector("#student-name").value.trim();
            const status = document.querySelector("#student-status").value;
            const result = document.querySelector("#eligibility-result");

            if (!name || !status) {
                result.textContent = "Please complete all fields.";
                result.style.color = "red";
                return;
            }

            if (status === "active") {
                result.textContent =
                    `${name}, you are eligible to borrow books.`;
                result.style.color = "green";
            } else {
                result.textContent =
                    `${name}, you are not eligible to borrow books.`;
                result.style.color = "red";
            }
        });
    }

    const contact = document.querySelector("#contact-form");

    if (contact) {
        contact.addEventListener("submit", event => {
            event.preventDefault();

            const name = document.querySelector("#contact-name").value.trim();
            const email = document.querySelector("#contact-email").value.trim();
            const message = document.querySelector("#contact-message").value.trim();

            if (!name || !email || !message) {
                alert("Please complete all fields.");
                return;
            }

            alert("Your message has been sent successfully.");
            contact.reset();
        });
    }

    const search = document.querySelector("#library-search");

    if (search) {
        search.addEventListener("submit", event => {
            event.preventDefault();

            const input = document.querySelector("#search-input").value.trim();

            if (!input) {
                alert("Please enter a search term.");
                return;
            }

            alert("Searching for: " + input);
        });
    }

    const top = document.querySelector("#back-to-top");

    if (top) {
        window.addEventListener("scroll", () => {
            top.style.display = window.scrollY > 300 ? "block" : "none";
        });

        top.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
