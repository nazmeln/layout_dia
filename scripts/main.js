'use strict';

const menuIcon = document.querySelector('.menu-icon');
const menuIconLine = document.querySelector('.menu-icon-line');
const mobNav = document.querySelector('.mob__nav');

menuIcon.addEventListener('click', () => {
  menuIconLine.classList.toggle('menu-icon-active');
  mobNav.classList.toggle('mob__slide');
});

const buttonDescription = document.querySelector('.strategic__button');
const buttonVision = document.querySelector('.vision__button');

buttonVision.addEventListener('click', () => (
  window.location = '#contact'
));

buttonDescription.addEventListener('click', () => (
  window.location = '#description'
));

//  slider
const slider = document.querySelector('.slider');
const photo = document.querySelector('.slider__photo');
const photos = document.querySelectorAll('.slider__photo');
const photoWidth = photo.offsetWidth;

const nextButton = document.querySelector('#photo__button-right');
const previousButton = document.querySelector('#photo__button-left');

let position = 0;

nextButton.addEventListener('click', nextPhoto);
previousButton.addEventListener('click', prevPhoto);

function nextPhoto() {
  if (position <= -((photos.length - 1) * photoWidth)) {
    return;
  }

  position -= photoWidth;

  slider.style.transform = `translateX(${position}px)`;
}

function prevPhoto() {
  if (position >= 0) {
    return;
  }

  position += photoWidth;

  slider.style.transform = `translateX(${position}px)`;
}
