let numberTask = 1;
let stringTask = 'Data types';
let isBlacktea = true;
let EmptyValue = null;
let NotAssignedValue = undefined;
let house = {
    address: 'Voronezh',
    year: 2022,
    isNew: true,
    ouner: null
}
let galaxy = 183495867239546n;
let key = Symbol('key');

console.log(Number(numberTask), Boolean(numberTask), String(numberTask)); // Выведет: 1, true, '1'
console.log(Number(stringTask), Boolean(stringTask), String(stringTask)); // Выведет: NaN, true, 'Data types'
console.log(Number(isBlacktea), Boolean(isBlacktea), String(isBlacktea)); // Выведет: 1, true, 'true'
console.log(Number(EmptyValue), Boolean(EmptyValue), String(EmptyValue)); // Выведет: 0, false, 'null'
console.log(Number(NotAssignedValue), Boolean(NotAssignedValue), String(NotAssignedValue)); // Выведет: NaN, false, 'undefined'
console.log(Number(house), Boolean(house), String(house)); // Выведет: NaN, true, '[object Object]'
console.log(Number(galaxy), Boolean(galaxy), String(galaxy)); // Выведет: 183495867239546, true, '183495867239546'
// console.log(Number(key), Boolean(key), String(key)); // Выведет: ошибку
