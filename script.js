document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Skill bars animation
    const skillBars = document.querySelectorAll(".fill");
    skillBars.forEach(bar => {
        bar.style.animation = "fillUp 1.5s ease-in-out";
    });
});
