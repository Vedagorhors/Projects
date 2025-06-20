"use strict";
/* Вы работали уже с заранее определенными данными clientName, clientSpentToday и clientSpentForAllTime.
 Но клиентов у ресторана много и каждый покупает блюда по разной стоимости и каждому необходимо предоставлять разные скидки.
  Поэтому сейчас мы будем запрашивать пользователя ввести нужные данные в текстовое поле.

Воспользуемся уже известной нам функцией prompt(). В каждую из следующих переменных clientName, clientSpentToday и
 clientSpentForAllTime присвойте значение, которое введет пользователь в текстовое поле. Итоговые данные clientSpentToday и 
 clientSpentForAllTime должны быть типом данных number.

Для clientName сообщение в prompt() должно быть: «Введите имя клиента», clientSpentToday — «Сколько клиент потратил сегодня?», 
clientSpentForAllTime- «Сколько клиент потратил за все время?».

Если пользователь ввел неверные данные для clientSpentToday и clientSpentForAllTime (например, «hello»), 
то выведите в модальном окне текст: «Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! 
Перезагрузи страницу, чтобы повторить попытку.». При неверных данных не позволяйте пользователю идти дальше к подсчету скидки. 
Используйте if...else, чтобы реализовать данную логику.
  */

const clientName = prompt("Введите имя клиента", "");
let clientSpentForAllTime = Number(
  prompt("Сколько клиент потратил за все время?", "")
);
let clientSpentToday = Number(prompt("Сколько клиент потратил сегодня?", ""));
let discount = 0; // объявил и определил переменную discount как глобальную, чтобы она была видна всем операторам if.
// Далее в каждом if  буду её переопределять
if (!clientSpentForAllTime || !clientSpentToday) {
  alert(
    "Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку."
  );
} else {
  if (clientSpentForAllTime >= 500) {
    discount = 30;
  } else if (clientSpentForAllTime >= 300) {
    discount = 20;
  } else if (clientSpentForAllTime >= 100) {
    discount = 10;
  }
  if (discount) {
    alert(`Вам предоставляется скидка в ${discount}%!`);
  }
  // clientSpentForAllTime = clientSpentForAllTime + clientSpentToday; // 135$ cумма потраченного ранее + сумма за сегодня
  clientSpentForAllTime += clientSpentToday; // так более лаконично выглядит код
  // замомнил новые затраты клиента, чтобы в следующий раз он получал больше скидки от накопленной суммы
  console.log(clientSpentForAllTime);
  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100; // расчет скидки, $
  console.log(clientSpentToday);
  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`
  );
}

// Никита сказал, что проверку дисконта можно также проводить с помощью флажка:
// let isDiscount = false

// В каждом ифе писать
// isDiscount = true

// И в конце проверить чему равен этот флаг

// Решение из курса Result. У меня решение выглядит круче
// Для clientName сообщение в prompt должно быть “Введите имя клиента”,
// clientSpentToday - “Сколько клиент потратил сегодня?”,
// clientSpentForAllTime - “Сколько клиент потратил за все время?”.

const clientName = prompt("Введите имя клиента");
let clientSpentToday = prompt("Сколько клиент потратил сегодня?");
let clientSpentForAllTime = prompt("Сколько клиент потратил за все время?");

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

let discount = 0;

if (!clientSpentToday || !clientSpentForAllTime) {
  alert(
    "Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку."
  );
} else {
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
  } else if (clientSpentForAllTime >= 500) {
    discount = 30;
  }

  alert(`Вам предоставляется скидка в ${discount}%!`);

  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  clientSpentForAllTime += clientSpentToday;

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
  );
}
