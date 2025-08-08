// Creating of a simple calculator

alert("please, enter the nums and operation!");

let firstNum = Number(prompt("First num:"));
let secondNum = Number(prompt("Second num:"));
let operation = prompt("And the operation...");
let answer;

switch (operation) {
  case "+":
    answer = firstNum + secondNum;
    break;
  case "-":
    answer = firstNum - secondNum;
    break;
  case "*":
    answer = firstNum * secondNum;
    break;
  case "/":
    answer = firstNum / secondNum;
    break;
  case "%":
    answer = firstNum % secondNum;
    break;
  default:
    alert("Please, don't type a shit");
    break;
}

answer == undefined ? alert("💩") : alert(`Your answer is ${answer}`)
