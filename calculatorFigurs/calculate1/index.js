let input = document.querySelector('#input');
let result1 = document.querySelector('#result1');
let result2 = document.querySelector('#result2');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let select = document.querySelector('#select');

btn1.addEventListener('click', func);
btn2.addEventListener('click', func2);
btn3.addEventListener('click', func3); 

let funcDone = false;
let func2Done = false;
let func3Done = false;

function func(){
    if (!funcDone){
        result2.textContent += input.value*2 + select.value;
        funcDone = true;
    }    
};

function func2(){
    if (!func2Done){
        result1.textContent += input.value*4 + select.value;
        func2Done = true;
    }
};

function func3() {
    if (!funcDone && !func2Done) {
        result2.textContent += input.value*2 + select.value;
        result1.textContent += input.value*4 + select.value;
        funcDone = true;
        func2Done = true;
    }
};

select.addEventListener('change', function(){
    input.value = '';
    result1.textContent = 'Периметр -';
    result2.textContent = 'Площадь -';
    funcDone = false;
    func2Done = false;

})

input.addEventListener('blur', function(){
    result1.textContent = 'Периметр -';
    result2.textContent = 'Площадь -';
    funcDone = false;
    func2Done = false;
})

