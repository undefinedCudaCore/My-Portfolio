"use strict";

function renderHeader(headerList) {
    let HTML = '';
    let profileHTML = '';
    let navigationHTML = '';

    if ( !Array.isArray(headerList) ) {
        return console.log('ERROR: data is not array..');  
    }

    if ( headerList.length === 0 ) {
        return console.log('ERROR: array cannot be empty');  
    }

    for (let i = 0; i < headerList.length; i++) {
        const header = headerList[i];
        navigationHTML += `
                        <a href="${header.link}" class="${header.class}">${header.content}</a>`;
    }
    
    profileHTML = `
                    <div class="col-4 profile">
                        <a href="#"><img src="./img/profile-avatar.jpg" alt="Profile avatar"></a>
                        <span class="tad">Tad Kuncevitz</span>
                        <p class="avalilable">Available for work</p>
                    </div>`;

    HTML = `
            <div class="container">
                <div class="row">
                        ${profileHTML}
                        <div class="col-8">
                            <nav class="navigation">
                                ${navigationHTML}
                            </nav>
                        </div>
                </div>
            </div>`;

document.querySelector('#main_header').innerHTML = HTML;
}
export default renderHeader;