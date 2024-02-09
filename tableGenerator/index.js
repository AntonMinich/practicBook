let btn = document.querySelector('#btn');
let tableContainer = document.querySelector('#tableContainer');

btn.addEventListener('click', function addTable(){
    let width = document.querySelector('#width').value;
    let height = document.querySelector('#height').value;

    tableContainer.innerHTML = '';
    let table = document.createElement('table');
   
    for (let i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        
        for(let j = 0; j < width; j++) {
            let td = document.createElement('td');
            td.textContent = 'Ячейка' + (i + 1) + '-' + (j + 1);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
})

width.addEventListener('click', function(){
    width.value = '';
})

height.addEventListener('click', function(){
    height.value = '';
})