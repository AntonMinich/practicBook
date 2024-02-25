// Дана некоторая строка: 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'
let str = 'a bc def ghij';
let res = str.split(' ').reduce(function(sum, elem) {
    if (elem.length <= 3) {
        return sum += elem.toUpperCase() + ' ';
    } else {
        return sum += elem; + ' '
    }
}, '').trim();
console.log(res);

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
let symbol = 'R';
let result = symbol.split('').some(elem => elem.toUpperCase() == elem ? true : false);
console.log(result);


// Дано некоторое число, например, такое:123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:28

let number = 123789;
let newNumber = Number(String(number).split('').filter(elem => elem % 2 == 0).join(''));
console.log(newNumber);