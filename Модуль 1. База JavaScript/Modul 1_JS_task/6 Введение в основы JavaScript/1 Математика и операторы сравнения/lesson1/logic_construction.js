// if
// if else
// switch case
// ? :

const isFrontEndDeveloper = true;

if (isFrontEndDeveloper) {
    console.log('Вы Front-End разаработчик. Добро пожаловать в команду!');
} else {
    console.log('Вы не Front-End разработчик!');
}


const closingTime = 8;
const currentTime = 5;

if (currentTime > closingTime) {
    console.log('Магазин закрыт');
} else {
    console.log('Магазин открыт. Приходите за покупками');
}


const developerJobType = 'Front-End';
// const developerJobType = ''; // Если мы не укажем конкретный вариант, а укажем, 
// например, пустую строку, то выведется последний вариант Зарплата не определена

if (developerJobType === 'Front-End') {
    console.log('2000$');
} else if (developerJobType === 'Back-End') {
    console.log('1500$');
} else if (developerJobType === 'FullStack') {
    console.log('3500$');
} else {
    console.log('Зарплата не определена');
}

// switch case (замена else if)
switch(developerJobType) {
    case 'Front-End':
        console.log('2000$'); 
        break
        case 'Back-End':
        console.log('1500$');
        break
        case 'FullStack':
        console.log('3500$');
        break 
        default:
        console.log('Зарплата не определена');
}

// Тернарный оператор ? и : это замена if else

const favoriteDrink = 'Кофе';
// let message = '';
// if (favoriteDrink === 'Кофе') {
//     message = 'Ваш любимый напиток - это кофе';
// } else {
//     message = 'Вы скорее всего любите чай';
// }
// console.log('message', message);

const message = favoriteDrink === 'Кофе'
? 'Ваш любимый напиток - это кофе'
: 'Вы скорее всего любите чай';

// ? это if
// : это else

console.log('message', message);