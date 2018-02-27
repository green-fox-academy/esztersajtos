
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');



function copyAll(copyMe: string, secound: string){
  try {
    fs.writeFileSync(copyMe, fs.readFileSync('message.txt', 'utf-8'));

  } catch(error) {
    console.log(false);
  }
}
copyAll('copy.txt', 'message.txt');