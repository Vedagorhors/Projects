let add1 = 'Сколько будет 2 + 2?';
let mult = 'Сколько будет 2 * 2?';
let taskApples = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось? У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
let taskCandies = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
let priority = 'Сколько будет 2 + 2 * 2?';

let add1AnswerTrue = 4;
let multAnswerTrue = 4;
let taskApplesAnswerTrue = 1;
let taskCandiesAnswerTrue = 12;
let priorityAnswerTrue = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

addQuestion = prompt(add1);
addQuestion = Number(addQuestion);
if (addQuestion === add1AnswerTrue) {
  alert('Ответ верный');
  correctAnswers += 1;
} else {alert('Ответ не верный')
    incorrectAnswers += 1;
};


multQuestion = prompt(mult);
multQuestion = Number(multQuestion);
if (multQuestion === multAnswerTrue) {
    alert('Ответ верный');
    correctAnswers += 1;
} else {alert('Ответ не верный')
    incorrectAnswers += 1;
};


taskApplesQuestion = prompt(taskApples);
taskApplesQuestion = Number(taskApplesQuestion);
if (taskApplesQuestion === taskApplesAnswerTrue) {
    alert('Ответ верный');
    correctAnswers += 1;
} else {alert('Ответ не верный')
    incorrectAnswers += 1;
};


taskCandiesQuestion = prompt(taskCandies);
taskCandiesQuestion = Number(taskCandiesQuestion);
if (taskCandiesQuestion === taskCandiesAnswerTrue) {
    alert('Ответ верный');
    correctAnswers += 1;
} else {alert('Ответ не верный')
    incorrectAnswers += 1;
};


priorityQuestion = prompt(priority);
priorityQuestion = Number(priorityQuestion);
if (priorityQuestion === priorityAnswerTrue) {
    alert('Ответ верный');
    correctAnswers += 1;
} else {alert('Ответ не верный')
    incorrectAnswers += 1;
};


alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`);










