// Дебаг с помощью console.log()

let sum = 0;
// debugger;
// console.log('initial sum', sum);
const numberOfElements = 10;
for (let i = 1; i < numberOfElements; i += 1) {
    // debugger;
    // console.log('i / sum', i, sum);
    sum += 1;
}
const theHalfOfSum = sum / 2;
console.log('theHalfOfSum', theHalfOfSum);
