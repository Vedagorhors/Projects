/* Вам необходимо создать функцию giveJobToStudent(), 
которая будет добавлять новое свойство в объект и выводить информацию в модальном окне. Она принимает в себя 2 параметра:

student — объект, содержащий информацию о студенте.
jobName — название новой работы студента.
Функция giveJobToStudent() выводит в модальное окно сообщение
 «Поздравляем! У студента fullName появилась новая работа! Теперь он jobName», 
 где fullName — это имя студента, а jobName — название новой работы студента.

Функция giveJobToStudent() должна возвращать новый объект студента,
 в котором будут все ключи из объекта student и также появится новый ключ job со значением параметра jobName.

Для теста функции giveJobToStudent() используйте следующий код:

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/

// решение с комментариями
// Объявляем объект student с тремя свойствами: имя, опыт и стек технологий
const student = {
  fullName: "Максим", // Свойство fullName содержит имя студента
  experienceInMonths: 12, // Свойство experienceInMonths хранит количество месяцев опыта
  stack: ["HTML", "CSS", "JavaScript", "React"], // Свойство stack — массив изучаемых технологий
};

// Объявляем функцию giveJobToStudent, которая принимает объект student и строку jobName
function giveJobToStudent(student, jobName) {
  // Выводим модальное окно с поздравлением и информацией о новой работе студента
  alert(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
  );
  // Возвращаем новый объект: копируем все свойства student и добавляем новое свойство job
  return {
    ...student, // Оператор ... (spread) копирует все свойства из объекта student
    job: jobName, // Добавляем новое свойство job со значением из параметра jobName
  };
}

// Вызываем функцию giveJobToStudent, передаём объект student и строку "веб-разработчик"
// Результат сохраняем в переменную updatedStudent
const updatedStudent = giveJobToStudent(student, "веб-разработчик");

// Выводим в консоль обновлённый объект updatedStudent
console.log("updatedStudent", updatedStudent);

//решение задания (с помощью ии)
const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

function giveJobToStudent(student, jobName) {
  alert(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
  );
  return {
    ...student,
    job: jobName,
  };
}

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
console.log("updatedStudent", updatedStudent);

// updatedStudent = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//     job: 'веб-разработчик',
// }
