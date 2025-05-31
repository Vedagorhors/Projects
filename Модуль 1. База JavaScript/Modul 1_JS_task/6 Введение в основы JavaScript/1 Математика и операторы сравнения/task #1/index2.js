"use strict";

const existingUserLogin = "the_best_user";
const existingUserPassword = 12345678;

const userLogin = prompt("Введите логин");
const userPassword = prompt("Введите пароль");

userLogin = userLogin.trim();

if (existingUserLogin === userLogin && existingUserPassword === userPassword) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert("Логин и (или) Пароль введены неверно!");
}

// решение из курса правильнее:
const existingUserLogin = "the_best_user";
const existingUserPassword = "12345678";

const userLogin = prompt("Введите логин") || "";
const userPassword = prompt("Введите пароль") || "";

if (
  existingUserLogin === userLogin.trim() &&
  existingUserPassword === userPassword.trim()
) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert("Логин и (или) Пароль введены неверно!");
}
