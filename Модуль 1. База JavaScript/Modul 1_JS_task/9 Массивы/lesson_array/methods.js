// splice метод - удаляет элементы массива и заменяет их на другие. splice изменяет текущий массив и еще он возвращает удаленные элементы
// Метод splice() Данный элемент удаляет элементы из массива и, если это необходимо, заменяет их другими данными.
// splice(a, b, c)
// где a - индекс, с которого начинаем удаление элемента
// b - количество удаляемых элементов, то есть начиная с 0 индекса и по какой нужно удалить, не включая его
// в нашем примере получается удалить один элемент под 0 индексом
// с - данные, которыми нужно заменить удаленные элементы. Этот параметр является необязательным. Можно передать несколько через запятую.

// const cars = ["BMW", "Mercedes", "Lada"];
// cars.splice(0, 1);
// console.log("cars", cars);

const cars = ["BMW", "Mercedes", "Lada"];
const removedElements = cars.splice(0, 2, "Audi", "Bugatti");
console.log("removedElements", removedElements);
console.log("cars", cars);

// Он не изменяет массив, а лишь извлекает и возвращает необходимые нам элементы. И, соответственно, с помощью него нельзя заменить извлеченные элементы.
// В качестве параметров он принимает индекс элемента, с которого нужно начать извлечение элементов, и индекс, по которому заканчивать извлечение (не включая его).
// slice вырезает и возвращает вырезанные элементы массива. Не изменяет текущий массив и поэтому slice возвращает новый массив,
// оставляя исходный текущий без изменений. В slice  нельзя как в splice передавать агрументы,
// на которые нужно поменять вырезанные элементы
const agesOfDevelopers = [25, 18, 45, 30];
// console.log(agesOfDevelopers.slice(0, 2));
const slicedAgesOfDeveloper = agesOfDevelopers.slice(0, 2);
console.log("slicedAgesOfDeveloper", slicedAgesOfDeveloper);
console.log("agesOfDevelopers", agesOfDevelopers);

// indexOf - метод ищет элемент в массиве и возвращает его индекс. Если запрашиваемого элемента нет в массиве,
// то вместо индекса элемента мы получаем -1. indexOf() ищет индекс только первого элемента, подходящего под условие.
/*  Метод indexOf() отличается от метода findIndex() следующим: В метод findIndex() мы передаем функцию, в которой прописываем любое условие,
 на основе которого ищем подходящий нам элемент. В indexOf() же мы передаем значение, которое будем сравнивать с каждым элементом массива,
  пока не найдем подходящий элемент. */
const favoriteFood = ["Мороженое", "Торт", "Кофе"];
const indexOfFood = favoriteFood.indexOf("Торт");
console.log("indexOfFood", indexOfFood);

// includes - метод, с помощью которого запрашиваем элемент и проверяем есть ли он в массиве,
// если есть то includes возвращает true, иначе false
const technologies = ["JavaScript", "HTML", "CSS"];
const isTechnologies = technologies.includes("HTML");
console.log("isTechnologies", isTechnologies);

// split + join
// split - превращает список в массив
// Как работает метод split():
const items = "Coffee, Cake, Water";
console.log("items array: ", items.split()); // ['Coffee, Cake, Water']
// Получился массив, состоящий из одного элемента в виде нашей строки. Не такого результата мы ожидали.
// Для того, чтобы разбить строку на несколько элементов, нам необходимо передать в метод split() строку - разделитель,
// по которому нужно разбить ее на отдельные строки. В нашем случае - это ', ':
const items = "Coffee, Cake, Water";
console.log("items array: ", items.split(", ")); // ['Coffee', 'Cake', 'Water']

const listOfOrders = "Майка, шорты, кроссовки, рюкзак";
const listOfOrdersArray = listOfOrders.split(", "); // listOfOrdersArray (4) ['Майка', 'шорты', 'кроссовки', 'рюкзак']
console.log("listOfOrdersArray", listOfOrdersArray);

// join - метод предвращает массив в строчку. Метод join() склеивает элементы, разделяя их запятой без пробелов. Нужно задавать разделитель, например, ', '
//  Можно задавать любой разделитель
const orderString = listOfOrdersArray.join("; ");
console.log("orderString", orderString); // orderString Майка; шорты; кроссовки; рюкзак

// Если же между элементами разделитель не нужен, тогда в метод join() нужно передать пустую строку:
const array = ["Java", "Script"];
console.log(array.join(""));

// Метод join(), также, может склеивать не только строчные элементы:
const array = [1, 2, 3, 4, 5, 6];
console.log("array string: ", array.join(" ")); // '1 2 3 4 5 6'

// reverse - метод, который переворачивает массив. Не принимает в себя параметры
technologies.reverse();
console.log("technologies", technologies); // technologies (3) ['CSS', 'HTML', 'JavaScript']
