const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.querySelector('.display'); 
const clear = document.querySelector('.clear');

let num1 = '0';
let operator = '';
let num2 = '0';



// Add event listener to number buttons and store what button was pressed
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => {
    let selection = numbers[i].innerHTML;
    if (num1 === '0') {
      num1 = selection;
      display.innerHTML = selection;
    } else {
      num1 += selection;
      display.innerHTML += selection;
    }
    console.log(num1, operator, num2);
  });
} 

// Add event listener to operator buttons and store what button was pressed
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', () => {
    let selection = operators[i].innerHTML;
    operator = selection;
    console.log(num1, operator, num2);
  });
} 





// clear button
clear.addEventListener('click', () => {
  display.innerHTML = 0;
  num1 = '0';
  num2 = '0';
  operator = '0';
  console.log(num1);
  console.log(num2);
  console.log(operator);
});


// these are all of the math functions
const operate = function(operator, a, b) {
  if (operator === '+') return add(a, b);
  if (operator === '-') return subtract(a, b);
  if (operator === '*') return multiply(a, b);
  if (operator === '/') return divide(a, b);
}


const add = function(a, b) {
  return a + b;
}


const subtract = function(a, b) {
  return a - b;
}


const multiply = function(a, b) {
  return a * b;
}


const divide = function(a, b) {
  return a / b;
}
