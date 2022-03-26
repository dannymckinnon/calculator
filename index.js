const button = document.querySelectorAll('.buttons button');
const display = document.querySelector('.display'); 
const clear = document.querySelector('.clear button');
let displayNum;
let displayOp;

// Display character when clicked and store the values;
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(e) {
    let operators = ['+', '-', '*', '/'];
    if (operators.includes(button[i].innerHTML)) {
      displayOp = button[i].innerHTML;
    } else {
      displayNum = button[i].innerHTML;
    }
    display.innerHTML += button[i].innerHTML;
  });
};

// clear button
clear.addEventListener('click', function(e) {
  display.innerHTML = '';
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
