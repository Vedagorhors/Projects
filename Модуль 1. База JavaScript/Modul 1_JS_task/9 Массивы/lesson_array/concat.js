// concat - метод объединение массивов

// const currentDeveloper = ["Maxim", "Oleg"];
// const newDeveloper = ["Anton", "Gleb"];

// ["Maxim", "Oleg", "Anton", "Gleb"]
// const allDevelopers = currentDeveloper.concat(newDeveloper);
// console.log("allDevelopers", allDevelopers); // allDevelopers (4) ['Maxim', 'Oleg', 'Anton', 'Gleb']
// можно передать несколько массивов и объединить их в одном
// const allDevelopers1 = currentDeveloper.concat(newDeveloper, currentDeveloper);
// console.log("allDevelopers1", allDevelopers1); // allDevelopers1 (6) ['Maxim', 'Oleg', 'Anton', 'Gleb', 'Maxim', 'Oleg']

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = array1.concat(array2);
console.log("concat: ", array3); // [1, 2, 3, 4, 5, 6, 7, 8]

// В метод concat() можно передать несколько массивов:

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = array1.concat(array2, array1);
console.log("concat: ", array3); // [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]

// spread оператор ... - убирает массив и выводит элементы через ","
const currentDeveloper = ["Maxim", "Oleg"];
const newDeveloper = ["Anton", "Gleb"];
const allDevelopers2 = [...currentDeveloper, ...newDeveloper];
console.log("allDevelopers2", allDevelopers2); // allDevelopers2 (4) ['Maxim', 'Oleg', 'Anton', 'Gleb']

// как работает spread оператор ...
// До оператора: ["Maxim", "Oleg"]
// После применения оператора ... : "Maxim", "Oleg"
// То есть под капотом это работает так: JavaScript  с помощью ... берет убирает квадратные скобки и вставляет элементы через запятую:
// const allDevelopers2 = [
//     "Maxim", "Oleg",
//     "Anton", "Gleb"
// ]

// Spread - это оператор, позволяющий расширить такие элементы, как массивы или, например, строки.
// Spread оператор пишется так - ....
// Объединение массива с помощью spread оператора будет выглядеть следующим образом:

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = [...array1, ...array2];
console.log("spread: ", array3); // [1, 2, 3, 4, 5, 6, 7, 8]
// Запись ...array1 буквально достает все элементы из массива array1 и просто вставляет в то место, где она прописана.
// Можно также между вставляемыми массивами дополнительно вставить строку и это всё объединится в один массив

var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];
console.log(arr); // [1, 2, 3, 4, 5, 6]

// преобразование строки в массив
var str = "hello";
var chars = [...str];
console.log(chars); // ["h", "e", "l", "l", "o"]
