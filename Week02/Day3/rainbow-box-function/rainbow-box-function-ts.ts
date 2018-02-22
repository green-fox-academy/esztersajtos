'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let regHight:number = 100;
let colors = ['yellow','orange','red', 'darkred', 'purple', 'blue'];



function drawingSquare(x, color){
    ctx.fillRect(300 - x / 2, 200 - x / 2, x, x);
    ctx.fillStyle = color;

}
for (let i = 0; i < colors.length; i++){
    drawingSquare(regHight,colors[i]);
    regHight -= 20;
}

