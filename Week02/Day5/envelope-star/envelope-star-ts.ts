'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');




function drawLine(x, y, lx, ly){
 	ctx.strokeStyle = "blue";
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(lx, ly);
	ctx.stroke();
}

let xMoveTo = 250;
let yMoveTo = 0;
let xLineTo = 250;
let yLineTo = 250;


for (let i = 0; i < 26; i++){	
	drawLine(xMoveTo, yMoveTo, xLineTo, yLineTo);
	yMoveTo = xMoveTo + 10;
	xLineTo = xLineTo + 10; 

	if (xLineTo > 500) {

	}
}

let xMoveTo2 = 250;
let yMoveTo2 = 500;
let xLineTo2 = 250;
let yLineTo2 = 250;


for (let i = 0; i < 26; i++){	
	drawLine(xMoveTo2, yMoveTo2, xLineTo2, yLineTo2);
	xLineTo2 = xLineTo2 + 10;
	if(xLineTo2 > 500){
	}
}

let xMoveTo3 = 250;
let yMoveTo3 = 500;
let xLineTo3 = 250;
let yLineTo3 = 250;


for (let i = 0; i < 26; i++){	
	drawLine(xMoveTo3, yMoveTo3, xLineTo3, yLineTo3);
	xLineTo3 = xLineTo3 - 10;
	if(xLineTo3 > 0){
	}
}




