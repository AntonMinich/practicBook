// Дано некоторое число: 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56
let number = 123456;
let string = String(number);
let sum = 0;
for (let i = 0; i < string.length; i += 2) {
    let tr = string[i] + string[i + 1];
    sum += Number(tr);
}
console.log(sum);

// 

number = 123456;
string = String(number);
sum = string.split('').reduce((acc, curr, index, arr) => {
    if (index % 2 === 0) {
        acc += Number(curr + arr[index + 1]);
    }
    return acc;
}, 0);
console.log(sum); 



// Дан массив с числами:[1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.
let array = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
console.log(array.reverse());

array = [1, 2, 3, 4, 5];
array.forEach((elem, index, arr) => {
    console.log(arr[arr.length - (index + 1)]);
})


