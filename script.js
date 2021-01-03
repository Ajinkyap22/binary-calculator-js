// Get all buttons
const [
  btn0,
  btn1,
  btnClr,
  btnEql,
  btnSum,
  btnSub,
  btnMul,
  btnDiv,
] = document.querySelectorAll(".buttonClass");

// Store all buttons except clear & equal in an array
const btnsArr = [btn0, btn1, btnSum, btnSub, btnMul, btnDiv];

const result = document.querySelector("#res");

//Function to display operations
const action = function (e) {
  const btn = e.target || e.srcElement;

  result.textContent += btn.innerHTML;
};

// Loop over all buttons to display the operations
btnsArr.forEach((btn) => (btn.onclick = action));

// Clear results
btnClr.onclick = () => (result.innerHTML = "");

// Display result of operations
btnEql.onclick = function () {
  // 1. Convert binary operands to decimal
  let expression = result.innerHTML;
  const nums = /(\d+)/g;
  expression = expression.replace(nums, function (match) {
    return parseInt(match, 2);
  });
  result.innerHTML = Math.floor(eval(expression)).toString(2);
};
