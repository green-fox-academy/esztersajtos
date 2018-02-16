'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let allDay: number = 86400;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

console.log((allDay - (currentHours + currentMinutes + currentSeconds)) * 100)
console.log(allDay - ((currentHours * 3600) + (currentMinutes * 60) + currentSeconds))