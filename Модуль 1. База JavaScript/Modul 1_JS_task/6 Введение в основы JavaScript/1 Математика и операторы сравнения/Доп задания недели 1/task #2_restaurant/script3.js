/* Когда мы проходим регистрацию, то в большинстве случаев у нас запрашивают пароль. 
И всегда для него есть некоторые ограничения по длине либо по символам. 
Сейчас вы напишите программу, которая будет проверять на валидность пароль, введенный пользователем.

Для начала вам необходимо запросить пароль у пользователя при помощи prompt().

Отобразите сообщение: «Введите пароль».

Пароль должен удовлетворять следующим условиям:

Длина пароля должна быть минимум 3 символа и не больше 30 символов (включая 30).
Пароль должен содержать минимум 1 прописную (большую) букву.
Пароль должен содержать минимум 1 цифру.
Если все условия удовлетворены, то выведите при помощи alert()сообщение: «Пароль валидный. Добро пожаловать в аккаунт!»,
 иначе: «Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.»

Посмотрите на несколько возможных результатов:

"1234f" - не удовлетворяет условиям
"123456" - не удовлетворяет условиям
"1234F" - удовлетворяет условиям
"12" - не удовлетворяет условиям
"JavaScript"- не удовлетворяет условиям
"JavaScript123" - удовлетворяет условиям */

// let userPassword = prompt("Введите пароль");
// if (userPassword.length > 3 && userPassword.length <= 30) {
//   userPassword = true;
// }
// let сapitalLetterFound = false; // ставим флажок, большая буква не найдена
// for (let i = 0; i <= userPassword.length; i++) {
//   const letter = userPassword[i];
//   if (letter === letter.toUpperCase()) {
//     // toUpperCase возвращает новую строку (в данном случае символ), если букву поменял на большую или возвращает не изменённую строку, есть ничего не поменял
//     сapitalLetterFound = true;
//   }
// }

// let numberFound = false; // ставим флажок, цифра не найдена
// for (let i = 0; i <= userPassword.length; i++) {
//   const num = userPassword[i];
//   if (num === +num) {
//     // сравниваем, если символ из пароля равен числу, тогда пароль верный и цифра найдена
//     numberFound = true;
//   }
// }

// if (сapitalLetterFound && userPassword) {
//   alert("Пароль валидный. Добро пожаловать в аккаунт!");
// } else {
//   alert(
//     "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
//   );
// }

// const userPassword = prompt("Введите пароль");
// const isLengthCorrect = userPassword.length > 3 && userPassword.length <= 30;

// let сapitalLetterFound = false;
// for (let i = 0; i < userPassword.length; i++) {
//   const letter = userPassword[i];
//   console.log(letter); // проверочная консоль
//   if (letter === letter.toUpperCase()) {
//     сapitalLetterFound = true;
//   }
// }

// let numberFound = false;
// for (let i = 0; i < userPassword.length; i++) {
//   const num = Number(userPassword[i]);
//   if (!isNaN(num)) {
//     console.log(num); // проверочная консоль
//     numberFound = true;
//   }
// }
// //console.log(isLengthCorrect); // проверочная консоль
// //console.log(сapitalLetterFound); // проверочная консоль
// //console.log(numberFound); // проверочная консоль
// if (isLengthCorrect && сapitalLetterFound && numberFound) {
//   console.log(isLengthCorrect, сapitalLetterFound, numberFound);
//   alert("Пароль валидный. Добро пожаловать в аккаунт!");
// } else {
//   alert(
//     "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
//   );
// }

// const userPassword = prompt("Введите пароль");
// const isLengthCorrect = userPassword.length > 3 && userPassword.length <= 30;

// let сapitalLetterFound = false;
// for (let i = 0; i < userPassword.length; i++) {
//   const letter = userPassword[i];
//   if (letter === letter.toUpperCase()) {
//     сapitalLetterFound = true;
//   }
// }

// let numberFound = false;
// for (let i = 0; i < userPassword.length; i++) {
//   const num = Number(userPassword[i]);
//   if (!isNaN(num)) {
//     numberFound = true;
//   }
// }

// if (isLengthCorrect && сapitalLetterFound && numberFound) {
//   alert("Пароль валидный. Добро пожаловать в аккаунт!");
// } else {
//   alert(
//     "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
//   );
// }

