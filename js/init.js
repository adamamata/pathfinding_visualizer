//GLOBAL VARIABLES 
const wh = 600;
const cellSize = 60; 
let rows = 0; 
let cols = 0; 
const canvas = document.createElement('canvas'); 
const ctx = canvas.getContext('2d');
const grid = [];

//FUNCTIONS 
//Immediately-invoked function expression
//Runs code immediately when the page loads and keeps it out of the global scope (avoids naming conflicts)
(function () {
    setup();
    draw();
})(); 

//Function to setup the canvas 
//Inserts canvas before the first element in body 
function setup(){
    canvas.setAttribute('width', wh);
    canvas.setAttribute('height', wh); 
    document.body.insertBefore(canvas, document.body.childNodes[0]); 
    
    rows = floor(wh/cellSize); //10 rows  
    cols = floor(wh/cellSize); //10 columns 

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            let cell = new Cell(i, j);
            grid.push(cell); 
        }
    }
}

function draw(){
    for (let i = 0; i < grid.length; i++){
        grid[i].show();
    }
}
