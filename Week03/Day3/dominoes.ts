

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2 ,4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}



function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}
let dominoes = initializeDominoes();
let dominOrder = [];
function moveDominoes(dominOder, dominoes){
	dominOrder[0] = dominoes[0];
	for (let i = 0; i < dominoes.length - 1; i++){
		let dominoLast = (dominOder[i].values[1]);

		for(let j = 0; j < dominoes.length - 1; j++){
			let dominoFirst = (dominoes[j + 1].values[0]);

			if (dominoLast == dominoFirst) {
				dominOrder.push(dominoes[j + 1]);
			}
		}
	}
}
moveDominoes(dominOrder, dominoes);
print (dominOrder);



