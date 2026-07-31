// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menu-btn");
const mobileNavLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    mobileNavLinks.classList.toggle("active");
});


// إغلاق القائمة بعد الضغط على أي Link

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNavLinks.classList.remove("active");
    });
});


// =========================
// Navbar Active Link
// =========================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    links.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// Typing Animation
// =========================

const nameElement = document.getElementById("typing-name");
const jobElement = document.getElementById("typing-job");

const nameText = "Ahmed Yousry";
const jobText = "I Build Modern Websites";

let index = 0;
let deleting = false;

const maxLength = Math.max(
    nameText.length,
    jobText.length
);


function typeEffect() {

    if (!deleting) {

        nameElement.textContent =
            nameText.substring(0, Math.min(index, nameText.length));

        jobElement.textContent =
            jobText.substring(0, Math.min(index, jobText.length));

        index++;

        if (index > maxLength) {

            setTimeout(() => {
                deleting = true;
                typeEffect();
            }, 1800);

            return;
        }

    } else {

        nameElement.textContent =
            nameText.substring(0, Math.min(index, nameText.length));

        jobElement.textContent =
            jobText.substring(0, Math.min(index, jobText.length));

        index--;

        if (index < 0) {

            index = 0;
            deleting = false;

            setTimeout(typeEffect, 500);

            return;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}
typeEffect();





// =========================
// About Scroll Animation
// =========================

const aboutSection = document.querySelector(".about");

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                aboutSection.classList.add("show");

            }

        });

    },
    {
        threshold: 0.25
    }
);


if (aboutSection) {
    aboutObserver.observe(aboutSection);
}











// =========================
// Terminal Scroll Animation
// =========================

const terminalSection = document.querySelector(".terminal-section");

const terminalObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                terminalSection.classList.add("show");

                startTerminalTyping();

                terminalObserver.unobserve(terminalSection);
            }

        });

    },
    {
        threshold: 0.2
    }
);


if (terminalSection) {

    terminalObserver.observe(terminalSection);

}


// =========================
// Terminal Typing
// =========================

const line1 = document.getElementById("terminal-line-1");
const line2 = document.getElementById("terminal-line-2");
const line3 = document.getElementById("terminal-line-3");
const line4 = document.getElementById("terminal-line-4");


const terminalLines = [

    {
        element: line1,
        text: "Hi, I'm Ahmed Yousry"
    },

    {
        element: line2,
        text: "Front-End Developer"
    },

    {
        element: line3,
        text: "I create modern and responsive websites"
    },

    {
        element: line4,
        text: "HTML • CSS • JavaScript"
    }

];


let terminalStarted = false;


function typeLine(line, callback) {

    let index = 0;

    function write() {

        if (index < line.text.length) {

            line.element.textContent += line.text.charAt(index);

            index++;

            setTimeout(write, 70);

        } else {

            setTimeout(callback, 300);

        }

    }

    write();

}


function startTerminalTyping() {

    if (terminalStarted) return;

    terminalStarted = true;


    let currentLine = 0;


    function nextLine() {

        if (currentLine < terminalLines.length) {

            typeLine(
                terminalLines[currentLine],
                () => {

                    currentLine++;

                    nextLine();

                }
            );

        }

    }


    nextLine();

}