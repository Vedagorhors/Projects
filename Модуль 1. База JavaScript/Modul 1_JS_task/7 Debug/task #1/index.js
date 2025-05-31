let health = Number(prompt('Введите число параметра "здоровье" для персонажа'));
console.log('typeof health', typeof health);
if (health <= 0 || health != health) {
    console.log(health);
  alert('Параметр "здоровье" должен быть больше нуля!');
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}