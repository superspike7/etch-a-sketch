// etch-a-sketch project by Spike Vinz Cruz
// part of The Odin Project Curriculum

const container = document.querySelector('.container');
const btnClear = document.querySelector('#clear');
const btnNormal = document.querySelector('#normal');
const btnSketch = document.querySelector('#sketch');
const btnColor = document.querySelector('#change-color');
let gridSize = document.querySelector('#grid-size').value;
let color = '#000'
let userClick = false;

const createCells = function(rows, columns) {
    container.style.gridTemplateColumns = `repeat(${columns}, auto)`
    container.style.gridTemplateRows = `repeat(${rows}, auto)`
    

    for(let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

const changeGrid = function(rows, columns) {
    let gridSize = document.querySelector('#grid-size').value;
    container.innerHTML = "";
    rows = gridSize;
    columns = rows;

    if(rows != null && columns != null) {
       createCells(rows, columns);
   }
}

const normalDraw = function(e) {
    changeGrid();
    const color = function(e) {
        let color = document.querySelector('#color').value;
        return color;
    }
    btnColor.addEventListener('click', color);
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            userClick = true;
        });
    });
    cells.forEach(cell => {
        cell.addEventListener('mouseup', e => {
            e.target.style.backgroundColor = color();
            userClick = false;
        });
    });
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', e => {
            if (userClick){
                e.target.style.backgroundColor = 'darkslategrey';
            }
        });
    });
    cells.forEach(cell => {
        cell.addEventListener('mouseleave', e => {
            if (userClick) {
                e.target.style.backgroundColor= color();
            }
        });
    });
    
}

const sketchDraw = function(e) {
    changeGrid();
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            userClick = true;
        });
    });
    cells.forEach(cell => {
        cell.addEventListener('mouseup', e => {
            e.target.style.backgroundColor = 'black';
            userClick = false;
        });
    });
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', e => {
            if (userClick) {
                let opacity = 0.1;

                if (!e.target.style.opacity) {
                    opacity = 0.1;
                } else if (+e.target.style.opacity === 1) {
                    opacity = 1;
                } else {
                    let cellOpacity = e.target.style.opacity;
                    cellOpacity = +cellOpacity + 0.1;
                    opacity = cellOpacity;
                }
                e.target.style.backgroundColor = `black`;
                e.target.style.opacity = opacity;
            }
        });
    });

}



changeGrid();
normalDraw();


btnClear.addEventListener('click', changeGrid);
btnNormal.addEventListener('click', normalDraw);
btnSketch.addEventListener('click', sketchDraw);

