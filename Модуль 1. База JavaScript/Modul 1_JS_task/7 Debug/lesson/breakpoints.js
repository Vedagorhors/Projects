// const developerName = 'Ivan';
// const programmingLanguage = 'JavaScript';

// const programmingLanguages = {
//     javaScript: 'JavaScript',
//     nodeJS: 'NodeJS',
// };

// if (programmingLanguage === programmingLanguages.javaScript) {
//     console.log(`${developerName} является Front-End разработчиком`);
//  } else if (programmingLanguage === programmingLanguages.nodeJS) {
//         console.log(`${developerName} является Back-End разработчиком`);
//     } else {
//         console.log(`Язык программирования у разработчика ${developerName} не определён`)
//     }


const userAnswer = prompt("Сколько примитивных типов данных в JavaScript?");
const correctAnswer = 7;

console.log('typeof userAnswer:', typeof userAnswer);
console.log('typeof correctAnswer:', typeof correctAnswer);

if (Number(userAnswer) === correctAnswer) {
  alert("Правильный ответ!");
} else {
  alert("Неправильно :(");
}