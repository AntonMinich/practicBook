// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
let str = 'sdfFdFF';
let count = str.split('').reduce(function(sum,elem){
    if(elem == elem.toUpperCase()) {
        sum++;
    } 
    return sum;
}, 0);

if (count >= 2) {
    console.log ('Две или больше двух заглавных букв');
} else {
    console.log ('Меньше двух заглавных букв');
    
}

// 
str = 'sdfFdFF';
count = 0;
for (let elem of str) {
    if (elem == elem.toUpperCase()) {
        count++;
        if (count = 2) {
            console.log ('Две или больше двух заглавных букв');
            break;
        } else {
            console.log ('Меньше двух заглавных букв');
        }
    } 
}


// Дана некоторая строка: '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'
let string = '1 22 333 4444 22 5555 1';
let result = string.split(' '). filter(elem => elem.length <= 3 ? true : false).join(' ');
console.log(result);


// Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let resultArr = [1, 2, ...arr2, 3];
console.log(resultArr);