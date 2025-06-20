const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// Добавление элементов
// Метод (функция) push() добавляет элемент в конец массива
const newSeniorDeveloperSelery = 5000;
salariesOfDevelopers.push(newSeniorDeveloperSelery, 5001, 5002);
console.log(salariesOfDevelopers);

// Метод (функция) unshift() добавляет элемент в начало массива

salariesOfDevelopers.unshift(100, 101, 102, 103);
console.log("salariesOfDevelopers", salariesOfDevelopers);

// Метод (функция) shift() удаляет первый элемент из массива.
// В случае с shift() удаленный элемент также можно присвоить какой-нибудь переменной:

const array = [true, false, "true", "false"];
deletedElement = array.shift();
console.log("array shift: ", array); // [false, 'true', 'false']
console.log("deleted element: ", deletedElement); // true

const firstRemovedElement = salariesOfDevelopers.shift(); // удалили первый элемент из списка
// и вернули значение этого элемента присвоив переменной. shift может возвращать первый удаленный элемент списка
salariesOfDevelopers.shift(); // удалили ещё первый элемент из списка

// Метод (функция) pop() удаляет последний элемент из массива
// метод pop() возвращает значение удаленного элемента.
// То есть, если прописать удаление элемента в переменную, то ей присвоится значение удаленного элемента

const array = ["one", "two", "three"];
const deletedElement = array.pop();
console.log("array pop: ", array); // ['one', 'two']
console.log("deleted element: ", deletedElement); // 'three'

const lastRemovedElement = salariesOfDevelopers.pop();

// console.log("firstRemovedElement", firstRemovedElement);
// console.log("salariesOfDevelopers", salariesOfDevelopers);
// console.log("lastRemovedElement", lastRemovedElement);

// Изменение элементов массива
salariesOfDevelopers[4] = 6000;
console.log("salariesOfDevelopers", salariesOfDevelopers);

// Для получение элемента массива, используются квадратные скобки, в которые передается индекс необходимого элемента:

const array = ["first", "second", "third", "fourth"];
console.log("item:", array[1]); // item: second
// Итак, мы получили второй элемент, который находится под индексом 1.

// Если передать в скобки несуществующий индекс, то вернется значение undefined:

const array = ["first", "second", "third", "fourth"];
console.log("item:", array[4]); // item: undefined
// В данном случае мы получили undefined, так как элемента под индексом 4 в массиве нет. Индекс последнего элемента - это 3.

// чтобы получить последний элемент массива, в скобках нужно написать array.length - 1:

const array = ["first", "second", "third", "fourth"];

console.log("last item:", array[array.length - 1]); // last item: fourth

console.log("second item from end:", array[array.length - 2]); // second item from end: third

// Метод at() - Данный метод принимает в себя индекс элемента, который мы хотим получить:

const array = ["first", "second", "third", "fourth"];
console.log("item:", array.at(1)); // item: second. Таким образом мы получили второй элемент под индексом 1.

// Если же мы хотим получить элемент с конца, то нужно передать отрицательное значение, например, -1.
// Значение -1 будет значить, что мы хотим получить первый элемент с конца массива:

const array = ["first", "second", "third", "fourth"];

console.log("last item:", array.at(-1)); // last item: fourth

console.log("second item from end:", array.at(-2)); // second item from end: third.
// Таким образом мы получили первый и второй элемент с конца массива.

// Изменение элемента массива:
// В данном примере:
// Мы обратились к массиву array.
// Затем прописали квадратные скобки и передали в них индекс второго элемента - 1.
// И присвоили второму элементу со значением 380 новое значение - true.

const array = [120, 380, 250, 670];
array[1] = true;
console.log("updated array: ", array); // [120, true, 250, 670]
