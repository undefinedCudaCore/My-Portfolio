"use strict";

function renderSkillHeading() {
    let skillsHTML = '';

    skillsHTML += `
                    <div class="row">
                        <div class="col-12">
                            <div class="heading">
                                <h2 class="section-title">My Skills</h2>
                                <p class="section-description">Skills i gained</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="skill-data"></div>`;
    document.querySelector('#skills').innerHTML = skillsHTML;
}

function renderSkills(skillData, skillIcon) {
    let HTML = '';
    
    if ( !Array.isArray(skillData) || !Array.isArray(skillIcon) ) {
        return console.log('ERROR: data is not array..');  
    }
    
    if ( skillData.length === 0 || skillIcon.length === 0) {
        return console.log('ERROR: array cannot be empty');  
    }

    for (let i = 0; i < skillData.length; i++) {
        const skill = skillData[i];
        const icons = skillIcon[i];
        HTML += `
                <div class="col-3">
                    <div class="skill-container">
                        <div class="flex-wrapper">
                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart show-circle">
                                    <path class="circle-bg"
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                    stroke-dasharray="${skill.percent}, 100"
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">${skill.percent}%</text>
                                </svg>
                            </div>
                        </div>
                        <div class="skill-html">
                            <div class="html-svg">
                                ${icons.svg}
                            </div>
                            <span class="html-span">
                                ${skill.type}
                            </span>
                        </div>
                    </div>
                </div>`;
    }
    document.querySelector('#skill-data').innerHTML = HTML;
}
export default {renderSkillHeading, renderSkills};