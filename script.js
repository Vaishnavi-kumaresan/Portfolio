const roles = [
    "Aspiring Data Analyst",
    "Data Enthusiast",
    "Python & SQL Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const element = document.getElementById("typing");

    if (!element) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        element.textContent = currentRole.substring(0, charIndex--);
    } else {
        element.textContent = currentRole.substring(0, charIndex++);
    }

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex > currentRole.length) {
        deleting = true;
        speed = 1000;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        charIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
// Scroll Reveal Animation

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".section, .project-card, .info-card"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });

});
// Project Filtering

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedFilter = button.getAttribute("data-filter");

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projects.forEach(function(project) {

            const category = project.getAttribute("data-category");

            if (selectedFilter === "all" || category === selectedFilter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});