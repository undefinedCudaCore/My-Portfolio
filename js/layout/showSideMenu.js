"use strict";

function headerBackground() {
    const mainHeader = document.querySelector("#main_header");
    const sideMenu = document.querySelector(".side-menu");
    const cog = document.querySelector("#main_header .fa-cog");
    const bars = document.querySelector("#main_header .fa-bars");

    if (window.scrollY > 80 && sideMenu.classList.contains("cog")) {
        sideMenu.classList.add("show-side-menu");
        mainHeader.classList.add("position");
    } else {
        sideMenu.classList.remove("show-side-menu");
        mainHeader.classList.remove("position");
    }

    cog.addEventListener('click', function () {
        sideMenu.classList.remove("show-side-menu");
        sideMenu.classList.remove("cog");
        mainHeader.classList.remove("position");
        return;
        
    });
    if(window.scrollY > 80) {
        bars.classList.add("show-bars");
        bars.addEventListener('click', function () {
            sideMenu.classList.add("show-side-menu");
            sideMenu.classList.add("cog");
            mainHeader.classList.add("position");
            return;
            
        });
    } else {
        // bars.classList.remove("show-bars");
    }
    return;
};
    window.addEventListener('scroll', headerBackground);
export default headerBackground;