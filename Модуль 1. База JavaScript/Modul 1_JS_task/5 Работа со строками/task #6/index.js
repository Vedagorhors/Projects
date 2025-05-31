let userText = prompt("Введите текст");
let fragmentOfText = prompt("Введите слово из текста");
userText = userText.trim();
fragmentOfText = fragmentOfText.trim();
const indexOfFragment = userText.indexOf(fragmentOfText); // Нахожу индекс фрагмента строки fragmentOfText в строке userText и сохраняю этот индекс в переменную indexOfFragment
const resultString = userText.slice(0, indexOfFragment); //  вырезаю символы с 0 по индекс найденного слова, не включая это слово
alert(`Результат: ${resultString}`);
