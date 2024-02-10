// Дано число. Выведите в консоль первую цифру этого числа.
let number = 12345;
let firstNumber = String(number)[0];
let firstNumber2 = String(number).charAt(0);
console.log(firstNumber);
console.log(firstNumber2);

// Дано число. Выведите в консоль последнюю цифру этого числа.
let number2 = 353676;
let strNumber2 =String(number2);
let lastNumber = strNumber2[strNumber2.length - 1];
console.log(lastNumber);


// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
let number3 = 3567;
let strNumber3 = String(number3);
let sum = +strNumber3[0] + +strNumber3[strNumber3.length - 1];
console.log(sum);



// Дано число. Выведите количество цифр в этом числе.
let number4 = 876543;
let quantiNumber4 = String(number4).length;
console.log(quantiNumber4);


// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
