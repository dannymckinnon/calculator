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
    if (!operator) {
      if (num1 === '0') {
        num1 = selection;
        display.innerHTML = selection;
      } else {
        num1 += selection;
        display.innerHTML += selection;
      }
    } else {
      if (num2 === '0') {
        num2 = selection;
        display.innerHTML = selection;
      } else {
        num2 += selection;
        display.innerHTML += selection;
      }
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
  operator = '';
  console.log(num1, operator, num2);
});


const operate = function(operator, a, b) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  if (operator === '/') return a / b;
}
