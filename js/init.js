//GLOBAL VARIABLES 
const wh = 600;
const cellSize = 60; 
const rows = 10;
const cols = 10;
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

function drawGrid(){
    
}

