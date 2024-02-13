// Найдите сумму всех целых чисел от 1 до 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;    
}
console.log(sum);

// 

let array = Array.from({length: 100}, (_, index) => index + 1);
let sum2 = array.reduce((sum, elem) => sum += elem, 0);
console.log(sum2);

// 
let i = 1;
let sum3 = 0;
while(i <= 100) {
    sum3 += i;
    i++;
}
console.log(sum3);


// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let result = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        result += i;
    }
}
console.log(result);

// 

let array2 = Array.from({length: 100}, (_, index) => index + 1);
let result2 = array2.reduce((sum, elem) => {
    if (elem % 2 == 0) {
        return sum += elem;
    } else {
        return sum;
    };    
}, 0);
console.log(result2);

// 

let i2 = 1;
let result3 = 0;
while (i2 <= 100){
    if (i2 % 2 == 0) {
        result3 += i2;
    }
    i2++;
}
console.log(result3);


// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let res = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !=0) {
        res += i;
    }
}
console.log(res);

// 

let array3 = Array.from({length: 100}, (_, index) => index + 1);
let res2 = array3.reduce((sum, elem) => {
    if (elem % 2 != 0) {
        return sum + elem;
    } else {
        return sum;
    }
})
console.log(res3);

// 

let i3 = 1;
let res3 = 0;
while (i3 <= 100) {
    if (i3 % 2 != 0) {
        res3 += i3;
    };
    i3++;
}
console.log(res3);

// Даны два целых числа. Найдите остаток от деления первого числа на второе.
let number1 = 5;
let number2 = 3;
let remainder = 5 % 3;
console.log(remainder);


// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
let string = 'Hello, world!';
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

// 
string = 'Hello, world!';
let arrString = string.split('');
for (let elem of arrString) {
    console.log(elem);
}

// 
string = 'Hello, world!';
arrString = string.split('');
arrString.forEach(elem => console.log(elem)
);


