"USE STRICT";

function renderContacts(form, input) {
    let HTML = '';
    let headingHTML = '';

    headingHTML = `
                <div class="row">
                    <div class="col-12">
                        <div class="heading">
                            <h2 class="section-title">Get in touch</h2>
                            <p class="section-description">Feel free to contact me anytime</p>
                        </div>
                    </div>
                </div>`;

    HTML = `
            ${headingHTML}
            <div class="row">
                <div class="col-12" style="text-align: center;">
                    <form name="contactMe" onsubmit="return formValidator()" action="mailto:${form[0].mail}?subject=${form[0].subject}" method="${form[0].method}" enctype="text/plain">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" name="${input[0].name}" placeholder="${input[0].type}">
                            </div>
                            <div class="col-6">
                                <input type="text" name="${input[1].name}" placeholder="${input[1].type}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <textarea id="summernote" name="${input[2].name}" placeholder="${input[2].type}"></textarea>
                            </div>
                        </div>
                            <input class="myButton" type="${input[3].name}" value="${input[3].type}">
                            <input class="myButton" type="${input[4].name}" value="${input[4].type}">
                    </form>
                </div>
            </div>
            <div class="row" id="portfolio-content"></div>`;

    document.querySelector('#contacts').innerHTML = HTML;
}

export default renderContacts;