'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.


function lines(x:number, y:number){
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(200, 280);
ctx.stroke();

} 
let one = 0;
let two = 0;
for (let i = 0; i < 3; i++) {
    one += 100;
    two += 10;
    lines(one, two);
}