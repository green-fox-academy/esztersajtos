// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');

// let fileContent = fs.writeFileSync('my-file.txt');


// fileContent = `
//   I can do this!
//   I can write this!
// `;


try {
	let fileContent = fs.readFileSync('my-fil.txt', 'utf-8');
	console.log(fileContent);
} catch(err) {
	console.log('Unable to read file: my-file.txt');
}

