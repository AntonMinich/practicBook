// Заполните массив случайными числами из промежутка от 1 до 100.
let arr = Array.from({length:100}, (_, index) => Math.round((Math.random() * 100)));
console.log(arr);

let arr2 = [];
for (let i = 1; i <= 100; i++) {
    let number = Math.round((Math.random() * 100));
    if (!arr2.includes(number)) {
        arr2.push(number);
    }
}
console.log(arr2);

// 


// Дано некоторое число: 12345 Выведите в консоль все его символы с конца.
let number = 12345;
let arrNumber = [...String(number)];
for (let i = arrNumber.length; i >= 0; i--) {
    console.log(arrNumber[i]);
}

// 
number = 12345;
arrNumber = [...String(number)];
arrNumber.forEach((elem, index, arr) => console.log(arr[arr.length-1 - index]));
console.log(arrNumber);


// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите в консоль подмассивы из двух элементов нашего массива:[1, 2][3, 4][5, 6]


let array = [1, 2, 3, 4, 5, 6];
let newArray = [];

for (let i = 0; i < array.length; i += 2) {
    newArray.push([array[i], array[i + 1]]);
}

console.log(newArray);


// Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let res = arr3.concat(arr4);
console.log(res);


// 

arr3 = [1, 2, 3];
arr4 = [4, 5, 6];
res = [...arr3,...arr4];
console.log(res);

// 

arr3 = [1, 2, 3];
arr4 = [4, 5, 6];
res = [];
arr3.forEach(elem => res.push(elem));
arr4.forEach(elem => res.push(elem));
console.log(res);
