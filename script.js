"use strict";

// VARIABLES

// Store all buttons except clear & equal in an array
const btnsArr = document.querySelectorAll(".buttonClass");

const result = document.querySelector("#res");

const [btnClr, btnDel, btnEql] = document.querySelectorAll(".displayClass");

// EVENT LISTNERS

// Loop over all buttons to display the operations
btnsArr.forEach((btn) => (btn.onclick = action));

// Clear results
btnClr.addEventListener("click", clear);

// Display result of operations
btnEql.addEventListener("click", evaluate);

// Delete last value from the input
btnDel.addEventListener("click", deleteNum);

// Take input from keyboard
window.addEventListener("keydown", keyboardSupport);

// FUNCTIONS

// function to display operations
function action(e) {
  const btn = e.target || e.srcElement;

  // Limit the input size
  if (result.textContent.length >= 15) return;

  result.textContent += btn.textContent;
}

// function to evaluate expressions
function evaluate() {
  let expression = result.textContent;
  const nums = /(\d+)/g;

  expression = expression.replace(nums, function (match) {
    return parseInt(match, 2);
  });

  result.textContent = Math.floor(eval(expression)).toString(2);
}

// function to delete last entered input
function deleteNum() {
  result.textContent = result.textContent.slice(0, -1);
}

// clear calc screen
function clear() {
  result.textContent = "0";
}

function keyboardSupport(e) {
  // if 0 or 1 is pressed or an operator is pressed
  if ((e.key >= 0 && e.key <= 1) || "+-/*".includes(e.key)) {
    result.textContent += e.key;
  }
  // if = or enter is pressed
  if (e.key === "=" || e.key === "Enter") {
    evaluate();
  }
  // if backspace is pressed
  if (e.key === "Backspace") {
    deleteNum();
  }
  // if escape is pressed then clear all
  if (e.key === "Escape") {
    clear();
  }
}
