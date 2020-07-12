// TO DO
// create an querySelector after the dynamically added divs
// fix the querySelector for the cell divs
// attach the querySelector to a click evenlistener
// fix the grid positioning of the cells so that it resizises when it reaches many


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

const sketchDraw = function(e) {
    if (e.target.className == 'cell') {
        e.target.classList.add('clicked');
    }
}

btn.addEventListener('click', changeGrid);
window.addEventListener('mousedown', sketchDraw)