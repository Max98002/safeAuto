import 'bootstrap';
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

});