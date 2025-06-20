/* Представьте, что мы разрабатываем систему очередей для какого-либо заведения. 
Например, для почты. Для этого мы создали массив peopleWaiting, который отображает текущий статус очереди:

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
По логике, следующую посылку по почте получит Кристина, после нее уже 1-м в очереди будет Олег.

Сейчас вам необходимо реализовать следующую логику в коде шаг за шагом:

Кристина и Олег получили посылки и ушли из очереди. Вам необходимо удалить их из массива.
Теперь подошла очередь к Кириллу. И неожиданно сотрудница почты говорит, что скоро у них обеденный перерыв,
 и она успеет обслужить только Кирилла. Поэтому все остальные люди, стоящие за Кириллом, решили не ждать,
  когда закончится обед, и просто ушли из отделения почты. Вам необходимо сначала удалить Кирилла из массива peopleWaiting,
   а затем удалить людей, которые не успели получить посылки.
Когда какой-либо человек получает посылку, необходимо вывести в модальном окне сообщение: “ name получил(а) посылку. 
В очереди осталось length человек.” (Замените name на имя человека, получившего посылку, а length - на количество человек,
 которые остались в очереди).

Если же человек не получил посылку и ушел из очереди, то выведите в модальном окне через alert() сообщение:
 “ name не получил(а) посылку и ушел(ла) из очереди”.

Рекомендуется создать 2 функции: giveParcel() - для выдачи посылки и удаления клиента из начала массива,
 leaveQueueWithoutParcel() - для удаления клиента, который не получил посылку из конца списка. */

// const peopleWaiting = [
//   "Кристина",
//   "Олег",
//   "Кирилл",
//   "Мария",
//   "Светлана",
//   "Артем",
//   "Глеб",
// ];
// let clientReceivedParcel = false; // (переменная - клиент посылку получил) пока
// let clientNotReceiveParcel = false; // (переменная - клиент не получил посылку)
// i - индекс человека в очереди (массиве), будем перебирать очередь с помощью цикла

// let peopleWithParcel = false; // флажок - когда человек получит посылку, то будет true в условии

// let giveParcel = (name) => {
//   for (let i = 0; i <= peopleWaiting.length - 1; i++) {
//     if (peopleWaiting[0] === "Кристина") {
//       peopleWithParcel = true;
//       peopleWaiting.shift(); // удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым
//       let newLength = peopleWaiting.length;
//       // peopleWaiting.at[0]
//       alert(`${name} получил(а) посылку. В очереди осталось length человек.” (Замените name на имя человека, получившего посылку, а length - на количество человек,
//  которые остались в очереди).`);
//     }
//   }
// };

// let giveParcel(parcelDelivered, removingСlientBeginningArray)
// function leaveQueueWithoutParcel(deleteClient) {}

// i <= peopleWaiting.length - 1 всё равно что i < peopleWaiting.length

// const peopleWaiting = [
//   "Кристина",
//   "Олег",
//   "Кирилл",
//   "Мария",
//   "Светлана",
//   "Артем",
//   "Глеб",
// ];

// let lengthpeopleWaiting = peopleWaiting.length;
// console.log(lengthpeopleWaiting);

// let giveParcel = (name) => {
//   let parcelDelivered = false; // переменная сигнализирует выдачу посылки, будет true, если посылка будет выдана
//   if ((peopleWaiting[0] = "Кристина")) {
//     peopleWaiting.shift();
//     lengthpeopleWaiting = peopleWaiting.length;
//     parcelDelivered = true;
//     alert(
//       `${name} получил(а) посылку. В очереди осталось ${lengthpeopleWaiting} человек.`
//     );
//   }
//   return parcelDelivered;
// };

// console.log(giveParcel("Кристина"));

// по другому решаю
// const peopleWaiting = [
//   "Кристина",
//   "Олег",
//   "Кирилл",
//   "Мария",
//   "Светлана",
//   "Артем",
//   "Глеб",
// ];

