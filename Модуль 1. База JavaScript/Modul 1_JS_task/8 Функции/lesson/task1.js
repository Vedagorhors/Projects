/* Как мы уже с вами разобрались, существует 2 вида объявлений функции: Function declaration, Function expression.
Первым делом потренируемся их создавать. Вам необходимо создать 3 функции через Function declaration, Function expression,
 Arrow function expression. Они должны принимать в себя параметр name и возвращать строку, подставляя туда этот параметр. 
 Название у них должны быть следующими: getName1, getName2, getName3.

Функции должны удовлетворять следующим условиям:

В каждую из этих функций должен быть передан 1 параметр name.
Из каждой функции с помощью return должно быть возвращено значение «Имя равно name», 
где name — значение переданного в функцию параметра name.
После вам необходимо вызвать каждую функцию и вывести возвращаемое из нее значение в консоль.
 */

// function getName1(name) {
//   return "Имя равно " + name;
// }

// console.log(getName1("Ivan"));

// let getName2 = function (name) {
//   return "Имя равно " + name;
// };

// console.log(getName2("Egor"));

// let getName3 = (name) => "Имя равно " + name;
// console.log(getName3("Nikita"));

function getName1(name) {
  return `Имя равно ${name}`;
}

console.log(getName1("Ivan"));

let getName2 = function (name) {
  return `Имя равно ${name}`;
};

console.log(getName2("Egor"));

let getName3 = (name) => `Имя равно ${name}`;
console.log(getName3("Nikita"));

// Решение от Result

const getName1 = function (name) {
  return `Имя равно ${name}`;
};

function getName2(name) {
  return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log("getName1", getName1("getName1"));
console.log("getName2", getName2("getName2"));
console.log("getName3", getName3("getName3"));
