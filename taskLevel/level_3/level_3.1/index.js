// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
let num = 324;
let arr = String(num).split('').map(elem => Number(elem)).sort().join('');
let res = num == arr;
console.log(res);

// Дан массив: [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
let array = [1, '', 2, 3, '', 5];
let result = array.filter(elem => elem !== '' ? true : false);
console.log(result);


