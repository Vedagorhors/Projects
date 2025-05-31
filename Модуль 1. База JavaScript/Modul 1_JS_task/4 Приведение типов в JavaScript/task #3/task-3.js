console.log(String(console.log), typeof String(console.log)); // Выводит: function log() { [native code] } string 
console.log(Number(console.log), typeof Number(console.log)); // Выводит: NaN 'number'
console.log(Boolean(console.log), typeof Boolean(console.log)); // Выводит: true 'boolean'

console.log(String({ name: 'Maxim' }), typeof String({ name: 'Maxim' })); // Выводит: [object Object] string
console.log(Number({ name: 'Maxim' }), typeof Number({ name: 'Maxim' })); // Выводит: NaN 'number'
console.log(Boolean({ name: 'Maxim' }), typeof Boolean({ name: 'Maxim' })); // Выводит: true 'boolean'

console.log(String(Symbol('key')), typeof String(Symbol('key'))); // Выводит: Symbol(key) string
//console.log(Number(Symbol('key')), typeof Number(Symbol('key'))); // Выводит: ошибка
console.log(Boolean(Symbol('key')), typeof Boolean(Symbol('key'))); // Выводит: true 'boolean'

console.log(String(Number), typeof String(Number)); // Выводит: function Number() { [native code] } string
console.log(Number(Number), typeof Number(Number)); // Выводит: NaN 'number'
console.log(Boolean(Number), typeof Boolean(Number)); // Выводит: true 'boolean'

console.log(String(''), typeof String('')); // Выводит: string
console.log(Number(''), typeof Number('')); // Выводит: 0 'number'
console.log(Boolean(''), typeof Boolean('')); // Выводит: false 'boolean'

console.log(String(0), typeof String(0)); // Выводит: 0 string
console.log(Number(0), typeof Number(0)); // Выводит: 0 'number'
console.log(Boolean(0), typeof Boolean(0)); // Выводит: false 'boolean'

console.log(String(-10), typeof String(-10)); // Выводит: -10 string
console.log(Number(-10), typeof Number(-10)); // Выводит: -10 'number'
console.log(Boolean(-10), typeof Boolean(-10)); // Выводит: true 'boolean'

console.log(String('-105'), typeof String('-105')); // Выводит: -105 string
console.log(Number('-105'), typeof Number('-105')); // Выводит: -105 'number'
console.log(Boolean('-105'), typeof Boolean('-105')); // Выводит: true 'boolean'
