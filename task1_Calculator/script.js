// Creating of a simple calculator

alert("please, enter the nums and operation!");

const cheking = /^\-?[0-9]+([.,][0-9]+)?$/;

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
  "^": (a, b) => a ** b,
};

//! Update - added the rounding up a number, also the regular expression is moved up, changed the name of variable
let checkNum = (value) => {
  if (!cheking.test(value)) {
    value = prompt("Enter the right num!!");
    return checkNum(value);
  }
  value = parseFloat(value);
  value = Math.round(value * 100) / 100;
  return value;
};

let checkOperation = (operation) => {
  operation = operation.trim();
  if (!operations.hasOwnProperty(operation)) {
    alert("Enter the right operation!!");
    operation = prompt("And the operation... (+ | - | * | / | % | ^)");
    return checkOperation(operation);
  }
  return operation;
}

//! Update - the function is repeatable
function calculator() {
  let firstNum = checkNum(prompt("First num: "));
  let secondNum = checkNum(prompt("Second num: "));
  let operation = checkOperation(prompt("And the operation... (+ | - | * | / | % | ^)"));
  answer = operations[operation](firstNum, secondNum);
  let nextOperation = confirm(`Your answer is ${answer}. Repeat the game?`);
  if (nextOperation) return calculator();
  return;
}


//* Start
calculator();