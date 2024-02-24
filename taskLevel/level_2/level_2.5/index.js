// Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
let string = '023m0df0dfg0';
let array = string.split('').map((elem, index) => elem == 0 ? index : -1).filter(elem => elem != -1);
console.log(array.join(''));


// Дана некоторая строка: 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:  'abdeg'
let str = 'abcdefg';
let result = str.split('').filter(function(elem, index){
    if ((index + 1) % 3 !== 0) {
        return elem;
    }
}).join('');
console.log(result);


// Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
let arr = [1, 2, 3, 4, 5, 6];
let sumEven = arr.reduce(function(sum, elem, index){
    if(index % 2 == 0) {
        return sum += elem;
    } else {
        return sum;
    }
}, 0)

let sumOdd = arr.reduce(function(sum, elem, index) {
    if (index %2 != 0) {
        return sum += elem;
    } else {
        return sum;
    }
}, 0)
let res = sumEven / sumOdd;
console.log(res);