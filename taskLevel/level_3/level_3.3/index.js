// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
let array = ['apple', 'hello', 'no', 'yes'];
let newArray = array.filter(elem => elem.length > 3);
console.log(newArray);


// Дано некоторое число: 1357
// Проверьте, что все цифры этого числа являются нечетными.
let number = 1357;
let res = String(number).split('').every(elem => elem % 2 != 0);
console.log(res);


// Дано некоторое слово: 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.
let word = 'abcba';
let reverseWord = word.split('').reverse().join('');
if (reverseWord == word) {
    console.log(true);
} else {
    console.log(false);
}

// Дан массив:
// Найдите сумму элементов этого массива.

let arr = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
];

let sum = arr.reduce((sum, elem) => {
    return sum += elem.reduce((innerSum, subelem) => {
        return innerSum += subelem.reduce((totalSum, num)  => {
            return totalSum += num;
        }, 0)
    },0)
},0)
console.log(sum);

sum = 0;
for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);