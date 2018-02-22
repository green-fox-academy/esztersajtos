'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
let xLineTo = 0;
let yLineTo = 0;

function drawLine(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

for (let i = 0; i <= canvas.height / 20; i++){
    drawLine(0, yLineTo);
    yLineTo = yLineTo + 20;
}

for (let i = 0; i <= canvas.width / 20; i++){
    drawLine(xLineTo, 0);
    xLineTo = xLineTo + 20;
}
yLineTo = 0;
for (let i = 0; i <= canvas.height / 20; i++){
    drawLine(600, yLineTo);
    yLineTo = yLineTo + 20;
}
xLineTo = 0;
for (let i = 0; i <= canvas.width / 20; i++){
    drawLine(xLineTo, 400);
    xLineTo = xLineTo + 20;
}