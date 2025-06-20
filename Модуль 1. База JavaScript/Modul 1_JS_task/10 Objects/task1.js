// Вам дан массив пользователей users. У каждого из них есть свойство status, которое может равняться или "online", или "offline":

// const users = [
//   {
//     username: "David",
//     status: "online",
//     lastActivity: 10,
//   },
//   {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22,
//   },
//   {
//     username: "Bob",
//     status: "online",
//     lastActivity: 104,
//   },
// ];

// Вам необходимо создать новый массив onlineUsers, который будет содержать объекты только тех пользователей,
// у которых status равен "online".

// После выведите через alert() сообщение: «Сейчас в онлайн следующие пользователи: usersOnlineNames», где usersOnlineNames — строка,
//  в которой имена пользователей отображаются через запятую.

// Для кода выше результат должен быть следующим: «Сейчас в онлайн следующие пользователи: David, Bob».

// решение
const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const onlineUsers = users.filter((user) => user.status === "online");
console.log("onlineUsers", onlineUsers);

const usersOnlineNames = users.map((user) => user.username);
console.log("usersOnlineNames", usersOnlineNames); // ['David', 'Lucy', 'Bob']
const usersOnlineNamesJoin = usersOnlineNames.join(", ");
console.log("usersOnlineNamesJoin", usersOnlineNamesJoin);
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNamesJoin}`);
