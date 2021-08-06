import 'bootstrap';
import fixHeader from './modules/fixHeader';
import openMenu from './modules/openMenu';
import openQuestion from './modules/openQuestion';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  openMenu('.header', '.burger', '.header-nav__list');
  openQuestion('.question-header');
  fixHeader('header');

});