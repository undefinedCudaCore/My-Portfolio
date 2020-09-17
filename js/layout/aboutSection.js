"use strict";

import aboutMe from '../data/aboutMeData.js';

function renderAboutMeSection(){
    let HTML = '';

    HTML = `
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        ${aboutMe[6].heading}
                        ${aboutMe[6].paragraph}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="about-me" >
                        ${aboutMe[7].image}
                    </div>
                </div>
                <div class="col-8 content-column">
                    <div class="content">
                        ${aboutMe[7].subtitle}
                        <h6 class="content-title">
                            ${aboutMe[4].about}
                        </h6>
                        <div class="content-description">
                            ${aboutMe[4].paragraph}
                        </div>
                        <div class="content-info">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row-info">
                                        ${aboutMe[0].name}
                                        ${aboutMe[0].paragraph}
                                    </div>
                                    <div class="row-info">
                                        ${aboutMe[1].name}
                                        ${aboutMe[1].paragraph}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="row-info">
                                        ${aboutMe[2].name}
                                        ${aboutMe[2].paragraph}
                                    </div>
                                    <div class="row-info">
                                        ${aboutMe[3].name}
                                        ${aboutMe[3].paragraph}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-btns">
                        ${aboutMe[5].cv}
                        ${aboutMe[5].work}
                    </div>
                </div>
            </div>
        `;
    document.querySelector('#about_me').innerHTML = HTML;
}
    export default renderAboutMeSection;