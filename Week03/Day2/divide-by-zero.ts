'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
let x = 0;
function divide(input){
    if (input / 10 === 0){
        return 'fail';
    } else {
        return input / 10
    }  
}
console.log(divide(x));


