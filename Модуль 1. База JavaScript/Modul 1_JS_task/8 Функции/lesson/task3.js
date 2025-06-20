/* Вам необходимо создать функцию getDivisorsCount(), которая будет высчитывать количество делителей для переданного числа.
 Если он (видимо: оно) не передан (видимо: не передано) или значение было не числом, то из функции необходимо вернуть NaN.

Также если number меньше нуля либо является не целым (можно проверить при помощи функции Number.isInteger(number)), 
то выводите в модальное окно при помощи alert() сообщение «number должен быть целым числом и больше нуля!».

Примеры:

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
 */

// мое правильное решение
// const getDivisorsCount = (number) => {
//   if (typeof number !== "number" || isNaN(number)) return NaN;
//   if (number < 0 || !Number.isInteger(number)) {
//     alert(`${number} должен быть целым числом и больше нуля!`);
//     return NaN;
//   }

//   let remainderFromDivision; // переменная  - остаток от деления
//   let numberOfDivisors = 0; // количество делителей, начальное значение равно 0

//   for (let i = 1; i <= number; i++) {
//     remainderFromDivision = number % i;
//     if (remainderFromDivision == 0) {
//       numberOfDivisors++;
//     }
//   }

//   return numberOfDivisors;
// };
// console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
// console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
// console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
// console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)

// решение с оптимизацией

// const getDivisorsCount = (number) => {
//   if (typeof number !== "number" || isNaN(number)) return NaN;
//   if (number < 0 || !Number.isInteger(number)) {
//     alert(`${number} должен быть целым числом и больше нуля!`);
//     return NaN;
//   }

//   let numberOfDivisors = 0; // количество делителей, начальное значение равно 0

//   for (let i = 1; i <= number; i++) {
//     const remainderFromDivision = number % i; // переменная  - остаток от деления
//     if (remainderFromDivision === 0) {
//       numberOfDivisors++;
//     }
//   }

//   return numberOfDivisors;
// };
// console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
// console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
// console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
// console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)

// ещё лучше, убрал переменную remainderFromDivision
const getDivisorsCount = (number) => {
  if (typeof number !== "number" || isNaN(number)) return NaN;
  if (number < 0 || !Number.isInteger(number)) {
    alert(`${number} должен быть целым числом и больше нуля!`);
    return NaN;
  }

  let numberOfDivisors = 0; // количество делителей, начальное значение равно 0

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      numberOfDivisors++;
    }
  }

  return numberOfDivisors;
};
console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)

// Решение от Result

function getDivisors(number) {
  if (typeof number !== "number") {
    return NaN;
  }

  if (!Number.isInteger(number) || number < 0) {
    alert("number должен быть целым числом и больше нуля!");
    return;
  }

  let counter = 0;
  for (let i = number; i > 0; i--) {
    if (number % i === 0) {
      counter++;
    }
  }

  return counter;
}

const result = getDivisors(10);
console.log("result", result);
