let menuSection = document.querySelector('#mobile-menu')
let menu = menuSection.querySelector(".icon-wrapper");
menu.addEventListener('click', () => {
    menuSection.classList.toggle("d-none");
});

let hamburgerIcon = document.querySelector("nav.toggle-wrapper .icon-wrapper");

hamburgerIcon.addEventListener('click', () => {
    menuSection.classList.toggle("d-none");
});

document.querySelectorAll(".menu-list li a").forEach(elem => {
    elem.addEventListener("click", () => {
        menuSection.classList.toggle("d-none");
    });
});

let recentWorks = document.getElementById("recent-works");
let aboutMe = document.getElementById("about");
let contact = document.getElementById("contact");

let links = Array.from(document.querySelectorAll("ul.desktop-only > li > a"));
let recentWorksSection = links[0];
let aboutMeSection = links[1];
let contactSection = links[2];



window.onscroll = () => {
    if(recentWorks.getBoundingClientRect().top <= 50 && recentWorks.getBoundingClientRect().top >= -1000){
        recentWorksSection.classList.add("active-section");
    }else {
        recentWorksSection.classList.remove("active-section");
    }

    if(aboutMe.getBoundingClientRect().top <= 50 && aboutMe.getBoundingClientRect().top >= -325){
        aboutMeSection.classList.add("active-section");
    }else {
        aboutMeSection.classList.remove("active-section");
    }
    
    if(contact.getBoundingClientRect().top <= 350){
        contactSection.classList.add("active-section");
    }else {
        contactSection.classList.remove("active-section");
    }
};