// const userPassword = prompt("Введите пароль");
// const isLengthCorrect = userPassword.length > 3 && userPassword.length <= 30; // здесь даже if не понадобился. результат условия просто присвоил переменной корректной длине строки
// let сapitalLetterFound = false; // ставим флажок, объявляем переменную большая буква не найдена и потом в условии if используем её, чтобы присвоить значение true. Потом если условие выполняется, значит переменная равна true
// let numberFound = false; // ставим флажок, объявляем переменную, что мол цифра в строке пароля не найдена и потом в условии if используем её, чтобы присвоить значение true. Потом если условие выполняется, значит переменная равна true
// for (let i = 0; i < userPassword.length; i++) {
//   // в цикле перебираю каждый символ пароля
//   const letter = userPassword[i]; // присваиваю переменной значение индекса символа строки пароля и в цикле перебираю все сиволы по индексу с 0 до конца длины какая там будет у пароля введённого, ищу большую дукву прописную
//   //const num = Number(userPassword[i]); // также присваиваю переменной значение индекса символа строки пароля, привожу к типу данных Number (чтобы сравнивать числовые значение) и в цикле перебираю все сиволы по индексу с 0 до конца длины какая там будет у пароля введённого, ищу цифру
//   //const num = Number(letter); // лучше так записать, потому что так поще вычисляется переменная, а ещё лучше даже не вводить переменную num, а просто использовать далее Number(letter)
//   if (letter === letter.toUpperCase()) {
//     // сравниваю каждый (в цикле) символ пароля с символом, к которому применил метод toUpperCase, который возвращает новую строку, если перевел букву в прописную или возвращает сстроку (символ) без изменений, если буква уже была прописной
//     // toUpperCase возвращает новую строку (в данном случае символ), если букву поменял на большую или возвращает не изменённую строку, если метод  не поменял букву на прописную, а она уже была прописной
//     // получается, если буква было прописной, например А, то letter.toUpperCase() вернет тоже А и условие выполнится
//     // а если буква была мальнькая, то letter.toUpperCase() вернет пописную и условие не выполнится, будет а не равно А и тогда сработает в конце условие после else, что пароль не верный мол

//     сapitalLetterFound = true; // сработает когда условие выполнится, значит прописная буква найдена, флажок сработал
//   }
//   if (!isNaN(Number(letter))) {
//     // проверка, что индекс (переменная num) цифры из пароля не число. Т.е. сначала с помощью isNaN преобразуем значение в число и проверяем является ли оно не числом NaN,
//     // но так как мне в условии нужно определить, что это число, поэтому пишем с восклицательным знаком  !isNaN
//     console.log(Number(letter)); // проверочная консоль, выводим значения num  в цикле
//     numberFound = true; // сработает когда условие выполнится, значит цифра найдена, фложок сработал
//   }
// }

// if (isLengthCorrect && сapitalLetterFound && numberFound) {
//   // проверяем, что все переменные true после выполнения условия и если они все тру, то выводим алерт, что пароль валиден типа верный иначе else не верный
//   console.log(isLengthCorrect, сapitalLetterFound, numberFound); // проверочная консоль, что все переменные выдают тру
//   alert("Пароль валидный. Добро пожаловать в аккаунт!");
// } else {
//   alert(
//     "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
//   );
// }

// Почему нет смысла создавать переменную num:
//  Она почти ничем не отличается от letter. Буквально только преобразованием к числу.
// 2. Из 1 пункта вытекает то, что в коде тебе не нужно будет её сложно получать. Ты не вычисляешь формулу по типу:
// const num = getData(100 * 343 * letter + getRandomNumber())
// ...Ты её вычисляешь так:...
// const num = +letter
// .Всё
// И поэтому ты не теряешь в читаемости. У тебя...
// isNan(num)
// или...
// isNan(+letter)
// Разница почти нулевая.

// 3. num используется 1 раз.

const userPassword = prompt("Введите пароль");
const isLengthCorrect = userPassword.length > 3 && userPassword.length <= 30;
let сapitalLetterFound = false;
let numberFound = false;
for (let i = 0; i < userPassword.length; i++) {
  const letter = userPassword[i];
  if (letter === letter.toUpperCase()) {
    console.log(letter); // проверочная консоль
    сapitalLetterFound = true;
  }
  if (!isNaN(Number(letter))) {
    console.log(Number(letter)); // проверочная консоль
    numberFound = true;
  }
}
if (isLengthCorrect && сapitalLetterFound && numberFound) {
  console.log(isLengthCorrect, сapitalLetterFound, numberFound); // проверочная консоль
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}

// Решение из курса Result
const password = prompt("Введите пароль");
const errorMessage =
  "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.";
const successMessage = "Пароль валидный. Добро пожаловать в аккаунт!";

if (password === null || password.length < 3 || password.length > 30) {
  // password === null - проверка на не закрыл ли клиент модальное окно
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (const symbol of password) {
    const isNumberSymbol = !isNaN(parseInt(symbol));
    if (symbol >= "A" && symbol <= "Z") {
      hasBigSymbol = true;
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}
