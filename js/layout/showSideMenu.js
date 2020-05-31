"use strict";

function headerBackground() {
    const mainHeader = document.querySelector(`#main_header`);
    if (window.scrollY > 80) {
        mainHeader.classList.add("show-side-menu");
    } else {
        mainHeader.classList.remove("show-side-menu");
        
    }
    return;
};
    window.addEventListener('scroll', headerBackground);
export default headerBackground;