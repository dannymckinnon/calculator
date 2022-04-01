const display = document.querySelector('.display'); 

let num1 = '0';
let operator = '';
let num2 = '0';


// When a number button is clicked, store the number
const numbers = document.querySelectorAll('.numbers');

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


// When an operator button is clicked, store the operator
const operators = document.querySelectorAll('.operators');

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', () => {
    let selection = operators[i].innerHTML;
    
    if (+num1 > 0 && +num2 > 0) {
      let result = operate(operator, +num1, +num2);
      num1 = result.toString();
      num2 = '0';
      operator = '';
      display.innerHTML = result.toString();
    }  
    operator = selection;
    
    console.log(num1, operator, num2);
  });
} 


// When the equals button is clicked, evaluate the equation 
const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
  if (operator) {
    let result = operate(operator, +num1, +num2);
    (result === NaN) ? display.innerHTML = NaN : display.innerHTML = result.toString();
    num1 = '0'
    num2 = '0';
    operator = '';
    display.innerHTML = result.toString();
    console.log(num1, operator, num2);
  }
});


// decimal button
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () => {
  if ( !(display.innerHTML.includes('.')) ) {
    display.innerHTML += '.';
    (operator) ? (num2 += '.') : (num1 += '.');
  }
});


// clear button
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
  display.innerHTML = 0;
  num1 = '0';
  num2 = '0';
  operator = '';
  console.log(num1, operator, num2);
});


const operate = function(operator, a, b) {
  if (b === 0 && operator === '/') return NaN;
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  if (operator === '/') return a / b;
}
