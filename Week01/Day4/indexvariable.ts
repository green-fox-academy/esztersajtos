'use strict';

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);


let b: number = 100;
// make it smaller by 7
b = b - 7;
console.log(b);


let c: number = 44;
// double c's value
c = c * 2;
console.log(c);


let d: number = 125;
// divide d's value by 5
d = d / 5;
console.log(d);


let e: number = 8;
// what's the cube of e's value?
e = e ** 3; 
e **= 3
console.log(e);

let f1: number = 123;
let f2: number = 345;
    console.log(f1 > f2);
// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
    console.log(g2 + g2 > g1);
// tell if the double of g2 is bigger than g1 (pras a boolean)


let h: number = 1357988018575474;
    console.log((h % 11) === 0);
// tell if h has 11 as a divisor (as a boolean)


let i1: number = 10;
let i2: number = 3;
console.log((i1 > i2**2) && (i1 < i2**3));
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
console.log((j % 3 === 0) || (j % 5 === 0));

let k: string = 'Apple';
    k = k + k + k + k;
console.log(k);

// fill the k variable with its content 4 times
