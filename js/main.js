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
import renderAboutMeSection from './layout/aboutSection.js';
import skillSection from './layout/skillSection.js';

// create
// new callScrollFun('#main_header');

// call up function
renderHeader(header);
heroRender();
scrollFun();
headerBackground();
wordSlider();
renderAboutMeSection();
skillSection.renderSkillHeading();
skillSection.renderSkills(skillData, skillSectionIcons);