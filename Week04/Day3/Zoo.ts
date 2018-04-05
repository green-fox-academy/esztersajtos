'use strict'
import {Flyable} from './flyable'
abstract class Animal {
	name: string;
	age: number;
	breeds: string;

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}

	abstract breed();
}

class Mammal extends Animal {	
	breed(): string {
		return 'pushing out nasty creatures.';
	}
}

class Reptile extends Animal {
	breed(): string {
		return 'laying eggs.';
	}
}

export class Bird extends Animal implements Flyable{
	breed(): string {
		return 'pushing out nasty creatures.';
	}
	land() {
		return 'Can land in the water.'
	}
	fly() {
		return 'Can fly all day.'
	}
	takeOff() {
		return 'Can take off on water.'
	}
}

let reptile = new Reptile("Crocodile", 3);
let mammal = new Mammal("Koala", 1);
let bird = new Bird("Parrot", 8);

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

