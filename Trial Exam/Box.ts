// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters (numbers)
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume
'use strict'

// class Cuboid {
// 	length: number;
// 	height: number;
// 	width: number;

// 	constructor (l, h, w) {
// 		this.length = l;
// 		this.height = h;
// 		this.width = w;
// 	}

// 	getSurface(){
// 		return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)); 
// 	}
// }

// let cuboid1 = new Cuboid(20, 30, 10);
// cuboid1.getSurface();
// console.log(cuboid1);

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