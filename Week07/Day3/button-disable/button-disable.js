let favorites = document.querySelectorAll('input[name="favorite"]');
let signIn = document.querySelector('#sign');

function enable() {
  for (let i =0; i < favorites.length; i++) {
    if (favorites[0] || favorites[1]) {

    }
  }
}

// function enableSign() {
//   signIn.disabled = false;
// }
favorites[0].addEventListener('click', enableSign);


// function disablesignin() {
//   document.getElementById('sign').disabled = true;
//   document.getElementById('sign').checked = false;
// }
