// ключи (свойства) могут быть типом данных string или Symbol

// Вычисляемые имена свойств
// В качестве имени свойства (ключа) можно использовать не только фиксированные значения, но и переменные.
// Делается это с помощью квадратных скобок при задании свойства:

const key = "color";

const car = {
  name: "Nissan Note",
  [key]: "silver",
};
// Переменная [key] в квадратных скобках говорит JavaScript, что в качестве имени свойства нужно подставить значение переменной key,
// то есть строку "color".

// const user = {
//   name: "Maxim",
//   10: "1234", // 10 преобразуется в строку и ошибки не будет
//   undefined: undefined,
//   [false]: false,
// };
// console.log(Object.keys(user));

// Symbol для создания ключей объекта

// Помимо строк есть только один тип данных, который можно использовать при создании ключей объекта — это Symbol.
// Он дает полезные возможности при работе с ключами, а именно:

// Создание уникальных ключей.
// Созданные с помощью Symbol ключи объекта всегда уникальны. Это вытекает из особенности функции Symbol(),
// которая возвращает только уникальные значения. Сравним два символа с одинаковым описанием:

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2); // false
// Иногда встречаются ситуации, когда нужно явным образом обеспечить уникальность ключей объекта.
// Если в объекте есть два ключа с одинаковыми именами, то сохранится только последний:

const car = {
  name: "Toyota Corolla",
  name: "Nissan Note",
};

console.log(car.name); // Nissan Note
// Чтобы избежать подобных коллизий, можно использовать ключ типа symbol. В следующем примере значения обоих свойств будут сохранены:

const car = {
  [Symbol("name")]: "Toyota Corolla",
  [Symbol("name")]: "Nissan Note",
};
// Создание скрытых свойств объекта.
// Использование символьных ключей гарантирует, что получить доступ к свойству мы можем, только имея ссылку на данный символ.
// Это может быть полезно, когда объекту нужно добавить свойство, которое другие части программы могут случайно изменить.
// При использовании symbol в ключе случайно зацепить свойство не получится. Также такие свойства не видны при переборе обычными способами
// (такими как цикл for...in или метод Object.entries()).

// Для получения всех символьных ключей объекта можно использовать специальный метод Object.getOwnPropertySymbols().
// Применим его для объекта car из предыдущего примера:

const car = {
  [Symbol("name")]: "Toyota Corolla",
  [Symbol("name")]: "Nissan Note",
};

const symbols = Object.getOwnPropertySymbols(car);
for (const symbol of symbols) {
  console.log(`${symbol.description} - ${car[symbol]}`);
}
// Цикл выведет:
// name - Toyota Corolla
// name - Nissan Note

// Чтобы иметь возможность обращаться к свойству напрямую, нужно сначала присвоить символ отдельной переменной,
// а затем использовать его для доступа к свойству:

const id = Symbol("id");

const car = {
  [id]: "123",
  name: "Toyota Corolla",
};

console.log(car[id]); // 123

// если снова применить ключ с одинаковым названием, например name, то будет использоваться только последнее значение name,
// чтобы так не было нужно создать ключ с типом данных symbol

const id = Symbol("id");
const id2 = Symbol("id2");
const user = {
  [id]: 1,
  name: "Maxim",
};
console.log("user", user); // user {name: 'Maxim', Symbol(id): 1}
console.log(Object.keys(user)); // ['name']
console.log(user[id]); //  1

// const id = Symbol("id");
// const user = {
//   [Symbol("id")]: 1,
//   [Symbol("id")]: 2,
//   [Symbol("id")]: 3,
//   name: "Maxim",
// };
// console.log("user", user); // user {name: 'Maxim', Symbol(id): 1, Symbol(id): 2, Symbol(id): 3}
// console.log(Object.keys(user));

// in - проверяет существует ли ключ в объекте
console.log("name" in user); // true
console.log(id in user); // true
console.log(id2 in user); // false - нет id2 в объекте user
