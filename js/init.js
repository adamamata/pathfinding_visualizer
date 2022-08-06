//Immediately-invoked function expression
//Runs code immediately when the page loads and keeps it out of the global scope (avoids naming conflicts)
(function () {
    setup();
})(); 

function setup(){
    const wh = 600;
    const canvas = document.createElement('canvas'); 
    canvas.setAttribute('width', wh);
    canvas.setAttribute('height', wh); 
    document.body.insertBefore(canvas, document.body.childNodes[0]); 
}