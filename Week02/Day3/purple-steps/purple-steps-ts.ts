'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
let x = 10;
let y = 10;

function purpleSteps(x, y){
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, 30, 30);

}
for (let i = 0; i < 10; i++){
    purpleSteps(x, y);
    x += 30;
    y += 30;
}