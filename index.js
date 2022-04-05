const display = document.querySelector('.display'); 

let num1 = '0';
let operator = '';
let num2 = '0';


// When a number button is clicked, store the number
const numbers = document.querySelectorAll('.numbers');

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => {
    storeNum(numbers[i].innerHTML);
  });
}

// Run appropriate function on keypress
document.onkeydown = e => {
  if (!isNaN(e.key)) {
    storeNum(e.key);
  } else if (e.key === 'Enter') {
    result;
  } else if (e.key === '.') {
    decimalSelect();
  }
}

function storeNum(num) {
  let selection = num;
      breakme: if (!operator) {
        if (num1 === '0') {
          num1 = selection;
          display.innerHTML = selection;
        } else if (num1.length >= 9) {
          break breakme;
        } else {
          num1 += selection;
          display.innerHTML += selection;
        }
      } else {
        breakme2: if (num2 === '0') {
          num2 = selection;
          display.innerHTML = selection;
        } else if (num2.length >= 9) {
          break breakme2;
        } else {
          num2 += selection;
          display.innerHTML += selection;
        }
      }
      console.log(num1, operator, num2);
}


// When an operator button is clicked, store the operator
const operators = document.querySelectorAll('.operators');

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', () => {
    let selection = operators[i].innerHTML;
    if (Number(num1) > 0 && Number(num2) > 0) {
      let result = operate(operator, Number(num1), Number(num2));
      if (result.toString().length > 9) result = result.toExponential(3).toString();
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

equals.addEventListener('click', () => result());

function result() {
  if (operator) {
    let result = operate(operator, Number(num1), Number(num2));
    if (result % 1 !== 0) result = +result.toFixed(2);
    if (result.toString().length > 9) result = result.toExponential(3).toString();
    (result === NaN) ? display.innerHTML = NaN : display.innerHTML = result.toString();
    num1 = result.toString();
    num2 = '0';
    operator = '';
    display.innerHTML = result.toString();
    console.log(num1, operator, num2);
  }
}


// decimal button
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () => decimalSelect());

function decimalSelect() {
  if (display.innerHTML.length < 8) {
    if ( !(display.innerHTML.includes('.')) ) {
      display.innerHTML += '.';
      (operator) ? (num2 += '.') : (num1 += '.');
    }
  }  
}


// clear button
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
  display.innerHTML = 0;
  num1 = '0';
  num2 = '0';
  operator = '';
  console.log(num1, operator, num2);
});


// +/- button
const plusminus = document.querySelector('.plusminus');

plusminus.addEventListener('click', () => {
  number = +display.innerHTML;
  if (number > 0) {
    display.innerHTML = -Math.abs(number).toString();
    if (+num1 === number) {
      num1 = display.innerHTML;
      console.log(num1, operator, num2);
    } else if (+num2 === number) {
      num2 = display.innerHTML;
      console.log(num1, operator, num2);
    }
  } 
  if (number < 0) {
    display.innerHTML = +Math.abs(number).toString();
    if (+num1 === number) {
      num1 = display.innerHTML;
      console.log(num1, operator, num2);
    } else if (+num2 === number) {
      num2 = display.innerHTML;
      console.log(num1, operator, num2);
    }
  }
});

// percent button
const percent = document.querySelector('.percent');

percent.addEventListener('click', () => {
  if (num1 === display.innerHTML && +num1 != 0) {
    num1 = (+num1 / 100).toFixed(3).toString();
    display.innerHTML = num1;
    console.log(num1, operator, num2);
  } else if (num2 === display.innerHTML && num2 != 0) {
    num2 = (+num2 / 100).toFixed(3).toString();
    display.innerHTML = num2;
    console.log(num1, operator, num2);
  }
});


const operate = function(operator, a, b) {
  if (b === 0 && operator === '/') return NaN;
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  if (operator === '/') return a / b;
}
