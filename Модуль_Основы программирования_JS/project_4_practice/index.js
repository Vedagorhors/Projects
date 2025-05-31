//let circle = window.document.querySelector('div'); // записываем в переменную наше обращение к нашему блоку сайта div, что мы ввели в файле html
//circle.addEventListener('click', function () { // обращаемся к методу addEventListener, который отслеживает клик мышкой
//  на нашем созданном красном кружке и задаём действие, которое выполнится при клике мышкой по кружку, а именно выведется текст Событие клика произошло!
    // console.log('Событие клика произошло!')
   // circle.remove() // или задаем действие, что при клике мышкой на круг, круг исчезнет
  // circle.style.backgroundColor = "green"; // при нажатии на круг он меняет цвет с красного на зелёный
//});


// Задание #1

// Вариант 1 (сначала remove, потом green). Сначала навожу на круг, он меняетцвет с красного на зелёный, потом кликаю мыкой на круг, он исчезает

let circle = window.document.querySelector("div")

circle.addEventListener("click", function() {
circle.remove()
})
circle.addEventListener("mouseover", function() {
    circle.style.backgroundColor = "green";
})




    // Вариант 2 (сначала green, потом remove) Так же работает как и вариант 1, в той же последовательности. Сначала навожу на круг, он меняетцвет с красного на зелёный, потом кликаю мыкой на круг, он исчезает

// let circle = window.document.querySelector("div")

// circle.addEventListener("mouseover", function() {
//     circle.style.backgroundColor = "green";
// })
// circle.addEventListener("click", function() {
//     circle.remove()
//     })