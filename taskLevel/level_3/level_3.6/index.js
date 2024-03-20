// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
let arr = [10,2334,23,4233, 333];
let newArr = arr.filter(elem => {
    let str = String(elem);
    return str.length <= 3;
});
console.log(newArr);

// Дано число, например, вот такое: let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

let num = 12345;
let arrNum = Array.from(String(num), Number);
let result = arrNum.every(elem => elem > 0);
console.log(result);


// Дан некоторый массив, например, вот такой: [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]

let array = [123, 456, 789];
let newArray = array.map(elem => {
    let num = String(elem).split('');
    return num.map(Number);
}).flat();
console.log(newArray);


// Дан следующая структура: Найдите сумму элементов этой структуры.
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

let sum = 0;
for (let obj of data) {
    for (let key in obj) {
        sum += obj[key];
    }
}

console.log(sum);