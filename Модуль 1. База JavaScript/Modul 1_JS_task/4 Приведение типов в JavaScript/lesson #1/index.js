// Динамическая типизация в JavaScript
// 1. Преобразование к строке
const age = 20;
console.log("number age:", typeof age);
console.log("string age", typeof String(age)); // Явное преобразование.
// Используем только явное преобразование, так как оно уменьшает количество багов

const updatedAge = "1" + 20;
console.log("updatedAge", typeof updatedAge); // Неявное преобразование

// 2. Преобразование к числу
const experienceInJavaScript = "5";
console.log("experienceInJavaScript", typeof experienceInJavaScript);
console.log("experienceInJavaScript", typeof Number(experienceInJavaScript)); // Явное преобразование.

console.log("experienceInJavaScript", typeof +experienceInJavaScript); // Неявное преобразование.

console.log("Hello World", Number("Hello World")); //Выведется NaN, что значит Not a Number (не число)

// 3. Преобразование к boolean
console.log("hello", Boolean("hello"));
console.log("5", Boolean(5));

//Обычно почти все значения преобразуются в true, но есть исключения.
// Значения приводящие к false: null, undefined, NaN, 0, -0, '' (пустая строка) и, непосредственно, сам false.
console.log("null", Boolean(null));
console.log("undefined", Boolean(undefined));
console.log("0", Boolean(0));
console.log("0", Boolean("0")); //Сделаем 0 как строчку, возьмём в кавычки, тогда выведется true/
//У строчки, в которой находится 0, длина строки равна 1
console.log("", Boolean("")); // false выводится для пустой строчки, так как её длина равна 0

console.log("2: ", Boolean(2)); // true
console.log("0 (String): ", Boolean("0")); // true  Здесь строка (не цифра 0) не пустая строка, длина строки равна 1, так как вписан 0
console.log("0 (Number): ", Boolean(0)); // false
console.log("null: ", Boolean(null)); // false
console.log("NaN: ", Boolean(NaN)); // false
