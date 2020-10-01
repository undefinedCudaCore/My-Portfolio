"use strict";

function renderFooter(footerTop, footerMiddle) {

    let HTML = '';
    let top = '';
    let middle = '';


    HTML = `
            <div class="row outer-footer-section"></div>
            <div class="row bottom-footer-section">
                <div class="col-6">
                    <div class="footer-links">
                    </div>
                </div>
                <div class="col-6">
                    <div class="footer-info">
                        <span>Copyright © 2020 </span><a href="http://thaddeus.lt/">Thaddeus</a><span>, all rights reserved.</span>
                    </div>
                </div>
            </div>`;

    document.querySelector('#footer').innerHTML = HTML;

    for (let i = 0; i < footerTop.length; i++) {
        const footerT = footerTop[i];
        
        top += `
                <div class="col-4 footer-icons">
                    <i class="fa ${footerT.topIcon}" aria-hidden="true"></i>
                    <a href="${footerT.topHref}" target="_blank">${footerT.topInfo}</a>
                </div>`;
    }
    document.querySelector('.outer-footer-section').innerHTML = top;
    
    for (let j = 0; j < footerMiddle.length; j++) {
        const footerB = footerMiddle[j];
        middle += `
                <a href="${footerB.bottomHref}" target="_blank">
                    <i class="fa ${footerB.bottomIcon}" aria-hidden="true"></i>
                </a>`;
    }
    
    document.querySelector('.footer-links').innerHTML = middle;
}
export default renderFooter;