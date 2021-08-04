import 'bootstrap';
import openMenu from './modules/openMenu';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  openMenu('.header', '.burger', '.header-nav__list');

});