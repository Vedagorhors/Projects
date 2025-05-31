// Задание 2
// const value = prompt('Какое "официальное" название JavaScript?', "");
// if (value === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// Задание 2
// const value = +prompt("Введите любое число в диапазоне меньше нуля или больше");
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// Второй вариант с помощью тернарного оператора ? или оператор называется "вопросительный знак"
// let value = prompt("Введите любое число в диапазоне меньше нуля или больше");
// let result = value > 0 ? 1 : value < 0 ? -1 : 0;
// alert(result);

// Задание 3
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result;
// result = a + b < 4 ? "Мало" : "Много";

// Задание 4
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
