
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 8];
function containsSeven (input:any[]){
    for (let i = 0; i < numbers.length; i ++){
        if (input[i] === 7){
            return 'Hoorray';
        }
    }
    return 'Noooooo';
}
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!


