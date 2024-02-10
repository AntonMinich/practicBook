// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
let string = 'abcde';
if (string.length > 1) {
    console.log(string[string.length-2]);
}


// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
let number1 = 5;
let number2 = 10;
let result = number2 % number1 == 0;
console.log(result);