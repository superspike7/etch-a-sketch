const container = document.querySelector('.container');
const btn = document.querySelector('.btn');


const createCells = function(rows, columns) {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`


    for(let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }    
}

const changeGrid = function(rows, columns) {
    container.innerHTML = "";
    rows = prompt("please enter a number");
    columns = rows;

    if(rows != null && columns != null) {
       createCells(rows, columns);
   }
}




btn.addEventListener('click', changeGrid);

document.querySelectorAll('.cell').forEach((cell) => {   
    cell.addEventListener('click', function (e) {
        consolee.log('bitch');
    }); 
});
