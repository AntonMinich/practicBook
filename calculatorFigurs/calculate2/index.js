let width = document.getElementById('width');
let length = document.getElementById('length');
let select = document.getElementById('select');
let resultSquare = document.getElementById('resultSquare');
let resultPerimetr = document.getElementById('resultPerimetr');
let btnSquare = document.getElementById('btnSquare');
let btnPerimetr = document.getElementById('btnPerimetr');
let btnGenerally = document.getElementById('btnGenerally');
let funcGetSquare = false;
let funcGetPerimetr = false;

btnSquare.addEventListener('click', getSquare);
btnPerimetr.addEventListener('click', getPerimetr);
btnGenerally.addEventListener('click', getGenerally);

function getSquare(){
    if(!funcGetSquare) {
        if(width.value > 0 && length.value > 0){
            resultSquare.textContent += width.value * length.value + select.value + '²';
            funcGetSquare = true;
            btnGenerally.disabled = true;
        } else {
            alert('Стороны прямоугольника должны быть больше 0');
        }
    }
}
    

function getPerimetr(){
    if (!funcGetPerimetr) {
        if (width.value > 0 && length.value > 0) {
            resultPerimetr.textContent += (2*(width.value + length.value) + select.value);
            funcGetPerimetr = true;
            btnGenerally.disabled = true;
        } else {
            alert('Стороны прямоугольника должны быть больше 0');
        }
        
    }
}
    

function getGenerally() {
    if (!funcGetSquare && !funcGetPerimetr) {
        if(width.value > 0 && length.value > 0) {
            resultSquare.textContent += width.value * length.value + select.value + '²';
            resultPerimetr.textContent += (2*(width.value + length.value) + select.value);
            funcGetPerimetr = true;
            funcGetSquare = true;
        } else {
            alert('Стороны прямоугольника должны быть больше 0');
        }
    } 
}

select.addEventListener('change', function(){
    resultSquare.textContent = 'Площадь - ';
    resultPerimetr.textContent = 'Периметр - ';
    funcGetPerimetr = false;
    funcGetSquare = false;
    btnGenerally.disabled = false;
})

width.addEventListener('input', function(){
    resultSquare.textContent = 'Площадь - ';
    resultPerimetr.textContent = 'Периметр - ';
    funcGetPerimetr = false;
    funcGetSquare = false;
    btnGenerally.disabled = false;
})

length.addEventListener('input', function(){
    resultSquare.textContent = 'Площадь - ';
    resultPerimetr.textContent = 'Периметр - ';
    funcGetPerimetr = false;
    funcGetSquare = false;
    btnGenerally.disabled = false;
})