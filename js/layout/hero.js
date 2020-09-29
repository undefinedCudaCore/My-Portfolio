"use strict";

function heroRender() {
    let HTML = '';

    HTML = `<div class="row" id="hero-row">
                <div class="my-name">
                    <h1>
                        My name is Thad<span>deus</span>.
                    </h1>
                </div>
                <div class="header-caption" id="page-top">
                    <!-- Headline start-->
                    <h3 class="cd-headline clip is-full-width" readonly>
                        <span>I'm </span>
                        <span class="cd-words-wrapper" style="width: 178px;">
                        <b class="is-visible">Developer.</b>
                        <b class="is-hidden"> Designer.</b>
                        <b class="is-hidden"> Freelancer.</b>
                        </span>
                    </h3>
                    <!-- Headline end -->
                </div>
                <a class="icon-mouse" href="#about_me">
                    <div class="wheel"></div>
                </a>
            </div>`;
    document.querySelector('#hero_row').innerHTML = HTML;
}
export default heroRender;