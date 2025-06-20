// Замыкания

// const createMultiplayer = function (n) {
//   return function () {
//     return n * 10;
//   };
// };

// const multiplay = createMultiplayer(10);
// const result = multiplay();
// console.log(result);

// более сложный пример замыкания
const createCounter = (initialValue = 0) => {
  return (valueToAdd) => {
    return initialValue + valueToAdd;
  };
};
const addFive = createCounter(5); // создаем переменную, которая будет хранить вложенную функцию и передаем в функцию createCounter
// значение 5 в параметр initialValue. Параметр initialValue замыкается внутри внутренней функции и поэтому то значение, которое мы
// передаем в initialValue функции createCounter оно сохраняется и для вызова функций addFive, addTen и др. внутренних функций, которые мы будем создавать
// и вызываем функцию createCounter и передадим в неё 5. Теперь addFive является функцией вложенной и я могу её вызывать с параметром valueToAdd
const result = addFive(10); // сохраняем вызов функции addFive в переменную result и вызываем addFive и передаем аргумент 10
console.log(result); // 15
// также с помощью createCounter можем создавать и другие функции
const addTen = createCounter(10); // создали функцию addTen и я могу её вызывать всё с тем же параметром valueToAdd
console.log(addTen(50)); // не буду сохранять результат в переменную, а сразу выведем значение в консоль, будет 60
// кстати, чтобы проверить, что addTen стала хранить внутреннюю вложенную функцию, нужно в консоль вывести addTen  без скобок,
// просто имя данной функции console.log(addTen) и в консоль выведется:  (valueToAdd) => {return initialValue + valueToAdd;}
// такой же рузультат будет и для функции addFive

// более сложный пример замыканий
const createCounter = (initialValue = 0) => {
  let counter = initialValue;

  return (valueToAdd) => {
    counter += valueToAdd;
    return counter;
  };
};

// создаем переменную, которая будет хранить вложенную функцию и передаем в функцию createCounter значение 2
const addTwo = createCounter(2); // изначально наш counter равен 2, это initialValue. После когда мы будем вызывать
// внутренние функции . Значение counter сохраняется между вызовами наших внутренних функций addTwo, то есть значение
// counter будет замыкаться внутри внутренней функции.
// создаем переменную result и сохраним в неё значение нашей функции addTwo, которая будет являться counter.
const result = addTwo(10); // 12. Передадим в параметр valueToAdd аргумент (значение параметра) равное 10. 10 + 2 = 12
result = addTwo(5); // 17 (12 + 5 = 17)
result = addTwo(3); // 20 (17 + 3 = 20)
console.log(result); // 12. Когда первый раз вызываем функцию addTwo(10), то к нашему counter прибавляется значение 10 результат будет 12.
//  Когда мы вызываем второй раз addTwo(5), то наш counter уже равен 12 и к 12 прибавляем переданный аргумент 5, будет 17
//  Когда мы вызываем третий раз addTwo(3), то наш counter уже равен 17 и к 17 прибавляем переданный аргумент 3, будет 20
