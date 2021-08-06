const tabs = (selectorHeader, selectorTabs, selectorContents, activeClass) => {


  const header = document.querySelector(selectorHeader),
    tabs = document.querySelectorAll(selectorTabs),
    contents = document.querySelectorAll(selectorContents);

  const hideTabs = () => {
    try {
      contents.forEach(content => content.style.display = 'none');
      tabs.forEach(tab => tab.classList.remove(activeClass));
    } catch (error) {

    }
  };

  const showTabs = (i = 0) => {
    try {
      contents[i].style.display = '';
      tabs[i].classList.add(activeClass);
    } catch (error) {

    }
  };

  hideTabs();
  showTabs();


  try {
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
  } catch (e) {}



};

export default tabs;