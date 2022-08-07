class Cell {
    constructor (col, row){
        this.col = col;
        this.row = row;
    }
    show(){
        let x = this.col * cellSize;
        let y = this.row * cellSize;
    }
}