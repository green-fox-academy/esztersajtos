'use strict';

let number: number = 15;
let total: number = 0;
for (let a: number = 1; a < 11; a++) {
    total = a * number;
    console.log(a + '*' + number + '=' + total)
}



// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150