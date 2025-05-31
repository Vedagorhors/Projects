// && (И)
// || (ИЛИ)
// ! (НЕ)
// ?? (Nullish coalescing - Оператор нулевого слияния,похож на ИЛИ)

// const userAge = 20;
// if (userAge > 5 && userAge <= 25) {
//     console.log('Пользователь ходит в школу');
// }

// const programmingLenguage = 'JavaScript';
// const experienceInYear = 0.5;

// if (programmingLenguage === 'JavaScript' && experienceInYear > 1) {
// console.log('Добро пожаловать в нашу компанию');
// }

// // || (ИЛИ)
//Ложные значения для || (ИЛИ) это false, 0, '', NaN, undefined, null
//console.log(false || 'Hello World'); // выведется Hello World так как первое ложное значение, а выводится первое true значение

// const currentHours = 6;
// if (currentHours < 8 || currentHours > 20) {
//     console.log('Наш офис закрыт. Приходите завтра');
// } else {
//     console.log('Добро пожаловать в офис');
//}

// const userNickname = null;
// const defaultNickname = 'User';
//const nickName = userNickname || defaultNickname || 'noname'; // Проверяется первое условие,оно выведет false
// тогда выполнение кода идёт дальше, второе условие будет true и выведет User

// const userNickname = null;
// const defaultNickname = '';
//const nickName = userNickname || defaultNickname || 'noname'; // Выведется noname, т.к. предыдущие дают false

//const finalNickname = userNickname && 'Пользователь существует';
//console.log(nickName);
//console.log('finalNickname', finalNickname); // выведется null так как первое условие равно false  и далее проверка кода не пойдёт
// выполнение кода идет дальше пока не найдёт значение true

// const userNickname = 'Vedagor';
// const defaultNickname = '';

// const finalNickname = userNickname && 'Пользователь существует';
// //console.log(nickName);
// console.log('finalNickname', finalNickname); // выведет Пользователь существует. так как первое условие true и выполнение кода идёт дальше
// // при логическом И, если значение равно false, тогда оно и возвращается, если же условие равно true, то код идёт дальше

// // ! (НЕ)

// const hasAccess = true;
// console.log('!hasAccess', !hasAccess); // выводит false.
// if (!hasAccess) {
//     console.log('Доступ закрыт');
// } else {console.log('Доступ открыт'); // выведет доступ открыт.
// } // Если hasAccess равно true, тогда выводим Доступ открыт, если hasAccess равно false, тогда выводим Доступ закрыт

const answer = prompt("Сколько Вам лет?");
if (!answer) {
  alert("Введите Ваше полное количество лет");
} else {
  alert(`Вам ${answer} лет`);
}
// !'' равно true
// !'1234' равно false

// Оператор нулевого слияния ??
//Ложные значения для || (ИЛИ) это false, 0, '', NaN, undefined, null
//console.log(false || 'Hello World'); // выведется Hello World так как первое ложное значение, а выводится первое true значение

// Ложные значения для ?? это null, undefined
// Данный оператор очень похож на ИЛИ (||), но он считает за “falsy” только null и undefined.
//  То есть он возвращает правый операнд, если слева был null или undefined, и возвращает левый,
// если их там не было.
//console.log(false ?? 'Hello World'); // выведется false так как первое значение для ?? не ложное а true
