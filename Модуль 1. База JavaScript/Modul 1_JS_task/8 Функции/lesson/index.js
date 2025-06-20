// Function Declaration

// function name(...) {}

// sayHello();
// function sayHello() {
//   console.log("Hello World");
// }
// sayHello();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(5, 3);

// если не задавать параметры:
// function sum(a, b) {
//   console.log(a + b); // тогда будет undefined + undefined
// }
// sum(); // выдаст NaN,  так как undefined + undefined = NaN

// чтобы не получать значения undefined, можно в параметрах задать аргументам начальные значения
// function sum(a = 1, b = 2) {
//   console.log(a + b); // тогда будет 3
// }
// sum(); // теперь, если буду вызывать функцию без параметров, то у нас будут подставляться начальные значения

// можно также один параметр задавать начальный а второй передавать в функцию при её вызове
// function sum(a, b = 2) {
//   console.log(a + b); // тогда будет 7
// }
// sum(5);

// функции коллбэки Callback - это функция, которая передается в другую функцию как параметр
// так как функция sum собирается вызвать функцию callback внутри себя, то этот послединй параметр-функция называется коллбэк.
// sum просто выполнит некоторые вычисления и вызовет функцию, что ему передали, прокинет туда свои вычисления.
// И в итоге я вызываю sum передавая ей все необходимые параметры, в том числе и функцию в третий параметр.
// колбек это и есть дисплеер
// я создал дисплеер и прокинул эту функцию в качестве параметра в другую функцию sum. Она внутри себя её вызвала. Просто код по порядку идет,
//  только название дисплеер на колбек сменилось, так как прокинуто как параметр

function sum(a, b, callback) {
  const result = a + b;
  callback(result); // происходит вызов функции, когда мы в функцию sum в callback передаем функцию displayer
}
function displayer(res) {
  console.log("Результат", res);
}
sum(3, 10, displayer); // Результат, 13

// displayer - это функция коллбэк для callback

// когда я передаю (не вызываю, иначе вернется результат выполнения функции) функцию displayer, вызывать её будет функция  sum.

// передавать callback  можно и с помощью анонимных функций, то есть тех, которые не имеют имени

function sum(a, b, callback) {
  const result = a + b;
  callback(result);
}

sum(3, 10, function (res) {
  console.log("Результат", res);
});

// в качестве callback мы можем передавать любую функцию, даже те, которые уже существуют в js

function sum(a, b, callback) {
  const result = a + b;
  callback(result);
}

sum(3, 10, alert); // или можно вместо alert применить console.log
sum(3, 10, console.log); // функцию onsole.log мы не вызываем, так как она вызывается в функции sum

// return
function sum(a, b) {
  console.log("Hello"); // так будет выводиться и работать код, когда пишем перед return
  return a + b;
  console.log("Hello"); // так не будет выводиться и работать код, когда пишем после return
}

const result = sum(10, 20);
console.log("result", result);

// чтобы вывести в консоль результат функции sum мы можем и не создавать переменную
console.log(sum(2, 3));

// Если прописать какой-то код сразу после return, то этот код не будет работать и выводиться, чтобы код работал, его нужно писать до return

// из урока txt
function showTotalPrice(price, count) {
  console.log(price * count);
}

showTotalPrice(100, 5); // Выведет в консоль: 500
showTotalPrice(350, 2); // Выведет в консоль: 700

// Callback — передача функции в качестве параметра

// JavaScript позволяет передать в функцию в качестве параметра переменную любого типа — число, строку, объект и т.д.
//  Но кроме этого, можно передать также и другую функцию. Такая функция, которая передается в качестве параметра в другую,
//  называется функцией обратного вызова или коллбэком (callback).

// Модифицируем функцию showTotalPrice() из предыдущего примера, чтобы можно было настраивать способ вывода информации:

function getTotalPrice(price, count) {
  const tax = 0.2;
  return price * count * (1 + tax);
}

function showTotalPrice(price, count, showMethod) {
  showMethod(getTotalPrice(price, count));
}
// Здесь мы добавили третий параметр showMethod для передачи коллбэка. Далее вместо вывода в консоль мы вызываем функцию
//  showMethod с параметром totalPrice. То есть, по сути, мы заранее не знаем, какая функция реально будет вызвана —
// это зависит от того, какой именно будет указан последний аргумент при вызове showTotalPrice.

// Вызовем функцию и передадим в неё поочередно функции alert и console.log в качестве аргументов:

showTotalPrice(100, 5, alert); // Выведет диалоговое окно с ценой
showTotalPrice(100, 5, console.log); // Выведет цену в консоль
// Таким образом, наша функция стала ещё более гибкой. Обратите внимание, что функции при передаче пишутся без скобок!
// Если передать функцию со скобками, то вместо самой функции будет передан результат её вычисления.

// Помимо стандартных встроенных функций, аналогичным образом можно передать любую функцию, написанную самостоятельно.

// c return
function getTotalPrice(price, count) {
  const tax = 0.2;
  return price * count * (1 + tax); // Возвращаем результат
}

const totalPrice1 = getTotalPrice(100, 5); // Запишет: 600
const totalPrice2 = getTotalPrice(350, 2); // Запишет: 840

// Function Expression -  мфы не можем вызывать до определения функци и
const sum = function (a, b) {
  console.log(a + b);
};
sum(5, 10);

// arrow Function Expression - Стрелочная функция. Её также нельзя вызывать до её определения
// consr name = () => {}
const sum = (a, b) => {
  return a + b;
};
const result = sum(10, 11);
console.log("result", result);

// сокращенная форма стрелочной функции
const sum = (a, b) => a + b; // возвращает a + b. Так можно писать a + b  и без return, когда тело функции состоит из одной строки
// если больше строк в теле, то нужно применять фигурные скобки {}:

const sum = (a, b) => {
  console.log(a, b);
  return a + b;
};

// Cтрелочная функция с одним аргументом.
const addFive = (a) => a + 5;
const result = addFive(10);
console.log(result);

// Если указываем один параметр, то скобки мы можем опустить, но если параметра два, то скобки нужно ставить:
const addFive = (a) => a + 5; // Prettier  мне всё равно ставит скобки(а)

// Стрелочную функцию можно передавать как callback функцию
function multyplay(a, b, callback) {
  const result = a * b;
  callback(result);
}
multyplay(5, 2, (multyplayResult) => {
  console.log("multyplayResult", multyplayResult);
});
