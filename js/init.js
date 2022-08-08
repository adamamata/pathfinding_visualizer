//GLOBAL VARIABLES 
const canvas = document.createElement('canvas'); 
const ctx = canvas.getContext('2d');
const wh = 600;
const cellSize = 30; 
const rows = 20;
const cols = 20;
const grid = new Array(rows); 
const open = [];
const closed = [];
let start;
let end; 

//FUNCTIONS 
//Immediately-invoked function expression
//Runs code immediately when the page loads and keeps it out of the global scope (avoids naming conflicts)
(function () {
    setup();
})(); 

function Cell() { //Constructor function for each cell in the array
    this.x = 0;
    this.y = 0;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.show = function(color){ //Function to show cell on grid 
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, cellSize, cellSize);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(this.x, this.y, cellSize, cellSize);
    }
}

//Function to setup the canvas 
function setup(){
    let interval = setInterval(update, 120);
    canvas.setAttribute('width', wh);
    canvas.setAttribute('height', wh); 
    document.body.insertBefore(canvas, document.body.childNodes[0]); //Inserts canvas before the first element in body 
    createGrid();
    setStartEnd();
}

//Function to create grid 
function createGrid(){
    for (let i = 0; i < rows; i++){ //Creating 2D array
        grid[i] = new Array(cols);
    }
    let x = 0;
    let y = 0;
    for (let i = 0; i < rows; i++){ //Creating a new cell for each spot in the array
        for (let j = 0; j < cols; j++){
            grid[i][j] = new Cell();
            grid[i][j].x = x;
            grid[i][j].y = y;
            grid[i][j].show();
            x = x + 1 * 30;
        }
        x = 0;
        y = y + 1 * 30;
    }
}

//Function that defines the start and end points
function setStartEnd(){
    start = grid[0][0];
    end = grid[cols-1][rows-1];
    open.push(start);
}

//Function to remove a node from an array
function removeArray(arr, e){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === e){
            arr.splice(i, 1);
        }
    }
}

//Main function
function update(){
    if (open.length > 0){
        let winner = 0;
        for (let i = 0; i < open.length; i++){
            if (open[i].f < open[winner].f){
                winner = i;
            }
        }
        let current = open[winner];
        if (current === end){
            console.log('FINISHED');
        }
        removeArray(open, current);
        closed.push(current);
    }

    //nodes part of "open" array are green 
    for (let i = 0; i < open.length; i++){
        open[i].show('green');
    }

    //nodes part of "closed" array are red
    for (let i = 0; i < closed.length; i++){
        closed[i].show('red');
    }
}
