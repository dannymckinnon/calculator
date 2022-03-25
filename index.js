// let a = +prompt("enter a number");
// let b = +prompt("enter another number");


const operate = function(operator, a, b) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
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

// console.log(operate("+", a, b));
