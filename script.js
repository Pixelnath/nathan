/* =====================================================
   OLAKIZZY STYLES – JAVASCRIPT
   Course: IFT203 – Introduction to Web
   Purpose: Basic interactivity & validation
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ------------------------------
       NAVIGATION ACTIVE LINK
    ------------------------------- */
    const navLinks = document.querySelectorAll(".nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    /* ------------------------------
       SIMPLE CONTACT FORM VALIDATION
       (Only works if contact form exists)
    ------------------------------- */
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const message = document.querySelector("#message");

            if (name.value === "" || email.value === "" || message.value === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }

            alert("Thank you for contacting Olakizzy Styles. We will get back to you shortly.");
            contactForm.reset();
        });
    }

    /* ------------------------------
       THEME MESSAGE (OPTIONAL FEATURE)
    ------------------------------- */
    console.log("Olakizzy Styles website loaded successfully.");

});
