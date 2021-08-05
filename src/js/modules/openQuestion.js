const openQuestion = (selectorHeader) => {
  const headers = document.querySelectorAll(selectorHeader);


  headers.forEach((header) => {
    header.addEventListener('click', (e) => {
      let target = e.target;
      let nodes = target.closest(selectorHeader).childNodes;

      if (target && target.closest(selectorHeader)) {
        target.closest(selectorHeader).nextElementSibling.classList.toggle('question-footer_active');
        for(let node of nodes) {
          if (node.tagName === 'BUTTON') {
            node.classList.toggle('question-header__btn_active');
          }
        }
      }

    });
  });



};

export default openQuestion;