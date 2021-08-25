const closeMenuAfterClick = (triggersItem, triggerMenu, triggerBtn) => {
  const items = document.querySelectorAll(triggersItem),
    menu = document.querySelector(triggerMenu),
    btn = document.querySelector(triggerBtn);

  items.forEach(item => {
    item.addEventListener('click', function (e) {
      try {
        menu.classList.remove('header_active');
        btn.classList.remove('burger_active');
      } catch (er) {}
    });
  });

};

export default closeMenuAfterClick;