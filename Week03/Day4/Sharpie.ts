
// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount
'use strict'

class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    constructor(color: string, width: number, inkAmount: number){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;

    }
    
    use(){
        return this.inkAmount -= 1;
    }
}


let sharpie1 = new Sharpie('blue', 12, 20);
sharpie1.use();
console.log(sharpie1);
