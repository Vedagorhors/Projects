// Алгоритм нахождения минимального и максимального числа из массива чисел.
// Mетод sort

let array = [17, 12, 54, 90, 10, 2, 25, 93, 83, 15];

const END_ARRAY = array.length;
console.log(END_ARRAY); // 10 т.е. индекс от 0 до 9

let compare = (a, b) => a - b;
array.sort(compare);
console.log(array); // [2, 10, 12, 15, 17, 25, 54, 83, 90, 93]

let max = array[array.length - 1];
let min = array[0];

console.log("max", max); // 93
console.log("min", min); // 2
