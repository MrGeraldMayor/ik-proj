 (function(){
      emailjs.init("TVOQWl_otlyxRQaJs"); // <-- Your Public Key
    })();

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_ga3i60j", "template_ys8m6j2", this)
        .then(function() {
          document.getElementById("successMessage").style.display = "block";
        }, function(error) {
          alert("Failed to send message: " + JSON.stringify(error));
        });
    });





    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
