'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


let x = 10;
let side1 = 10;
  


function drawSteps(step1, side1,){
    ctx.fillRect(step1, step1, side1, side1);
    ctx.fillStyle = 'purple';
}

for (let i = 0; i < 6; i++){
    drawSteps(x, side1);   
    x = side1 + x;
    side1 += 10;  
}
