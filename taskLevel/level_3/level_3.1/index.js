// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
let num = 324;
let arr = String(num).split('').map(elem => Number(elem)).sort().join('');
let res = num == arr;
console.log(res);

// Дан массив: [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
let array = [1, '', 2, 3, '', 5];
let result = array.filter(elem => elem !== '' ? true : false);
console.log(result);



// Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

let arr2 = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];

for (let i = 0; i < arr2.length; i++) {
    arr2[i].sort();
}
console.log(arr2);

// 

arr2 = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];

let sort = arr2.map(elem => elem.sort());
console.log(sort);


// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

let array1 = [1, 2, 3];
let array2 = [1, 2, 3, 4, 5];
array2.splice(array1.length);
console.log(array2);