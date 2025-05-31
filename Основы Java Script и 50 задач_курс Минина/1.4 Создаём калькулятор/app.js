// let num = 47;
// let firstName = 'Ivan';

/* какие переменные мы можем создавать
let $ = 'test';
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 12;
let num_ = 15;

let first_name = 'Irina'; // bad но тоже работает но так не принято называть переменные через _
let firstName = 'Irina'; // good
let num47 = 10;
*/

/* Restricted Запрещённые названия переменных
 let 47num = '11'; нельзя с цифры начинать названия переменной
 let my-num = 1; нельзя через - называть переменные
 нельзя использовать различные символы кроме $ и _
*/

// firstName = 'Vedagor';
// const isProgrammer = true; // error Мы не можем менять константу
//alert(firstName);
// console.log('Test', firstName, num, isProgrammer);
// console.log(num + 47);
// console.log(num - 47);
// console.log(num * 47);
// console.log(num / 47);

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);

// let num3 = (num + 10 * 2) / (5 - 1);
// console.log(num3);

// // const fullName = firstName + ' Hors'; // Чтобы бы пробел ставим пробел в строке ' Hors' или можно так:
// const fullName = firstName + ' ' + 'Hors';
// console.log(fullName);

// Практика — создаем калькулятор

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

// console.log(input2.value);
// console.log(resultElement.textContent);
// resultElement.textContent = 42 - 5;

// console.log(typeof sum);

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  //   if (actionSymbol == "+") {
  //     return num1 + num2;
  //   } else if (actionSymbol == "-") {
  //     return num1 - num2;
  //   }
  return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);

  //   if (action == "+") {
  //     const sum = +input1.value + +input2.value;
  //     printResult(sum);
  //   } else if (action == "-") {
  //     const sum = +input1.value - +input2.value;
  //     printResult(sum);
  //   }
};

//   const sum = +input1.value + +input2.value;
//   const subtraction = +input1.value - +input2.value;
//   resultElement.textContent = sum;
//   resultElement.textContent = subtraction;
