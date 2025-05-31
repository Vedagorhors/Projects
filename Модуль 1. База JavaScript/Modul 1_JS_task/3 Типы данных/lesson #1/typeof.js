// Два способа работы с typeof
// typeof('Ivan')
// typeof 'Ivan'
console.log(typeof 'Ivan'); //typeof определит тип данных и выведет в консоль тип данных string
console.log(typeof 7); // typeof определит тип данных и выведет в консоль тип данных number
console.log(typeof false); // typeof определит тип данных и выведет в консоль тип данных boolean
console.log(typeof Symbol('id')); // typeof определит тип данных и выведет в консоль тип данных symbol
console.log(typeof undefined); // typeof определит тип данных и выведет в консоль тип данных undefined
console.log(typeof 100n); // typeof определит тип данных и выведет в консоль тип данных bigint
console.log(typeof console); //consol выводится в консоль как тип данных object, потому что это сложный тип данных


// Исключения
// 1. typeof null. Выводит тип данных не null, а object
console.log(typeof null); //typeof определит тип данных и выведет в консоль тип данных object. Просто нужно это запомнить

//typeof от функции. Выводит несуществующий тип данных function
console.log(typeof console.log); // typeof определит тип данных и выведет в консоль тип данных function.