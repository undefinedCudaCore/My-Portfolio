"use strict";

function headerBackground() {
    const mainHeader = document.querySelector("#main_header");
    const sideMenu = document.querySelector(".side-menu");
    const cog = document.querySelector("#main_header .fa-cog");
    const bars = document.querySelector("#main_header .fa-bars");
    const tad = document.querySelector("#main_header .tad");
    const available = document.querySelector("#main_header .available");
    const image = document.querySelector("#main_header .main-avatar");
    const hero = document.querySelector("#hero");
    const heroShadow = document.querySelector("#hero .hero-shadow");
    const headerCaption = document.querySelector("#hero .header-caption");
     
    if (window.scrollY > 80 && sideMenu.classList.contains("cog")) {
        sideMenu.classList.add("show-side-menu");
        mainHeader.classList.add("position");
        hero.classList.add("vh");
        heroShadow.classList.add("vh");
        headerCaption.classList.add("vh");
        tad.classList.remove("hide-profile");
        available.classList.remove("hide-profile");
        image.classList.remove("hide-profile");
        // cog.classList.remove("fa-cog");
        
    } else {
        sideMenu.classList.remove("show-side-menu");
        mainHeader.classList.remove("position");
        hero.classList.remove("vh");
        heroShadow.classList.remove("vh");
        headerCaption.classList.remove("vh");
    }

    cog.addEventListener('click', function () {
        sideMenu.classList.remove("show-side-menu");
        sideMenu.classList.remove("cog");
        mainHeader.classList.remove("position");
        tad.classList.remove("hide-profile");
        available.classList.remove("hide-profile");
        image.classList.remove("hide-profile");
        return;
        
    });

    bars.addEventListener('click', function () {
        sideMenu.classList.add("show-side-menu");
        mainHeader.classList.add("position");
        tad.classList.add("hide-profile");
        available.classList.add("hide-profile");
        image.classList.add("hide-profile");
        cog.classList.add("fa-cog");
        return;
        
    });
    if(window.scrollY > 80) {
        bars.classList.add("show-bars");
        bars.addEventListener('click', function () {
        // sideMenu.classList.add("show-side-menu");
        sideMenu.classList.add("cog");
        // mainHeader.classList.add("position");

        return;
            
        });
    } else {
        // bars.classList.remove("show-bars");
    }
    return;
};
    window.addEventListener('scroll', headerBackground);
export default headerBackground;