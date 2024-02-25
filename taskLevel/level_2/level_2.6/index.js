// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
let string = 'asdf12345ggfd67';
let arr = string.split('').map(elem => Number(elem)).filter((elem) => elem != NaN ? elem : false);
console.log(arr);


// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]
let array = [123, 456, 789];
let result = array.map(elem => Number(String(elem).split('').reverse().join('')));
console.log(result);


// Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:'1 234 567'
let str = '1234567';
let strArr = str.split('');
for (let i = strArr.length; i > 0; i--) {
    let count = 0;
    count = i;
    if (count % 3 == 0) {
        strArr.splice(strArr.length - i, 0, ' ');
        count = 0;
    }
}
console.log(strArr.join(''));

// 

str = '1234567';
result = str.split('').reverse().map((elem, index) => (index + 1) % 3 == 0 && index !== str.length - 1 ? ' ' + elem : elem).reverse().join('');
console.log(result);


// Дана некоторая строка: 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'
let str2 = 'AbCdE';
let result2 = str2.split('').map(elem => elem == elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()).join('');
console.log(result2);


// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:[12, 34, 56]
let arr3 = [1, 2, 3, 4, 5, 6];
let result3 = arr3.reduce(function(sum, elem, index) {
      if ((index + 1) % 2 !== 0) {
        return sum += elem ;
    } else {
        return sum += elem +',';
    }
}, ' ').trim().slice(0, -1).split(',')
console.log(result3);

// 

arr3 = [1, 2, 3, 4, 5, 6];
result3 = [];
for (let i = 0; i < arr3.length; i+=2) {
   result3.push(arr3[i] * 10 + arr3[i + 1] )
}
console.log(result3);


//  Дана некоторая строка со словами:'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'
let str4 = 'aaa bbb ccc eee fff';
let result4 = str4.split(' ').reduce(function(sum,elem, index){
    if ((index + 1) % 2 == 0) {
        return sum +=  ' ' + elem.slice(0,1).toUpperCase() + elem.slice(1);
    } else {
        return sum += ' ' + elem;
    }
}, '').trim();
console.log(result4);