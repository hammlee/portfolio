'use strict';

const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link
  if (!link) {
    return;
  }
  scrollIntoViews(link);

  // Make navbar item active
  let matches = document.getElementsByClassName('navbar__menu__item');
  for (let i = 0; i < matches.length; i++) {
    matches[i].classList.remove('active');
  }
  target.classList.add('active');
})

// Handle scrolling when tapping on the "CONTACT ME" button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {
  scrollIntoViews(event.target.dataset.link);
})

function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log()
  home.style.opacity = 1 - window.scrollY / homeHeight
})