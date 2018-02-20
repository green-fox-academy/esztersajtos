'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];
let lastLetter : string = 'a';

function appendA(input:string[]) {
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].concat(lastLetter);
    }
    return input;
}

console.log(appendA(far));
// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'


