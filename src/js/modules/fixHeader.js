const fixHeader = (selectorHeader) => {

  const header = document.querySelector(selectorHeader);

  const changeHeaderScroll = (element) => {

    if (document.documentElement.scrollTop > 50 && element.classList.contains('header__settings')) {
      element.style.cssText = `position: fixed; background: #fff;`;
    } else if (document.documentElement.scrollTop > 50 && !element.classList.contains('header__settings')) {
      element.style.cssText = `position: fixed; background: #031230;`;
    } else {
      header.style.cssText = `position: absolute; background-color: auto;`;
    }

  };

  window.addEventListener('scroll', function () {
    changeHeaderScroll(header);
  });

};

export default fixHeader;