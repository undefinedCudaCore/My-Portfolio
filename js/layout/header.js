"use strict";

function renderHeader(headerList) {
    let HTML = '';
    let profileHTML = '';
    let navigationHTML = '';
    let sideMenuHTML = '';

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
                        <a href="#"><img class="main-avatar" src="./img/profile-avatar.jpg" alt="Profile avatar"></a>
                        <span class="tad">Tad Kuncevitz</span>
                        <p class="available">Available for work</p>
                    </div>`;

    sideMenuHTML = `
                    <div class="side-menu cog">
                        <div class="row">
                            <div class="close-side-menu">
                                <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="side-menu-components">
                                <div class="profile">
                                    <a href="#"><img src="./img/profile-avatar.jpg" alt="Profile avatar"></a>
                                    <span>Tad Kuncevitz</span>
                                    <p>Available for work</p>
                                </div>
                                <div class="navigation">
                                    ${navigationHTML}
                                </div>
                            </div>
                        </div>
                    </div>`;
    
    HTML = `
            ${sideMenuHTML}
            <div class="container">
                <i class="fa fa-bars" aria-hidden="true"></i>
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