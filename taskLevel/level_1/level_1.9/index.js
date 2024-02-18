// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
let arr = ['http://onliner.by', 'onliner.by', 'http://tochka.by', 'tochka.by'];
let result = arr.filter(elem => {
    if (elem.startsWith('http://')) {
        return true;
    }
})
console.log(result);

// 

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let arr2 = ['index', 'index.html', 'fargo', 'fargo.html'];
let result2 = arr2.filter(elem => elem.endsWith('html') ? true : false);
console.log(result2);

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
let arr3 = [1, 2, 3, 4, 5, 6];
let result3 = arr3.map(elem => elem + (elem * 0.1));
console.log(result3);

