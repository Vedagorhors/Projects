//Способы объявления строк
const name1 = "Ivan"; // одинарные кавычки
const name2 = "Egor"; // двойные кавычки
const name3 = `Nikita`; // обратные кавычки

console.log(name1, name2, name3);

//Конкатенация - объединение строк
const name = "Ivan";
const profession = "JavaScript-developer";

// const allinfo = name + ' ' + profession;

// const allinfo = `${name} ${profession}` // Советуется использовать именно этот способ

let allinfo = name + " ";
allinfo += profession; // Эта запись равносильна следующей:
// allinfo = allinfo + profession;

console.log("allinfo:", allinfo);

// Длина строки (length)

const programmingLanguage = "JavaScript";
console.log(programmingLanguage.length);

// Получение определённого символа из строки. Каждый символ в строке находится под конретным номером - индексом,
// к-й начинается с 0. Т.е. в примере J находится под 0, а под 1, v под 2 и тд.
console.log(programmingLanguage[5]); // с
console.log(programmingLanguage[100]); // Выведется undefined так как символа с индексом 100 в строке нет,
//  там всего 10 индексов
// Символы в строке при помощи индексов мы поменять не можем
