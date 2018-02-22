'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
let x = 40;
let y = 60;
let weight = 50;
let height = 50;



for (let i = 0; i < 4; i++){
    ctx.fillStyle= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect(x, y, weight, height);
    x += 50;
    weight = Math.random() * 50;
    height = Math.random() * 50;
}

