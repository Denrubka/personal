import autosize from "./scripts/test";
import burgerHandler from "./scripts/burger";
import dropdownHandler from "./scripts/dropdown";
import inputFocus from "./scripts/inputFocus";
import modal from "./scripts/modal";
import preloader from "./scripts/preloader";

const textarea = document.querySelector('textarea')
const form = document.querySelector('.history-form');
const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

autosize(textarea);

textarea.addEventListener('focus', () => {
  if(textarea.value) {
    form.classList.add('history-form_focus')
  }
})
textarea.addEventListener('focusout', () => {
  if(!textarea.value) {
    if(form.classList.contains('history-form_focus')) {
      form.classList.remove('history-form_focus')
    }
  }
})
textarea.addEventListener('input', () => {
  if(textarea.value) {
    form.classList.add('history-form_focus')
  } else {
    if(form.classList.contains('history-form_focus')) {
      form.classList.remove('history-form_focus')
    }
  }
})

const swiper = new Swiper(".history-slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  slideClass: 'history-cards__item',
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 13,
    },
    1100: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }
});

burgerHandler(burger, sidebar);
dropdownHandler(dropdownBtns);
inputFocus('.form-input');
modal('.btn-to-modal');