// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
let text = 'advance apricot batman car auto';
let arrayText = text.split(' ').filter(elem => (elem[0] == 'a'));
console.log(arrayText);

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
let arrayNum = [2, 5, 7, 15, 50, 3];
let newArrayNum = arrayNum.filter(elem => elem % 5 == 0);
console.log(newArrayNum);

// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
let arrayZero = [10, 3, 6, 105, 15];
let numberWithZero = arrayZero.filter(elem => {
    let str = String(elem);
    if(str.split('').some(elem => elem == 0)) {
        return true;
    }
})
console.log(numberWithZero);

// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
let arrNum = [1, 23, 5];
let resArrNum = arrNum.some(elem => String(elem).includes('3'));
console.log(resArrNum);

// Дано некоторое число:35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:12345
 let number = 35142;
 let sortNumber = String(number).split('').sort().join('');
 console.log(sortNumber);

//  

number = 35142;
let arrNum2 = String(number).split('');
arrNum2.sort(function(a,b){
    return a-b;
})
console.log(arrNum2.join(''));



// Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'
let string = ''
for (let i = 1; i <= 5; i++) {
    string += '-' + i;
}
console.log(string);


// Найдите сумму элементов этого объекта.
let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
let sum = 0;
for(let key in obj) {
    for (let subKey in obj[key]) {
        for (let subSubKey in obj[key][subKey]) {
            sum += obj[key][subKey][subSubKey];
        }
    }
}

console.log(sum);