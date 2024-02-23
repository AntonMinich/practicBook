// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
let str1 = 'Hello';
let str2 = 'World';
if (str1[str1.length-1].toLowerCase() == str2[0].toLowerCase()) {
    console.log(true);
} else {
    console.log(false);
}
// 
str1 = 'HelloW';
str2 = 'World';
if(str1.endsWith(str2[0])) {
    console.log(true);
} else {
    console.log(false);
}

// Дана некоторая строка. Найдите позицию третьего нуля в строке.
let str = 'sdfg0df0234v0fsdffd00';
let arr = str.split('');
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        count += 1;
        if (count == 3) {
            console.log(i);
            break;
        }
    }
}
// 
str = 'sdfg0df0234v0fsdffd00';
arr = str.split('');
let position = arr.map((elem, index) => elem == 0 ? index : -1).filter(elem => elem !== -1);
let result = position[2]
console.log(result);



// Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.
let numString = '12,34,56';
let arrNum = numString.split(',');
let sum = arrNum.map(strNum => Number(strNum)).reduce((sum, elem) => sum += elem, 0);
console.log(sum);



// Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

let date = '2025-12-31';
let arrDate = date.split('-');
let obj = {};
obj.year = arrDate[0];
obj.month = arrDate[1];
obj.day = arrDate[2];
console.log(obj);

// 
date = '2025-12-31';
let [year, month, day] = date.split('-');
let obj2 = {year, month, day};
console.log(obj2);



