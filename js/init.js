//GLOBAL VARIABLES 
const wh = 600;
const cellSize = 30; 
const rows = 20;
const cols = 20;
const grid = [];
const canvas = document.createElement('canvas'); 
const ctx = canvas.getContext('2d');

//FUNCTIONS 
//Immediately-invoked function expression
//Runs code immediately when the page loads and keeps it out of the global scope (avoids naming conflicts)
(function () {
    setup();
    drawGrid();
})(); 

//Function to setup the canvas 
function setup(){
    canvas.setAttribute('width', wh);
    canvas.setAttribute('height', wh); 
    document.body.insertBefore(canvas, document.body.childNodes[0]); //Inserts canvas before the first element in body 
}

function draw(x, y){
    ctx.strokeRect(x, y, cellSize, cellSize);
}

function drawGrid(){
    let x = 0; 
    let y = 0;
    for (let j = 0; j < rows; j++){
        for (let i = 0; i < cols; i++){
            draw(x, y, cellSize, cellSize);
            x = x + 1 * 30;
        }
        x = 0;   
        y = y + 1 * 30;  
    }
}