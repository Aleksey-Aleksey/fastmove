import './styles/style.scss';

"use strict"

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});