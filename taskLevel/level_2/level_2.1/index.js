// Дана некоторая строка. Найдите позицию первого нуля в строке.
let string = 'esdf32546420bvdfs340f';
let position = string.split('').findIndex(function (elem) {
    return elem == 0;
});
console.log(position);



// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
let arr = Array.from({length:1000}, (_, index) => index + 1);
arr.forEach(function (elem) {
    let str = String(elem);
    let firstDigit = Number(str[0]);
    let secondDigit = Number(str[1]);
    if (firstDigit + secondDigit == 5) {
        console.log(elem);
    }
} )

for (let i = 1; i <= 1000; i++) {
    let str = String(i);
    let firstDigit = Number(str[0]);
    let secondDigit = Number(str[1]);
    if (firstDigit + secondDigit == 5) {
        console.log(i);
    }
}


// Дан массив. Удалите из него элементы с заданным значением.
let array = [1, 2, 3, 4, 5, 6];
let meaning = 3;
// let result = array.filter(elem => elem != meaning ? true : false);
// console.log(result);

for (let i = 0; i <= array.length; i++) {
    if (array[i] == meaning) {
        array.splice(i, 1);
    }
}
console.log(array);



// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.
let arr2 = [1, 2, 3, 4, 5, 6];
let result = arr2.reduce(function (sum, elem, index, arr) {
    if (index < arr.length/2) {
        return sum += elem;
    } else {
        return sum;
    }

}, 0)
console.log(result);

