const fixHeader = (selectorHeader) => {

  const header = document.querySelector(selectorHeader);

  const changeHeaderScroll = (element) => {

    if (document.documentElement.scrollTop > 50 && element.classList.contains('header__settings')) {
      element.style.cssText = `position: fixed; background: #fff;`;
      document.querySelector('.burger').style.cssText = `position: fixed`;
    } else if (document.documentElement.scrollTop > 50 && !element.classList.contains('header__settings')) {
      element.style.cssText = `position: fixed; background: #031230;`;
      document.querySelector('.burger').style.cssText = `position: fixed`;
    } else {
      header.style.cssText = `position: absolute; background-color: auto;`;
      document.querySelector('.burger').style.cssText = `position: absolute`;
    }

  };

  window.addEventListener('scroll', function () {
    changeHeaderScroll(header);
  });

};

export default fixHeader;