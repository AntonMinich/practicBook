// Выведите в консоль все целые числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 

let array = Array.from({length:100}, (_, index) => index + 1);
array.forEach(elem => console.log(elem));

// 

let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}


// Выведите в консоль все целые числа от -100 до 0.
for (let i = 0; i >= -100; i--) {
    if (i % 2 == 0){
        console.log(i);
    }
}

// 

let array2 = Array.from({length: 101}, (_, index) => index * -1);
array2.forEach( elem => elem % 2 == 0 ? console.log(elem) : false);

// 

let i2 = 0;
while (i2 >= -100) {
    if (i2 % 2 == 0) {
        console.log(i2);
    }
    i2--;
}


// Выведите в консоль все целые числа от 100 до 1.
for (let i = 100; i > 0; i--) {
    console.log(i);
}

// 

let array3 = Array.from({length: 100}, (_, index) => 100 - index);
array3.forEach(elem => console.log(elem));

// 

let i3 = 100;
while (i3 > 0){
    console.log(i3);
    i3--;
}

// Выведите в консоль все четные числа из промежутка от 1 до 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 

let array4 = Array.from({length: 100}, (_, index) => index + 1);
array4.forEach(elem => {
    if (elem % 2 == 0){
        console.log(elem);
    }
})

// 

let i4 = 1;
while (i4 <= 100) {
    if (i4 % 2 == 0) {
        console.log(i4);
    }
    i4++;
}


// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

let array5 = Array.from({length: 100}, (_, index) => index + 1);
array5.forEach(elem => {
    if (elem % 3 == 0) {
        console.log(elem);
    }
})

// 

let i5 = 1;
while(i5 <= 100) {
    if(i5 % 3 == 0) {
        console.log(i5);
    }
    i5++;
}