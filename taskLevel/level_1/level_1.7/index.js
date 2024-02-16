// Дана строка: 'abcde' Получите массив букв этой строки.
let string = 'abcde';
let arr = string.split('');
let arr2 = [...string];
let arr3 = Array.from(string);
console.log(arr);
console.log(arr2);
console.log(arr3);

// Дано некоторое число: 12345 Получите массив цифр этого числа.
let number = 12345;
let res = String(number).split('');
let res2 = Array.from(String(number));
let res3 = [...String(number)];
console.log(res);
console.log(res2);
console.log(res3);


// Дано некоторое число: 12345 Переверните его: 54321
let num = 12345;
let reverse = String(num).split('').reverse().join('');
console.log(reverse);

// 

num = 12345;
let arrReverse = Array.from(String(num));
let reverse2 = arrReverse.reduce((sum, elem) => {
    return elem + sum;
}, '');
console.log(reverse2);


// Дано некоторое число: 12345 Найдите сумму цифр этого числа. 
num = 12345;
let sum = [...String(num)].reduce((sum, elem) => sum += +elem, 0);
console.log(sum);

