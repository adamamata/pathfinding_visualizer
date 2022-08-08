//GLOBAL VARIABLES 
const canvas = document.createElement('canvas'); 
const ctx = canvas.getContext('2d');
const wh = 600;
const cellSize = 30; 
const rows = 20;
const cols = 20;
const grid = new Array(cols); 

//FUNCTIONS 
//Immediately-invoked function expression
//Runs code immediately when the page loads and keeps it out of the global scope (avoids naming conflicts)
(function () {
    setup();
    // drawGrid();
})(); 

function Cell() { //Constructor function for each cell in the array
    this.x = 0;
    this.y = 0;
    this.f = 0;
    this.g = 0;
    this.h = 0;
}

//Function to setup the canvas 
function setup(){
    canvas.setAttribute('width', wh);
    canvas.setAttribute('height', wh); 
    document.body.insertBefore(canvas, document.body.childNodes[0]); //Inserts canvas before the first element in body 

    //Creating Grid
    for (let i = 0; i < cols; i++){ //Creating 2D array
        grid[i] = new Array(rows);
    }
    let x = 0;
    let y = 0;
    for (let i = 0; i < cols; i++){ //Creating a new cell for each spot in the array
        for (let j = 0; j < rows; j++){
            grid[i][j] = new Cell();
            x = x + 1 * 30;
            grid[i][j].x = x;
        }
        x = 0;
    }
    console.log(grid);
}

// function draw(x, y){
//     ctx.strokeRect(x, y, cellSize, cellSize);
// }

// function drawGrid(){
//     let x = 0; 
//     let y = 0;
//     for (let j = 0; j < rows; j++){
//         for (let i = 0; i < cols; i++){
//             draw(x, y, cellSize, cellSize);
//             x = x + 1 * 30;
//         }
//         x = 0;   
//         y = y + 1 * 30;  
//     }
// }
