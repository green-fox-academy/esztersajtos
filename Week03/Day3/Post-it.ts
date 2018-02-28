'use strict';


// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

 class PostIt {
	backgrondColor: string;
	text: string;
	textColor: string;

	constructor(backgroundCol: string, tx: string, textCol: string){
		this.backgrondColor = backgroundCol;
		this.text = tx;
		this.textColor = textCol;
		
	}

	

}
let postCard1 = new PostIt('orange', 'blue', '"Idea 1"');
let postCard2 = new PostIt('pink', 'black', '"Awesome"');
let postCard3 = new PostIt('yellow', 'green', '"Superb!"');
console.log(postCard1);
console.log(postCard2);
console.log(postCard3);
