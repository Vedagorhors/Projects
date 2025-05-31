const userString = prompt("Введите текст для обрезки"); // вывел сообщение с запросом и сохранил введённую строку в переменную
// userString = userString.trim(); // удалил лишние проберы в начале и в конце строки
let startSliceIndex = prompt(
  "Введите индекс, с которого нужно начать обрезку строки"
); // вывел сообщение с запросом и сохранил введённую строку в переменную
let endSliceIndex = prompt(
  "Введите индекс, которым нужно закончить обрезку строки"
); // вывел сообщение с запросом и сохранил введённую строку в переменную
startSliceIndex = Number(startSliceIndex);
endSliceIndex = Number(endSliceIndex);
const string = userString.trim().slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${string}`);
