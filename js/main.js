"use strict";
// imports
import header from './data/headerData.js';
import renderHeader from './layout/header.js';
import scrollFun from './layout/scroll.js';
import headerBackground from './layout/showSideMenu.js';
import wordSlider from './layout/wordSlider.js';
import heroRender from './layout/hero.js';

// create
// new callScrollFun('#main_header');

// call up function
renderHeader(header);
heroRender();
scrollFun();
headerBackground();
wordSlider();