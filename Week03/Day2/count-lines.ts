
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function lineCount(): any {
	let fileContant = fs.readFileSync('my-file.txt', 'utf-8');
	let numLines = 0;
	for (let i = 1; i < fileContant.length; i++){
	  if (fileContant[i] === '\n'){
			numLines++;
		}  
	}return numLines;
}

try {
	let fileContant = fs.readFileSync('my-fil.txt', 'utf-8');
	console.log(fileContant);
} catch(error) {
	console.log('0');
}




// try {
// 	let countLine = fs.readFileSync('my-fil.txt', 'utf-8');
// 	console.log(fileContent);
// } catch(err) {
// 	console.log('Unable to read file: my-file.txt');
// }
