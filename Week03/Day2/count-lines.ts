
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function lineCount(fileName: string): number {
	try {
		let fileContant = fs.readFileSync(fileName, 'utf-8');
		let numLines = 0;
		for (let i = 1; i < fileContant.length; i++){
			if (fileContant[i] === '\n'){
				numLines++;
			}  
		}
		return numLines;
	} catch {
		return 0;
	}
}

console.log(lineCount('my-file1.txt'));
