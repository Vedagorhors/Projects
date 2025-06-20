"use strict";

/* Вам дан следующий текст, взятый из Википедии: «JavaScript — мультипарадигменный язык программирования.
 Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript.
 JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.»

Вам требуется сохранить его в переменную javaScriptDescription и выполнить над этой строкой следующие действия:
1. Обрежьте строку наполовину с 1-го символа по символ, который находится посередине строки. Если номер символа,
который находится посередине строки, получается не целым, то используйте функцию Math.floor(), чтобы округлить его к меньшему целому числу.
(Например, если индекс получился 5.9, то Math.floor(5.9) будет равен 5).
2. В обрезанной строке необходимо заменить все строчные буквы «а» на прописные «А» (и латиницу, и кириллицу).
3. Удалите все пробелы в строке.
4. Продублируйте итоговую строку 3 раза.
В консоль необходимо вывести:
1. Символ, который находится посередине конечной строки. Если индекс символа получается не целым, то используйте функцию Math.floor(), 
чтобы округлить его к меньшему числу
2. Саму конечную строку */

const javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.`;
const stringLength = javaScriptDescription.length; // определил длину строки 278
let stringMiddle = Math.floor(stringLength / 2); // поделил строку на 2, нашел середину строки 139. На всякий случай округлил в меньшую сторону (Math.floor)
let stringSlice = javaScriptDescription.slice(0, stringMiddle + 1); // Вырезал часть строки с 0 индекса по 139, с включением символа, который находится посередине (..+1)
console.log(stringSlice);
stringSlice = stringSlice.replaceAll("a", "A"); // Заменил латинское а на А
console.log(stringSlice);
stringSlice = stringSlice.replaceAll("а", "А"); // Заменил (в кириллице) а на А
console.log(stringSlice);
stringSlice = stringSlice.replaceAll(" ", ""); // убрал  в вырезанной строке все пробелы
console.log(stringSlice);
stringSlice = stringSlice.repeat(3); // повторил строку 3 раза
let resultStringLength = stringSlice.length; // нахожу длину получившейся строки
let resultString = Math.floor(resultStringLength / 2); // нахожу середину строки 193
console.log(resultString);
console.log(stringSlice[resultString]); // вывожу в консоль символ, который находится посередине конечной строки: б
console.log(stringSlice); // вывожу конечную строку

// решение с курса:
let javaScriptDescription =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";
const middleIndex = Math.floor((javaScriptDescription.length - 1) / 2);

javaScriptDescription = javaScriptDescription
  .slice(0, middleIndex)
  .replaceAll("a", "A") // латиница
  .replaceAll("а", "А") // кириллица
  .replaceAll(" ", "")
  .repeat(3);
const updatedMiddleIndex = Math.floor((javaScriptDescription.length - 1) / 2);

console.log(javaScriptDescription[updatedMiddleIndex]);
console.log(javaScriptDescription);
