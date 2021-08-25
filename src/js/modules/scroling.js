const scrolling = (selectorBtn) => {
  const btnUp = document.querySelector(selectorBtn),
    links = document.querySelectorAll("[href^='#']");
  let speed = 0.1;



  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1600) {
      try {
        btnUp.style.opacity = '1';
      } catch (er) {}
    } else {
      try {
        btnUp.style.opacity = '0';
      } catch (er) {}
    }
  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault();

      let widthTop = Math.round(document.documentElement.scrollTop || document.body.scrollTop),
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }

      }

    });
  }
};
export default scrolling;