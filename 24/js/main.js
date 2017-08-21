const nav = document.getElementById('main');
const topOfNav = nav.offsetTop;

function fixedNav() {
  console.log(nav.offsetTop, window.scrollY);
  if(window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');

    // If we don't add this extra padding, then when the nav becomes fixed, the page will reflow and jitter
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  }
  else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixedNav);