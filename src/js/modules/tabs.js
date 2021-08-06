const tabs = (selectorHeader, selectorTabs, selectorContents, activeClass) => {
  const header = document.querySelector(selectorHeader),
    tabs = document.querySelectorAll(selectorTabs),
    contents = document.querySelectorAll(selectorContents);

  const hideTabs = () => {
    contents.forEach(content => content.style.display = 'none');
    tabs.forEach(tab => tab.classList.remove(activeClass));
  };

  const showTabs = (i = 0) => {
    contents[i].style.display = '';
    tabs[i].classList.add(activeClass);
  };

  hideTabs();
  showTabs();




  header.addEventListener('click', (e) => {
    let target = e.target;


    if (target && target.classList.contains(selectorTabs.substring(1))) {
      tabs.forEach((tab, i) => {
        if (target == tab) {
          hideTabs();
          showTabs(i);
        }
      });

    }

  });

};

export default tabs;