/* =========================================
   PAGE READY
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       SMOOTH INTERNAL LINKS
    ========================================= */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            /*
             * href="#"는 아무 곳으로도 이동하지 않음
             */
            if (!targetId || targetId === "#") {
                event.preventDefault();
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });



    /* =========================================
       PORTFOLIO CATEGORY FILTER
    ========================================= */

    const portfolioCategories = document.querySelectorAll(".portfolio-category");
    const portfolioProjects = document.querySelectorAll(".program-grid .program");
    const portfolioCurrentLabel = document.querySelector(".portfolio-current-label");
    const portfolioCurrentTitle = document.querySelector(".portfolio-current-title");
    const projectCount = document.querySelector("#project-count");
    const portfolioEmpty = document.querySelector("#portfolio-empty");


    /* =========================================
       CATEGORY INFORMATION
    ========================================= */

    const categoryNames = {
        all: {
            label: "PROGRAM / ALL",
            title: "ALL PROJECTS"
        },
        commercial: {
            label: "PROGRAM / COMMERCIAL",
            title: "제품광고"
        },
        entertainment: {
            label: "PROGRAM / ENTERTAINMENT",
            title: "엔터테인먼트 기획안"
        },
        thumbnail: {
            label: "PROGRAM / YOUTUBE",
            title: "유튜브 썸네일"
        },
        motion: {
            label: "PROGRAM / MOTION",
            title: "모션그래픽"
        }
    };



    /* =========================================
       FILTER FUNCTION
    ========================================= */

    function filterPortfolio(selectedCategory) {

        let visibleCount = 0;


        /* -----------------------------------------
           ACTIVE CATEGORY BUTTON
        ----------------------------------------- */

        portfolioCategories.forEach(function (button) {

            const isActive = button.dataset.category === selectedCategory;

            button.classList.toggle("active", isActive);

        });



        /* -----------------------------------------
           FILTER PROJECTS
        ----------------------------------------- */

        portfolioProjects.forEach(function (project) {

            const projectCategory = project.dataset.category;

            const shouldShow =
                selectedCategory === "all" || projectCategory === selectedCategory;

            if (shouldShow) {
                project.style.display = ""; // 기본 디스플레이 스타일로 복원
                project.classList.remove("hidden");
                visibleCount++;
            } else {
                project.style.display = "none"; // 해당하지 않는 프로젝트 숨김
                project.classList.add("hidden");
            }

        });



        /* -----------------------------------------
           CHANGE HEADER
        ----------------------------------------- */

        const categoryInfo = categoryNames[selectedCategory];

        if (categoryInfo && portfolioCurrentLabel && portfolioCurrentTitle) {

            portfolioCurrentLabel.textContent = categoryInfo.label;
            portfolioCurrentTitle.textContent = categoryInfo.title;

        } else if (portfolioCurrentLabel && portfolioCurrentTitle) {

            portfolioCurrentLabel.textContent = `PROGRAM / ${selectedCategory.toUpperCase()}`;
            portfolioCurrentTitle.textContent = selectedCategory;

        }



        /* -----------------------------------------
           PROJECT COUNT
        ----------------------------------------- */

        if (projectCount) {

            projectCount.textContent = String(visibleCount).padStart(2, "0");

        }



        /* -----------------------------------------
           EMPTY MESSAGE
        ----------------------------------------- */

        if (portfolioEmpty) {

            portfolioEmpty.style.display = visibleCount === 0 ? "block" : "none";
            portfolioEmpty.classList.toggle("show", visibleCount === 0);

        }

    }



    /* =========================================
       CATEGORY BUTTON EVENT
    ========================================= */

    portfolioCategories.forEach(function (categoryButton) {

        categoryButton.addEventListener("click", function () {

            const selectedCategory = categoryButton.dataset.category;

            filterPortfolio(selectedCategory);

        });

    });



    /* =========================================
       INITIALIZE PORTFOLIO
    ========================================= */

    if (portfolioCategories.length > 0) {

        filterPortfolio("all");

    }



    /* =========================================
       PORTFOLIO IMAGE SLIDER
    ========================================= */

    const sliders = document.querySelectorAll(".portfolio-slider");

    sliders.forEach(function (slider) {

        const slides = slider.querySelectorAll(".portfolio-slide");
        const prevButton = slider.querySelector(".slider-prev");
        const nextButton = slider.querySelector(".slider-next");
        const currentNumber = slider.querySelector(".current-slide");
        const totalNumber = slider.querySelector(".total-slide");

        let currentIndex = 0;


        /* -----------------------------------------
           TOTAL IMAGE NUMBER
        ----------------------------------------- */

        if (totalNumber) {

            totalNumber.textContent = String(slides.length).padStart(2, "0");

        }


        /* -----------------------------------------
           SHOW SLIDE
        ----------------------------------------- */

        function showSlide(index) {

            if (slides.length === 0) return;

            slides.forEach(function (slide, i) {

                slide.classList.toggle("active", i === index);

            });

            if (currentNumber) {

                currentNumber.textContent = String(index + 1).padStart(2, "0");

            }

        }


        /* -----------------------------------------
           PREVIOUS BUTTON
        ----------------------------------------- */

        if (prevButton) {

            prevButton.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                currentIndex--;

                if (currentIndex < 0) {
                    currentIndex = slides.length - 1;
                }

                showSlide(currentIndex);

            });

        }


        /* -----------------------------------------
           NEXT BUTTON
        ----------------------------------------- */

        if (nextButton) {

            nextButton.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                currentIndex++;

                if (currentIndex >= slides.length) {
                    currentIndex = 0;
                }

                showSlide(currentIndex);

            });

        }


        /* -----------------------------------------
           INITIALIZE SLIDER
        ----------------------------------------- */

        showSlide(currentIndex);

    });

});