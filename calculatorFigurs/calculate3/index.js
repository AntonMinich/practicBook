const pi = 3.14;
let selectMagnitude = document.querySelector('#selectMagnitude');
let value = document.querySelector('#value');
let btnSquare = document.querySelector('#btnSquare');
let selectValue = document.querySelector('#selectValue');
let meaning = document.querySelector('#meaning');
let resultSquare = document.querySelector('#resultSquare');
let resultLength = document.querySelector('#resultLength');
let getFlagSquare = false;
let getFlagLength = false;

selectMagnitude.addEventListener('change', getChangeMagnitude);
btnSquare.addEventListener('click', getSquare);
selectValue.addEventListener('change', getChangeSelectValue);
value.addEventListener('change', getChangeValue);

function getChangeMagnitude(){
    if (selectMagnitude.value == '1') {
        meaning.textContent = 'r';
    } else if (selectMagnitude.value == '2') {
        meaning.textContent = 'd';
    } else if (selectMagnitude.value == '3'){
        meaning.textContent = 'l';
    }
    resultSquare.textContent = 'Площадь круга -';
    resultLength.textContent = 'Длина окружности -'
    getFlagSquare = false;
    getFlagLength = false;
}

function getSquare(){
    if(!getFlagSquare) {
        if(value.value <=0) {
            alert('Значение должно быть больше 0'); 
        } else{
            if (selectMagnitude.value == '1') {
                resultSquare.textContent += pi * Math.pow(value.value, 2) + selectValue.value + '²';
                resultLength.textContent += 2 * pi * value.value + selectValue.value;
            } else if (selectMagnitude.value == '2') {
                resultSquare.textContent += (pi / 4) * Math.pow(value.value, 2) + selectValue.value + '²';
                resultLength.textContent += pi * value.value + selectValue.value;
            } else if (selectMagnitude.value == '3') {
                resultSquare.textContent += Math.pow(value.value, 2) / (4 * pi) + selectValue.value + '²';
                resultLength.textContent += value.value + selectValue.value;
            }
            getFlagSquare = true;
            getFlagLength = true;
        }
    }
}

function getChangeSelectValue(){
    resultSquare.textContent = 'Площадь круга -';
    resultLength.textContent = 'Длина окружности -'
    getFlagSquare = false;
    getFlagLength = false;
}

function getChangeValue(){
    resultSquare.textContent = 'Площадь круга -';
    resultLength.textContent = 'Длина окружности -'
    getFlagSquare = false;
    getFlagLength = false;
}



