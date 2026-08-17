/* =========================================================
   RESUMECRAFT - COMPLETE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const modal = document.getElementById("loginModal");
    const resume = document.getElementById("resume");

    const nameInput = document.getElementById("nameInput");
    const titleInput = document.getElementById("titleInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
    const addressInput = document.getElementById("addressInput");

    const summaryInput = document.getElementById("summaryInput");
    const skillsInput = document.getElementById("skillsInput");

    const educationInput = document.getElementById("educationInput");
    const experienceInput = document.getElementById("experienceInput");

    const photoInput = document.getElementById("photoInput");

    const resumeName = document.getElementById("resumeName");
    const resumeTitle = document.getElementById("resumeTitle");

    const resumeEmail = document.getElementById("resumeEmail");
    const resumePhone = document.getElementById("resumePhone");
    const resumeAddress = document.getElementById("resumeAddress");

    const resumeSummary = document.getElementById("resumeSummary");
    const resumeSkills = document.getElementById("resumeSkills");

    const resumeEducation = document.getElementById("resumeEducation");
    const resumeExperience = document.getElementById("resumeExperience");

    const profileImage = document.getElementById("profileImage");

    /* =====================================================
       HELPER FUNCTION
       ===================================================== */

    function safeElement(element) {
        return element !== null && element !== undefined;
    }

    function updateElement(element, value, fallback = "") {
        if (safeElement(element)) {
            element.textContent = value || fallback;
        }
    }

    /* =====================================================
       NAVIGATION
       ===================================================== */

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const target = this.getAttribute("href");

            if (!target || !target.startsWith("#")) {
                return;
            }

            const section = document.querySelector(target);

            if (section) {
                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                navLinks.forEach(item => {
                    item.classList.remove("active");
                });

                this.classList.add("active");
            }
        });

    });


    /* =====================================================
       ACTIVE NAVIGATION ON SCROLL
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    /* =====================================================
       LOGIN MODAL
       ===================================================== */

    const loginButtons = document.querySelectorAll(
        ".signin-btn"
    );

    loginButtons.forEach(button => {

        button.addEventListener("click", () => {

            if (modal) {
                modal.classList.add("active");

                document.body.style.overflow = "hidden";
            }

        });

    });


    const closeModal =
        document.querySelector(".close-modal");

    if (closeModal) {

        closeModal.addEventListener("click", closeLogin);

    }


    function closeLogin() {

        if (modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    }


    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeLogin();
            }

        });

    }


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeLogin();
        }

    });


    /* =====================================================
       CREATE RESUME BUTTON
       ===================================================== */

    const createButtons =
        document.querySelectorAll(
            ".create-btn, .primary-btn"
        );

    createButtons.forEach(button => {

        button.addEventListener("click", () => {

            const builder =
                document.querySelector("#builder");

            if (builder) {

                builder.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =====================================================
       CHOOSE TEMPLATE BUTTONS
       ===================================================== */

    const templateButtons =
        document.querySelectorAll(
            ".template-info button"
        );

    templateButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            selectTemplate(index + 1);

            const builder =
                document.querySelector("#builder");

            if (builder) {

                builder.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =====================================================
       TEMPLATE SELECTION
       ===================================================== */

    function selectTemplate(templateNumber) {

        if (!resume) return;

        resume.classList.remove(
            "template-1",
            "template-2",
            "template-3",
            "template-4",
            "template-5",
            "template-6"
        );

        resume.classList.add(
            "template-" + templateNumber
        );

        localStorage.setItem(
            "resumeTemplate",
            templateNumber
        );

        updateTemplateDesign(templateNumber);

    }


    function updateTemplateDesign(templateNumber) {

        if (!resume) return;

        const top =
            resume.querySelector(".resume-top");

        const left =
            resume.querySelector(".resume-left");

        if (templateNumber === 1) {

            if (top) {
                top.style.background =
                    "var(--theme)";
            }

            if (left) {
                left.style.background =
                    "#f1f3f6";
            }

        }

        if (templateNumber === 2) {

            if (top) {
                top.style.background =
                    "#20232a";
            }

            if (left) {
                left.style.background =
                    "#20232a";
            }

        }

        if (templateNumber === 3) {

            if (top) {
                top.style.background =
                    "var(--theme)";
            }

            if (left) {
                left.style.background =
                    "#ffffff";
            }

        }

        if (templateNumber === 4) {

            if (top) {
                top.style.background =
                    "#181818";
            }

            if (left) {
                left.style.background =
                    "#222222";
            }

        }

        if (templateNumber === 5) {

            if (top) {
                top.style.background =
                    "#16866b";
            }

            if (left) {
                left.style.background =
                    "#eaf7f3";
            }

        }

        if (templateNumber === 6) {

            if (top) {
                top.style.background =
                    "var(--theme)";
            }

            if (left) {
                left.style.background =
                    "#f7f7f7";
            }

        }

    }


    /* =====================================================
       LIVE RESUME EDITING
       ===================================================== */

    function updateResume() {

        updateElement(
            resumeName,
            nameInput?.value,
            "Your Name"
        );

        updateElement(
            resumeTitle,
            titleInput?.value,
            "Professional Title"
        );

        updateElement(
            resumeEmail,
            emailInput?.value,
            "email@example.com"
        );

        updateElement(
            resumePhone,
            phoneInput?.value,
            "+91 00000 00000"
        );

        updateElement(
            resumeAddress,
            addressInput?.value,
            "Your Address"
        );

        updateElement(
            resumeSummary,
            summaryInput?.value,
            "Write a short professional summary about yourself."
        );

        updateElement(
            resumeSkills,
            skillsInput?.value,
            "HTML, CSS, JavaScript"
        );

        updateElement(
            resumeEducation,
            educationInput?.value,
            "Your education details"
        );

        updateElement(
            resumeExperience,
            experienceInput?.value,
            "Your professional experience"
        );


        saveResumeData();

    }


    const inputs = [
        nameInput,
        titleInput,
        emailInput,
        phoneInput,
        addressInput,
        summaryInput,
        skillsInput,
        educationInput,
        experienceInput
    ];


    inputs.forEach(input => {

        if (input) {

            input.addEventListener(
                "input",
                updateResume
            );

        }

    });


    /* =====================================================
       SAVE DATA
       ===================================================== */

    function saveResumeData() {

        const data = {

            name: nameInput?.value || "",
            title: titleInput?.value || "",
            email: emailInput?.value || "",
            phone: phoneInput?.value || "",
            address: addressInput?.value || "",

            summary:
                summaryInput?.value || "",

            skills:
                skillsInput?.value || "",

            education:
                educationInput?.value || "",

            experience:
                experienceInput?.value || ""

        };

        localStorage.setItem(
            "resumeData",
            JSON.stringify(data)
        );

    }


    /* =====================================================
       LOAD DATA
       ===================================================== */

    function loadResumeData() {

        const saved =
            localStorage.getItem("resumeData");

        if (!saved) return;

        try {

            const data =
                JSON.parse(saved);

            if (nameInput)
                nameInput.value =
                    data.name || "";

            if (titleInput)
                titleInput.value =
                    data.title || "";

            if (emailInput)
                emailInput.value =
                    data.email || "";

            if (phoneInput)
                phoneInput.value =
                    data.phone || "";

            if (addressInput)
                addressInput.value =
                    data.address || "";

            if (summaryInput)
                summaryInput.value =
                    data.summary || "";

            if (skillsInput)
                skillsInput.value =
                    data.skills || "";

            if (educationInput)
                educationInput.value =
                    data.education || "";

            if (experienceInput)
                experienceInput.value =
                    data.experience || "";

            updateResume();

        } catch (error) {

            console.error(
                "Unable to load resume data:",
                error
            );

        }

    }


    /* =====================================================
       COLOR THEME
       ===================================================== */

    const colorButtons =
        document.querySelectorAll(".color");

    colorButtons.forEach(color => {

        color.addEventListener("click", () => {

            let selectedColor =
                getComputedStyle(color)
                    .backgroundColor;

            const classList =
                color.classList;

            if (classList.contains("black")) {
                selectedColor = "#263238";
            }

            if (classList.contains("purple")) {
                selectedColor = "#6c3ce9";
            }

            if (classList.contains("blue")) {
                selectedColor = "#1769aa";
            }

            if (classList.contains("green")) {
                selectedColor = "#16866b";
            }

            if (classList.contains("orange")) {
                selectedColor = "#d97706";
            }

            if (classList.contains("red")) {
                selectedColor = "#b42318";
            }

            document.documentElement.style
                .setProperty(
                    "--theme",
                    selectedColor
                );

            localStorage.setItem(
                "resumeTheme",
                selectedColor
            );

            if (resume) {
                resume.style.setProperty(
                    "--resume-theme",
                    selectedColor
                );
            }

        });

    });


    /* =====================================================
       LOAD SAVED COLOR
       ===================================================== */

    const savedTheme =
        localStorage.getItem("resumeTheme");

    if (savedTheme) {

        document.documentElement.style
            .setProperty(
                "--theme",
                savedTheme
            );

    }


    /* =====================================================
       PROFILE PHOTO UPLOAD
       ===================================================== */

    if (photoInput) {

        photoInput.addEventListener(
            "change",
            event => {

                const file =
                    event.target.files[0];

                if (!file) return;

                if (!file.type.startsWith("image/")) {

                    alert(
                        "Please select an image file."
                    );

                    return;

                }

                const reader =
                    new FileReader();

                reader.onload = function (e) {

                    if (profileImage) {

                        profileImage.src =
                            e.target.result;

                    }

                    localStorage.setItem(
                        "resumePhoto",
                        e.target.result
                    );

                };

                reader.readAsDataURL(file);

            }
        );

    }


    /* =====================================================
       LOAD PHOTO
       ===================================================== */

    const savedPhoto =
        localStorage.getItem("resumePhoto");

    if (savedPhoto && profileImage) {

        profileImage.src = savedPhoto;

    }


    /* =====================================================
       RESET RESUME
       ===================================================== */

    const resetButton =
        document.querySelector(
            ".builder-actions button:first-child"
        );

    if (resetButton) {

        resetButton.addEventListener(
            "click",
            () => {

                const confirmReset =
                    confirm(
                        "Are you sure you want to reset your resume?"
                    );

                if (!confirmReset) return;

                localStorage.removeItem(
                    "resumeData"
                );

                localStorage.removeItem(
                    "resumePhoto"
                );

                localStorage.removeItem(
                    "resumeTemplate"
                );

                localStorage.removeItem(
                    "resumeTheme"
                );

                location.reload();

            }
        );

    }


    /* =====================================================
       PRINT / DOWNLOAD RESUME
       ===================================================== */

    const downloadButton =
        document.querySelector(
            ".download-btn"
        );

    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            () => {

                window.print();

            }
        );

    }


    /* =====================================================
       LOGIN FORM
       ===================================================== */

    const loginForm =
        document.querySelector(".login-box form");

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                alert(
                    "Login successful!"
                );

                closeLogin();

            }
        );

    }


    /* =====================================================
       GOOGLE BUTTON
       ===================================================== */

    const googleButton =
        document.querySelector(
            ".google-button"
        );

    if (googleButton) {

        googleButton.addEventListener(
            "click",
            () => {

                alert(
                    "Google login is ready to connect with Firebase or Google OAuth."
                );

            }
        );

    }


    /* =====================================================
       PLAN BUTTONS
       ===================================================== */

    const planButtons =
        document.querySelectorAll(
            ".plan button"
        );

    planButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const plan =
                    button
                        .closest(".plan")
                        ?.querySelector("h3")
                        ?.textContent;

                alert(
                    `${plan || "Plan"} selected!`
                );

            }
        );

    });


    /* =====================================================
       PRODUCT BUTTONS
       ===================================================== */

    const productButtons =
        document.querySelectorAll(
            ".product-card button"
        );

    productButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                alert(
                    "This product feature will open soon."
                );

            }
        );

    });


    /* =====================================================
       SCROLL ANIMATION
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".template-card, .product-card, .plan, .help-box > div"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-animation"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });


    /* =====================================================
       ANIMATION CLASS
       ===================================================== */

    const animationStyle =
        document.createElement("style");

    animationStyle.textContent = `

        .show-animation {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

    `;

    document.head.appendChild(
        animationStyle
    );


    /* =====================================================
       TEMPLATE PREVIEW CLICK
       ===================================================== */

    const templateCards =
        document.querySelectorAll(
            ".template-card"
        );

    templateCards.forEach((card, index) => {

        card.addEventListener(
            "dblclick",
            () => {

                selectTemplate(index + 1);

                const builder =
                    document.querySelector(
                        "#builder"
                    );

                if (builder) {

                    builder.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


    /* =====================================================
       INITIAL LOAD
       ===================================================== */

    loadResumeData();

    const savedTemplate =
        localStorage.getItem(
            "resumeTemplate"
        );

    if (savedTemplate) {

        selectTemplate(
            Number(savedTemplate)
        );

    } else {

        selectTemplate(1);

    }


    /* =====================================================
       AUTO SAVE MESSAGE
       ===================================================== */

    let saveTimer;

    inputs.forEach(input => {

        if (!input) return;

        input.addEventListener(
            "input",
            () => {

                clearTimeout(saveTimer);

                saveTimer =
                    setTimeout(() => {

                        console.log(
                            "Resume automatically saved."
                        );

                    }, 700);

            }
        );

    });


    /* =====================================================
       CLICK OUTSIDE DROPDOWNS / BASIC UX
       ===================================================== */

    document.querySelectorAll(
        "button"
    ).forEach(button => {

        button.addEventListener(
            "mousedown",
            () => {

                button.style.transform =
                    "scale(.98)";

            }
        );

        button.addEventListener(
            "mouseup",
            () => {

                button.style.transform = "";

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform = "";

            }
        );

    });


    console.log(
        "ResumeCraft JavaScript loaded successfully."
    );

});

//hai