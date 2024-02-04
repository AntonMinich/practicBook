let selectValue = document.querySelector('#selectValue');
let valueItems = document.querySelectorAll('.valueItem');
let result = document.querySelector('#result');
let btn = document.querySelector('#btn');
let getChangeSquare = false;

btn.addEventListener('click', getSquare);

for (let value of valueItems) {
    value.addEventListener('change',function() {
        result.textContent = 'Площадь треугольника - ';
        getChangeSquare = false;
    })
}

function getSquare(){
    if(!getChangeSquare) {
        let sides = [];
        valueItems.forEach(item => {
            if(item.value > 0) {
                sides.push(item.value);
            } else {
                alert('Значение должно быть больше 0');
                return;
            }
        })
        let pPerimetr = sides.reduce((sum, side) =>
            sum + +side, 0) / 2;
        let res = Math.sqrt(pPerimetr*(pPerimetr - sides[0])*(pPerimetr - sides[1])*(pPerimetr - sides[2])).toFixed(2);
        result.textContent += res + selectValue.value  + '²';
        getChangeSquare = true;
    }
}

