const userAnswer1 = confirm("JavaScript появился в 1995 году?");
userAnswer1 === true
  ? alert("Верно")
  : alert("Правильный ответ: JavaScript появился в 1995 году");

const userAnswer2 = confirm("JСпецификация JavaScript называется ECMAScript?");
userAnswer2 === true
  ? alert("Верно")
  : alert("Правильный ответ: Спецификация JavaScript называется ECMAScript");

const userAnswer3 = confirm("JavaScript был создан за 1 месяц?");
userAnswer3 === true
  ? alert("Неверно. JavaScript был создан не за 1 месяц, а за 10 дней")
  : alert("Верно: JavaScript был создан за 10 дней");

/* Из книги по js: Смысл оператора «вопросительный знак» ? – вернуть то или иное значение,
   в зависимости от условия. Пожалуйста, используйте его именно для этого. 
   Когда вам нужно выполнить разные ветви кода – используйте if. */

// Решение из курса:
/* eslint-disable */

if (confirm("JavaScript появился в 1995 году?") === true) {
  alert("Верно!");
} else {
  alert("Неверно! JavaScript появился в 1995 году");
}

if (confirm("Спецификация JavaScript называется ECMAScript?") === true) {
  alert("Верно!");
} else {
  alert("Неверно! Спецификация JavaScript называется ECMAScript");
}

if (confirm("JavaScript был создан за 1 месяц?") === true) {
  alert("Неверно! JavaScript был создан за 10 дней");
} else {
  alert("Верно! JavaScript был создан за 10 дней");
}
