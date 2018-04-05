'use strict';

let lineCount: number = 4;
let spaces: string = '';
let stars = '*';

for (let j = 1; j <= lineCount; j++){
    for (let i = lineCount - j; i > 0; i--){
        spaces += ' ';
    }
    console.log(spaces + stars);
    stars += '**';
    spaces = '';
}




// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is