const student = {
  id: 1,
  programmingLanguage: "JavaScript",
  hasExperienceInReakt: false,
};

// если константа является объектом или массивом, ее внутренние свойства или элементы могут быть обновлены или удалены

// Добавление (add) элементов в объект
student.experience = 6;
// Удаление (delete) элементов из объекта
delete student.hasExperienceInReakt;

// Изменение (edit) элементов в объект
student.experience = 12;
student.id = 2;
console.log("student", student);

// Манипуляции со свойствами

// Чтобы обновить свойство в объекте, используется такая же запись, как и при добавлении нового свойства:

const car = {
  name: "Toyota Corolla",
};

// Создание свойств
car.engine = 1.6;
car["maxSpeed"] = 185;

// Обновление свойства
car.name = "My Car";

console.log(car);
// { name: 'My Car', engine: 1.6, maxSpeed: 185 }

// Существующее свойство можно удалить с помощью оператора delete:

const car = {
  name: "Toyota Corolla",
  engine: 1.6,
  maxSpeed: 185,
};

delete car.engine;
delete car.maxSpeed;

console.log(car);
// { name: 'Toyota Corolla' }
