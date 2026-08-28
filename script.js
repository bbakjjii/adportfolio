/* =========================================
   RESET
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family:
        Arial,
        "Noto Sans KR",
        sans-serif;

    background: #101114;

    color: #f5f5f5;

    overflow-x: hidden;
}


a {
    text-decoration: none;
    color: inherit;
}



/* =========================================
   TV SCREEN
========================================= */

.tv-screen {
    width: 100%;
    min-height: 100vh;

    background: #101114;
}



/* =========================================
   HEADER
========================================= */

header {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 50px;

    background: rgba(12, 13, 16, 0.94);

    border-bottom: 1px solid #303238;

    backdrop-filter: blur(12px);

    z-index: 9999;
}



/* 방송국 로고 */

.station-logo {
    display: flex;
    align-items: center;

    gap: 12px;

    font-weight: 800;

    letter-spacing: 2px;

    font-size: 17px;
}


.station-icon {
    width: 30px;
    height: 30px;

    border: 2px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
}



/* =========================================
   ON AIR
========================================= */

.on-air {
    display: flex;
    align-items: center;

    gap: 8px;

    margin-right: auto;
    margin-left: 25px;

    font-size: 11px;

    color: #aaa;
}


.on-air-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #ff4d4d;

    animation: blink 1.2s infinite;
}


.live-dot {
    color: #ff4d4d;
}


@keyframes blink {

    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }

}



/* =========================================
   NAVIGATION
========================================= */

nav {
    display: flex;
    align-items: center;

    gap: 8px;

    margin-right: 100px;
}


nav a {
    padding: 10px 15px;

    font-size: 12px;

    color: #aaa;

    border: 1px solid transparent;

    transition: 0.25s;
}


nav a:hover {
    color: white;

    border: 1px solid #555;

    background: #1c1e23;
}


nav a.active {
    color: white;

    border: 1px solid #777;

    background: #1c1e23;
}



/* =========================================
   COMMON SECTION
========================================= */

section {
    min-height: 100vh;

    padding:
        130px
        7%
        100px;

    scroll-margin-top: 70px;
}


.section-label {
    display: inline-block;

    font-size: 10px;

    letter-spacing: 2px;

    color: #888;

    margin-bottom: 12px;
}


.section-title {
    font-size: 48px;

    letter-spacing: -2px;

    margin-bottom: 55px;
}


.section-title span {
    color: #666;
}



/* =========================================
   HOME
========================================= */

#home {
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 120px;

    background:
        linear-gradient(
            rgba(16,17,20,0.85),
            rgba(16,17,20,0.96)
        ),

        repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(255,255,255,0.015) 3px,
            rgba(255,255,255,0.015) 4px
        );
}


.broadcast-container {
    width: 100%;

    max-width: 1250px;

    display: grid;

    grid-template-columns:
        1.3fr
        0.7fr;

    gap: 70px;

    align-items: center;
}



/* =========================================
   HERO TEXT
========================================= */

.hero-code {
    font-size: 11px;

    color: #777;

    letter-spacing: 2px;

    margin-bottom: 25px;
}


.hero-title {
    font-size:
        clamp(
            55px,
            7vw,
            100px
        );

    line-height: 0.95;

    letter-spacing: -6px;

    margin-bottom: 35px;
}


.hero-title span {
    color: #777;
}


.hero-description {
    max-width: 550px;

    color: #999;

    font-size: 15px;

    line-height: 1.9;
}



/* =========================================
   TV MONITOR
========================================= */

.monitor {
    width: 100%;

    aspect-ratio: 16 / 10;

    background: #181a1f;

    border: 8px solid #292b30;

    box-shadow:
        0 0 0 1px #444,
        0 30px 70px rgba(0,0,0,0.5);

    position: relative;
}


.monitor-screen {
    position: absolute;

    inset: 15px;

    background:
        linear-gradient(
            135deg,
            #22252b,
            #101114
        );

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    padding: 22px;
}


