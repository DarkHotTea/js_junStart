// Creating of a simple calculator

alert("please, enter the nums and operation!");

// Added value's checking with regular expression - also it's a bit smarter for the rest of validate functions (makings to the nex version)
const cheking = /^\-?[0-9]+([.,][0-9]+)?$/;

// Switch-case removed, added object with functions and operations as keys
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
  "^": (a, b) => a ** b,
};

//! Update - deleted the clone, here is now only a single checking function for the nums
let checkNum = (value) => {
  num = parseFloat(value);
  // Using of regular expression + recursion 
  if (!cheking.test(num)) {
    num = prompt("Enter the right num!!");
    return checkNum(num);
  }
  return num;
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

//! Update - the function relieved from the excess checking
function calculator(firstNum, secondNum, operation) {
  answer = operations[operation](firstNum, secondNum);
  return alert(`Your answer is ${answer}`);
}

//* Start
let firstNum = checkNum(prompt("First num: "));
let secondNum = checkNum(prompt("Second num: "));
let operation = checkOperation(prompt("And the operation... (+ | - | * | / | % | ^)"));

calculator(firstNum, secondNum, operation);