const myName = 'Иван';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'хочу получить новую перспективную профессию';
const numberOfMonth = '1';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage}
 у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц.
 Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll('JavaScript', 'javascript'); // поменял в слове JavaScript все буквы на строчные
myInfoText = myInfoText.replaceAll('курс', 'КУРС'); // поменял в слове курс все буквы на прописные

console.log(myInfoText);
console.log(myInfoText.length); // получил длину строки
console.log(myInfoText[0]); // вывел в консоль первый символ строки под индексом 0
//let indexEnd = myInfoText.length - 1; // назначил переменной значения индекса последнего симвода. 
// Данную переменную indexEnd можно не назначать, а сразу ввести myInfoText.length - 1 в[]
console.log(myInfoText[myInfoText.length - 1]); // вывел последний символ строки переменной myInfoText,
// указав в [] переменную со значением индекса последнего символа строки





