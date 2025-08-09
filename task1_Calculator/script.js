// Creating of a simple calculator

// alert("please, enter the nums and operation!");

let firstNum = "-1223343333243433.1334234-4";
let cheking = /^\-?[0-9]*\.?[0-9]*$/;

console.log(cheking.test(firstNum));


/* let checkFirstNum = (firstNum) => {
  firstNum = Number(prompt("First num:"));
  if (!isNaN(firstNum)) {
    alert("Enter the num!!");
    return checkFirstNum();
  }
};
let secondNum = Number(prompt("Second num:"));
let operation = prompt("And the operation...");
let answer;

function calc(operation, firstNum, secondNum) {
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

  return answer == undefined ? alert("💩") : alert(`Your answer is ${answer}`);
}
 */