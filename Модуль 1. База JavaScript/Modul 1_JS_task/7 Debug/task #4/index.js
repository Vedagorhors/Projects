let numbers = [10, 4, 100, -5, 54, 2];
console.log(numbers[0]);
console.log(numbers.length);
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i++) {
  // numbers[i] = numbers[i] ** 3;
  sum += numbers[i] ** 3;
}
console.log(sum); // 1158411
debugger;

// Через цикл for of
sum = 0;
for (let num of numbers) {
  sum += num ** 3;
}
console.log(sum); // 1158411