.screen-top {
    display: flex;

    justify-content: space-between;

    font-size: 10px;

    color: #aaa;
}


.screen-center {
    text-align: center;
}


.screen-center h2 {
    font-size: 30px;

    letter-spacing: 3px;
}


.screen-center p {
    font-size: 10px;

    color: #777;

    margin-top: 8px;
}


.screen-bottom {
    display: flex;

    justify-content: space-between;

    font-size: 9px;

    color: #666;
}



/* =========================================
   ABOUT ME
========================================= */

#about {
    background: #15171b;
}


.about-wrapper {
    max-width: 1200px;

    margin: auto;
}


.broadcast-card {
    display: grid;

    grid-template-columns:
        300px
        1fr;

    border: 1px solid #34363b;

    background: #101114;

    min-height: 420px;
}



/* PROFILE */

.profile {
    border-right: 1px solid #34363b;

    padding: 25px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;
}


.profile-photo {
    width: 100%;

    aspect-ratio: 3 / 4;

    background: #292b30;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #666;

    font-size: 12px;

    overflow: hidden;
}


.profile-photo img {
    width: 100%;

    height: 100%;

    object-fit: cover;
}


.profile-name {
    font-size: 22px;

    font-weight: 800;
}


.profile-role {
    font-size: 11px;

    color: #888;
}


.profile-card {
    margin-bottom: 70px;
}


.profile-text {
    display: flex;

    flex-direction: column;

    gap: 8px;
}


.profile-code {
    font-size: 11px;

    opacity: 0.5;

    letter-spacing: 1px;
}



/* INFORMATION */

.broadcast-info {
    padding: 40px;
}


.info-row {
    display: grid;

    grid-template-columns:
        150px
        1fr;

    padding: 22px 0;

    border-bottom: 1px solid #2b2d32;
}


.info-label {
    color: #666;

    font-size: 11px;

    letter-spacing: 1px;
}


.info-content {
    color: #ddd;

    font-size: 14px;
}



/* =========================================
   ABOUT ME - SECTION
========================================= */

.about-section {
    margin-top: 80px;
}


.about-section-header {
    display: flex;

    align-items: flex-end;

    gap: 20px;

    margin-bottom: 30px;

    border-bottom:
        1px solid rgba(255,255,255,0.15);

    padding-bottom: 15px;
}


.about-section-header span {
    font-size: 11px;

    opacity: 0.45;

    letter-spacing: 1px;
}


.about-section-header h3 {
    margin: 0;

    font-size: 28px;

    letter-spacing: 2px;
}



/* =========================================
   CAREER TIMELINE
========================================= */

.timeline {
    position: relative;

    padding-left: 30px;
}


.timeline::before {
    content: "";

    position: absolute;

    left: 5px;

    top: 0;
    bottom: 0;

    width: 1px;

    background:
        rgba(255,255,255,0.2);
}


.timeline-item {
    position: relative;

    display: grid;

    grid-template-columns:
        180px
        1fr;

    gap: 35px;

    padding-bottom: 55px;
}


.timeline-item::before {
    content: "";

    position: absolute;

    left: -29px;

    top: 5px;

    width: 9px;
    height: 9px;

    border-radius: 50%;

    background: currentColor;

    box-shadow:
        0 0 0 4px rgba(255,255,255,0.05);
}


.timeline-date {
    font-size: 12px;

    opacity: 0.5;

    letter-spacing: 1px;

    padding-top: 3px;
}


.timeline-content h4 {
    margin: 0 0 8px;

    font-size: 20px;

    letter-spacing: 1px;
}


.timeline-role {
    display: inline-block;

    margin-bottom: 15px;

    font-size: 12px;

    opacity: 0.55;
}


.timeline-content ul {
    margin: 0;

    padding-left: 18px;
}


.timeline-content li {
    margin-bottom: 7px;

    font-size: 13px;

    line-height: 1.7;

    opacity: 0.7;
}



/* =========================================
   EDUCATION
========================================= */

