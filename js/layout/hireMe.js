"use strict0";

function renderHireMeSection() {
    let HTML = '';
 
        HTML = `
                <div class="row">
                    <div class="col-12">
                        <div class="heading">
                            <h2 class="section-title">Let's work together!</h2>
                            <p class="section-description">I am available for different projects and jobs. Hire me and get work done.</p>
                            <div class="wrap"></div>
                                <a href="#contacts" class="hire-me">Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>`;
    document.querySelector('#hire_me').innerHTML = HTML;
}
export default renderHireMeSection;