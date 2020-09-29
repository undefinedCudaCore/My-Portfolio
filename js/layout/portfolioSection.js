"use strict";

function renderPortfolio(portfolioData) {
    let HTML = '';
    let portflioHTML = '';

    portflioHTML = `
                    <div class="row">
                        <div class="col-12">
                            <div class="heading">
                                <h2 class="section-title">Portfolio</h2>
                                <p class="section-description">Displaying some of my work</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="portfolio-content"></div>`;
                    
    document.querySelector('#portfolio').innerHTML = portflioHTML;

    if ( !Array.isArray(portfolioData) ) {
        return console.log('ERROR: data is not array..');  
    }
    
    if ( portfolioData.length === 0 ) {
        return console.log('ERROR: array cannot be empty');  
    }

    for (let i = 0; i < portfolioData.length; i++) {
        const portfolio = portfolioData[i];
        HTML += `
                <div class="row">
                    <div class="col-4">
                        <div class="portfolio-item">
                            <a href="${portfolio.link}" target="_blank">
                                <img src="${portfolio.src}" alt="${portfolio.alt}">
                                <div class="portfolio-curtain">
                                    <div class="play-btn">
                                        <div class="radius"></div>
                                        <div class="radius r-2"></div>
                                        <div class="radius r-3"></div>
                                        <div class="radius r-4"></div>
                                        <div class="circle">
                                            <div class="triangle"></div>
                                        </div>
                                    </div>
                                    <p>${portfolio.paragraph}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>`;
    }
    document.querySelector('#portfolio-content').innerHTML = HTML;

}

export default renderPortfolio;