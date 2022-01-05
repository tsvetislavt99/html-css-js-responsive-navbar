const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryHeader = document.querySelector('.primary-header');
const sticky = primaryHeader.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > sticky) {
    primaryHeader.classList.add('sticky');
  } else {
    primaryHeader.classList.remove('sticky');
  }
};

navToggle.addEventListener('click', () => {
  const isVisible = primaryNav.getAttribute('data-visible');
  if (isVisible === 'false') {
    primaryNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
