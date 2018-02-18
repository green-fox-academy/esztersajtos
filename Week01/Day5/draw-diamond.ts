'use strict';

let lineCount: number = 7;
let s: string = '*';
let e: string = ' ';
let line: string = '';
let empties: number = 0;


for ( let i: number = 1; i <= lineCount; i++) {
    empties = (lineCount - i)/2;
    for (let j: number = 1; j <= lineCount; j++){
        if ( j <= empties || lineCount - empties < j) {
            line += e;
        } else {
            line += s;
        }
    }
    console.log(line);
    console.log('\n');
}