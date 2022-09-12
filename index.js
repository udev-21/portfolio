let menuSection = document.querySelector('#mobile-menu')
let menu = menuSection.querySelector(".icon-wrapper");
menu.addEventListener('click', () => {
    menuSection.classList.add("d-none");
});

let hamburgerIcon = document.querySelector("nav.toggle-wrapper .icon-wrapper");

hamburgerIcon.addEventListener('click', () => {
    menuSection.classList.remove("d-none");
});