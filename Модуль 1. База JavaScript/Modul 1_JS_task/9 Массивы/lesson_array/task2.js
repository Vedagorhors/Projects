/* Вам необходимо создать функцию getSumOfSequence(), которая будет создавать массив из чисел и высчитывать сумму
 первого и последнего элементов массива.
Функция принимает в себя один параметр number. Используя этот параметр, нужно создать массив из чисел от 1 до number.
Для заполнения массива элементами используйте цикл for (например, если был передан number равный 5,
то массив должен выглядеть следующим образом: [1, 2, 3, 4, 5]).
Функция getSumOfSequence() должна возвращать сумму первого и последнего элементов итогового массива.
Пример:
getSumOfSequence(5) // 6 ([1, 2, 3, 4, 5], 1+5=6) */

// i  - элемент массива, не индекс. Массив из 5 элементов это от 1 до 5, а индекс их от 0 до 4
// const getSumOfSequence = (number) => {
//   const array = [];
//   // Заполняем массив
//   for (let i = 1; i <= number; i++) {
//     array.push(i);
//     console.log(`Добавлен элемент: ${i}`); // Для отладки
//   }
//   console.log("Итоговый массив:", array); // Проверка массива
//   // Получаем элементы после заполнения массива
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];

//   console.log(`Первый: ${firstElement}, Последний: ${lastElement}`); // Проверка

//   return firstElement + lastElement;
// };
// console.log("Результат", getSumOfSequence(5)); // 6  (1 + 5)

// направить на проверку в Result. Сделал попроще отладочные консоли
const getSumOfSequence = (number) => {
  const array = [];
  // Заполняем массив
  for (let i = 1; i <= number; i++) {
    array.push(i);
    console.log(i); // Для отладки. В цикле вывожу элементы масива: 1 2 3 4 5
  }
  console.log(array); // Проверка массива. Вывожу всте элементы (не индексы) массива (5) [1, 2, 3, 4, 5]
  // Получаем элементы после заполнения массива. Переменные создаю после цикла, не в в самом цикле
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  console.log(firstElement, lastElement); // Проверка. Вывожу первый и последний элемент массива 1  5

  return firstElement + lastElement; // складываю 1 и последний элемент массива: 6  (1 + 5)
};
console.log("Результат", getSumOfSequence(5)); // 6

// решение с курса
const getSumOfSequence = (number) => {
  const finalArray = [];
  for (let i = 1; i <= number; i += 1) {
    finalArray.push(i);
  }

  return finalArray[0] + finalArray[finalArray.length - 1];
};

const result = getSumOfSequence(10);
console.log("result", result);
