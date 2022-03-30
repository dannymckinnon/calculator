const button = document.querySelectorAll('button');
const display = document.querySelector('.display'); 
const clear = document.querySelector('.clear');

let num1 = '';
let num2 = '';
let operator = '';

// Add event listener to every button
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(e) {
    
    if (button[i].className === 'equals') {
      let result = operate(operator, num1, num2);
      display.innerHTML = result;
      num1 = result;
      num2 = '';
      operator = '';
    };

    if (operator.length === 0) {
      if (button[i].className === 'operators') {
        operator = button[i].innerHTML;
      } else if (button[i].className != 'equals') {
        num1 = button[i].innerHTML;
      }
    } else {
      num2 = button[i].innerHTML;
    };

    if (button[i].className != 'equals') {
      display.innerHTML = button[i].innerHTML;
    };
    console.log(num1);
    console.log(operator);
    console.log(num2);
  });
};

// clear button
clear.addEventListener('click', function(e) {
  display.innerHTML = 0;
  num1 = '';
  num2 = '';
  operator = '';
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
