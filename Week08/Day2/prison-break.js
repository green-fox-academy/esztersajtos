// Create a prison function, that has your name as a private fugutive variable
// The function should return an object that has two methods:
//  - visit() // logs "[yourname] is visited [x] time(s)" to the console.
//    - the [x] times displayes the numbers the function is called
//    - If the fugitive variable is empty, then display "Nobody is here anymore"
//  - escape() // logs "BREAKING NEWS, [yourname] escaped the prison" to the console.
//    - it should empties the fugitive variable

function prison(myName) {
  let visit = 0;
  let name = myName;

  return {
    visit: function() {
      visit ++;
      if (myName === undefined) {
        console.log('Nobody is here anymore.');
      } else {
        console.log(`${myName} is visited ${visit} time(s).`);
      }
    },
    escape: function() {
      console.log(`BREAKING NEWS, ${myName} escaped the prison!`);
      myName = undefined;
    }
  }
};

const alcatraz =  prison('Evil Panda');

alcatraz.visit(); // Evil Panda is visited 1 time(s)
alcatraz.visit(); // Evil Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Evil Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore