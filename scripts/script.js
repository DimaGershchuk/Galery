document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a.nav-link");
    const overlay = document.getElementById("transition-overlay");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");

            // Start the fade-out animation
            document.body.classList.add("fade-out");
            overlay.classList.add("show");

            // Wait for the animation to complete before changing the page
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match this duration with your CSS transition duration
        });
    });
});


(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()