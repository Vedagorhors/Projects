// alert('JavaScript!');
// let admin;
// let name;
// name = 'Джон';
// admin = name;
// alert(admin);

// const age = prompt("Введите целое число");
// if (age >= 14 && age <= 90) {
//   alert("Верно");
// } else {
//   alert("Не верно");
// }

// const age = prompt("Введите целое число");
// if (!(age >= 14 && age <= 90)) {
//   alert("Верно");
// } else {
//   alert("Не верно");
// }

// const age = prompt("Введите целое число");
// if (age < 14 || age > 90) {
//   alert("Верно");
// } else {
//   alert("Не верно");
// }

// я решил так:
// const loginTrue = "Админ";
// const passwordTrue = "Я главный";
// const login = prompt("Введите Ваш логин");
// if (login === "" || login === null) {
//   alert("Отменено");
// } else if (login === loginTrue) {
//   const password = prompt("Введите Ваш пароль");
//   if (password === null || password === "") {
//     alert("Отменено");
//   } else if (password === passwordTrue) {
//     alert("Здравствуйте!");
//   } else {
//     alert("Неверный пароль");
//   }
// } else {
//   alert("Я Вас не знаю");
// }

// Решение в книге
// let userName = prompt("Кто там?", "");

// if (userName === "Админ") {
//   let pass = prompt("Пароль?", "");

//   if (pass === "Я главный") {
//     alert("Здравствуйте!");
//   } else if (pass === "" || pass === null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (userName === "" || userName === null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

// Операторы нулевого слияния и присваивания: '??', '??='
// Задача. Перепишите код используя операторы ??, ??=
//  Вариант из книги:
// let num1 = 10,
//   num2 = 20,
//   result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

// Мой вариант с помощью ??, ??=
// let num1 = 10,
//   num2 = 20,
//   result;

// result ??= num1 ?? num2;
// console.log(result);

// Циклы while, for
// Задача: При помощи цикла for выведите чётные числа от 2 до 10.
// мой вариант
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   alert(i);
// }

// вариант с книги:
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// while (true) {
//   let value = +prompt("Введите число больше 100", "");
//   if (value > 100 || !value) break;
//   if (value < 100) continue;
// }

// while (true) {
//   let value = +prompt("Введите число больше 100", "");
//   if (value > 100 || !value) break;
// }

// // Решение из книги
// let num;

// do {
//     num = prompt("Введите число больше 100?", 0);
//   } while (num <= 100 && num);

//Вывести простые числа
// важность: 3
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

// for (const i = 2; i <= 10; i++) {
//   for (const n = 2; n > 1; n++) {
//     if (n % 1 == 0 && n % n == 0) continue;
//     alert(n);
//   }
// }

// Конструкция "switch"
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser = prompt("Enter name your browser", "");
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// function pow(x, n) {
//   if (Number.isInteger(x) && Number.isInteger(n)) {
//     return x ** n;
//   }
// }
// let x = prompt("Введите целое число", "");
// let n = prompt(
//   "Введите целое число степени, в которую необходимо возвести число",
//   ""
// );
// alert(pow(x, n));

// function pow(x, n) {
//   if (Number.isInteger(x) && Number.isInteger(n)) {
//     return x ** n;
//   }
// }
// let integerNumber = prompt("Введите целое число", "");
// let stepenNumber = prompt("Введите степень числа", "");
// x = integerNumber;
// n = stepenNumber;
// let result = pow(integerNumber, stepenNumber);

// alert(result);

function pow(x, n) {
  if (Number.isInteger(x) && Number.isInteger(n)) {
    return x ** n;
  }
}
let result = pow(2, 4);

alert(result);
