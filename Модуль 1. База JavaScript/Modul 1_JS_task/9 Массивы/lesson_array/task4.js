/* Вы разработали главную функциональность, которую хотел видеть Алексей на своем сайте. 
Он говорит вам большое спасибо, потому что, благодаря сайту, в кофейне увеличилось количество продаж.
 Теперь Алексей захотел поднять цену на кофе, чтобы прибыли было еще больше.
У вас изначально есть 2 массива: coffees (хранит названия кофе) и prices (хранит цены на кофе).
 Индексы для названий кофе и цен взаимосвязаны. т.е. “Latte” стоит 1.5 евро, “Cappuccino” - 1 евро, и т.д.

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
Вам необходимо создать новый массив updatedPrices, который будет содержать те же числа из массива prices, но только увеличенные на 0.5.

После подъема цен вам необходимо уведомить об этом клиентов кофейни, поэтому выведи для каждого типа кофе сообщение через alert():
 «Кофе name сейчас стоит price евро», где name — название кофе, а price — обновленная цена на кофе.

Условия:
Необходимо использовать методы массивов map() и forEach() */

// код с комментариями (не обошлось без DeepSeek)

// Объявление массива с названиями кофе
const coffees = ["Latte", "Cappuccino", "Americano"];

// Объявление массива с текущими ценами на кофе
// Индексы цен соответствуют индексам названий в массиве coffees
const prices = [1.5, 1, 2];

// Создание нового массива обновленных цен:
// - Используем метод map() для преобразования исходного массива prices
// - Для каждого элемента price добавляем 0.5
// - Возвращаем новый массив [2.0, 1.5, 2.5]
const updatedPrices = prices.map((price) => price + 0.5);

// Вывод в консоль нового массива цен для отладки
console.log("updatedPrices", updatedPrices);

// Итерация по массиву кофе:
// - Используем метод forEach() для перебора каждого элемента
// - Параметры: name - название кофе, index - текущий индекс (0, 1, 2)
coffees.forEach((name, index) => {
  // Получение новой цены для текущего кофе:
  // - Берем значение из updatedPrices по текущему индексу
  const newPrice = updatedPrices[index];

  // Вывод alert-сообщения для пользователя:
  // - Используем шаблонные строки для подстановки значений
  // - ${name} - название кофе из массива coffees
  // - ${newPrice} - новая цена из массива updatedPrices
  // alert нужно использовать внутри цикла, чтобы он вывел цены для всех видов кофе
  alert(`Кофе ${name} сейчас стоит ${newPrice} евро`);
});

// код без комментариев. На проверку отправить
const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);
console.log("updatedPrices", updatedPrices);

coffees.forEach((name, index) => {
  const newPrice = updatedPrices[index];
  alert(`Кофе ${name} сейчас стоит ${newPrice} евро`);
});

// решение с курса
const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);

coffees.forEach((coffeeName, index) => {
  alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро.`);
});