.education-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;
}


.education-item {
    padding: 25px;

    border:
        1px solid rgba(255,255,255,0.12);

    background:
        rgba(255,255,255,0.025);

    transition: 0.3s;
}


.education-item:hover {
    transform: translateY(-4px);

    border-color:
        rgba(255,255,255,0.3);
}


.education-year {
    display: block;

    font-size: 11px;

    opacity: 0.45;

    margin-bottom: 15px;
}


.education-item h4 {
    margin: 0 0 8px;

    font-size: 18px;
}


.education-item p {
    margin: 0 0 6px;

    font-size: 14px;
}


.education-item small {
    opacity: 0.45;
}



/* =========================================
   TRAINING & ACTIVITIES
========================================= */

.activity-list {
    display: flex;

    flex-direction: column;

    gap: 1px;
}


.activity-item {
    display: grid;

    grid-template-columns:
        180px
        1fr;

    gap: 30px;

    padding: 25px;

    background:
        rgba(255,255,255,0.025);

    border:
        1px solid rgba(255,255,255,0.08);
}


.activity-date {
    font-size: 11px;

    opacity: 0.45;

    letter-spacing: 1px;
}


.activity-item h4 {
    margin: 0 0 7px;

    font-size: 17px;
}


.activity-item p {
    margin: 0 0 8px;

    font-size: 14px;
}


.activity-item span {
    font-size: 12px;

    opacity: 0.5;

    line-height: 1.6;
}



/* =========================================
   CERTIFICATES
========================================= */

.certificate-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 10px;
}


.certificate-item {
    display: flex;

    flex-direction: column;

    gap: 8px;

    padding: 22px;

    border:
        1px solid rgba(255,255,255,0.1);

    background:
        rgba(255,255,255,0.025);
}


.certificate-item span {
    font-size: 10px;

    opacity: 0.4;
}


.certificate-item strong {
    font-size: 14px;

    line-height: 1.5;
}


.certificate-item small {
    font-size: 10px;

    opacity: 0.45;
}



/* =========================================
   COVER LETTER
========================================= */

#cover {
    background: #0f1013;
}


.cover-wrapper {
    max-width: 1000px;

    margin: auto;
}


.program-sheet {
    border-top: 2px solid #eee;
}


.cover-row {
    display: grid;

    grid-template-columns:
        220px
        1fr;

    gap: 50px;

    padding: 45px 0;

    border-bottom:
        1px solid #303238;
}


.cover-question {
    font-size: 18px;

    font-weight: 700;
}


.cover-question small {
    display: block;

    font-size: 9px;

    color: #666;

    margin-top: 8px;

    letter-spacing: 1px;
}


.cover-answer {
    color: #999;

    font-size: 14px;

    line-height: 2;
}



/* =========================================
   SKILLS
========================================= */

#skills {
    background: #181a1e;
}


.skills-wrapper {
    max-width: 1100px;

    margin: auto;
}


.skill-console {
    border: 1px solid #37393e;

    background: #101114;

    padding: 35px;
}


.console-header {
    display: flex;

    justify-content: space-between;

    padding-bottom: 20px;

    border-bottom: 1px solid #333;

    margin-bottom: 30px;

    font-size: 11px;

    color: #777;
}


.skill-item {
    display: grid;

    grid-template-columns:
        180px
        1fr
        70px;

    align-items: center;

    gap: 25px;

    margin-bottom: 28px;
}


.skill-name {
    font-size: 13px;

    font-weight: 700;
}


.signal {
    height: 12px;

    display: flex;

    gap: 3px;
}


.signal span {
    flex: 1;

    background: #333;
}


.signal span.active {
    background: #eee;
}


.skill-level {
    text-align: right;

    font-size: 11px;

    color: #777;
}



/* =========================================
   PORTFOLIO
========================================= */

#portfolio {
    background: #101114;
}


.portfolio-wrapper {
    max-width: 1250px;

    margin: auto;
}


.program-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 25px;
}


