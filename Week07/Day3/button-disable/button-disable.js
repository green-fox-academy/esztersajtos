let favorites = document.querySelectorAll('input[name="favorite"]');
let signIn = document.querySelector('#sign');

function enableSign() {
  signIn.disabled = false;
}
favorites[2].addEventListener('click', enableSign);
favorites[0].addEventListener('click', disableSign);
favorites[1].addEventListener('click', disableSign);

function disableSign() {
  signIn.disabled = true;
}

