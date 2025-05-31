// Данный код 3 раза запрашивает имена новых студентов и,
// если имя студента было введено, то его приветствуют сообщением:
//  «Добро пожаловать, newStudent!» (newStudent — имя студента).
// Вам необходимо переписать данный цикл for на цикл с while и do...while,
//  чтобы логика выполнения кода и результат остались без изменения:

// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
// }

// Решение моё с помощью цикла while:
// let i = 0;
// while (i < 3) {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent === null || newStudent === "")
//     break; /* По заданию не требоваолось? но я решил ввести останов цикла на случай, если пользователь
//   не захочет вводить имя, а просто нажмет отмену или нажмет ок, не введя ничего в поле ввода, то есть пустая строка.
// Хотя по хорошему здесь нужно ввести проверку, что если юзер не ввел имя, а нажал ОК, то нужно ему выдать сообщение,
// что Вы мол не ввели имя, введите имя */
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
// i++;
// }

// Решение моё с помощью цикла do while:
// let i = 0;
// do {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent === null || newStudent === "") break;
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
//   i++;
// } while (i < 3);

// Решение из курса:
let i = 0;
while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i += 1;
}

// let j = 0;
// do {
//   let newStudent = prompt("Введите имя нового студента!");
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
//   j += 1;
// } while (j < 3);
