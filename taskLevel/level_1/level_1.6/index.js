// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3 , 4, 6];
let result = arr.reduce((sum, elem) => {
    sum += Math.pow(elem, 2);
    return sum;
}, 0);
console.log(result);

// 

let sum = 0;
arr.forEach(elem => sum += Math.pow(elem, 2));
console.log(sum);


// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
arr = [1, 2, 3 , 4, 6];
let result2 = arr.reduce((sum, elem) => {
    sum += Math.sqrt(elem);
    return sum;
}, 0)
console.log(Math.round(result2));

// 

let sum2 = 0;
arr.forEach((elem) => sum2 += Math.sqrt(elem));
console.log(sum2);


//  Дан массив с числами. Найдите сумму положительных элементов этого массива.
arr = [1, -2, 3 , -4, 6];
let result3 = arr.reduce((sum, elem) => {
    if(elem > 0) {
        sum += elem;
    }
    return sum;
}, 0)
console.log(result3);


// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
arr = [1, 9, 23, -4, -3, 11];
let result4 = arr.reduce((sum, elem) => elem > 0 && elem < 10 ? sum += elem : sum, 0);
console.log(result4);
