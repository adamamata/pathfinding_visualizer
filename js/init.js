//GLOBAL VARIABLES 
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const wh = 600;
const cellSize = 30;
const rows = 20;
const cols = 20;
const grid = new Array(rows);
let open = [];
const closed = [];
let start;
let end;

//FUNCTIONS 
//Immediately-invoked function expression
//Runs code immediately when the page loads and keeps it out of the global scope (avoids naming conflicts)
(function() {
  setup();
})();

function Cell(x, y) { //Constructor function for each cell in the array
  this.x = x;
  this.y = y;
  this.show = function(color) { //Function to show cell on grid 
    ctx.fillStyle = color;
    ctx.fillRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }
}

//Function to setup the canvas 
function setup() {
  let interval = setInterval(update, 120);
  canvas.setAttribute('width', wh);
  canvas.setAttribute('height', wh);
  document.body.insertBefore(canvas, document.body.childNodes[0]); //Inserts canvas before the first element in body 
  createGrid();
  setStartEnd();
}

//Function to create grid 
function createGrid() {
  for (let i = 0; i < rows; i++) { //Creating 2D array
    grid[i] = new Array(cols);
  }
  for (let i = 0; i < rows; i++) { //Creating a new cell for each spot in the array
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j);
      grid[i][j].show();
    }
  }
}

//Function that defines the start and end points
function setStartEnd() {
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  open.push(start);
}

//Function to remove a node from an array
function removeArray(arr, e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      arr.splice(i, 1);
    }
  }
}

//Main function
function update() {
  //nodes part of "open" array are green 
  for (let i = 0; i < open.length; i++) {
    open[i].show('green');
  }

  //nodes part of "closed" array are red
  for (let i = 0; i < closed.length; i++) {
    closed[i].show('red');
  }
  
  const nextOpenSet = new Set();
  open.forEach(cell => {
    const above = grid[cell.y - 1]?.[cell.x];
    if (above) nextOpenSet.add(above);
    
    const below = grid[cell.y + 1]?.[cell.x];
    if (below) nextOpenSet.add(below);
    
    const left = grid[cell.y][cell.x - 1];
    if (left) nextOpenSet.add(left);
    
    const right = grid[cell.y][cell.x + 1];
    if (right) nextOpenSet.add(right);
  });
  
  open = Array.from(nextOpenSet);
  
}