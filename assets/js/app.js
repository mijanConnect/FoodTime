// sticky navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// navbar
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
})
close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
})