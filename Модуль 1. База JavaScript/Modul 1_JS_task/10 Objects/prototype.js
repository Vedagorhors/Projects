// Прототип prototype - это объект, с помощью которого мы расширяем
//  свойста объектов или классов и с пмощью него мы можем устраивать
// определенные унаследования, что бывает полезно для Java Script

const person = new Object({
  // создаем объект через глобальный класс new Object
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greet!");
  },
});

Object.prototype.seyHello = function () {
  console.log("Hello!");
};
const Lena = Object.create(person);
Lena.name = "Elena";

// const str = "I am string";
const str = new String("I am string");
