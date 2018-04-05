'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let xMoveTo = 0;
let yMoveTo = 0;
let xLineTo = 0;
let yLineTo = 0;


function drawLine(x, y, lx, ly){
	ctx.strokeStyle = "purple";
	ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(lx, ly);
	ctx.stroke();
}

for (let i = 0; i < 40; i++){

	drawLine(xMoveTo, 0, canvas.width, yLineTo);
	xMoveTo = xMoveTo + 20;
	yLineTo = yLineTo + 20; 
}


let xMoveTo2 = 0;
let yMoveTo2 = 0;
let xLineTo2 = 0;
let yLineTo2 = 0;

function drawLine2(x, y, lx, ly){
	ctx.strokeStyle = 'green';
	ctx.beginPath();
 	ctx.moveTo(x, y);
 	ctx.lineTo(lx, ly);
 	ctx.stroke();
}

for (let i = 0; i < 40; i++){

 drawLine2(0, yMoveTo2, xLineTo2, canvas.height);
 yMoveTo2 = yMoveTo2 + 20;
 xLineTo2 = xLineTo2 + 20; 
 ctx.lineTo(xLineTo2,yLineTo2);
 
}

function devide(draw1, draw2){
	
}