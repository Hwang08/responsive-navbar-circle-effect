const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Opens the hamburger icon on click but the mask covers the hamburger icon
hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle("open");
    // Fades links in after hamburger is clicked
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});


