import modal from "./scripts/modal";
import burgerHandler from "./scripts/burger";
import dropdownHandler from "./scripts/dropdown";
import inputFocus from "./scripts/inputFocus";

const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

modal('.btn-to-modal');
burgerHandler(burger, sidebar);
dropdownHandler(dropdownBtns);
inputFocus('.form-input');