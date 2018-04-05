'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
function quoteSwap(input:string[]){
    let a : string;
    a = input[0] + '' + input[1] + '' + input[5] + ' ' + input[3] + ' ' + input[4] + ' ' + input[2] + ' ' + input[6] + ' ' + input[7];
    return a;
}
console.log(quoteSwap(words));