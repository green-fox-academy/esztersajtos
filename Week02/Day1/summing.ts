'use strict';


// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result



function sum(parameter: number): number {
    let sumVar = 0;
    for (let i = 0; i < parameter; i++){
    sumVar += i;

}
    return sumVar;
}
    

    console.log(sum(56));