//Типы данных в JavaScript
// 1. string (строка)
// 2. number (число)
// 3. bulean (true  false)
// 4. null - пусто, значение не известно
// 5. undefined - значение не было присвоено
// 6. object - сложный тип данных. 
// 7. symbol - нужен для создания уникальных ключей объекта
// 8. bigint - большое число.

//Типы типов данных
//1. Примитивы (простые типы) - 7 шт.
//2. Не примитивы (сложные типы) - 1 шт. (object)


// 1. string (строка)
const favoriteDrink = 'Coffee';
console.log(favoriteDrink);

// 2. number (число). number не может быть больше 2^53 -1 либо меньше -(2^53 -1) 
const numberofCaps = 5;
console.log(numberofCaps);

// 3. boolean (true  false)
const isColdDrink = true;
console.log(isColdDrink);

// 4. null - пусто, значение не известно
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink);

// 5. undefined - значение не было присвоено
// let carOwner;
let carOwner = undefined;
console.log(carOwner);

// 6. object - сложный тип данных. 
//Объект определяет несколько параметров в одну сущность
// const drink = {
//     key: value,
// }
const drink = {
    favoriteDrink: 'Coffee',
    numberofCaps: 5,
    isColdDrink: true,
};
console.log(drink);

// 7. symbol - нужен для создания уникальных ключей объекта
const id = Symbol('id');
console.log(id);

// 8. bigint - большое число.
// const bigIntNumber = BigInt(10);
const bigIntNumber = 10n;
console.log(bigIntNumber); //Выведется в консоль 10n - число с n обозначает большое число bigint.