// const giveParcel = (name) => {
//   let parcelDelivered = false; // переменная сигнализирует выдачу посылки, будет true, если посылка будет выдана

//   peopleWaiting.shift();
//   alert(
//     `${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
//   );
//   parcelDelivered = true;
//   return parcelDelivered;
// };

// console.log(giveParcel("Кристина"));
// console.log(giveParcel("Олег"));
// console.log(giveParcel("Кирилл"));

// const leaveQueueWithoutParcel = (name) => {
//   peopleWaiting.pop();
//   alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
//   return true;
// };
// console.log(leaveQueueWithoutParcel("Мария"));
// console.log(leaveQueueWithoutParcel("Светлана"));
// console.log(leaveQueueWithoutParcel("Артем"));
// console.log(leaveQueueWithoutParcel("Глеб"));

// последний мой вариант решения, убрал переменную и return. В функцию ничего не нужно возвращать, оно и так типа тру там будет
// const peopleWaiting = [
//   "Кристина",
//   "Олег",
//   "Кирилл",
//   "Мария",
//   "Светлана",
//   "Артем",
//   "Глеб",
// ];

// const giveParcel = (name) => {
//   peopleWaiting.shift();
//   alert(
//     `${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
//   );
// };

// console.log(giveParcel("Кристина"));
// console.log(giveParcel("Олег"));
// console.log(giveParcel("Кирилл"));

// const leaveQueueWithoutParcel = (name) => {
//   peopleWaiting.pop();
//   alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
// };
// console.log(leaveQueueWithoutParcel("Мария"));
// console.log(leaveQueueWithoutParcel("Светлана"));
// console.log(leaveQueueWithoutParcel("Артем"));
// console.log(leaveQueueWithoutParcel("Глеб"));

// правильный вариант, решение с Никитой, только так не совсем универсальный код получается, но тоже рабтает
// ниже будет более верный код с циклом while

// const peopleWaiting = [
//   "Кристина",
//   "Олег",
//   "Кирилл",
//   "Мария",
//   "Светлана",
//   "Артем",
//   "Глеб",
// ];

// const giveParcel = (queue) => {
//   const name = queue.shift();
//   alert(
//     `${name} получил(а) посылку. В очереди осталось ${queue.length} человек.`
//   );
// };

// const leaveQueueWithoutParcel = (queue) => {
//   const name = queue.pop();
//   alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
// };

// console.log(giveParcel(peopleWaiting));
// console.log(giveParcel(peopleWaiting));
// console.log(giveParcel(peopleWaiting));

// console.log(leaveQueueWithoutParcel(peopleWaiting));
// console.log(leaveQueueWithoutParcel(peopleWaiting));
// console.log(leaveQueueWithoutParcel(peopleWaiting));
// console.log(leaveQueueWithoutParcel(peopleWaiting));

// правильный вариант с циклом while, использовать этот, он более верный в плане универсальности кода

const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

const X = 3; // Человек, после которого перестаем принимать.

const giveParcel = (queue) => {
  const name = queue.shift();
  alert(
    `${name} получил(а) посылку. В очереди осталось ${queue.length} человек.`
  );
};

const leaveQueueWithoutParcel = (queue) => {
  const name = queue.pop();
  alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
};

let clientsProcessed = 0; // Клиентов обработано.

while (peopleWaiting.length !== 0) {
  if (clientsProcessed < X) {
    giveParcel(peopleWaiting);
  } else {
    leaveQueueWithoutParcel(peopleWaiting);
  }
  clientsProcessed++;
}

// решение с курса
const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

const giveParcel = () => {
  const clientName = peopleWaiting.shift();
  alert(
    `${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
  );
};

const leaveQueueWithoutParcel = () => {
  const clientName = peopleWaiting.pop();
  alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`);
};

giveParcel();
giveParcel();
giveParcel();

for (let i = peopleWaiting.length; i > 0; i -= 1) {
  leaveQueueWithoutParcel();
}
