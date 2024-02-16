// Заполните массив целыми числами от 1 до 10.
let arr = Array.from({length: 10}, (_, index) => index + 1);
console.log(arr);

// 

let arr2 = [];
for (let i = 1; i <= 10; i++) {
    arr2.push(i);
}
console.log(arr2);

// 

let arr3 = [];
let i = 1;
while(i <= 10) {
    arr3.push(i);
    i++;
}
console.log(arr3);


// Заполните массив четными числами из промежутка от 1 до 100.
let newArr = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        newArr.push(i);
    }
}
console.log(newArr);

// 

let newArr2 = [];
for (let i = 2; i <= 100; i +=2){
    newArr2.push(i);
}
console.log(newArr2);

// 

let newArr3 = Array.from({length:100}, (_,index) => index + 1).filter(elem => elem % 2 == 0);
console.log(newArr3);



// Дан массив с дробями:[1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

let array = [1.456, 2.125, 3.32, 4.1, 5.34];
let newArray = array.map(elem => {
    return elem.toFixed(1);
});
console.log(newArray);
