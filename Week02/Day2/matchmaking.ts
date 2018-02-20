'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(box:string[], box2:string[]) {
    let mix:string [] = [];
    for (let i = 0; i < girls.length; i++){
        mix = mix.concat(girls[i], boys[i]);
    }
        return mix;
}

console.log(makingMatches(girls, boys));
