/* =========================================
   PAGE READY
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       SMOOTH INTERNAL LINKS
    ========================================= */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });



    /* =========================================
       PORTFOLIO IMAGE SLIDER
    ========================================= */

    const sliders =
        document.querySelectorAll(".portfolio-slider");


    sliders.forEach(function (slider) {


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
                String(slides.length)
                    .padStart(2, "0");

        }



        /* =========================================
           SHOW SLIDE
        ========================================= */

        function showSlide(index) {


            slides.forEach(function (slide, i) {

                slide.classList.toggle(
                    "active",
                    i === index
                );

            });


            if (currentNumber) {

                currentNumber.textContent =
                    String(index + 1)
                        .padStart(2, "0");

            }

        }



        /* =========================================
           PREVIOUS
        ========================================= */

        if (prevButton) {

            prevButton.addEventListener(
                "click",
                function (event) {


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
                function (event) {


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

});