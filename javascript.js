const headerEl = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if(window.scrollY > 75) {
    headerEl.classList.add('header-scrolled')
  } else if (window.scrollY <= 75) {
    headerEl.classList.remove('header-scrolled');
  }
});