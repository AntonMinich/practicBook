// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
let arr = [2, -3, 3, -7, 4, 6];
let count = arr.reduce(function (sum, elem){
    if (elem < 0) {
        return sum += 1;
    } else {
        return sum;
    }
}, 0)
console.log(count); 


// Дан массив с числами. Оставьте в нем только положительные числа.
arr = [2, -3, 3, -7, 4, 6];
let result = arr.filter(elem => elem > 0 ? true : false);
console.log(result);


// Дана строка. Удалите предпоследний символ из этой строки.
let str = '12345ygrfd4r';
let array = str.split('');
for (let i = 0; i <= array.length; i++) {
    if (i == array.length-2) {
        array.splice(i, 1);
    }
}
console.log(array.join(''));

// 

str = '12345ygrfd4r';
let result2 = '';
str.split('').forEach(function (elem, index, arr){
    if (index != arr.length-2) {
        result2 += elem;
    }
})
console.log(result2);



// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
let array2 = [1, 3, 3, 4, 5, 6];
let firstHulf = array2.slice(0, array2.length/2).reduce((sum, elem) => sum + elem, 0);
let secondHulf = array2.slice(array2.length/2).reduce((sum, elem) => sum + elem, 0);
let res = firstHulf / secondHulf;
console.log(res);