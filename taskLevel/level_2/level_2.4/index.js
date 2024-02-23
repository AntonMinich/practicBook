// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str = 'asdf2qwerty3';
let position = str.split('').map(elem => Number(elem)).findIndex((elem) => elem !=NaN ? elem : false);
console.log(position);


// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let obj = {
    a: 1,
    b: 2,
    c: 3
};

let arrKeys = Object.keys(obj);
let arrValue = Object.values(obj);

let arrKeys2 = [];
let arrValue2 = [];

for (let key in obj) {
    arrKeys2.push(key);
    arrValue2.push(obj[key]);
}
console.log(arrKeys);
console.log(arrValue);
console.log(arrKeys2);
console.log(arrValue2);




// Дано число. Выведите в консоль количество четных цифр в этом числе.
let number = 123456453;
let count = String(number).split('').map(elem => Number(elem)).reduce((sum, elem) => elem % 2 == 0 ? sum +=1 : sum, 0);
console.log(count);


// Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
let string = 'abcde';
let newString = string.split('').map((elem, index) => index % 2 == 0 ? elem.toUpperCase() : elem.toLowerCase()).join('');
console.log(newString);


// Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'

string = 'aaa bbb ccc';
arrString = string.split(' ').map(function (elem) {
    return elem[0].toUpperCase() + elem.slice(1);
})

console.log(arrString.join(' '));