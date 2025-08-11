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

// The checking functions for only two numbers. The future version will discard this "clumsiness" like count restriction
let checkFirstNum = (firstNum) => {
  firstNum = parseFloat(firstNum);
  console.log(firstNum);
  
  // Using of regular expression + recursion 
  if (!cheking.test(firstNum)) {
    alert("Enter the right num!!");
    firstNum = prompt("First num: ");
    return checkFirstNum(firstNum);
  }
  return firstNum;
};

let checkSecondNum = (secondNum) => {
  secondNum = parseFloat(secondNum);
  if (!cheking.test(secondNum)) {
    alert("Enter the right num!!");
    secondNum = prompt("Second num: ");
    return checkSecondNum(secondNum);
  }
  return secondNum;
};


let checkOperation = (operation) => {
  operation = operation.trim();
  if (!operations.hasOwnProperty(operation)) {
    alert("Enter the right operation!!");
    operation = prompt("And the operation... (+ | - | * | / | % | ^)");
    return checkOperation();
  }
  return operation;
}

// Final function of counting
function calculator(firstNum, secondNum, operation) {
  let answer = operations[operation](firstNum, secondNum);
  return answer == undefined ? alert("💩") : alert(`Your answer is ${answer}`);
}

//! Start
let firstNum = checkFirstNum(prompt("First num: "));
let secondNum = checkSecondNum(prompt("Second num: "));
let operation = checkOperation(prompt("And the operation... (+ | - | * | / | % | ^)"));

calculator(firstNum, secondNum, operation);