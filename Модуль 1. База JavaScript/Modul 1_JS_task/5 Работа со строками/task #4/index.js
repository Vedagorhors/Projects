let userName = prompt("Как вас зовут?"); // присваиваю переменной значение введённого имени в окно запроса
let userAge = prompt("Сколько Вам лет?");
// userName = userName.toUpperCase(); // изменяю все буквы во введённом имени на прописные
// userName = userName.trim(); // убираю все пробелы до и после имени, если оно было введено с пробелами
// userAge = userAge.trim();  // убираю пробелы в начале и в конце
// userAge = Number(userAge);// ппеременную привожу к типу данных number
userName = userName.toUpperCase().trim();
userAge = Number(userAge.trim());

alert(`Вас зовут ${userName} и Вам ${userAge} лет`);
