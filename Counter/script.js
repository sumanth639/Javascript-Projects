"use strict";

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
let count = 0;
plus.addEventListener("click", function () {
  count++;
  number.textContent = count;
});
minus.addEventListener("click", function () {
  if (count > 0) {
    count--;
    number.textContent = count;
  }
});
