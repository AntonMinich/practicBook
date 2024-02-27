// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
let string = 'abvd123';
let letters = string.split('').filter(elem => /[a-zA-Z]/.test(elem));
if (letters.length >= 3) {
    console.log('три буквы или больше');
} else {
    console.log('меньше трех')
}


// Дано число. Получите первую четную цифру с конца этого числа.
let number = 12345;
let result = String(number).split('').reverse().find(elem => {
    return elem % 2 == 0;
})
console.log(result);



// Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':'!bcde !bcde !bcde'
let str = 'abcde abcde abcde';
let res = str.split(' ').reduce((sum, elem) => {
    return sum += ' !' + elem.slice(1);
}, '').trim();
console.log(res);

// 
str = 'abcde abcde abcde';
res = str.split(' ').map(elem => {
    return '!' + elem.slice(1);
}).join(' ');
console.log(res);



// Дан массив с числами:[1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
let num = [1, 2, 3, 3, 4, 5];
let repeat = false;
for (let i = 0; i < num.length; i++) {
    if (num[i] == num[i + 1]) {
        repeat = true;
        break;
    } 
}
if (repeat = true) {
    console.log('Есть повтор');
} else {
    console.log('Нет повтора');
}

// 

num = [1, 2, 3, 3, 4, 5];
repeat = false;
num.forEach((elem, index, arr) => {
    if (arr[index] == arr[index + 1]) {
        repeat = true;
    } 
})

if (repeat = true) {
    console.log('Есть повтора');
} else {
    console.log('Нет повтора');
}