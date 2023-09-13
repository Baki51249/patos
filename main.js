document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");

    menuBtn.addEventListener("click", function() {
        if (nav.classList.contains("active")) {
            // Fecha o menu
            nav.classList.remove("active");
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        } else {
            // Abre o menu
            nav.classList.add("active");
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        }
    });
});