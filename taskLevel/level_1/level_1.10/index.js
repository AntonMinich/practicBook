// Заполните массив случайными числами из промежутка от 1 до 100.
let arr = Array.from({length:100}, (_, index) => Math.round((Math.random() * 100)));
console.log(arr);

let arr2 = [];
for (let i = 1; i <= 100; i++) {
    let number = Math.round((Math.random() * 100));
    if (!arr2.includes(number)) {
        arr2.push(number);
    }
}
console.log(arr2);

