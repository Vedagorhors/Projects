console.log(Number("10"), typeof Number("10")); // явное. Выведет: 10 'number'
//1
console.log(+"50", typeof Number(+"50")); // неявное. Выведет 50 'number'
console.log(Number("50"), typeof Number("50")); // Выведет: 50 'number'
//2
console.log(Number("100"), typeof Number("100")); // Выведет: 100 'number'
//3
console.log("" + 1, typeof ("" + 1)); // неявное. Прибавляю пустую строку. Выведет: 1 string
console.log(String(1), typeof String(1)); // Выведет: 1 string
//4
console.log(String(1), typeof String(1)); // явное. Выведет: 1 string
//5
console.log(Boolean(0), typeof Boolean(0)); // явное. Выведет: false 'boolean'
//6
console.log(+"001", typeof +"001"); // неявное. Выведет: 1 'number'
console.log(Number("001"), typeof Number("001")); // Выведет: 1 'number'
//7
console.log(1 + "", typeof (1 + "")); // неявное. Выведет: 1 string
console.log(String(1), typeof String(1)); // Выведет: 1 string
//8
console.log(Boolean(1), typeof Boolean(1)); // явное. Выведет: true 'boolean'
//9
console.log(String(001), typeof 001); // явное. Ошибка: восьмеричные литералы не допускаются. Выводит ошибочно: 1 number.
// console.log(String(001), typeof String(001)); //Может так нужно записывать? Выводит 1 string
//10
console.log(Number("Hello World")); // явное. Выведет: NaN
