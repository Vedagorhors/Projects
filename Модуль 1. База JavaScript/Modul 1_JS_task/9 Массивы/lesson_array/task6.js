/* Вам дан массив чисел:

const numbers = [10, 4, 100, -5, 54, 2];
Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат:
 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

Решите данную задачу 4-мя способами:

Через цикл for
Через цикл for...of
Через метод forEach()
Через метод reduce()
Для данного массива numbers сумма кубов должна равняться 1158411.  */

// моё решение
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  sum += numbers[i] ** 3;
}
console.log("sum", sum); // 1158411

const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for (let number of numbers) {
  sum += number ** 3;
}
console.log("sum", sum); // 1158411

const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
const newNumbers = numbers.forEach((number) => {
  sum += number ** 3;
});
console.log("sum", sum); // 1158411

const numbers = [10, 4, 100, -5, 54, 2];
const newNumbers = numbers.reduce((total, number) => {
  return (total += number ** 3);
}, 0);
console.log("newNumbers", newNumbers); // 1158411

// решение с курса
const numbers = [10, 4, 100, -5, 54, 2];

// 1. for

let sum1 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum1 += numbers[i] ** 3;
}
console.log("sum1", sum1);

// 2. for of

let sum2 = 0;
for (const number of numbers) {
  sum2 += number ** 3;
}
console.log("sum2", sum2);

// 3. forEach

let sum3 = 0;
numbers.forEach((number) => {
  sum3 += number ** 3;
});
console.log("sum3", sum3);

// 4. reduce

const sum4 = numbers.reduce((acc, number) => {
  return acc + number ** 3;
}, 0);
console.log("sum4", sum4);
