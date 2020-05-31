"use strict";

function headerBackground() {
    const mainHeader = document.querySelector("#main_header");
    const sideMenu = document.querySelector(".side-menu");
    if (window.scrollY > 80) {
        sideMenu.classList.add("show-side-menu");
        mainHeader.classList.add("position");
    } else {
        sideMenu.classList.remove("show-side-menu");
        mainHeader.classList.remove("position");
    }
    return;
};
    window.addEventListener('scroll', headerBackground);
export default headerBackground;