.program {
    position: relative;

    border: 1px solid #333;

    background: #181a1e;

    cursor: pointer;

    overflow: hidden;

    transition: 0.3s;
}


.program:hover {
    transform: translateY(-5px);

    border-color: #777;
}



/* =========================================
   PORTFOLIO THUMBNAIL
========================================= */

.program-thumbnail {
    position: relative;

    aspect-ratio: 16 / 9;

    background:
        linear-gradient(
            135deg,
            #30333a,
            #15171b
        );

    display: flex;

    align-items: center;

    justify-content: center;

    overflow: hidden;
}


.program-thumbnail::before {
    content: "";

    position: absolute;

    inset: 0;

    background:
        repeating-linear-gradient(
            0deg,
            transparent,
            transparent 4px,
            rgba(255,255,255,0.02) 4px,
            rgba(255,255,255,0.02) 5px
        );

    pointer-events: none;

    z-index: 3;
}



/* =========================================
   PORTFOLIO IMAGE SLIDER
========================================= */

.portfolio-slider {
    position: relative;

    width: 100%;

    aspect-ratio: 16 / 9;

    overflow: hidden;
}



/* 이미지 */

.portfolio-slide {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    opacity: 0;

    transition:
        opacity 0.35s ease;

    pointer-events: none;

    z-index: 1;
}


.portfolio-slide.active {
    opacity: 1;

    pointer-events: auto;

    z-index: 2;
}



/* =========================================
   SLIDER ARROW
========================================= */

.slider-arrow {
    position: absolute;

    top: 50%;

    transform: translateY(-50%);

    width: 42px;
    height: 42px;

    border:
        1px solid rgba(255,255,255,0.35);

    background:
        rgba(10,11,14,0.65);

    color: #fff;

    font-size: 30px;

    font-family: Arial, sans-serif;

    line-height: 1;

    display: flex;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    z-index: 10;

    opacity: 0;

    transition:
        opacity 0.25s,
        background 0.25s,
        border-color 0.25s;
}



/* 이미지에 마우스 올렸을 때 */

.portfolio-slider:hover .slider-arrow {
    opacity: 1;
}



/* LEFT */

.slider-prev {
    left: 15px;
}



/* RIGHT */

.slider-next {
    right: 15px;
}



/* HOVER */

.slider-arrow:hover {
    background:
        rgba(255,255,255,0.15);

    border-color: #aaa;

    color: #fff;
}



/* =========================================
   SLIDER COUNTER
========================================= */

.slider-counter {
    position: absolute;

    right: 15px;
    bottom: 12px;

    z-index: 10;

    padding: 5px 8px;

    background:
        rgba(10,11,14,0.7);

    border:
        1px solid rgba(255,255,255,0.15);

    font-size: 9px;

    letter-spacing: 1px;

    color: #aaa;
}


.current-slide {
    color: #fff;
}


.counter-divider {
    margin: 0 2px;
}



/* =========================================
   PORTFOLIO TITLE
========================================= */

.program-thumbnail h3 {
    position: relative;

    font-size: 40px;

    letter-spacing: 3px;

    z-index: 4;
}



/* =========================================
   PROGRAM INFO
========================================= */

.program-info {
    padding: 22px;

    border-top:
        1px solid #333;
}


.program-meta {
    display: flex;

    justify-content: space-between;

    font-size: 9px;

    color: #666;

    margin-bottom: 10px;
}


.program-info h3 {
    font-size: 20px;

    margin-bottom: 7px;
}


.program-info p {
    color: #777;

    font-size: 12px;
}



/* =========================================
   FOOTER
========================================= */

footer {
    padding:
        45px 7%;

    background: #08090b;

    border-top:
        1px solid #27292d;

    display: flex;

    justify-content: space-between;

    font-size: 10px;

    color: #555;
}



/* =========================================
   REMOTE CONTROL
========================================= */

