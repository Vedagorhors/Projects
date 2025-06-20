/* Последнее, что хочет видеть Алексей на своем сайте - это система оценок работы кофейни. 
Владельцу необходимо знать мнение клиентов, чтобы исправлять недочеты в своей работе.
Для начала вам необходимо создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни.
 Также создайте функцию askClientToGiveEstimation(), которая должна выводить сообщение:
  «Как вы оцениваете нашу кофейню от 1 до 10?» через prompt(). Конечный результат, который введет пользователь, 
  должен быть типом данных number. Если было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations, 
  иначе же никаких действий не совершайте.

Для добавления оценок вызовите функцию askClientToGiveEstimation() 5 раз. Рекомендуется это сделать через цикл for.
После того, как оценки будут добавлены, вам необходимо посчитать положительные и отрицательные оценки. 
Положительной оценкой является число больше 5, отрицательной — число, меньшее либо равное 5. Выведите через alert() сообщение: 
«Всего положительных оценок: goodEstimations; Всего отрицательных оценок: notGoodEstimations», 
где goodEstimations — количество положительных оценок, а notGoodEstimations — количество отрицательных оценок.

Условия:
В решение должен быть использован метод массивов filter(). */

// моё решение для отправки на прокерку в Result (без DeepSeek не обошлось):
const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  const userInput = prompt("Как вы оцениваете нашу кофейню от 1 до 10?", "");

  if (userInput === null) {
    console.log("Пользователь отменил ввод");
    return;
  }
  const rating = Number(userInput);

  if (!isNaN(rating) && rating >= 1 && rating <= 10) {
    clientsEstimations.push(rating);
    console.log("Добавлена оценка:", rating);
  } else {
    console.log("Некорректная оценка:", userInput);
  }
};

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(
  (rating) => rating > 5
).length;
const notGoodEstimations = clientsEstimations.filter(
  (rating) => rating <= 5
).length;

result = alert(
  `Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`
);

// этот же код, только с комментариями:

// Вот доработанный код с немедленным прекращением опроса при отмене или некорректном вводе:

// const coffeeShopRating = 0;
// const clientsEstimations = [];
// let shouldStopAsking = false; // Флаг для остановки опроса

// const askClientToGiveEstimation = () => {
//   // Запрос оценки у пользователя
//   const userInput = prompt("Как вы оцениваете нашу кофейню от 1 до 10?", "");

//   // Проверка на отмену ввода
//   if (userInput === null) {
//     console.log("Опрос прерван пользователем");
//     shouldStopAsking = true; // Устанавливаем флаг остановки
//     return;
//   }

//   // Преобразование ввода в число
//   const rating = Number(userInput);

//   // Проверка на корректность ввода
//   if (isNaN(rating) || rating < 1 || rating > 10) {
//     console.log("Введена некорректная оценка:", userInput);
//     shouldStopAsking = true; // Устанавливаем флаг остановки
//     return;
//   }

//   // Добавление валидной оценки в массив
//   clientsEstimations.push(rating);
//   console.log("Добавлена оценка:", rating);
// };

// // Сбор 5 оценок с возможностью досрочного прерывания
// for (let i = 0; i < 5 && !shouldStopAsking; i++) {
//   askClientToGiveEstimation();
// }

// // Подсчет оценок только если есть данные
// if (clientsEstimations.length > 0) {
//   const goodEstimations = clientsEstimations.filter(
//     (rating) => rating > 5
//   ).length;
//   const notGoodEstimations = clientsEstimations.filter(
//     (rating) => rating <= 5
//   ).length;

//   // Вывод результатов
//   alert(
//     `Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`
//   );
// } else {
//   alert("Не получено ни одной корректной оценки");
// }

// Ключевые изменения:
// Добавлен флаг shouldStopAsking:

// Отслеживает необходимость прекратить опрос

// Инициализирован как false

// Устанавливается в true при отмене или некорректном вводе

// Условие в цикле for:

// i < 5 && !shouldStopAsking - продолжает цикл только если:

// Не собрано 5 оценок

// Флаг остановки не установлен

// Проверка перед выводом результатов:

// if (clientsEstimations.length > 0) - выводит статистику только если есть оценки

// Если оценок нет - выводится сообщение об этом

// Обработка ошибок:

// Отдельно обрабатывается отмена (userInput === null)

// Отдельно обрабатываются некорректные значения:

// Не числа (isNaN(rating))

// Числа вне диапазона 1-10 (rating < 1 || rating > 10)

// Логика работы:
// При первом же:

// Нажатии "Отмена" или

// Вводе нечислового значения или

// Вводе числа вне диапазона 1-10

// Устанавливается флаг shouldStopAsking = true

// Цикл немедленно прекращает дальнейшие вызовы prompt()

// Если были добавлены оценки - выводится статистика

// Если не было добавлено ни одной оценки - выводится сообщение об этом

// Это решение полностью соответствует требованию о немедленном прекращении опроса при любой ошибке или отмене ввода.

// решение с курса
const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  const clientEstimationString = prompt(
    "Как вы оцениваете нашу кофейню от 1 до 10?"
  );
  const clientEstimation = Number(clientEstimationString);
  if (clientEstimation >= 1 && clientEstimation <= 10) {
    clientsEstimations.push(clientEstimation);
  }
};

for (let i = 0; i < 5; i += 1) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
);
const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);

console.log(goodEstimations, notGoodEstimations);

alert(
  `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
);
