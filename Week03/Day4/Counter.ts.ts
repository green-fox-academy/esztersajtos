// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

'use strict'

class Counter {
    number: number = 0;
    initialValue: number = 0;

    constructor(input) {
        this.number = input;
        this.initialValue = input;
    }
    addwhole(sum) {
       this.number += sum;
    }

    add(){
        this.number ++;
    }

    get() {
        return this.number;
    }

    reset(){
        return this.number = this.initialValue;

    }

}   
let num = new Counter(8);
num.add();
num.addwhole(5);
console.log(num.get());
console.log(num.reset());



