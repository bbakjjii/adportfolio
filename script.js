/* =========================================
   NAVIGATION
========================================= */

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");


/* =========================================
   NAVIGATION CLICK
========================================= */

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   REMOTE CONTROL
========================================= */

const remoteButtons = document.querySelectorAll(".remote button");


remoteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const targetId = button.dataset.target;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   CURRENT MENU
========================================= */

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                const currentId =
                    entry.target.getAttribute("id");


                navLinks.forEach(function(link) {

                    link.classList.remove("active");

                });


                const currentLink =
                    document.querySelector(
                        `nav a[href="#${currentId}"]`
                    );


                if (currentLink) {

                    currentLink.classList.add("active");

                }

            }

        });

    },

    {
        threshold: 0.35
    }

);


sections.forEach(function(section) {

    observer.observe(section);

});