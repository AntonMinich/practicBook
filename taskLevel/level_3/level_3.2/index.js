// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
let arr = Array.from({length:1000}, (_, index) => index + 1);
arr.forEach(elem => {
    let str = String(elem);
    let num = str[str.length-2];

    if (num % 2 == 0) {
        console.log(elem);
    }
})

// 

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let num = str[str.length-2]
    if (num % 2 == 0){
        console.log(i);
    }
}


// Дан массив. Удалите из него каждый пятый элемент.
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let res = array.filter((elem, index) => (index + 1) % 5 !== 0);
console.log(res);



// Дана некоторая переменная с числом:
// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'
let num = 5;
let string = '';
for (let i = 0; i < num; i++) {
    string += 0;
}
console.log(string);


num = 5;
string = '0'.repeat(num);
console.log(string);



// Дана некоторая строка со словами:
// aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'

let str = 'aaa bbb ccc eee fff'
let newStr = str.split(' ').filter((elem, index) => (index + 1) % 2 !== 0).join(' ');
console.log(newStr);


// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

let array2 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let sumArr = 0;
for (let elem of array2) {
    for (let subElem of elem) {
        sumArr += subElem;
    }
}
console.log(sumArr);

array2 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
sumArr = array2.reduce((sum, elem) => {
    return sum + elem.reduce((resSum, subElem) => {
        return resSum + subElem;
    },0)
},0)
console.log(sumArr);