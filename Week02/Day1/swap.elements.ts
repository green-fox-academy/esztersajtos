// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string [] = ['Arthur', 'Boe', 'Chloe']
let a:string = abc[0]; // b:string = abc[2], c:string = abc[1];
abc[0] = abc[2];
abc[2] = a;

let reverseArray: string[] = [abc[2], abc[1], abc[0]]

console.log(abc);