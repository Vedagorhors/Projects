let existingUserLogin = 'the_best_user';
let existingUserPassword = 12345678;
let userLogin = prompt('Введите логин');
userLogin = userLogin.trim();
let userPassword = prompt('Введите пароль');
userPassword = Number(userPassword);

if (userLogin === existingUserLogin && existingUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
}


