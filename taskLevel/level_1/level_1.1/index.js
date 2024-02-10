// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
let number = 3;

if (number > 0) {
    console.log('Число положительное');
} else if (number == 0) {
    console.log('Число равно нулю');
} else {
    console.log('Число отрицательное');
}

let result = number > 0 ? 'Число положительное' : (number === 0 ? 'Число равно нулю' : 'Число отрицательное');
console.log(result);


// Дана строка. Выведите в консоль длину этой строки.
let string = 'Hello, World!';
let strLength = string.length;
console.log(strLength);


// Дана строка. Выведите в консоль последний символ строки.
let string2 = 'Hello, World!';
let lastSymbol = string2[string2.length - 1];
console.log(lastSymbol);


// Дано число. Проверьте, четное оно или нет.
let number2 = 24;
if (number2 % 2 == 0) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}

let result2 = number2 % 2 == 0 ? 'Число четное' : 'Число нечетное';
console.log(result2);


// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
let word1 = 'Привет';
let word2 = 'Пока';
let res1 = 'Первые буквы совпадают';
let res2 = 'Первые буквы не совпадают';

if (word1[0] == word2[0]) {
    console.log(res1);
} else {
    console.log(res2);
}
// 
let res3 = word1[0].localeCompare(word2[0]);
if (res3 == 0) {
    console.log(res1)
} else {
    console.log(res2);
}


// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
let word3 = 'Столпотворение';
let lastLetter = '';
if (word3[word3.length - 1] == 'ь') {
    lastLetter = word3[word3.length - 2];
} else {
    lastLetter = word3[word3.length - 1];
}
console.log(lastLetter);

let lastLetter2 = word3.endsWith('ь') ? word3.charAt(word3.length-2) : word3.charAt(word3.length -1);
console.log(lastLetter2);