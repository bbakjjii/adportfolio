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

        const targetId =
            link.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

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

const remoteButtons =
    document.querySelectorAll(".remote button");


remoteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const targetId =
            button.dataset.target;

        const targetSection =
            document.querySelector(targetId);

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

const observer =
    new IntersectionObserver(

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



/* =========================================
   PORTFOLIO IMAGE SLIDER
========================================= */

const sliders =
    document.querySelectorAll(".portfolio-slider");


sliders.forEach(function(slider) {

    const slides =
        slider.querySelectorAll(".portfolio-slide");


    const prevButton =
        slider.querySelector(".slider-prev");


    const nextButton =
        slider.querySelector(".slider-next");


    const currentNumber =
        slider.querySelector(".current-slide");


    const totalNumber =
        slider.querySelector(".total-slide");


    let currentIndex = 0;



    /* =========================================
       TOTAL IMAGE NUMBER
    ========================================= */

    if (totalNumber) {

        totalNumber.textContent =
            String(slides.length).padStart(2, "0");

    }



    /* =========================================
       SHOW SLIDE
    ========================================= */

    function showSlide(index) {

        slides.forEach(function(slide, i) {

            slide.classList.toggle(
                "active",
                i === index
            );

        });


        if (currentNumber) {

            currentNumber.textContent =
                String(index + 1).padStart(2, "0");

        }

    }



    /* =========================================
       PREVIOUS
    ========================================= */

    if (prevButton) {

        prevButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                event.stopPropagation();


                currentIndex--;


                if (currentIndex < 0) {

                    currentIndex =
                        slides.length - 1;

                }


                showSlide(currentIndex);

            }
        );

    }



    /* =========================================
       NEXT
    ========================================= */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                event.stopPropagation();


                currentIndex++;


                if (
                    currentIndex >=
                    slides.length
                ) {

                    currentIndex = 0;

                }


                showSlide(currentIndex);

            }
        );

    }



    /* =========================================
       INITIALIZE
    ========================================= */

    showSlide(currentIndex);

});
