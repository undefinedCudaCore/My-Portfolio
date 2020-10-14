"use strict";
// imports
import header from './data/headerData.js';
import skillSectionIcons from './data/skillSvgIcons.js';
import skillData from './data/skillData.js';
import renderHeader from './layout/header.js';
import scrollFun from './layout/scroll.js';
import headerBackground from './layout/eListeners.js';
import wordSlider from './layout/wordSlider.js';
import heroRender from './layout/hero.js';
import scrollFunction from './layout/backToTopBtn.js';
import renderAboutMeSection from './layout/aboutSection.js';
import skillSection from './layout/skillSection.js';
import svgIcons from './layout/icons.js';
import renderHireMeSection from './layout/hireMe.js';
import portfolio from './data/portfolioData.js';
import renderPortfolio from './layout/portfolioSection.js';
import { footerMiddle } from './data/footerData.js';
import { footerTop } from './data/footerData.js';
import renderFooter from './layout/footerSection.js';
import { contactFormInfo } from './data/contanctData.js';
import { contactInputInfo } from './data/contanctData.js';
import renderContacts from './layout/contactSection.js';

// create

// call up function
renderHeader(header);
heroRender();
scrollFun();
headerBackground();
wordSlider();
scrollFunction();
renderAboutMeSection();
skillSection.renderSkillHeading();
skillSection.renderSkills(skillData, skillSectionIcons);
svgIcons(skillSectionIcons);
renderHireMeSection();
renderPortfolio(portfolio);
renderFooter(footerTop, footerMiddle);
renderContacts(contactFormInfo, contactInputInfo);