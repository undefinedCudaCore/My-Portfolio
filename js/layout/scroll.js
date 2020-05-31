"use strict";
function scrollFun() {
    // current scroll pozition
    const headerHeight = document.querySelector('#main_header').offsetHeight;
    const height = window.scrollY+headerHeight;
    
    // make list of section
    let links = [];
    const DOMlinks = document.querySelectorAll('#main_header nav > a');
    
    for (let i = 0; i < DOMlinks.length; i++) {
        const link = DOMlinks[i];
        const href = link.href;
        const split = href.split('#');
        if (split.length > 1) {
            links.push('#'+split[1]);
            
        } 
    }
    
    
    // find out height position of section
const sectionHeights = [];
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link === '#') {
        sectionHeights.push(0);
    } else {
        const section = document.querySelector(link);
        
        sectionHeights.push(section.offsetTop);
    }
}

    // find out which of sections are nearest to current position
    let wantedSection = 0;
    for (let i = 0; i < sectionHeights.length; i++) {
        const sectionH = sectionHeights[i];  
        if (sectionH <= height) {
            wantedSection = i;
        } else {
            break;
        }
    }
    
        // if find out nierest section

        // pries tai buvusi nuoroda header > nav netanka active klases
        document.querySelector(`#main_header nav > a.active`).classList.remove('active');
        // naujoji nuoroda gauna active clase
        document.querySelector(`#main_header nav > a[href="${links[wantedSection]}"]`).classList.add('active');

            
    return;
};
window.addEventListener('scroll', scrollFun);
export default scrollFun;