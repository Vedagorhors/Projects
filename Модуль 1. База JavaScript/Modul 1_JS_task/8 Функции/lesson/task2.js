/* Необходимо создать функцию getSumOfNumbers(). Она будет считать сумму от 0 до переданного числа. 
Выберите любой из 3 типов при создании функции.

getSumOfNumbers() принимает в себя 2 параметра: number и type.

Параметр number — это число, до которого будет считаться сумма. То есть, если было передано число 10,
 то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + ... + 10). Если параметр не передан или значение
  было не числом, то из функции необходимо вернуть NaN.

Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть одним из 3-х значений: "odd", "even" и "".
 Если type равняется "odd", то в сумму должны входить только нечетные числа, "even" - четные числа, пустая строка "" - все числа.
  По умолчанию параметр type должен быть равен "odd".

Функция getSumOfNumbers() должна возвращать итоговую сумму с помощью return.

Возможные результаты функции getSumOfNumbers():

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55 */

// Пырвый мой вариант решения когда шаг цикла равен 1 и проходимся проверяем каждое число диапазона, тогда if нужен
// Работает верно

// function getSumOfNumbers(number, type = "odd") {
//   if (typeof number !== "number" || isNaN(number)) return NaN;

//   let sum = 0;
//   if (type === "even") {
//     for (let i = 2; i <= number; i++) {
//       if (i % 2 === 0) {
//         sum += i;
//       }
//     }
//   } else if (type === "odd") {
//     for (let i = 1; i <= number; i++) {
//       if (i % 2 !== 0) {
//         sum += i;
//       }
//     }
//   } else if (type === "") {
//     for (let i = 0; i <= number; i++) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSumOfNumbers("f", "odd")); // NaN
// console.log(getSumOfNumbers("", "odd")); // NaN
// console.log(getSumOfNumbers(10, "even")); // 30
// console.log(getSumOfNumbers(10, "odd")); // 25
// console.log(getSumOfNumbers(10, "")); // 55

// Второй мой вариант решения когда шаг цикла равен 2 и проходимся через одно число диапазона, тогда if не нужен
// Работает верно

// function getSumOfNumbers(number, type = "odd") {
//   if (typeof number !== "number" || isNaN(number)) return NaN;

//   let sum = 0;
//   if (type === "even") {
//     for (let i = 2; i <= number; i += 2) {
//       sum += i;
//     }
//   } else if (type === "odd") {
//     for (let i = 1; i <= number; i += 2) {
//       sum += i;
//     }
//   } else if (type === "") {
//     for (let i = 0; i <= number; i++) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSumOfNumbers("f", "odd")); // NaN
// console.log(getSumOfNumbers("", "odd")); // NaN
// console.log(getSumOfNumbers(10, "even")); // 30
// console.log(getSumOfNumbers(10, "odd")); // 25
// console.log(getSumOfNumbers(10, "")); // 55

// Третий вариант Никиты
// Работает верно
// typeof возвращает строку, указывающую тип значения. Если вернётся не строка number (то есть введут не число и тип данных будет не number,
// соответственно typeof вернет не строку number, а другую строку), тогда функция вернёт значение NaN
// typeof определяет переменную тип данных переменной number и возвращает строку. Когда я передаю в функцию в параметр number число, например, 10, то
// typeof возвращает строку типа данных 'number', затем эта строка сравнивается со строкой из условия "number" и они будут равны, поэтому
// мы ставим !== (не равно), то есть переворачиваем, чтобы результат был folse, так как мы при true должны выдавать в функцию NaN (не число) и
// тогда в этом случае число не выведется в функцию как NaN, а только выведется остальное, что не соответствует числу
/* В условии `typeof number !== "number"` мы сравниваем строку, которую вернул `typeof number`, со строкой `"number"`.
3. Важно: строка `"number"` - это фиксированное значение, которое возвращает оператор `typeof` для числовых данных.
 Это не произвольная строка. условие `typeof number !== "number"` проверяет, что тип переменной `number` не является числовым.
 */
// typeof всегда возвращает полное название типа на английском языке
// Для чисел он возвращает строго строку "number" (не "n", не "num", не "число")

const getSumOfNumbers = (number, type = "odd") => {
  if (typeof number !== "number" || isNaN(number)) return NaN;

  let sum = 0;
  let step = 2; // ШАГ для цикла
  let start = 0; // Начальное значение i для цикла

  if (type === "even") {
    // Если четные, стартуем с 2
    start = 2;
  } else if (type === "odd") {
    // Если нечетные, или все цифры, то стартуем с 1
    start = 1;
  } else {
    // Если все числа нужны, то старт ставим 1 (потому что 0 не изменит сумму), и ставим ШАГ = 1. Потому что нужна каждая цифра
    start = 1;
    step = 1;
  }

  for (let i = start; i <= number; i += step) {
    sum += i;
  }

  return sum;
};

console.log(getSumOfNumbers("f", "odd")); // NaN
console.log(getSumOfNumbers("", "odd")); // NaN
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "")); // 55

// Решение от Result

const getSumOfNumbers = (number, type = "odd") => {
  if (typeof number !== "number") {
    return NaN;
  }

  let sum = 0;
  for (let i = 0; i <= number; i++) {
    const isEven = i % 2 === 0;
    const isOdd = !isEven;
    if (type === "") {
      sum += i;
    } else if (isEven && type === "even") {
      sum += i;
    } else if (isOdd && type === "odd") {
      sum += i;
    }
  }

  return sum;
};

const result = getSumOfNumbers(10, "even");
console.log("result", result);
