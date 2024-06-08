const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 300) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});