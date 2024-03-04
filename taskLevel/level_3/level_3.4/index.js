// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
for (let i = 10; i <= 1000; i++) {
    if (String(i)[0] % 2 == 0) {
        console.log(i);
    }
}

//

let arr = Array.from({length:991}, (_, index) => index + 10);
arr.forEach(elem => {
    let str = String(elem);
    let count = str[0];
    if(String(elem)[0] % 2 == 0){
        console.log(elem);
    }
})


// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:[2, 1, 4, 3, 6, 5]
let array = [1, 2, 3, 4, 5, 6];
let newArray = [];
let arr2 = [];
for (let i = 0; i < array.length; i++) {
    
    arr2.push(array[i]);
    if (arr2.length == 2){
        newArray = newArray.concat(arr2.reverse());
        arr2 = [];
    }
}
console.log(newArray);

// 

array = [1, 2, 3, 4, 5, 6];
let newArr =  array.reduce((sum, elem, index, arr) => {
    if(index % 2 == 0) {
        if (index == arr.length - 1) {
            sum.push(elem);
        } else {
            sum.push(arr[index + 1], elem)
        }
    }
    return sum;
},  [])
console.log(newArr);


// Дан следующий объект: Найдите сумму элементов этого объекта.
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sum = 0;
for (let key in obj) {
    for (let subkey in obj[key]) {
        sum += obj[key][subkey];
    }
}
console.log(sum);
