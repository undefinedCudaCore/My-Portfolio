"use strict0";

function svgIcons(icons) {
    let HTML = '';
    
    if ( !Array.isArray(icons) ) {
        return console.log('ERROR: data is not array..');  
    }
    
    if ( icons.length === 0 ) {
        return console.log('ERROR: array cannot be empty');  
    }

    for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        HTML += `
                <div class="col-2 skill-svg-icons">
                    ${icon.svg}
                    <p class="icon-name">${icon.name}</p>
                </div>`;
    }
    document.querySelector('#skill-icons').innerHTML = HTML;
    // console.log(document.querySelectorAll('.skill-svg-icons'));
}
export default svgIcons;