// Create a function that takes a filename as string parameter,
// counts the occurances of the letter "a", and returns it as a number.
// If the file does not exist, the function should return 0 and not break.
// example: on the input "afile.txt" the function should return 28 - print this result
// example: on the input "not-a-file" the function should return 0 - print this result

const fs = require('fs');

function lineCount(fileName: string) {
  try {
	let fileContant = fs.readFileSync(fileName, 'utf-8');
	let numLines = 0;
		for (let i = 1; i < fileContant.length; i++){
			if (fileContant[i] === 'a'){
				numLines++;
			}  
		}
		return numLines;
	} catch {
		return 0;
		}
}

console.log(lineCount('afile.txt'));
