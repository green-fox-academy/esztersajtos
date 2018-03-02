// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

'use strict'

function countBunnyEars(bunny) {
    let ears: number = 0;
    if (bunny < 1) {
        return ears;
    } else {
        return ears = 2 + countBunnyEars(bunny - 1);
    }

}console.log(countBunnyEars(4));
