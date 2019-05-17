const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.clear');
const screen = document.querySelector('#screen');
const del = document.querySelector('.delete');
const body = document.body;
// Event Listeners
operators.forEach(operator => 
  operator.addEventListener('click', operatorFunction));

numbers.forEach(number => 
  number.addEventListener('click', numberFunction));

equal.addEventListener('click', equalFunction);
del.addEventListener('click', deleteFunction);
allClear.addEventListener('click', allClearFunction);

body.addEventListener('', keyboardFunction)

// Variables
let expression = "";  
let result ="";

// Getting and appending the digits
function numberFunction(e) {
  if(result != "") {
    expression = result;
    document.querySelector('#expression').innerHTML = expression;
    document.querySelector('#result').innerHTML = "";
  }
  expression += e.target.value;
  document.querySelector('#expression').innerHTML = expression;
}

// Getting and appending the operators
function operatorFunction(e) {
  if(result != "") {
    expression = result;
    document.querySelector('#expression').innerHTML = expression;
    document.querySelector('#result').innerHTML = "";
  }
  expression += e.target.value;
  document.querySelector('#expression').innerHTML = expression;
}

// Appending the result
function equalFunction() {
  result = eval(expression);
  document.querySelector('#result').innerHTML = result;
}

// Delete single operator or number
function deleteFunction() {
  if(result != "") {
    result = result.toString();
    document.querySelector('#result').innerHTML = "";
    expression = result.substring(0,result.length-1)
    document.querySelector('#expression').innerHTML = expression;

  } else {
    expression = expression.substring(0,expression.length-1)
    document.querySelector('#expression').innerHTML = expression;
  }

}

// Delete everything on screen
function allClearFunction() {
  expression = "";
  result ="";
  document.querySelector('#expression').innerHTML = expression;
  document.querySelector('#result').innerHTML = result;
}

// Using keyboard

function keyboardFunction() {
  
}