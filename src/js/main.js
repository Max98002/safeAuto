import 'bootstrap';
import closeMenuAfterClick from './modules/closeMenuAfterClick';
// import MobileDetect from 'mobile-detect';
import fixHeader from './modules/fixHeader';
import openMenu from './modules/openMenu';
import openQuestion from './modules/openQuestion';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  openMenu('.header', '.burger', '.header-nav__list');
  openQuestion('.question-header');
  fixHeader('header');

  tabs('.tabs__header', '.tabs-header__btn', '.tabs-content__item', 'tabs-header__btn_active');
  closeMenuAfterClick('.header-nav__item > a', '.header', '.burger');

  // try {
  //   let md = new MobileDetect(window.navigator.userAgent);
  //   const btnPosition = document.querySelector('.button_position');

  //   if (md.mobile() === 'iPhone') {
  //     btnPosition.classList.toggle('button_position_iPhone');
  //   } else {
  //     console.log('not iPhone');
  //   }
  // } catch (error) {

  // }

});