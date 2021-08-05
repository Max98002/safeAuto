const openMenu = (selectorMenu, selectorBtn, selectorListItem) => {
  const btn = document.querySelector(selectorBtn),
    menu = document.querySelector(selectorMenu),
    listItem = document.querySelector(selectorListItem)
  
  btn.addEventListener('click', () => {
    menu.classList.toggle('header_active');
    listItem.classList.toggle('header-nav__list_active');
    if (menu.classList.contains('header_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

};

export default openMenu;