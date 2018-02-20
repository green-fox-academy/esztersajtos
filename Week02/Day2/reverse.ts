'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reserveSent: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
    function reserved (reserveSent) {
        var newReserveSent: string = '';
        for (var i = reserveSent.length - 1; i >= 0; i--) {
            newReserveSent += reserveSent[i];
        }
        return newReserveSent;

    }

console.log(reserved(reserveSent));


