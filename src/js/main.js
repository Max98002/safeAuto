import 'bootstrap';
import MobileDetect from 'mobile-detect';
import fixHeader from './modules/fixHeader';
import openMenu from './modules/openMenu';
import openQuestion from './modules/openQuestion';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let md = new MobileDetect(window.navigator.userAgent);

  console.log(md.mobile());

  const btnPosition = document.querySelector('.button_position');

  if (md.mobile() === 'iPhone') {
    btnPosition.classList.toggle('button_position_iPhone');
  } else {
    console.log('not iPhone');
  }

  openMenu('.header', '.burger', '.header-nav__list');
  openQuestion('.question-header');
  fixHeader('header');

  tabs('.tabs__header', '.tabs-header__btn', '.tabs-content__item', 'tabs-header__btn_active');



});