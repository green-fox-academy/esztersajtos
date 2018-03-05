// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

'use strict'



let evens = [1, 2, 3, 4, 5].filter(function(item) {
  return item % 2 == 0;
});
console.log(evens);