.remote {
    position: fixed;

    right: 25px;

    top: 50%;

    transform:
        translateY(-50%);

    width: 55px;

    background: #1b1d21;

    border:
        1px solid #3a3c41;

    padding: 8px;

    z-index: 1000;
}


.remote button {
    width: 100%;

    height: 35px;

    margin-bottom: 5px;

    border:
        1px solid #333;

    background: #111;

    color: #aaa;

    cursor: pointer;

    font-size: 10px;
}


.remote button:hover {
    color: white;

    background: #292b30;
}



/* =========================================
   ABOUT ME - MOBILE
========================================= */

@media (max-width: 768px) {

    .about-section {
        margin-top: 55px;
    }


    .about-section-header {
        align-items: flex-start;

        flex-direction: column;

        gap: 8px;
    }


    .about-section-header h3 {
        font-size: 23px;
    }


    .timeline {
        padding-left: 22px;
    }


    .timeline-item {
        grid-template-columns: 1fr;

        gap: 10px;

        padding-bottom: 40px;
    }


    .timeline-item::before {
        left: -21px;
    }


    .education-grid {
        grid-template-columns: 1fr;
    }


    .activity-item {
        grid-template-columns: 1fr;

        gap: 12px;
    }


    .certificate-grid {
        grid-template-columns: 1fr;
    }

}



/* =========================================
   MOBILE
========================================= */

@media (max-width: 800px) {

    header {
        padding: 0 20px;

        height: 65px;
    }


    .station-logo {
        font-size: 12px;
    }


    .on-air {
        display: none;
    }


    nav {
        gap: 0;

        margin-right: 0;
    }


    nav a {
        padding: 7px;

        font-size: 9px;
    }


    section {
        padding:
            110px
            6%
            70px;
    }


    .broadcast-container {
        grid-template-columns: 1fr;

        gap: 50px;
    }


    .hero-title {
        font-size: 58px;

        letter-spacing: -4px;
    }


    .broadcast-card {
        grid-template-columns: 1fr;
    }


    .profile {
        border-right: none;

        border-bottom:
            1px solid #34363b;
    }


    .profile-photo {
        max-width: 200px;
    }


    .broadcast-info {
        padding: 25px;
    }


    .info-row {
        grid-template-columns:
            100px
            1fr;
    }


    .cover-row {
        grid-template-columns: 1fr;

        gap: 15px;

        padding: 30px 0;
    }


    .skill-item {
        grid-template-columns:
            110px
            1fr
            45px;

        gap: 10px;
    }


    .program-grid {
        grid-template-columns: 1fr;
    }


    .remote {
        display: none;
    }


    footer {
        flex-direction: column;

        gap: 10px;
    }


    /* 모바일 슬라이더 */

    .slider-arrow {
        width: 36px;
        height: 36px;

        font-size: 25px;

        opacity: 1;
    }


    .slider-prev {
        left: 8px;
    }


    .slider-next {
        right: 8px;
    }


    .slider-counter {
        right: 10px;

        bottom: 8px;
    }

}





/* =========================================
   YOUTUBE PLAY BUTTON
========================================= */

.youtube-thumbnail {
    position: relative;
}


/* PLAY BUTTON */

.youtube-play-button {

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    width: 68px;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.75);

    color: #fff;

    border-radius: 10px;

    font-size: 21px;

    line-height: 1;

    z-index: 5;

    transition: 
        transform 0.25s ease,
        background 0.25s ease;
}


/* 썸네일에 마우스를 올렸을 때 */

.youtube-thumbnail:hover .youtube-play-button {

    transform:
        translate(-50%, -50%)
        scale(1.1);

    background: rgba(0, 0, 0, 0.9);
}


/* 썸네일 자체도 살짝 어둡게 */

.youtube-thumbnail::after {

    content: "";

    position: absolute;

    inset: 0;

    background: rgba(0, 0, 0, 0);

    transition: 0.25s;

    z-index: 3;

    pointer-events: none;
}


.youtube-thumbnail:hover::after {

    background: rgba(0, 0, 0, 0.12);
}
