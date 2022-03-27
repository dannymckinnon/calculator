const button = document.querySelectorAll('.buttons button');
const display = document.querySelector('.display'); 
const clear = document.querySelector('.clear button');
let displayNum1 = '';
let displayNum2 = '';
let displayOp = '';

// Display character when clicked and store the values;
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(e) {
    let operators = ['+', '-', '*', '/'];
    
    if (button[i].innerHTML === '=') {
      let result = operate(displayOp, displayNum1, displayNum2);
      display.innerHTML = result;
      displayNum1 = result.toString();
      displayNum2 = '';
      displayOp = '';
    };

    if (displayOp.length === 0) {
      if (operators.includes(button[i].innerHTML)) {
        displayOp = button[i].innerHTML;
      } else if (button[i].innerHTML != '=') {
        displayNum1 += button[i].innerHTML;
      }
    } else {
      displayNum2 += button[i].innerHTML;
    };

    if (button[i].innerHTML != '=') {
      display.innerHTML += button[i].innerHTML;
    };
    console.log(displayNum1);
    console.log(displayOp);
    console.log(displayNum2);
  });
};

// clear button
clear.addEventListener('click', function(e) {
  display.innerHTML = '';
  displayNum1 = '';
  displayNum2 = '';
  displayOp = '';
})


// these are all of the math functions
const operate = function(operator, a, b) {
  if (operator === '+') return add(a, b);
  if (operator === '-') return subtract(a, b);
  if (operator === '*') return multiply(a, b);
  if (operator === '/') return divide(a, b);
};


const add = function(a, b) {
  return a + b;
};


const subtract = function(a, b) {
  return a - b;
};


const multiply = function(a, b) {
  return a * b;
};


const divide = function(a, b) {
  return a / b;
};
