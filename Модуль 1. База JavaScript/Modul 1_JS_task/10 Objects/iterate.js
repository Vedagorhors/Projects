const goodInfo = {
  id: 1,
  price: 80,
  currency: "$",
  name: "shoes",
};

console.log("goodInfo", goodInfo);

// Цикл для объектов: for...in - устаревший метод перебора объекта
// Перебрать все свойства объекта можно с помощью цикла for...in:

// for (const key in goodInfo) {
//   // проходимся по объекту
//   console.log("key", key); // выводим все ключи с их значениями
//   const value = goodInfo[key]; // для получения значения создаем переменную, которой присваиваем значение ключа
//   console.log("value", value);
// }

const car = {
  name: "Toyota Corolla",
  year: 2017,
  isNew: false,
};

for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}
// Вывод:
// name: Toyota Corolla
// year: 2017
// isNew: false
// Данный код выведет в консоль все ключи (key) вместе со значениями (car[key]).

// Object.keys - создает массив из ключей
const keys = Object.keys(goodInfo);
console.log("keys", keys); // keys ['id', 'price', 'currency', 'name']

// Object.values - создает массив из значений
const value = Object.values(goodInfo);
console.log("value", value); // value [1, 80, '$', 'shoes']

// Object.entries - создает массив из массивов, каждый из которых содержит ключ и его значение
// Метод Object.entries() возвращает массив записей для объекта, каждая из которых также представляет собой массив.
// Первым элементом этого массива является название свойства, а вторым — его значение.
const entries = Object.entries(goodInfo);
console.log("entries", entries); // entries [Array(2), Array(2), Array(2), Array(2)]
console.log(entries[0]); // ['id', 1]

// Пример использования метода для вывода списка ключей объекта и значений:

const car = {
  name: "Toyota Corolla",
  year: 2017,
  isNew: false,
};

Object.entries(car) // Вернет массив [ ["name", "Toyota Corolla"], ["year", 2017], ["isNew", false] ]
  .forEach((arr) => console.log(`${arr[0]}: ${arr[1]}`));

// Выведет:
// name: Toyota Corolla
// year: 2017
// isNew: false
// Метод Object.entries() возвращает многомерный массив, то есть массив, элементами которого являются другие массивы.
// В каждом из этих подмассивов arr в первом элементе arr[0] хранится название свойства, а во втором arr[1] — его значение.

// Однако есть более элегантный способ работы с массивами в параметрах. Рассмотрим тот же код, но с использованием деструктуризации:

Object.entries(car).forEach(([key, value]) => console.log(`${key}: ${value}`));

// Здесь мы "разобрали" массив на отдельные значения. Делается это с помощью квадратных скобок с указанием переменных,
// куда нужно поместить значения из массива. Таким образом, список аргументов стрелочной функции ([key, value]) означает, ч
// то первое значение из записи будет помещено в переменную key, а второе значение в переменную value.
