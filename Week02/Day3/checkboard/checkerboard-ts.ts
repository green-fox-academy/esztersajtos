'use strict';

console.log('hello')

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let side1 = canvas.width / 8;
let x = 0;
let y = 0;


function drawCheck(x, y, colored){
    ctx.fillStyle = colored;
    ctx.fillRect(x, y, side1, side1);
}
for (let j = 0; j < 8; j++){
    let x = 0;
    for (let i = 0; i < 8; i++) {
        if ((i % 2 == 0) && (j % 2 == 0)){
            drawCheck(x, y, 'black');
        } else if ((i % 2 == 1) && (j % 2 == 1)){
            drawCheck(x, y, 'black');
        }
        x += side1;
    }
    y += side1; 
}
