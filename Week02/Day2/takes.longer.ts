'use strict';

// Create a function that can reverse a string, which is passed as the parameter
'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
/*
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let sliced1 = quote.slice(0,21);
let sliced2 = quote.slice(21);

console.log(sliced1 + 'always takes longer than ' + sliced2); */

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let index = quote.indexOf('It');
let index2 = quote.indexOf('you');
console.log(index + 'always takes longer than ' + index2);